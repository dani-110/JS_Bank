import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import './changeOfAddressMaker.scss'
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ChangeOfAddressMakerHeader from './changeOfAddressMakerHeader';
import InputFields from '../../components/InputFields';
import DateTimePickerFields from '../../components/dateTimePickerField';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import ButtonContainer from '../../components/buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { createchangeaddress, getchangeaddress, postchangeaddress } from '../../store/actions/merchantMaintenance';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';

const ChangeOfAddressMaker = (props) => {
    const { data } = props
    const { user } = useSelector(state => state.auth)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const dispatch = useDispatch()
    const [changeAddress, setChangeAddress] = useState({})
    const [file, setFile] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const defaultValues = useForm({
        defaultValues: {
            merchantmid: "",
            previousaddress: "",
            newaddress: "",
            activityid: "",
            uploadeddocument: "",
            choosefiletoupload: "",
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
        getValues,
        formState: { errors },
    } = defaultValues;


    useEffect(() => {
        setIsLoading(true)
        const obj = {
            "mid": data?.mid
        }
        dispatch(getchangeaddress(obj)).then(res => {
            const response = res.payload?.merchantMaintenanceCustomList[0]
            setChangeAddress(response)
            reset({
                merchantmid: data?.merchantid,
                previousaddress: data?.address,
                newaddress: response?.newaddress,
                comments: response?.comments,
            })
            setIsLoading(false)
        })
    }, [])

    const uploadFile = (action, type) => {
        if (file.name) {
            const url = api.fileupload().url
            const method = api.fileupload().method
            const formData = new FormData();
            formData.append("file", file)
            formData.append("filemodule", 'Json')
            formData.append("actuser", user.username?.toLowerCase())
            formData.append("sessionid", user.sessionId)
            formData.append("audittrace", breadCrumCtxt.breadCrumSelector.join('|') + `|${type}`)
            axios[method](url, formData).then(res => {
                if (res.data.responsecode == 0) {
                    if (type == 'decline') {
                        actionToMakerRequest(action, apiURL + res.data.filepath)
                    }
                    if (type == 'Assign To Checker') {
                        assignToChecker(apiURL + res.data.filepath)
                    }
                }
            })
        } else {
            if (type == 'decline') {
                actionToMakerRequest(action, '')
            }
            if (type == 'Assign To Checker') {
                assignToChecker('')
            }
        }
    }


    const assignToChecker = (filePath) => {
        const obj = {
            ...getValues(),
            "mid": data?.mid,
            activityid: changeAddress?.actid || "",
            filePath: filePath,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + '|Assign To Checker'
        }
        delete obj.merchantmid
        delete obj.previousaddress
        dispatch(createchangeaddress(obj))
    }
    const actionToMakerRequest = (action, filePath) => {
        // 1 = approve / 2 = Declined / 3 = Asign back to maker
        const obj = {
            ...getValues(),
            "mid": data?.mid,
            activityid: changeAddress?.actid || "",
            checkeraction: action,
            filePath: filePath,
        }
        delete obj.merchantmid
        delete obj.previousaddress
        dispatch(postchangeaddress(obj))
    }


    return <Box className='customerDetailsContainer'>
        <ChangeOfAddressMakerHeader />
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
                                fieldName="previousaddress"
                                type="text"
                                label="Previous Address"
                                control={control}
                                disabled
                                rules={{
                                    minLength: {
                                        value: 5,
                                        message: "Minimum 5 characters required"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "Maximum 500 characters allowed"
                                    }
                                }}
                                error={errors?.previousaddress}
                            />

                        </Grid>
                        <Grid item xs={6}>

                            <InputFields
                                fieldName="newaddress"
                                type="text"
                                label="New Address"
                                control={control}
                                disabled={changeAddress?.fieldstatus == "DISABLE"}
                                rules={{
                                    minLength: {
                                        value: 5,
                                        message: "Minimum 5 characters required"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "Maximum 500 characters allowed"
                                    }
                                }}
                                error={errors?.newaddress}
                            />

                        </Grid>
                        <Grid item xs={6}>
                            <ViewDocument label={'Uploaded document'} />
                        </Grid>

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
                                disabled={changeAddress?.fieldstatus == "DISABLE"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                            <ButtonContainer isSingle>
                                {/* <Button size="medium" variant="contained" color="primary" disabled={changeAddress?.fieldstatus == "DISABLE"} onClick={() => handleSubmit(() => uploadFile(2, 'decline'))} >Decline</Button> */}
                                <Button size="medium" variant="contained" color="secondary" disabled={changeAddress?.fieldstatus == "DISABLE"} onClick={handleSubmit(() => uploadFile('', 'Assign To Checker'))}>Assign To Checker</Button>
                            </ButtonContainer>
                        </Grid>
                    </Grid>

                </form>
        }
    </Box>
}
export default ChangeOfAddressMaker;
