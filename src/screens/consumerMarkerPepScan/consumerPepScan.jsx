import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import './consumerMarkerPepScan.scss'
import StifleContainer from './stifleContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ButtonContainer from '../../components/buttonContainer';
import PepScanHeader from './pepScanHeader';
import PepScanView from './pepScanView';
import { setDataObject } from '../../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { consumergetfbratldata, consumermakerapprove, consumermakerfbrapprove, consumermakerfbrdecline, getconsumeratldata } from '../../store/actions/digitalIdentity';
import UploadFile from '../../components/uploadFile/uploadFile';
import Expandable from '../../components/expandable/expandable';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import Card from '../../components/card/Card';
import DeclineNadraModal from '../../components/declineNadraModal';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { useNavigate } from 'react-router-dom';
import { getFetchListKYCMaker } from '../consumerMaker/consumerMakerDataGrid';
import { uiActions } from '../../store/reducers/ui-slice';
import { updateKYCMakerList } from '../../store/reducers/digitalIdentity-slice';

const PepScanUpdateForm = (props) => {
    const { data, setValue, setKycStage } = props
    const { user } = useSelector(state => state.auth)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const { countryFilter } = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pepRecord, setPepRecord] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFbrAtl, setIsFbrAtl] = useState(true)

    const [supportDocCustomList, setSupportDocCustomList] = useState({});
    const [file, setFile] = useState({});
    const [isSaveFBRATLLoading, setIsSaveFBRATLLoading] = useState(false)
    const [FBRDisable, setFBRDisable] = useState(false)
    const [isNextLoading, setIsNextLoading] = useState(false)

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
            cid: data?.cid
        }
        dispatch(getconsumeratldata(obj)).then((res) => {
            const response = res.payload
            if (res.payload?.responsecode == 0 && res.payload?.merchantATLCustomList.length < 1) {
                setFBRDisable(true)
            }
            if (res.payload?.responsecode == 1) {
                setFBRDisable(true)
            }
            if (response?.responsecode == 0) {
                if (response.merchantATLCustomList.length > 0) {
                    setIsFbrAtl(false)
                    setPepRecord(res.payload?.merchantATLCustomList)
                }
                setSupportDocCustomList(res.payload?.supportDocCustomList[0])
            }
        })
    }, [])

    const uploadFile = (type) => {
        setIsSaveFBRATLLoading(true)
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
                    if (type == 'checker') {
                        fbrAtlSave(apiURL + res.data.filepath)
                    }
                    if (type == 'Next') {
                        next(apiURL + res.data.filepath)
                    }
                }
            })
        } else {
            if (type == 'checker') {
                fbrAtlSave()
            }
            if (type == 'Next') {
                next()
            }
        }
    }
    const fbrAtlSave = async (filePath) => {
        setIsSaveFBRATLLoading(true)
        let obj = {
            "cid": data?.cid,
            "comments": 'KYC Maker - FBR ATL SCAN - ' + watch('comment'),
            "filename": file?.name,
            filePath: filePath
        }
        dispatch(consumermakerapprove(obj)).then((res) => {
            setIsSaveFBRATLLoading(false)

            navigate(-1)
            getFetchListKYCMaker()
        });
    }

    const next = async (filePath) => {
        setIsNextLoading(true)
        let obj = {
            "cid": data?.cid,
            "comments": 'KYC Maker - FBR ATL SCAN - ' + watch('comment'),
            "filename": file?.name,
            filePath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL SCAN|Next',
        }
        dispatch(consumermakerfbrapprove(obj)).then(res => {
            if (res.payload?.responsecode == 0) {
                let saveObj = { ...data }
                saveObj['kycprocstage'] = '103'
                dispatch(updateKYCMakerList(saveObj))
                setValue(2)
                setKycStage('103')
                setIsNextLoading(false)
            }
        })
    }

    const fbrAtlScan = () => {
        console.log(data)
        setPepRecord({})
        setIsLoading(true)
        const obj = {
            "searchtype": "I",
            "mid": '',
            "nationalid": data.nationalid,
            "cid": data?.cid,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL INQUIRY',
        }
        const searchObj = setDataObject(obj)
        dispatch(consumergetfbratldata(searchObj)).then((res) => {
            console.log(res.payload)
            if (res.payload?.response.responsecode == 0 && res.payload?.response.merchantATLCustomList < 1) {
                console.log(res.payload, "abc")
                setFBRDisable(true)
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Failed!",
                        message: res.payload?.response.respdescription,
                    })
                )
                navigate(-1)
            }
            if (res.payload?.response.responsecode == 1) {
                setFBRDisable(true)
            }
            if (res.payload?.response?.responsecode == 0) {
                setPepRecord(res.payload?.response.merchantATLCustomList)
                setFBRDisable(false)
            }
            setIsLoading(false)
        });
    }

    const decline = (params, setOpenView) => {
        let obj = {
            "cid": data?.cid,
            filename: "",
            filepath: "",
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL SCAN|Decline',
            ...params
        }
        console.log(obj)
        dispatch(consumermakerfbrdecline(obj)).then(res => {
            setOpenView(false)
            navigate(-1)
            getFetchListKYCMaker()

        })
    }

    return <Card style={{ height: '80vh', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <PepScanHeader state={data} />


        <Grid container spacing={2} marginTop={'10px'}>
            <Grid item xs={12}>
                <Box sx={{ border: ' 2px solid rgb(145, 89, 255)', borderRadius: '5px', padding: '5px 10px' }}>
                    <Expandable title={'Consumer Details:'}>
                        <PepScanView data={data} />
                    </Expandable>
                </Box>
            </Grid>
        </Grid>

        <Divider />
        <StifleContainer list={pepRecord} isLoading={isLoading} isFbrAtl={isFbrAtl} fbrAtlScan={fbrAtlScan} />


        <Box sx={{ margin: '10px 0px', padding: '5px', bgcolor: 'backgroundColor' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextAreaFields
                        fieldName="comment"
                        type="text"
                        label="Comment"
                        control={control}
                        rows={5}
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
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                    <ButtonContainer >
                        <DeclineNadraModal decline={decline} />
                        {/* <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(() => uploadFile('checker'))} disabled={isSaveFBRATLLoading} >
                            {isSaveFBRATLLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Assign to Checker</Button> */}
                        <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(() => uploadFile('Next'))} disabled={FBRDisable || isNextLoading}>
                            {isNextLoading && (
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
