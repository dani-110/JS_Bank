import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import './maker.scss'
import MakerHeader from './makerHeader';
import CustomerDetails from './customerDetails';
import NadraVerisysData from './nadraVerisysData';
import ImagesContainer from './imagesContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import ButtonContainer from '../../components/buttonContainer';
import UploadFile from '../../components/uploadFile/uploadFile';
import ViewDocument from '../../components/viewDocument/viewDocument';
import { useDispatch, useSelector } from 'react-redux';
import { consumerMakerdecline, consumerkycmakernadraapprove, consumermakernadradecline, consumernadrasavenext, getimage, getnadrafields, makerassignchecker, nadrasavenext } from '../../store/actions/digitalIdentity';
import { digitalTabSelect, setDataObject, toBase64 } from '../../utils/Utils';
import { api, apiURL } from '../../interfaces/api.interface';
import axios from 'axios';
import DeclineNadraModal from '../../components/declineNadraModal';
import Expandable from '../../components/expandable/expandable';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { useNavigate } from 'react-router-dom';
import { getFetchListKYCMaker } from '../consumerMaker/consumerMakerDataGrid';
import { updateKYCMakerList } from '../../store/reducers/digitalIdentity-slice';

const Maker = (props) => {
    const { data, setValue, setKycStage } = props
    const { user } = useSelector(state => state.auth)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState("");
    const dispatch = useDispatch();

    const [supportDocCustomList, setSupportDocCustomList] = useState({});
    const [file, setFile] = useState({});
    const [isAssignLoading, setIsAssignLoading] = useState(false)
    const [isSaveLoading, setIsSaveLoading] = useState(false)
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

    console.log(data)
    const defaultValues = useForm({
        defaultValues: {
            comments: "",

            nationalid: "",
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
            mobilenumber: "",
            email: "",
            isidlifetime: "",
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
                    if (type == 'revert') {
                        decline(apiURL + res.data.filepath)
                    }
                    if (type == 'Save Consumer Info') {
                        nadraSave(apiURL + res.data.filepath)
                    }
                    if (type == 'Next') {
                        nadraNext(apiURL + res.data.filepath)
                    }
                    if (type == 'Assign to Checker') {
                        assignchecker(apiURL + res.data.filepath)
                    }
                }
            })
        } else {
            if (type == 'revert') {
                decline('')
            }
            if (type == 'Save Consumer Info') {
                nadraSave('')
            }
            if (type == 'Next') {
                nadraNext('')
            }
            if (type == 'Assign to Checker') {
                assignchecker('')
            }
        }
    }

    const assignchecker = async (filePath) => {
        setIsAssignLoading(true)
        let obj = {
            ...setDataObject(getValues()),
            "cid": data?.cid,
            "filename": file?.name,
            'comments': 'KYC Maker - NADRA Verisys - ' + watch('comments'),
            filePath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Assign to Checker',
        }

        dispatch(makerassignchecker(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                navigate(-1)
                getFetchListKYCMaker()
                resetField("comments", { defaultValue: "" });
                setIsAssignLoading(false)
            }
        });
    }
    const nadraSave = async (filePath) => {
        setIsSaveLoading(true)
        let obj = {
            ...setDataObject(getValues()),
            "cid": data?.cid,
            "filename": file?.name,
            'comments': 'KYC Maker - NADRA Verisys - ' + watch('comments'),
            filePath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Save Consumer Info',
        }

        dispatch(consumernadrasavenext(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                // setValue(2)

                navigate(-1)
                getFetchListKYCMaker()
                resetField("comments", { defaultValue: "" });
                setIsSaveLoading(false)
            }
        });
    }
    const nadraNext = async (filePath) => {
        setIsNextLoading(true)
        let obj = {
            ...setDataObject(getValues()),
            "cid": data?.cid,
            "filename": file?.name,
            'comments': 'KYC Maker - NADRA Verisys - ' + watch('comments'),
            filePath: filePath,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Next',
        }
        dispatch(consumerkycmakernadraapprove(obj)).then((res) => {
            console.log(res.payload)
            if (res.payload?.responsecode == 0) {
                delete obj.audittrace
                delete obj.comments
                let saveObj = { ...data, ...obj }
                saveObj['placeofbirth'] = obj.birthplace
                saveObj['dateofbirth'] = data.dateofbirth
                saveObj['emailid'] = obj.email
                saveObj['mailingadress'] = obj.mailingaddress
                saveObj['mobileno'] = obj.mobilenumber
                saveObj['fullname'] = obj.name
                saveObj['nationalidexpirydate'] = data.nationalidexpirydate
                saveObj['nationalidissuedate'] = data.nationalidissuedate
                saveObj['address'] = obj.presntaddress
                saveObj['kycprocstage'] = '102'
                delete saveObj.birthplace
                delete saveObj.dateofbirth
                delete saveObj.email
                delete saveObj.mailingaddress
                delete saveObj.mobilenumber
                delete saveObj.name
                delete saveObj.nationalidexpirydate
                delete saveObj.nationalidissuedate
                delete saveObj.presntaddress
                dispatch(updateKYCMakerList(saveObj))
                setValue(1)
                setKycStage('102')
                setIsNextLoading(false)
            }
        });
    }
    const decline = (params, setOpenView) => {
        let obj = {
            "cid": data?.cid,
            mobileno: data?.mobileno,
            filename: "",
            filepath: "",
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|NADRA Verisys|Decline',
            ...params,
        }
        dispatch(consumermakernadradecline(obj)).then(res => {
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

    return <Card style={{ height: '80vh', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
        <form>
            <MakerHeader state={data} fbrATLStatus={fbrATLStatus} fbrATLStatusLoading={fbrATLStatusLoading} />

            <ImagesContainer data={data} />

            <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <CustomerDetails data={data} control={control} reset={reset} watch={watch} nadraData={nadraData} />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex' }}>
                    <NadraVerisysData data={data} setSupportDocCustomList={setSupportDocCustomList} setNadraData={setNadraData} setNadraDisable={setNadraDisable} setSaveConsumerInfo={setSaveConsumerInfo} setOnNadraVerisysChange={setOnNadraVerisysChange} setFbrATLStatus={setFbrATLStatus} setFbrATLStatusLoading={setFbrATLStatusLoading} />
                </Grid>
            </Grid>

            <Box sx={{ margin: '10px 0px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextAreaFields
                            fieldName="comments"
                            type="text"
                            label="Comment"
                            control={control}
                            rows={5}
                            rules={{
                                required: "Comments is required",
                            }}
                            error={errors?.comments}
                        // disabled={nadraDisable}
                        />

                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {/* <ViewDocument label={'Uploaded document'} supportDocCustomList={supportDocCustomList} /> */}
                        <Box sx={{ border: ' 2px solid rgb(145, 89, 255)', borderRadius: '5px' }}>
                            <Expandable title={'Previous Stage Comments:'} style={{ height: '20px', padding: '5px 0px' }} childStyle={{ maxHeight: '25px' }}>
                                <Typography sx={{ margin: '0px 10px' }}>{data?.nadracomments}</Typography>
                            </Expandable>
                        </Box>
                        <UploadFile label={'Uploaded document'} file={file} setFile={setFile} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                        {/* <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(uploadFile)} disabled={isSavenadraLoading} >
                            {isSavenadraLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Save & Proceed</Button>
                    </ButtonContainer> */}
                        <ButtonContainer isFour>
                            <Button disabled={!data?.nadracheckerflag || saveConsumerInfo || isAssignLoading} size="medium" variant="contained" color="primary" onClick={handleSubmit(() => uploadFile('Assign to Checker'))}>
                                {isAssignLoading && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}Assign to Checker</Button>
                            <DeclineNadraModal decline={decline} />
                            <Button disabled={saveConsumerInfo || isSaveLoading} size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => uploadFile('Save Consumer Info'))}>
                                {isSaveLoading && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}
                                Save Consumer Info</Button>
                            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => uploadFile('Next'))} disabled={nadraDisable || saveConsumerInfo || isNextLoading} >
                                {isNextLoading && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}
                                Next</Button>
                        </ButtonContainer>
                    </Grid>
                </Grid>
            </Box>
            {/* </Card> */}
        </form>
    </Card>
}
export default Maker;
