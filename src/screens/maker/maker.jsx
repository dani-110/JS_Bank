import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import './maker.scss'
import MakerHeader from './makerHeader';
import CustomerDetails from './customerDetails';
import NadraVerisysData from './nadraVerisysData';
import ImagesContainer from './imagesContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ButtonContainer from '../../components/buttonContainer';
import UploadFile from '../../components/uploadFile/uploadFile';
import { useDispatch, useSelector } from 'react-redux';
import { makerdecline, merchantkycmakernadradecline, merchantmakerkycnadraapprove, nadrasavenext } from '../../store/actions/digitalIdentity';
import { filterName, setDataObject } from '../../utils/Utils';
import axios from 'axios';
import { api, apiURL } from '../../interfaces/api.interface';
import DeclineNadraModal from '../../components/declineNadraModal';
import { useTheme } from '@emotion/react';
import Expandable from '../../components/expandable/expandable';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { useNavigate } from 'react-router-dom';
import { getFetchListKYCMaker } from '../merchantMarkerLevelSanction/merchantsDataGrid';
import { updateKYCMakerMerchant } from '../../store/reducers/digitalIdentity-slice';
import ViewDocsList from '../../components/viewDocsList/viewDocsList';
import { uiActions } from '../../store/reducers/ui-slice';
import PopModal from '../../components/popModal/popModal';
import View from '../../components/view';

