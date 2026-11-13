import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import './tipAdjustmentMaker.scss'
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import TipAdjustmentMakerHeader from './tipAdjustmentMakerHeader';
import InputFields from '../../components/InputFields';
import DateTimePickerFields from '../../components/dateTimePickerField';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import ButtonContainer from '../../components/buttonContainer';
import { createchangetip, getchangetip, postchangetip } from '../../store/actions/merchantMaintenance';
import { useDispatch, useSelector } from 'react-redux';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';

const TipAdjustmentMaker = (props) => {
    const { data } = props
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [changeTip, setChangeTip] = useState({})
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

    const uploadFile = (action, type) => {
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
                    if (type == 'decline') {
                        actionToMakerRequest(action, apiURL + res.data.filepath)
                    }
                    if (type == 'assign') {
                        assignToChecker(apiURL + res.data.filepath)
                    }
                }
            })
        } else {
            if (type == 'decline') {
                actionToMakerRequest(action, '')
            }
            if (type == 'assign') {
                assignToChecker('')
            }
        }
    }


    const assignToChecker = (filePath) => {
        const obj = {
            ...getValues(),
            
            "mid": data?.mid,
            activityid: changeTip?.actid || "",
            filepath: filePath,
        }
        delete obj.merchantmid
        delete obj.previoustip
        console.log(obj)
        dispatch(createchangetip(obj)).then(res => {
            console.log(res.payload)
        })
    }
    const actionToMakerRequest = (action,filePath) => {
        // 1 = approve / 2 = Declined / 3 = Asign back to maker
        const obj = {
            ...getValues(),
            
            "mid": data?.mid,
            activityid: changeTip?.actid || "",
            checkeraction: action,
            filepath: filePath,
        }
        delete obj.merchantmid
        delete obj.previoustip
        console.log(obj)
        dispatch(postchangetip(obj)).then(res => {
            console.log(res.payload)
        })
    }


    return <Box className='customerDetailsContainer'>
        <TipAdjustmentMakerHeader />
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
                        fieldName="previousmdr"
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
                        disabled={changeTip?.fieldstatus == "DISABLE"}
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
                        disabled={changeTip?.fieldstatus == "DISABLE"}
                    />
                </Grid>
                <Grid item xs={6}>
                    <UploadFile label={'Uploaded document'} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                    <ButtonContainer isSingle>
                        {/* <Button size="medium" variant="contained" color="primary" disabled={changeTip?.fieldstatus == "DISABLE"} onClick={() => handleSubmit(() => uploadFile(2, 'decline'))} > Decline</Button> */}
                        <Button size="medium" variant="contained" color="secondary" disabled={changeTip?.fieldstatus == "DISABLE"} onClick={handleSubmit(() => uploadFile('', 'assign'))}>Assign To Checker</Button>
                    </ButtonContainer>
                </Grid>

            </Grid>
        </form>

    </Box >
}
export default TipAdjustmentMaker;
