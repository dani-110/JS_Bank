import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, Grid, Typography } from '@mui/material';
import './scrutinyLevel.scss'
import ImagesContainer from './imagesContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ScrutinyMakerLevelHeader from './scrutinyLevelHeader';
import ButtonContainer from '../../components/buttonContainer';
import UploadFile from '../../components/uploadFile/uploadFile';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveconsumerscrutiny, scrutinyapprove } from '../../store/actions/digitalIdentity';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import ScrutinyMakerLevelView from './scrutinyLevelView';
import ConsumerJourneyView from '../consumerScrutinyLevel/viewConsumerJourney';

const ConsumerMakerScrutinyLevelUpdateForm = () => {
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

    const uploadFile = () => {
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
                }
            })
        } else {
            scrutinySave('')
        }
    }

    const scrutinySave = async (filePath) => {
        let obj = {
            "cid": state?.cid,
            "comments": watch('comment'),
            "filename": file?.name,
            filePath: filePath
        }
        dispatch(scrutinyapprove(obj)).then((res) => {
            console.log(res.payload)
            setIsSaveScrutinyLoading(false)
        });
    }

    return <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <form>
            <ScrutinyMakerLevelHeader />

            <ImagesContainer data={state} />


            <Box className='viewContainer'>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Consumer Details Form:</Typography>
                <ScrutinyMakerLevelView data={state} />
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
                        <ButtonContainer isSingle>
                            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(uploadFile)} >Assign To Checker</Button>
                        </ButtonContainer>

                    </Grid>
                </Grid>
            </Box>
        </form>
    </Card>
}
export default ConsumerMakerScrutinyLevelUpdateForm;
