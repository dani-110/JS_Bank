import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, Grid, Typography } from '@mui/material';
import './scrutinyLevel.scss'
import ImagesContainer from './imagesContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ScrutinyLevelHeader from './scrutinyLevelHeader';
import ScrutinyLevelView from './scrutinyLevelView';
import ButtonContainer from '../../components/buttonContainer';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toBase64 } from '../../utils/Utils';
import { saveconsumerscrutiny, scrutinydecline } from '../../store/actions/digitalIdentity';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import ConsumerJourneyView from './viewConsumerJourney';

const ConsumerScrutinyLevelUpdateForm = () => {
    const location = useLocation();
    const { state } = location
    const { user } = useSelector(state => state.auth)

    const [file, setFile] = useState({});
    const [isSaveScrutinyLoading, setIsSaveScrutinyLoading] = useState(false)
    const dispatch = useDispatch();

    const defaultValues = useForm({
        defaultValues: {
            comment: ""
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        resetField,
        formState: { errors },
    } = defaultValues;

    const uploadFile = (type) => {
        setIsSaveScrutinyLoading(true)
        if (file.name) {
            const url = api.fileupload().url
            const method = api.fileupload().method
            const formData = new FormData();
            formData.append("file", file)
            formData.append("filemodule", 'Json')
            formData.append("actuser", user.username?.toLowerCase())
            formData.append("sessionid", user.sessionId)
            axios[method](url, formData).then(res => {
                if (res.data.responsecode == 0) {
                    scrutinySave(apiURL + res.data.filepath)
                    if (type == 'authorize') {
                        scrutinySave(apiURL + res.data.filepath)
                    }
                    if (type == 'assign') {
                        assign(apiURL + res.data.filepath)
                    }
                }
            })
        } else {
            if (type == 'authorize') {
                scrutinySave('')
            }
            if (type == 'assign') {
                assign('')
            }
        }
    }

    const scrutinySave = async (filePath) => {
        let obj = {
            "cid": state?.cid,
            "comments": watch('comment'),
            "filename": file?.name,
            filePath: filePath
        }
        dispatch(saveconsumerscrutiny(obj)).then((res) => {
            console.log(res.payload)
            setIsSaveScrutinyLoading(false)
        });
    }
    const assign = async (filePath) => {
        let obj = {
            "cid": state?.cid,
            "comments": watch('comment'),
            "filename": file?.name,
            filePath: filePath
        }
        dispatch(scrutinydecline(obj)).then((res) => {
            console.log(res.payload)
            setIsSaveScrutinyLoading(false)
        });
    }

    return <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <form>
            <ScrutinyLevelHeader />

            <ImagesContainer data={state} />


            <Box className='consumerViewContainer'>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Consumer Details Form:</Typography>
                <ScrutinyLevelView data={state} />
            </Box>

            <Box sx={{ margin: '10px 0px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextAreaFields
                            fieldName="comment"
                            type="text"
                            label="Comment"
                            control={control}
                            rows={3}
                            rules={{
                                required: "Comment is required",
                            }}
                            error={errors?.comment}
                        />

                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {/* <ViewDocument label={'Uploaded document'} /> */}
                        <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                    </Grid>
                    <Grid item xs={12} >
                        <ConsumerJourneyView state={state} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                        <ButtonContainer>
                            <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(() => uploadFile('assign'))}>Assign to Scrutiny</Button>
                            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => uploadFile('authorize'))} >Authorize</Button>
                        </ButtonContainer>

                    </Grid>
                </Grid>
            </Box>
        </form>
    </Card>
}
export default ConsumerScrutinyLevelUpdateForm;
