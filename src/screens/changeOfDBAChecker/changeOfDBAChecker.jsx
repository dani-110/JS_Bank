import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import './changeOfDBAChecker.scss'
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ChangeOfDBACheckerHeader from './changeOfDBACheckerHeader';
import InputFields from '../../components/InputFields';
import DateTimePickerFields from '../../components/dateTimePickerField';
import UploadFile from '../../components/uploadFile/uploadFile';
import ViewDocument from '../../components/viewDocument/viewDocument';
import ButtonContainer from '../../components/buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { createchangedba, getchangedba, postchangedba } from '../../store/actions/merchantMaintenance';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';

const ChangeOfDBAChecker = (props) => {
    const { data } = props
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [changeDBA, setChangeDBA] = useState({})
    const [file, setFile] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const defaultValues = useForm({
        defaultValues: {
            merchantmid: "",
            previousdba: "",
            newdba: "",
            activityid: "",
            uploadeddocument: "",
            comments: ""
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
        getValues,
        formState: { errors },
    } = defaultValues;



    useEffect(() => {
        setIsLoading(true)
        const obj = {
            "mid": data?.mid
        }
        dispatch(getchangedba(obj)).then(res => {
            console.log(res.payload.merchantMaintenanceCustomList[0])
            const response = res.payload.merchantMaintenanceCustomList[0]
            setChangeDBA(response)
            reset({
                merchantmid: data?.merchantid,
                previousdba: data?.dba,
                newdba: response?.newdba,
                comments: response?.comments,
            })
            setIsLoading(false)
        })
    }, [])

    const uploadFile = (action) => {
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
                    actionToMakerRequest(action, apiURL + res.data.filepath)
                }
            })
        } else {
            actionToMakerRequest(action, '')
        }
    }

    const actionToMakerRequest = (action, filePath) => {
        // 1 = approve / 2 = Declined / 3 = Asign back to maker
        const obj = {
            ...getValues(),
            "mid": data?.mid,
            activityid: changeDBA?.actid || "",
            checkeraction: action,
            filepath: filePath,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + `|${action == 1 ? 'Approve' : ''}${action == 2 ? 'Decline' : ''}${action == 3 ? 'Assign To Maker' : ''}`
        }
        delete obj.merchantmid
        delete obj.previousdba

        dispatch(postchangedba(obj)).then(res => {
            console.log(res.payload)
        })
    }


    return <Box className='customerDetailsContainer'>
        <ChangeOfDBACheckerHeader />
        {
            isLoading ?
                <Box className='loaderBox'>
                    <CircularProgress size={50} sx={{ marginRight: 1, color: "secondary" }} />
                </Box>
                :
                <form style={{ margin: '20px 0px' }}>
                    <Grid container spacing={2}>
                        {/* <Grid item xs={6}>
                    <InputFields
                        fieldName="walletaccountno"
                        type="text"
                        label="Wallet Account No"
                        control={control}
                    />
                </Grid> */}
                        <Grid item xs={6}>
                            <InputFields
                                fieldName="merchantmid"
                                type="text"
                                label="Merchant MID"
                                control={control}
                                disabled
                            />
                        </Grid>
                        {/* <Grid item xs={6}>
                    <DateTimePickerFields
                        fieldName="datetime"
                        type="date"
                        label="Date Time"
                        control={control}
                    />
                </Grid> */}
                        <Grid item xs={6}>
                            <InputFields
                                fieldName="previousdba"
                                type="text"
                                label="Previous DBA"
                                control={control}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputFields
                                fieldName="newdba"
                                type="text"
                                label="New DBA"
                                control={control}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ViewDocument label={'Uploaded document'} />
                        </Grid>

                        <Grid item xs={6}>
                            <TextAreaFields
                                fieldName="comments"
                                type="text"
                                label="Comment"
                                control={control}
                                rows={3}
                                rules={{
                                    required: "Comment is required",
                                }}
                                error={errors?.comments}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                            <ButtonContainer isThree>
                                <Button disabled={!watch('newdba')} size="medium" variant="contained" color="primary" onClick={() => handleSubmit(uploadFile(2))}>Decline</Button>
                                <Button disabled={!watch('newdba')} size="medium" variant="contained" color="secondary" onClick={() => handleSubmit(uploadFile(1))}>Approved</Button>
                                <Button disabled={!watch('newdba')} size="medium" variant="contained" color="primary" onClick={() => handleSubmit(uploadFile(3))}>Assign To Maker</Button>
                            </ButtonContainer>
                        </Grid>
                    </Grid>

                </form>
        }

    </Box>
}
export default ChangeOfDBAChecker;
