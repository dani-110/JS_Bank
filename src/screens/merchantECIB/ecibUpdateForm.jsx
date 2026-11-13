import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, Grid, Typography } from '@mui/material';
import './ecib.scss'
import ImagesContainer from './imagesContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ECIBHeader from './ecibHeader';
import ECIBView from './ecibView';
import ButtonContainer from '../../components/buttonContainer';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ecibapprove, getimage, savescrutiny } from '../../store/actions/digitalIdentity';
import { handleImageUpload, toBase64 } from '../../utils/Utils';
import axios from 'axios';
import { api, apiURL } from '../../interfaces/api.interface';

const ECIBUpdateForm = () => {

    const { user } = useSelector(state => state.auth)
    const location = useLocation();
    const { state } = location

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [isSaveScrutinyLoading, setIsSaveScrutinyLoading] = useState(false)
    const [image, setImage] = useState("");
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
                    ecibSave(apiURL + res.data.filepath)
                }
            })
        } else {
            ecibSave("")
        }
    }


    const ecibSave = async (filePath) => {
        setIsSaveScrutinyLoading(true)
        let obj = {
            "mid": state?.mid,
            "comments": watch('comment'),
            "filename": file?.name,
            filepath: filePath
        }
        dispatch(ecibapprove(obj)).then((res) => {
            console.log(res.payload)
            setIsSaveScrutinyLoading(false)
        });
    }

    return <form>
        <Card>
            <ECIBHeader />

            <ImagesContainer data={state} />

            <Box className='viewContainer'>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Merchant Details:</Typography>
                <ECIBView data={state} />
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
                        {/* <ViewDocument label={'Uploaded document'} isLoading={isLoading} image={image} open={open} setOpen={setOpen} imageViewHandler={imageViewHandler} /> */}
                        <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                        <ButtonContainer isSingle>
                            {/* <Button size="medium" variant="contained" color="primary" >Discripent</Button> */}
                            <Button size="medium" variant="contained" color="secondary" onClick={uploadFile} >Approved</Button>
                        </ButtonContainer>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    </form>
}
export default ECIBUpdateForm;
