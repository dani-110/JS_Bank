import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import './maker.scss'
import { useDispatch, useSelector } from 'react-redux';
import { checknidduplication, consumergetfbratldata, getconsumeratldata, getconsumernadradata, getnadrabioverisysdata } from '../../store/actions/digitalIdentity';
import { filterName, onlyDate, setDataObject } from '../../utils/Utils';
import moment from 'moment';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { uiActions } from '../../store/reducers/ui-slice';
import { useNavigate } from 'react-router-dom';
import PopModal from '../../components/popModal/popModal';
import ButtonContainer from '../../components/buttonContainer';
import warning from '../../assests/warning.png';

const NadraVerisysData = (props) => {
    const { data, setSupportDocCustomList, setNadraData, setNadraDisable, setSaveConsumerInfo, setOnNadraVerisysChange, setFbrATLStatus, setFbrATLStatusLoading } = props
    const { stateFilter } = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const [checkNadra, setCheckNadra] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [nadraVerisys, setNadraVerisys] = useState(false)
    const [showError, setShowError] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState('')

    const viewFields = [
        'CNIC',
        'Full Name',
        "Father's / Husband Name",
        'Present Address',
        'Permanent Address',
        'Date Of Birth',
        'Gender',
        'Birth Place',
        'Mother Name',
        'CNIC Expiry Date',
        'CNIC Issuance Date',
    ]
    const verifyParam = [
        'nationalid',
        'fullname',
        'fathername',
        'presentaddress',
        'permanentaddress',
        'dob',
        'gender',
        'pob',
        'mothername',
        'nationalidexpirydate',
        'nationalidissuedate'
    ]

    useEffect(() => {
        checknadradata()
    }, [])

    const checknadradata = () => {
        setFbrATLStatusLoading(true)
        let obj = {
            "cid": data?.cid
        }
        dispatch(getconsumernadradata(obj)).then(async (res) => {
            console.log(res.payload?.responsecode, res.payload?.nadraDataCustomList.length > 0)
            if (res.payload?.responsecode == 0 && res.payload?.nadraDataCustomList.length < 1) {
                setNadraDisable(true)
            }
            if (res.payload?.responsecode == 0 && res.payload?.nadraDataCustomList.length > 0) {
                setNadraVerisys(true)
            }
            if (res.payload?.responsecode == 1) {
                setNadraDisable(true)
            }
            if (res.payload?.responsecode == 0) {
                setNadraData(res.payload?.nadraDataCustomList[0])
                setCheckNadra(res.payload?.nadraDataCustomList[0])
                setSupportDocCustomList(res.payload?.supportDocCustomList[0])
            }
            await fbrATL()
        });
    }

    const fbrATL = () => {
        let obj = {
            cid: data?.cid
        }
        dispatch(getconsumeratldata(obj)).then(res => {
            console.log(res.payload?.merchantATLCustomList)
            if (res.payload?.merchantATLCustomList.length > 0) {
                setFbrATLStatus(res.payload?.merchantATLCustomList[0]?.atlstatus)
                setFbrATLStatusLoading(false)
            }
            if (res.payload?.merchantATLCustomList.length == 0) {
                fbrAtlScan()
            }
        })
    }

    const fbrAtlScan = () => {
        const obj = {
            "searchtype": "I",
            "mid": '',
            "nationalid": data.nationalid,
            "cid": data?.cid,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL INQUIRY',
        }
        const searchObj = setDataObject(obj)
        dispatch(consumergetfbratldata(searchObj)).then((res) => {
            const response = res.payload?.response

            if (response?.merchantATLCustomList.length > 0) {
                setFbrATLStatus(response?.merchantATLCustomList[0]?.atlstatus)
            }
            setFbrATLStatusLoading(false)
        });
    }

    const checkNIDDuplication = () => {
        setIsLoading(true)
        const obj = {

            "nationalid": data.nationalid
        }
        dispatch(checknidduplication(obj)).then((res) => {
            console.log(res.payload.data.responsecode)
            if (res.payload.data.responsecode == 0) {
                nadraVerisysData()
            } else if (res.payload.data.responsecode == 2) {
                setNadraVerisys(true)
                setShowError(true)
                setSaveConsumerInfo(true)
                setShowErrorMessage(res.payload.data.respdescription)
                setIsLoading(false)
            }
        })
    }
    const nadraVerisysData = () => {
        console.log(filterName(stateFilter, data.state))
        setIsLoading(true)
        let obj = {
            "cid": data?.cid,
            "citizennumber": data.nationalid,
            "area": filterName(stateFilter, data.state),
            "cnicissuedate": onlyDate(data.nationalidissuedate),
            "dobyear": data.dateofbirth ? moment(data.dateofbirth).format('YYYY') : '',
            "franchiseeid": "4892",
            "contactno": data.mobileno,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Nadra Verisys'
        }
        dispatch(getnadrabioverisysdata(obj)).then((res) => {
            let response = res.payload

            console.log(response?.responsecode == 0, !response?.nationalidexpirydate, !response?.nationalidissuedate, !response?.mothername)
            if (res.payload?.responsecode == 0 && response?.cid && response?.nationalidexpirydate && response?.nationalidissuedate && response?.mothername) {
                setNadraDisable(false)
            }

            if (response?.responsecode == 0 && !response?.cid && !response?.nationalidexpirydate && !response?.nationalidissuedate && !response?.mothername) {
                console.log(res.payload, "abc")
                setNadraDisable(true)

                navigate(-1)
            }
            if (res.payload?.responsecode == 1) {
                setNadraDisable(true)
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Failed!",
                        message: res.payload?.respdescription,
                    })
                )
            }

            if (response) {
                let obj = {
                    "bvid": null,
                    "mid": response?.mid,
                    "cid": response.cid,
                    "logdate": checkNadra?.logdate,
                    "tid": response.tid,
                    "isopen": checkNadra?.isopen,
                    "ishighlight": checkNadra?.ishighlight,
                    "fullname": response.name,
                    "fathername": response.fathername,
                    "mothername": response.mothername,
                    "presentaddress": response.presntaddress,
                    "permanentaddress": response.permanentaddress,
                    "dob": response.dateofbirth,
                    "pob": response.birthplace,
                    "gender": response.gender,
                    "nationalid": response.nationalid,
                    "nationalidissuedate": response.nationalidissuedate,
                    "nationalidexpirydate": response.nationalidexpirydate,
                    "responsestatus": response.responsestatus,
                    "city": response.city,
                    "state": response.state
                }
                setOnNadraVerisysChange({
                    dataPresentAddress: response?.presntaddress,
                    // dataPermanentAddress: response?.permanentaddress,
                    dataBirthPlace: response?.birthplace,
                    dataMotherName: response?.mothername
                })
                setCheckNadra(obj)
                setNadraData(obj)
            }
            setIsLoading(false)
        });
    }

    return <Box className='nadraVerisysDataContainer'>
        {/* <Typography variant='h3' sx={{ textAlign: 'center' }}>Nadra Verisys Data:</Typography>
        <Button size="medium" variant="contained" color="primary" fullWidth >NADRA Verisys</Button> */}
        <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', position: 'sticky',
            top: 0,
            backgroundColor: '#fff',
            zIndex: 10,
        }}>
            <Typography variant='h3' sx={{ fontWeight: '600' }}>NADRA Verisys Data:</Typography>
            <Button disabled={nadraVerisys || isLoading} size="medium" variant="contained" color="primary" onClick={checkNIDDuplication} >
                {isLoading && (
                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                )}
                NADRA Verisys</Button>
        </Box>
        <Divider sx={{ margin: '10px 0px' }} />
        {
            isLoading ? (
                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <CircularProgress size={50} sx={{ marginRight: 1 }} />
                </Box>
            )
                :
                viewFields.map((e, i) => (
                    <Grid item xs={12}>
                        {
                            checkNadra && <Typography variant="body1"><span style={{ fontWeight: 'bold' }}>{e}:</span> {`${checkNadra[[verifyParam[i]]] || ''}`}</Typography>
                        }
                    </Grid>
                ))
        }
        <PopModal open={showError} setOpen={setShowError}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={warning} style={{ height: '80px', objectFit: 'contain' }} alt="warning" />
                <Typography variant="body1" className="headingTitle" sx={{ textAlign: 'center' }}>
                    {showErrorMessage}
                </Typography>
                {/* <ButtonContainer > */}
                <Button size="medium" variant="contained" color="error" onClick={() => setShowError(false)} sx={{ width: '100px' }} >Ok</Button>

                {/* </ButtonContainer> */}
            </Box>
        </PopModal>
    </Box>

}
export default NadraVerisysData;