const Maker = (props) => {

    const theme = useTheme()
    const { data, setValue, setKycStage } = props
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate();


    const { stateFilter, cityFilter, legalentityFilter, genderFilter } = useSelector(state => state.filter)
    const [saveModal, setSaveModal] = useState(false)

    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const { declinereasonmerchantFilter } = useSelector(state => state.filter)

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState("");
    const [supportDocCustomList, setSupportDocCustomList] = useState({});
    const dispatch = useDispatch();

    const [file, setFile] = useState({});
    const [isScrutinyLoading, setIsScrutinyLoading] = useState(false)
    const [isMerchantInfoLoading, setIsMerchantInfoLoading] = useState(false)
    const [isNextLoading, setIsNextLoading] = useState(false)
    const [nadraData, setNadraData] = useState(false)
    const [nadraDisable, setNadraDisable] = useState(false)
    const [saveConsumerInfo, setSaveConsumerInfo] = useState(false)

    const [onNadraVerisysChange, setOnNadraVerisysChange] = useState(null)
    const [fbrATLStatus, setFbrATLStatus] = useState('')
    const [fbrATLStatusLoading, setFbrATLStatusLoading] = useState(false)

    // useState(() => {
    //     setValue(digitalTabSelect(data?.procstage))
    // }, [])

    const defaultValues = useForm({
        defaultValues: {
            comment: "",

            merchantlegalname: "",
            // dba: "",
            nationalid: "",
            individualname: "",
            name: "",
            fathername: "",
            presntaddress: "",
            permanentaddress: "",
            dateofbirth: "",
            gender: "",
            birthplace: "",
            motherName: "",
            nationalidexpirydate: "",
            nationalidissuedate: "",
            city: "",
            cityothers: "",
            state: "",
            mailingaddress: "",
            email: "",
            mobilenumber: "",
            isidlifetime: "",
            type: ""
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        setValue: resetValue,
        watch,
        reset,
        resetField,
        getValues,
        formState: { errors },
    } = defaultValues;

    useEffect(() => {
        if (watch('city') != 0) {
            resetValue('cityothers', '')
        }
    }, [watch('city')])

    const uploadFile = (type) => {
        console.log(type)
        if (file.name) {
            const url = api.fileupload().url
            const method = api.fileupload().method
            const formData = new FormData();
            formData.append("file", file)
            formData.append("filemodule", 'Json')
            formData.append("actuser", user.username?.toLowerCase())
            formData.append("sessionid", user.sessionId)
            formData.append("audittrace", breadCrumCtxt.breadCrumSelector.join('|') + `|NADRA Verisys|${type}`)

            axios[method](url, formData).then(res => {
                if (res.data.responsecode == 0) {
                    if (type == 'Revert to Scrutiny') {
                        checkerdecline(apiURL + res.data.filepath)
                    }
                    if (type == 'Save Merchant Info') {
                        nadraSave(apiURL + res.data.filepath)
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
            if (type == 'Revert to Scrutiny') {
                checkerdecline('')
            }
            if (type == 'Save Merchant Info') {
                nadraSave('')
            }
            if (type == 'Next') {
                next('')
            }
        }
    }

    const checkerdecline = async (filePath) => {
        setIsScrutinyLoading(true)
        let obj = {
            "mid": data?.mid,
            "comments": 'KYC Maker - NADRA Verisys - ' + watch('comment'),
            "filename": file?.name,
            filepath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Revert to Scrutiny',
        }
        dispatch(makerdecline(obj)).then((res) => {
            setIsScrutinyLoading(false)
            navigate(-1)
            getFetchListKYCMaker()
        });
    }

    const nadraSave = async (filePath) => {
        let dataset = getValues()
        dataset['isidlifetime'] = dataset.isidlifetime ? 1 : 0
        delete dataset.mobilenumber
        delete dataset.legalname
        delete dataset.dba
        // delete dataset.soleproprietor
        delete dataset.address
        setIsMerchantInfoLoading(true)
        let obj = {
            ...setDataObject(dataset),
            "mid": data?.mid,
            "comments": 'KYC Maker - NADRA Verisys - ' + watch('comment'),
            "filename": file?.name,
            filepath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Save Merchant Info',
        }
        dispatch(nadrasavenext(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                resetField("comment", { defaultValue: "" });
                navigate(-1)
                getFetchListKYCMaker()
            }
            setIsMerchantInfoLoading(false)
        });
    }
    const next = async (filePath) => {
        console.log('here is next')
        setIsNextLoading(true)
        let obj = {
            "mid": data?.mid,
            "comments": 'KYC Maker - NADRA Verisys - ' + watch('comment'),
            "filename": file?.name,
            filepath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Next',
        }
        dispatch(merchantmakerkycnadraapprove(obj)).then((res) => {
            let saveObj = { ...data }
            saveObj['procstage'] = '102'
            dispatch(updateKYCMakerMerchant(saveObj))
            setKycStage('102')
            setValue(prev => prev + 1)
            setIsNextLoading(false)
        });
    }

    const decline = (params, setOpenView) => {
        let obj = {
            "mid": data?.mid,
            mobileno: data.mobileno,
            filename: "",
            filepath: "",
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Decline',
            ...params
        }
        dispatch(merchantkycmakernadradecline(obj)).then(res => {
            setOpenView(false)
            navigate(-1)
            getFetchListKYCMaker()
        })
    }



    useEffect(() => {
        if (onNadraVerisysChange) {
            resetValue('presntaddress', onNadraVerisysChange?.dataPresentAddress || "")
            // resetValue('permanentaddress', onNadraVerisysChange?.dataPermanentAddress || "")
            resetValue('birthplace', onNadraVerisysChange?.dataBirthPlace || "")
            resetValue('mothername', onNadraVerisysChange?.dataMotherName || "")
        }

    }, [onNadraVerisysChange])


    const viewFields = [
        'Legal Name',
        'DBA',
        'Name (as per CNIC)',
        'Type',
        'CNIC',
        "Father's / Husband Name",
        'Present Address (as per CNIC)',
        'Permanent Address (as per CNIC)',
        'Date Of Birth',
        'Gender',
        'Birth Place',
        'Mother Name',
        'CNIC Expiry Date',
        'CNIC Issuance Date',
        'Business City',
        watch('city') == 0 ? 'Other' : null,
        'Province',
        'Business Address',
        'Mobile Number',
        'Email Address',
        'CNIC Lifetime Expiry'
    ].filter(Boolean)

    const verifyParam = [
        'merchantlegalname',
        'dba',
        'individualname',
        'type',
        'nationalid',
        'fathername',
        'presntaddress',
        'permanentaddress',
        'dateofbirth',
        'gender',
        'birthplace',
        'mothername',
        'nationalidexpirydate',
        'nationalidissuedate',
        'city',
        watch('city') == 0 ? 'cityothers' : null,
        'state',
        'address',
        'mobilenumber',
        'email',
        'isidlifetime',
    ].filter(Boolean)

    const mapperMerchant = () => {
        const obj = { ...getValues() }

        obj['type'] = filterName(legalentityFilter, obj.type);
        obj['gender'] = filterName(genderFilter, obj.gender);
        obj['city'] = filterName(cityFilter, obj.city);
        obj['state'] = filterName(stateFilter, obj.state);
        obj['isidlifetime'] = obj?.isidlifetime == 1 ? 'True' : 'False'


        return obj
    }

    return <Card style={{ height: '80vh', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <form>
            <MakerHeader state={data} fbrATLStatus={fbrATLStatus} fbrATLStatusLoading={fbrATLStatusLoading} />
            <ImagesContainer data={data} />

            <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <CustomerDetails data={data} control={control} reset={reset} watch={watch} resetField={resetField} resetValue={resetValue} errors={errors} nadraData={nadraData} />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <NadraVerisysData data={data} setSupportDocCustomList={setSupportDocCustomList} setNadraData={setNadraData} setNadraDisable={setNadraDisable} setSaveConsumerInfo={setSaveConsumerInfo} setOnNadraVerisysChange={setOnNadraVerisysChange} setFbrATLStatus={setFbrATLStatus} setFbrATLStatusLoading={setFbrATLStatusLoading} />
                </Grid>
            </Grid>

            <Box sx={{ margin: '10px 0px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextAreaFields
                            fieldName="comment"
                            type="text"
                            label="Comment"
                            control={control}
                            rows={6}
                            rules={{
                                required: "Comments is required",
                            }}
                            error={errors?.comment}
                        // disabled={nadraDisable}
                        />

                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '10px' }}>
                        {/* <ViewDocument label={'Uploaded document'} supportDocCustomList={supportDocCustomList} /> */}
                        <Box sx={{ border: ' 2px solid rgb(145, 89, 255)', borderRadius: '5px' }}>
                            <Expandable title={'Previous Stage Comments:'} style={{ height: '20px', padding: '5px 0px' }} childStyle={{ maxHeight: '25px' }}>
                                <Typography sx={{ margin: '0px 10px' }}>{data.nadracomments}</Typography>
                            </Expandable>
                        </Box>
                        <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                        <ViewDocsList object={{ "mid": data?.mid }} type={'Merchant'} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                        <ButtonContainer isFour>
                            {/* <Button size="medium" disabled={saveConsumerInfo} variant="contained" color="primary" >
                                Assign to Checker
                            </Button> */}
                            <DeclineNadraModal decline={decline} list={declinereasonmerchantFilter} />
                            <Button type="button" size="medium" variant="contained" color="primary" onClick={handleSubmit(() => uploadFile('Revert to Scrutiny'))} disabled={isScrutinyLoading} >
                                {isScrutinyLoading && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}
                                Revert to Scrutiny</Button>
                            <Button type="button" size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => setSaveModal(true))}  >
                                Save Merchant Info</Button>
                            <Button type="button" size="medium" variant="contained" color="secondary"
                                //  onClick={handleSubmit(() => uploadFile('Next'))} 
                                onClick={handleSubmit(() => uploadFile('Next'))}
                                disabled={nadraDisable || saveConsumerInfo || isNextLoading}>
                                {isNextLoading && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}
                                Next</Button>
                        </ButtonContainer>
                    </Grid>
                </Grid>
            </Box>
            <PopModal open={saveModal} setOpen={setSaveModal} width={'70%'}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <Typography variant="h2" style={{ padding: '10px', textAlign: 'center' }}> Review Information </Typography>
                    <Divider sx={{ margin: '10px 10px', width: '100%' }} />
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap', fontWeight: 500 }}>
                        {`You are about to update the merchant information. Please review the following details and click Save to continue:`}
                    </Typography>
                    <Box sx={{ border: '3px solid rgb(145, 89, 255)', margin: '10px 0px', padding: '10px 0px', borderRadius: '10px' }}>
                        <View viewFields={viewFields} viewData={mapperMerchant()} verifyParam={verifyParam} />
                    </Box>
                    <ButtonContainer>
                        <Button size="medium" variant="contained" color="error" onClick={() => setSaveModal(false)} >Cancel</Button>
                        <Button disabled={isMerchantInfoLoading} size="medium" variant="contained" color="primary" onClick={() => uploadFile('Save Merchant Info')} >
                            {isMerchantInfoLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Save</Button>
                    </ButtonContainer>
                </Box>
            </PopModal>
        </form>
    </Card>
}
export default Maker;
