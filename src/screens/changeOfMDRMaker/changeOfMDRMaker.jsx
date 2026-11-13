import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography, useTheme } from '@mui/material';
import './changeOfMDRMaker.scss'
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ChangeOfMDRMakerHeader from './changeOfMDRMakerHeader';
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
import { useNavigate } from 'react-router-dom';
import { getFetchListMaker } from '../merchantMakerMaintenance/merchantsDataGrid';
import CheckboxButton from '../../components/checkboxButton/checkboxButton';

const ChangeOfMDRMaker = (props) => {

    const { data } = props
    const dispatch = useDispatch()
    const theme = useTheme()
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth)

    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const [changeMDR, setChangeMDR] = useState({})
    const [file, setFile] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingChecker, setIsLoadingChecker] = useState(false);

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

            raastsqrcmdrisglobal: 0,
            raastdqrcmdrisglobal: 0,
            raastrtpmdrisglobal: 0,
            raasttillmdrisglobal: 0,
            globalposmdrflag: 0,
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        setValue,
        reset,
        resetField,
        getValues,
        formState: { errors },
    } = defaultValues;

    useEffect(() => {
        setIsLoading(true)
        const obj = {
            "actuser": "ali",
            "mid": data?.mid
        }
        dispatch(getchangemdr(obj)).then(res => {
            console.log(data)
            const response = res.payload.merchantMaintenanceCustomList[0]
            console.log(response)
            setChangeMDR(response)
            reset({
                merchantmid: data?.merchantid,
                previousmdr: data?.mdr,
                // newmdr: response?.newmdr,
                comments: response?.comments,
                oldraastsqrcmdr: data?.raastsqrcmdr,
                oldraastdqrcmdr: data?.raastdqrcmdr,
                oldraastrtpmdr: data?.raastrtpmdr,
                oldraasttillmdr: data?.raasttillmdr,
                oldmdr: data?.mdr,


                raastsqrcmdrisglobal: data.raastsqrcmdrisglobal == '1' ? 1 : data.raastsqrcmdrisglobal == '0' ? 0 : '',
                raastdqrcmdrisglobal: data.raastdqrcmdrisglobal == '1' ? 1 : data.raastdqrcmdrisglobal == '0' ? 0 : '',
                raastrtpmdrisglobal: data.raastrtpmdrisglobal == '1' ? 1 : data.raastrtpmdrisglobal == '0' ? 0 : '',
                raasttillmdrisglobal: data.raasttillmdrisglobal == '1' ? 1 : data.raasttillmdrisglobal == '0' ? 0 : '',
                globalposmdrflag: data.globalposmdr == '1' ? 1 : data.globalposmdr == '0' ? 0 : '',
            })
            setIsLoading(false)
        })
    }, [])

    const uploadFile = (action, type) => {
        setIsLoadingChecker(true)
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
                    if (type == 'Assign To Checker') {
                        assignToChecker(apiURL + res.data.filepath)
                    }
                    if (type == 'Decline') {
                        actionToMakerRequest(action, apiURL + res.data.filepath)
                    }
                }
            })
        } else {
            if (type == 'Assign To Checker') {
                assignToChecker('')
            }
            if (type == 'Decline') {
                actionToMakerRequest(action, '')
            }
        }
    }

    const assignToChecker = (filePath) => {
        const obj = {
            raastsqrcmdr: getValues().raastsqrcmdr ? getValues().raastsqrcmdr : 0,
            raastdqrcmdr: getValues().raastdqrcmdr ? getValues().raastdqrcmdr : 0,
            raastrtpmdr: getValues().raastrtpmdr ? getValues().raastrtpmdr : 0,
            raasttillmdr: getValues().raasttillmdr ? getValues().raasttillmdr : 0,
            newmdr: getValues().newmdr ? getValues().newmdr : 0,
            raastsqrcmdrisglobal: getValues().raastsqrcmdrisglobal ? 1 : 0,
            raastdqrcmdrisglobal: getValues().raastdqrcmdrisglobal ? 1 : 0,
            raastrtpmdrisglobal: getValues().raastrtpmdrisglobal ? 1 : 0,
            raasttillmdrisglobal: getValues().raasttillmdrisglobal ? 1 : 0,
            globalposmdrflag: getValues().globalposmdrflag ? 1 : 0,
            comments: getValues().comment,
            "mid": data?.mid,
            activityid: changeMDR?.actid || "",
            filepath: filePath,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + '|Assign To Checker'
        }
        console.log(obj)

        dispatch(createchangemdr(obj)).then(res => {
            setIsLoadingChecker(false)
            console.log(res.payload)
            navigate(-1)
            getFetchListMaker()
        })
    }
    const actionToMakerRequest = (action, filePath) => {
        // 1 = approve / 2 = Declined / 3 = Asign back to maker
        const obj = {
            ...getValues(),
            "actuser": "ali",
            "mid": data?.mid,
            activityid: changeMDR?.actid || "",
            checkeraction: action,
            filepath: filePath,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + '|Assign To Checker'
        }
        delete obj.merchantmid
        delete obj.previousmdr
        console.log(obj)
        dispatch(postchangemdr(obj)).then(res => {
            console.log(res.payload)
        })
    }



    return <Box className='customerDetailsContainer'>
        <ChangeOfMDRMakerHeader />
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

                        <Grid item xs={12} sx={{ margin: '10px 0px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', px: 3, }}>
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

                                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 15px', px: 3, borderLeft: `2px solid #0000003b`, borderRight: `2px solid #0000003b` }}>
                                    <InputFields
                                        fieldName="raastsqrcmdr"
                                        type="text"
                                        label="New RAAST SQRC MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        disabled={watch('raastsqrcmdrisglobal')}
                                    />
                                    <InputFields
                                        fieldName="raastdqrcmdr"
                                        type="text"
                                        label="New RAAST DQRC MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        disabled={watch('raastdqrcmdrisglobal')}
                                    />
                                    <InputFields
                                        fieldName="raastrtpmdr"
                                        type="text"
                                        label="New RAAST RTP MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        disabled={watch('raastrtpmdrisglobal')}
                                    />
                                    <InputFields
                                        fieldName="raasttillmdr"
                                        type="text"
                                        label="New RAAST TILL MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        disabled={watch('raasttillmdrisglobal')}
                                    />
                                    <InputFields
                                        fieldName="newmdr"
                                        type="text"
                                        label="New POS MDR"
                                        control={control}
                                        pattern={twoDigitsAfterDecimal}
                                        disabled={watch('globalposmdrflag')}
                                    />
                                </Grid>

                                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', pl: 2 }}>
                                    <CheckboxButton
                                        fieldName="raastsqrcmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled={watch('raastsqrcmdr')}
                                    />
                                    <CheckboxButton
                                        fieldName="raastdqrcmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled={watch('raastdqrcmdr')}
                                    />
                                    <CheckboxButton
                                        fieldName="raastrtpmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled={watch('raastrtpmdr')}
                                    />
                                    <CheckboxButton
                                        fieldName="raasttillmdrisglobal"
                                        lable="Is Global"
                                        control={control}
                                        disabled={watch('raasttillmdr')}
                                    />
                                    <CheckboxButton
                                        fieldName="globalposmdrflag"
                                        lable="Is Global"
                                        control={control}
                                        disabled={watch('newmdr')}
                                    />
                                </Grid>
                            </Grid>
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
                                pattern={twoDigitsAfterDecimal}
                            />
                        </Grid> */}





                        {/* <Grid item xs={6}>
                            <InputFields
                                fieldName="newmdr"
                                type="text"
                                label="Current MDR"
                                control={control}
                                disabled={changeMDR?.fieldstatus == "DISABLE"}
                                pattern={twoDigitsAfterDecimal}
                            />
                        </Grid> */}

                        <Grid item xs={6}>
                            <ViewDocument label={'Uploaded document'} />
                        </Grid>


                        <Grid item xs={6}>
                            <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
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
                            // disabled={changeMDR?.fieldstatus == "DISABLE"}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                            <ButtonContainer isSingle>
                                {/* <Button size="medium" variant="contained" color="primary" disabled={changeMDR?.fieldstatus == "DISABLE"} onClick={() => handleSubmit(() => uploadFile(2, 'Decline'))}>Decline</Button> */}
                                <Button size="medium" variant="contained" color="secondary" disabled={isLoadingChecker} onClick={handleSubmit(() => uploadFile('', 'Assign To Checker'))} >{isLoadingChecker && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}Assign To Checker</Button>
                            </ButtonContainer>
                        </Grid>

                    </Grid>
                </form>
        }
    </Box>
}
export default ChangeOfMDRMaker;
