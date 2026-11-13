import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import './merchantMarkerPepScan.scss'
import StifleContainer from './stifleContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ButtonContainer from '../../components/buttonContainer';
import PepScanHeader from './pepScanHeader';
import PepScanView from './pepScanView';
import { setDataObject } from '../../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { getfbratldata, getimage, getmerchatldata, makerapprove, merchantmakerfbrapprove, merchantmakerfbrdecline } from '../../store/actions/digitalIdentity';
import ViewDocument from '../../components/viewDocument/viewDocument';
import UploadFile from '../../components/uploadFile/uploadFile';
import Expandable from '../../components/expandable/expandable';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import Card from '../../components/card/Card';
import DeclineNadraModal from '../../components/declineNadraModal';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { useNavigate } from 'react-router-dom';
import { getFetchListKYCMaker } from '../merchantMarkerLevelSanction/merchantsDataGrid';
import { uiActions } from '../../store/reducers/ui-slice';
import ViewDocsList from '../../components/viewDocsList/viewDocsList';
import { updateKYCMakerMerchant } from '../../store/reducers/digitalIdentity-slice';

const PepScanUpdateForm = (props) => {
    const { data, setValue, setKycStage } = props
    const { user } = useSelector(state => state.auth)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pepRecord, setPepRecord] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFbrAtl, setIsFbrAtl] = useState(true)

    const [open, setOpen] = useState(false);
    const [isViewImageLoading, setIsViewImageLoading] = useState(false)
    const [image, setImage] = useState("");

    const [supportDocCustomList, setSupportDocCustomList] = useState({});
    const [file, setFile] = useState({});
    const [isSaveFBRATLLoading, setIsSaveFBRATLLoading] = useState(false)
    const [FBRDisable, setFBRDisable] = useState(false)

    // useState(() => {
    //     setValue(digitalTabSelect(data?.procstage))
    // }, [])

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

    useEffect(() => {
        let obj = {
            mid: data?.mid
        }
        dispatch(getmerchatldata(obj)).then((res) => {
            const response = res.payload?.response
            if (response?.responsecode == 0 && response?.merchantATLCustomList.length < 1) {
                setFBRDisable(true)
            }
            if (response?.responsecode == 1) {
                setFBRDisable(true)
            }
            if (response?.responsecode == 0) {
                console.log(response.merchantATLCustomList)
                if (response.merchantATLCustomList.length > 0) {
                    setIsFbrAtl(false)
                    setPepRecord(res.payload?.response?.merchantATLCustomList)
                }
                setSupportDocCustomList(res.payload?.response.supportDocCustomList[0])
            }
        })
    }, [])

    const fbrAtlScan = () => {
        setPepRecord([])
        setIsLoading(true)
        const obj = {
            "searchtype": "I",
            "mid": data?.mid,
            // "mid": "1",
            "nationalid": data.nationalid,
            "cid": '',
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL SCAN|FBR ATL INQUIRY',
            // "nationalid": '4220115145065',
        }
        const searchObj = setDataObject(obj)
        dispatch(getfbratldata(searchObj)).then((res) => {
            if (res.payload?.response?.responsecode == 0 && res.payload?.response?.merchantATLCustomList < 1) {
                setFBRDisable(true)
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Failed!",
                        message: res.payload?.response?.respdescription,
                    })
                )
                // navigate(-1)
            }
            if (res.payload?.response.responsecode == 1) {
                setFBRDisable(true)
            }

            if (res.payload?.response?.responsecode == 0) {
                setPepRecord(res.payload?.response?.merchantATLCustomList)
                setFBRDisable(false)
            }
            setIsLoading(false)
        });
    }


    const uploadFile = (type) => {
        if (file.name) {
            const url = api.fileupload().url
            const method = api.fileupload().method
            const formData = new FormData();
            formData.append("file", file)
            formData.append("filemodule", 'Json')
            formData.append("actuser", user.username?.toLowerCase())
            formData.append("sessionid", user.sessionId)
            formData.append("audittrace", breadCrumCtxt.breadCrumSelector.join('|') + `|FBR ATL SCAN|${type}`)
            axios[method](url, formData).then(res => {
                if (res.data.responsecode == 0) {
                    if (type == 'assign') {
                        fbrAtlSave(apiURL + res.data.filepath)
                    }
                    if (type == 'Next') {
                        next(apiURL + res.data.filepath)
                    }
                } else {
                    dispatch(
                        uiActions.showNotification({
                            status: "error",
                            title: "Failed!",
                            message: res.data.respdescription,
                        })
                    );
                }
            })
        } else {
            if (type == 'assign') {
                fbrAtlSave()
            }
            if (type == 'Next') {
                next()
            }
        }
    }
    const fbrAtlSave = async (filePath) => {
        let obj = {
            "mid": data?.mid,
            "comments": 'KYC Maker - FBR ATL Scan - ' + watch('comment'),
            "filename": file?.name,
            filePath: filePath
        }
        dispatch(makerapprove(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                navigate(-1)
                getFetchListKYCMaker()

            }
            setIsSaveFBRATLLoading(false)
        });
    }
    const next = async (filePath) => {
        setIsSaveFBRATLLoading(true)
        let obj = {
            "mid": data?.mid,
            "comments": 'KYC Maker - FBR ATL Scan - ' + watch('comment'),
            "filename": file?.name,
            filePath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL SCAN|Next',
        }
        dispatch(merchantmakerfbrapprove(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                setValue(prev => prev + 1)
                let saveObj = { ...data }
                saveObj['procstage'] = data.legalentity == 1 ? '105':'104'
                dispatch(updateKYCMakerMerchant(saveObj))
                setKycStage(data.legalentity == 1 ? '105' : '104')
            }
            setIsSaveFBRATLLoading(false)
        });
    }

    const decline = (params, setOpenView) => {
        let obj = {
            "mid": data?.mid,
            filename: "",
            filepath: "",
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL SCAN|Decline',
            ...params
        }
        dispatch(merchantmakerfbrdecline(obj)).then(res => {
            setOpenView(false)
            navigate(-1)
            getFetchListKYCMaker()
        })
    }

    return <Card style={{ height: '75vh', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <PepScanHeader state={data} />

        <Grid container spacing={2} marginTop={'10px'}>
            <Grid item xs={12}>
                {/* <Box className='viewContainer'>
                    <Typography variant='h2' sx={{ textAlign: 'center' }}>Merchant Details:</Typography>
                    <PepScanView data={data} />
                </Box> */}
                <Box sx={{ border: ' 2px solid rgb(145, 89, 255)', borderRadius: '5px', padding: '5px 10px' }}>
                    <Expandable title={'Merchant Details:'}>
                        <PepScanView data={data} title={'Merchant Details:'} />
                    </Expandable>
                </Box>
            </Grid>
        </Grid>


        <Divider />
        <StifleContainer list={pepRecord} isLoading={isLoading} fbrAtlScan={fbrAtlScan} isFbrAtl={isFbrAtl} />


        <Box sx={{ margin: '10px 0px', padding: '5px', bgcolor: 'backgroundColor' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextAreaFields
                        fieldName="comment"
                        type="text"
                        label="Comment"
                        control={control}
                        rows={7}
                        rules={{
                            required: "Comment is required",
                        }}
                        error={errors?.comment}
                    // disabled={FBRDisable}
                    />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {/* <ViewDocument label={'Uploaded document'} supportDocCustomList={supportDocCustomList} /> */}
                    <Box sx={{ border: ' 2px solid rgb(145, 89, 255)', borderRadius: '5px' }}>
                        <Expandable title={'Previous Stage Comments:'} style={{ height: '20px', padding: '5px 0px' }} childStyle={{ maxHeight: '25px' }}>
                            <Typography sx={{ margin: '0px 10px' }}>{data.atlcomments}</Typography>
                        </Expandable>
                    </Box>
                    <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                    <ViewDocsList object={{ "mid": data?.mid }} type={'Merchant'} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                    <ButtonContainer>
                        <DeclineNadraModal decline={decline} />
                        {/* <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(() => uploadFile('assign'))} disabled={isSaveFBRATLLoading} >
                            {isSaveFBRATLLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Assign to Checker</Button> */}
                        <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => uploadFile('Next'))} disabled={FBRDisable || isSaveFBRATLLoading} >
                            {isSaveFBRATLLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}
                            Next</Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </Box>
    </Card>
}
export default PepScanUpdateForm;
