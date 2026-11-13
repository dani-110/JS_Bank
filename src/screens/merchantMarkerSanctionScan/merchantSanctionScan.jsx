import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import './merchantMarkerSanctionScan.scss'
import StifleContainer from './stifleContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import MarkerLevelSanctionHeader from './sacntionScanHeader';
import MarkerLevelSanctionView from './sacntionScanView';
import ButtonContainer from '../../components/buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setDataObject, toBase64 } from '../../utils/Utils';
import { getmerchsanctiondata, getpeprisk, getsanctionscandata, gsnext, setpeprisk } from '../../store/actions/digitalIdentity';
import Expandable from '../../components/expandable/expandable';
import SelectFields from '../../components/SelectFields';
import CheckboxButton from '../../components/checkboxButton/checkboxButton';
import axios from 'axios';
import { api, apiURL } from '../../interfaces/api.interface';
import MerchantJourneyView from '../merchantScrutinyMakerLevel/viewMerchantJourney';

const SanctionScanUpdateForm = (props) => {
    const { data, setValue } = props
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [pepRecord, setPepRecord] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isGlobalSanction, setIsGlobalSanction] = useState(true)

    const [file, setFile] = useState({});
    const [isSaveGlobalLoading, setIsSaveGlobalLoading] = useState(false)

    const defaultValues = useForm({
        defaultValues: {
            comment: "",
            pepflag: "",
            risk: ""
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

    const risk = [
        { label: 'Low', value: 1 },
        { label: 'Medium', value: 2 },
        { label: 'High', value: 3 },
    ]

    useEffect(() => {
        let obj = {
            mid: data?.mid
        }
        dispatch(getmerchsanctiondata(obj)).then((res) => {
            const response = res.payload?.response
            if (response.responsecode == 0) {
                if (response.merchantSanctionCustomList.length > 0) {
                    setIsGlobalSanction(false)
                    setPepRecord(res.payload?.response)
                }
            }
        })
        getPEPrisk()
    }, [])

    const globalSanction = () => {
        setIsLoading(true)
        const obj = {
            fullname: data?.legalname,
            searchtype: "fuzzy",
            "entity": "*",
            "mid": data?.mid,
            "cid": ''
        }
        const searchObj = setDataObject(obj)
        dispatch(getsanctionscandata(searchObj)).then((res) => {
            if (res.payload?.response?.responsecode == 0) {
                setPepRecord(res.payload?.response)
                setIsLoading(false)
            }
        });
    }

    const uploadFile = () => {
        setIsSaveGlobalLoading(true)
        peprisk()

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
                    globalSancSave(apiURL + res.data.filepath)

                }
            })
        } else {
            globalSancSave('')
        }
    }


    const globalSancSave = async (filePath) => {
        let obj = {
            "mid": data?.mid,
            "comments": watch('comment'),
            "filename": file?.name,
            filePath: filePath
        }
        dispatch(gsnext(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                setValue(4)
            }
            setIsSaveGlobalLoading(false)
        });
    }

    const peprisk = async () => {
        let obj = {
            "mid": data?.mid,
            "pepflag": watch('pepflag') ? 1 : 0,
            "risk": watch('risk')
        }
        dispatch(setpeprisk(obj))
    }

    const getPEPrisk = async () => {
        let obj = {
            "mid": data?.mid
        }
        dispatch(getpeprisk(obj)).then((res) => {
            reset({
                pepflag: res.payload.merchantSanctionStatusCustomList[0].ispep == 1,
                risk: res.payload.merchantSanctionStatusCustomList[0].riskvalue
            })
        });
    }

    return <Card style={{ height: '80vh', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <MarkerLevelSanctionHeader state={data}/>

        <Grid container spacing={2} marginTop={'10px'}>
            <Grid item xs={12}>
                <Box className='viewMerchantMakerContainer'>
                    <Expandable title={'Merchant Details Form:'}>
                        <MarkerLevelSanctionView data={data} />
                    </Expandable>
                </Box>
            </Grid>
        </Grid>

        <Box sx={{ marginTop: '5px', border: '2px solid rgb(145, 89, 255)', borderRadius: '5px', padding: '5px 10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SelectFields
                        fieldName="risk"
                        label="Risk"
                        control={control}
                        options={risk.map(({ label, value }) => {
                            return { label, value };
                        })}
                    />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <CheckboxButton
                        fieldName="pepflag"
                        lable="PEP"
                        control={control}
                    />
                </Grid>
            </Grid>
        </Box>
        <StifleContainer list={pepRecord?.merchantSanctionCustomList} isLoading={isLoading} globalSanction={globalSanction} isGlobalSanction={isGlobalSanction} />
       

        <Box sx={{ margin: '10px 0px', padding:'5px', bgcolor:'backgroundColor' }}>
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
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                    <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(uploadFile)} disabled={isSaveGlobalLoading} >
                            {isSaveGlobalLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}
                            Next
                        </Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </Box>
    </Card>
}
export default SanctionScanUpdateForm;
