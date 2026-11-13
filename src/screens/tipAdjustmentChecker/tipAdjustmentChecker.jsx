import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import './tipAdjustmentChecker.scss'
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import TipAdjustmentCheckerHeader from './tipAdjustmentCheckerHeader';
import InputFields from '../../components/InputFields';
import DateTimePickerFields from '../../components/dateTimePickerField';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import ButtonContainer from '../../components/buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { createchangetip, getchangetip, postchangetip } from '../../store/actions/merchantMaintenance';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';

const TipAdjustmentChecker = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const [changeTip, setChangeTip] = useState({})
    const { user } = useSelector(state => state.auth)
    const [file, setFile] = useState({});

    const defaultValues = useForm({
        defaultValues: {
            merchantmid: "",
            previoustip: "",
            newtip: "",
            activityid: "",
            uploadeddocument: "",
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
        console.log(data)
        const obj = {
            
            "mid": data?.mid
        }
        dispatch(getchangetip(obj)).then(res => {
            console.log(res.payload.merchantMaintenanceCustomList[0])
            const response = res.payload.merchantMaintenanceCustomList[0]
            setChangeTip(response)
            reset({
                merchantmid: data?.merchantid,
                previoustip: data?.tip,
                newtip: response?.newtip,
                comments: response?.comments,
            })
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
            activityid: changeTip?.actid || "",
            checkeraction: action,
            filePath: filePath,
        }
        delete obj.merchantmid
        delete obj.previoustip
        console.log(obj)
        dispatch(postchangetip(obj)).then(res => {
            console.log(res.payload)
        })
    }

    return <Box className='customerDetailsContainer'>
        <TipAdjustmentCheckerHeader />
        <form style={{ margin: '20px 0px' }}>
            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="merchantmid"
                        type="text"
                        label="Merchant MID"
                        control={control}
                        disabled
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="previoustip"
                        type="text"
                        label="Previous MDR"
                        control={control}
                        disabled
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="newtip"
                        type="text"
                        label="New Tip"
                        control={control}
                        newtip
                    />
                </Grid>

                {/* <Grid item xs={6}>
                    <InputFields
                        fieldName="salespersonname"
                        type="text"
                        label="Sales Person Name"
                        control={control}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="salespersonid"
                        type="text"
                        label="Sales Person ID"
                        control={control}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="agentcomment"
                        type="text"
                        label="Agent Comment"
                        control={control}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="rsmname"
                        type="text"
                        label="RSM Name"
                        control={control}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="rsmid"
                        type="text"
                        label="RSM ID"
                        control={control}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="rsmcomment"
                        type="text"
                        label="RSM Comment"
                        control={control}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="merchantAcknowledge"
                        type="text"
                        label="Merchant Acknowledge"
                        control={control}
                    />
                </Grid> */}
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
                    />
                </Grid>
                <Grid item xs={6}>
                    <UploadFile label={'Uploaded document'} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                    <ButtonContainer isThree>
                        <Button size="medium" variant="contained" color="primary" onClick={() => handleSubmit(uploadFile(2))}>Decline</Button>
                        <Button size="medium" variant="contained" color="secondary" onClick={() => handleSubmit(uploadFile(1))}>Approved</Button>
                        <Button size="medium" variant="contained" color="primary" onClick={() => handleSubmit(uploadFile(3))}>Assign To Maker</Button>
                    </ButtonContainer>
                </Grid>
            </Grid>

        </form>
    </Box>
}
export default TipAdjustmentChecker;
