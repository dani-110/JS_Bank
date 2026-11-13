import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import './changeOfMDRChecker.scss'
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ChangeOfMDRCheckerHeader from './changeOfMDRCheckerHeader';
import InputFields from '../../components/InputFields';
import DateTimePickerFields from '../../components/dateTimePickerField';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import ButtonContainer from '../../components/buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { createchangemdr, getchangemdr, postchangemdr } from '../../store/actions/merchantMaintenance';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { twoDigitsAfterDecimal } from '../../utils/Utils';
import { getFetchListChecker } from '../merchantCheckerMaintenance/merchantsDataGrid';
import { useNavigate } from 'react-router-dom';
import CheckboxButton from '../../components/checkboxButton/checkboxButton';

const ChangeOfMDRChecker = (props) => {

    const { data } = props
    const { user } = useSelector(state => state.auth)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [changeMDR, setChangeMDR] = useState({})
    const [file, setFile] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingApprove, setIsLoadingApprove] = useState(false);
    const [isLoadingDecline, setIsLoadingDecline] = useState(false);

    const defaultValues = useForm({
        defaultValues: {
            merchantmid: "",
            previousmdr: "",
            activityid: "",
            newmdr: "",
            uploadeddocument: "",
            comment: "",

            raastsqrcmdr: "",
            raastdqrcmdr: "",
            raastrtpmdr: "",
            raasttillmdr: "",

            oldraastsqrcmdr: "",
            oldraastdqrcmdr: "",
            oldraastrtpmdr: "",
            oldraasttillmdr: "",
            oldmdr: "",

            oldraastsqrcmdrisglobal: 0,
            oldraastdqrcmdrisglobal: 0,
            oldraastrtpmdrisglobal: 0,
            oldraasttillmdrisglobal: 0,
            globalposmdr: 0,

            raastsqrcmdrisglobal: 0,
            raastdqrcmdrisglobal: 0,
            raastrtpmdrisglobal: 0,
            raasttillmdrisglobal: 0,
            newglobalposmdr: 0,
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        setValue,
        resetField,
        getValues,
        formState: { errors },
    } = defaultValues;


    useEffect(() => {
        setIsLoading(true)
        const obj = {

            "mid": data?.mid
        }
        dispatch(getchangemdr(obj)).then(res => {
            const response = res.payload.merchantMaintenanceCustomList[0]
            console.log(response)
            setChangeMDR(response)
            reset({
                merchantmid: data?.merchantid,
                previousmdr: data?.mdr,
                newmdr: response?.newmdr,
                comments: response?.comments,

                oldraastsqrcmdr: response?.oldraastsqrcmdr,
                oldraastdqrcmdr: response?.oldraastdqrcmdr,
                oldraastrtpmdr: response?.oldraastrtpmdr,
                oldraasttillmdr: response?.oldraasttillmdr,
                oldmdr: data?.mdr,

                raastsqrcmdr: response?.newraastsqrcmdr == 0 ? '' : response?.newraastsqrcmdr,
                raastdqrcmdr: response?.newraastdqrcmdr == 0 ? '' : response?.newraastdqrcmdr,
                raastrtpmdr: response?.newraastrtpmdr == 0 ? '' : response?.newraastrtpmdr,
                raasttillmdr: response?.newraasttillmdr == 0 ? '' : response?.newraasttillmdr,


                oldraastsqrcmdrisglobal: response.oldraastsqrcmdrisglobal == '1' ? 1 : response.oldraastsqrcmdrisglobal == '0' ? 0 : '',
                oldraastdqrcmdrisglobal: response.oldraastdqrcmdrisglobal == '1' ? 1 : response.oldraastdqrcmdrisglobal == '0' ? 0 : '',
                oldraastrtpmdrisglobal: response.oldraastrtpmdrisglobal == '1' ? 1 : response.oldraastrtpmdrisglobal == '0' ? 0 : '',
                oldraasttillmdrisglobal: response.oldraasttillmdrisglobal == '1' ? 1 : response.oldraasttillmdrisglobal == '0' ? 0 : '',
                globalposmdr: data.globalposmdr == '1' ? 1 : data.globalposmdr == '0' ? 0 : '',

                raastsqrcmdrisglobal: response.newraastsqrcmdrisglobal == '1' ? 1 : response.newraastsqrcmdrisglobal == '0' ? 0 : '',
                raastdqrcmdrisglobal: response.newraastdqrcmdrisglobal == '1' ? 1 : response.newraastdqrcmdrisglobal == '0' ? 0 : '',
                raastrtpmdrisglobal: response.newraastrtpmdrisglobal == '1' ? 1 : response.newraastrtpmdrisglobal == '0' ? 0 : '',
                raasttillmdrisglobal: response.newraasttillmdrisglobal == '1' ? 1 : response.newraasttillmdrisglobal == '0' ? 0 : '',
                newglobalposmdr: response.newglobalposmdr == '1' ? 1 : response.newglobalposmdr == '0' ? 0 : '',
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
        if (action == 1) {
            setIsLoadingApprove(true)
        }
        if (action == 2) {
            setIsLoadingDecline(true)
        }
        const obj = {
            newmdr: getValues().newmdr,
            raastsqrcmdr: getValues().raastsqrcmdr ? getValues().raastsqrcmdr : '',
            raastdqrcmdr: getValues().raastdqrcmdr ? getValues().raastdqrcmdr : '',
            raastrtpmdr: getValues().raastrtpmdr ? getValues().raastrtpmdr : '',
            raasttillmdr: getValues().raasttillmdr ? getValues().raasttillmdr : '',
            raastsqrcmdrisglobal: getValues().raastsqrcmdrisglobal ? 1 : 0,
            raastdqrcmdrisglobal: getValues().raastdqrcmdrisglobal ? 1 : 0,
            raastrtpmdrisglobal: getValues().raastrtpmdrisglobal ? 1 : 0,
            raasttillmdrisglobal: getValues().raasttillmdrisglobal ? 1 : 0,
            comments: getValues().comment,
            "mid": data?.mid,
            activityid: changeMDR?.actid || "",
            checkeraction: action,
            filepath: filePath,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + `|${action == 1 ? 'Approve' : ''}${action == 2 ? 'Decline' : ''}${action == 3 ? 'Assign To Maker' : ''}`
        }
        dispatch(postchangemdr(obj)).then(res => {
            navigate(-1)
            getFetchListChecker()
            setIsLoadingApprove(false)
            setIsLoadingDecline(false)
        })
    }


    return <Box className='customerDetailsContainer'>
        <ChangeOfMDRCheckerHeader />
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
                                label="Merchant"
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

                        {/* <Grid item xs={6}>
                            <InputFields
                                fieldName="previousmdr"
                                type="text"
                                label="Previous MDR"
                                control={control}
                                disabled
                            />
                        </Grid> */}

                        <Grid item xs={12} sx={{ margin: '10px 0px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', px: 3, }}>
                                    <InputFields
                                        fieldName="oldraastsqrcmdr"
                                        type="text"
                                        label="RAAST Existing SQRC MDR"
                                        control={control}
                                        disabled
                                        pattern={twoDigitsAfterDecimal}
                                    />
                                    <InputFields
                                        fieldName="oldraastdqrcmdr"
                                        type="text"
                                        label="RAAST Existing DQRC MDR"
                                        control={control}
                                        disabled
                                        pattern={twoDigitsAfterDecimal}
                                    />
                                    <InputFields
                                        fieldName="oldraastrtpmdr"
                                        type="text"
                                        label="RAAST Existing RTP MDR"
                                        control={control}
                                        disabled
                                        pattern={twoDigitsAfterDecimal}
                                    />
                                    <InputFields
                                        fieldName="oldraasttillmdr"
                                        type="text"
                                        label="RAAST Existing TILL MDR"
                                        control={control}
                                        disabled
                                        pattern={twoDigitsAfterDecimal}
                                    />
                                    <InputFields
                                        fieldName="oldmdr"
                                        type="text"
                                        label="RAAST Existing POS MDR"
                                        control={control}
                                        disabled
                                        pattern={twoDigitsAfterDecimal}
                                    />
                                </Grid>

                                <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', px: 3, borderLeft: `2px solid #0000003b`, }}>
                                    <CheckboxButton
                                        fieldName="oldraastsqrcmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="oldraastdqrcmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="oldraastrtpmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="oldraasttillmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="globalposmdr"
                                        lable="Is Global"
                                        control={control}
                                        disabled
                                    />
                                </Grid>

                                <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 15px', px: 3, borderLeft: `2px solid #0000003b`, borderRight: `2px solid #0000003b` }}>
                                    <InputFields
                                        fieldName="raastsqrcmdr"
                                        type="text"
                                        label="RAAST SQRC MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        // disabled={watch('raastsqrcmdrisglobal')}
                                        disabled
                                    />
                                    <InputFields
                                        fieldName="raastdqrcmdr"
                                        type="text"
                                        label="RAAST DQRC MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        // disabled={watch('raastdqrcmdrisglobal')}
                                        disabled
                                    />
                                    <InputFields
                                        fieldName="raastrtpmdr"
                                        type="text"
                                        label="RAAST RTP MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        // disabled={watch('raastrtpmdrisglobal')}
                                        disabled
                                    />
                                    <InputFields
                                        fieldName="raasttillmdr"
                                        type="text"
                                        label="RAAST RTP MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        // disabled={watch('raasttillmdrisglobal')}
                                        disabled
                                    />
                                    <InputFields
                                        fieldName="newmdr"
                                        type="text"
                                        label="RAAST POS MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        // disabled={watch('raasttillmdrisglobal')}
                                        disabled
                                    />
                                </Grid>

                                <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', pl: 2 }}>
                                    <CheckboxButton
                                        fieldName="raastsqrcmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        // disabled={watch('raastsqrcmdr')}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="raastdqrcmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        // disabled={watch('raastdqrcmdr')}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="raastrtpmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        // disabled={watch('raastrtpmdr')}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="raasttillmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        // disabled={watch('raasttillmdr')}
                                        disabled
                                    />
                                    <CheckboxButton
                                        fieldName="newglobalposmdr"
                                        lable="Is Global"
                                        control={control}
                                        // disabled={watch('raasttillmdr')}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Grid>



                        {/* <Grid item xs={6}>
                            <InputFields
                                fieldName="newmdr"
                                type="text"
                                label="Current MDR"
                                control={control}
                                disabled
                            />
                        </Grid> */}

                        <Grid item xs={6}>
                            <ViewDocument label={'Uploaded document'} />
                        </Grid>
                        <Grid item xs={6}>
                            <UploadFile label={'Uploaded document'} />
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

                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                            <ButtonContainer >
                                <Button size="medium" variant="contained" color="primary" disabled={isLoadingDecline} onClick={() => handleSubmit(uploadFile(2))}>{isLoadingDecline && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}Decline</Button>
                                <Button size="medium" variant="contained" color="secondary" disabled={isLoadingApprove} onClick={() => handleSubmit(uploadFile(1))}>{isLoadingApprove && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}Approved</Button>
                                {/* <Button size="medium" variant="contained" color="primary" onClick={() => handleSubmit(uploadFile(3))}>Assign To Maker</Button> */}
                            </ButtonContainer>
                        </Grid>

                    </Grid>

                </form>
        }

    </Box>
}
export default ChangeOfMDRChecker;
