import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import './maker.scss'
import { useDispatch, useSelector } from 'react-redux';
import { checkMerchantnidduplication, checknidduplication, getfbratldata, getmerchatldata, getnadrabioverisysdata, getnadradata } from '../../store/actions/digitalIdentity';
import moment from 'moment';
import { filterName, onlyDate, setDataObject } from '../../utils/Utils';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { uiActions } from '../../store/reducers/ui-slice';
import { useNavigate } from 'react-router-dom';

const NadraVerisysData = (props) => {
    const { data, setSupportDocCustomList, setNadraData, setNadraDisable, setSaveConsumerInfo, setOnNadraVerisysChange, setFbrATLStatus, setFbrATLStatusLoading } = props

    const { stateFilter } = useSelector(state => state.filter)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const [checkNadra, setCheckNadra] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isNadraLoading, setIsNadraLoading] = useState(false)
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
            "mid": data?.mid
        }
        dispatch(getnadradata(obj)).then(async (res) => {
            console.log(res.payload?.responsecode == 0, res.payload?.nadraDataCustomList)
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
                setCheckNadra(res.payload?.nadraDataCustomList[0])
                setNadraData(res.payload?.nadraDataCustomList[0])
                setSupportDocCustomList(res.payload?.supportDocCustomList[0])
            }
            await fbrATL()
        });
    }

    const fbrATL = () => {
        let obj = {
            mid: data?.mid
        }
        dispatch(getmerchatldata(obj)).then(res => {
            const response = res?.payload?.response?.merchantATLCustomList
            console.log(response)
            if (response?.length > 0) {
                setFbrATLStatus(response[0]?.atlstatus)
                setFbrATLStatusLoading(false)
            }
            if (response?.length == 0) {
                fbrAtlScan()
            }
        })
    }

    const fbrAtlScan = () => {
        const obj = {
            "searchtype": "I",
            "mid": data?.mid,
            // "mid": "1",
            "nationalid": data.nationalid,
            "cid": '',
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|FBR ATL SCAN|FBR ATL INQUIRY',
        }
        const searchObj = setDataObject(obj)
        dispatch(getfbratldata(searchObj)).then((res) => {
            const response = res.payload?.response

            if (response?.merchantATLCustomList?.length > 0) {
                setFbrATLStatus(response?.merchantATLCustomList[0]?.atlstatus)
            }
            setFbrATLStatusLoading(false)
        });
    }

    const checkNIDDuplication = () => {
        setIsNadraLoading(true)
        const obj = {

            "nationalid": data.nationalid
        }
        dispatch(checkMerchantnidduplication(obj)).then((res) => {
            console.log(res.payload.data.responsecode)
            if (res.payload.data.responsecode == 0) {
                nadraVerisysData()
            } else if (res.payload.data.responsecode == 2) {
                console.log(res.payload)
                setNadraVerisys(true)
                setShowError(true)
                setSaveConsumerInfo(true)

                setShowErrorMessage(res.payload.data.respdescription)
            }
            setIsNadraLoading(false)
        })
    }

    const nadraVerisysData = () => {
        setIsLoading(true)
        let obj = {
            "mid": data?.mid,
            "citizennumber": data.nationalid,
            "area": filterName(stateFilter, data.state),
            "cnicissuedate": onlyDate(data.nationalidissuedate),
            "dobyear": data.dateofbirth ? moment(data.dateofbirth).format('YYYY') : '',
            "franchiseeid": "4892",
            "contactno": data.contactno,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Nadra Verisys'
        }
        dispatch(getnadrabioverisysdata(obj)).then((res) => {
            let response = res.payload
            if (res.payload?.responsecode == 0 && response?.mid && response?.nationalidexpirydate && response?.nationalidissuedate && response?.mothername) {
                setNadraDisable(false)
            }
            if (response?.responsecode == 0 && !response?.mid && !response?.nationalidexpirydate && !response?.nationalidissuedate && !response?.mothername) {

                setNadraDisable(true)
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Failed!",
                        message: res.payload?.respdescription,
                    })
                )
                navigate(-1)
            }
            if (response?.responsecode == 1) {
                setNadraDisable(true)
            }

            if (response) {
                let obj = {
                    "bvid": null,
                    "mid": response?.mid,
                    "cid": response?.cid,
                    "logdate": checkNadra?.logdate,
                    "tid": response?.tid,
                    "isopen": checkNadra?.isopen,
                    "ishighlight": checkNadra?.ishighlight,
                    "fullname": response?.name,
                    "fathername": response?.fathername,
                    "mothername": response?.mothername,
                    "presentaddress": response?.presntaddress,
                    "permanentaddress": response?.permanentaddress,
                    "dob": response?.dateofbirth,
                    "pob": response?.birthplace,
                    "gender": response?.gender,
                    "nationalid": response?.nationalid,
                    "nationalidissuedate": response?.nationalidissuedate,
                    "nationalidexpirydate": response?.nationalidexpirydate,
                    "responsestatus": response?.responsestatus,
                    "city": response?.city,
                    "state": response?.state
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
        <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', position: 'sticky',
            top: 0,
            backgroundColor: '#fff',
            zIndex: 10,
        }}>
            <Typography variant='h3' sx={{ fontWeight: '600' }}>NADRA Verisys Data:</Typography>
            <Button size="medium" variant="contained" color="primary" disabled={nadraVerisys || isNadraLoading} onClick={checkNIDDuplication} >
                {isNadraLoading && (
                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                )}
                NADRA Verisys</Button>
        </Box>
        <Divider sx={{ margin: '10px 0px' }} />
        {/* <Button size="medium" variant="contained" color="primary" fullWidth >NADRA Verisys</Button> */}
        {
            isLoading ? (
                <Box sx={{ height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress size={20} sx={{ marginRight: 1 }} />
                </Box>
            )
                :
                viewFields.map((e, i) => (
                    <Grid item xs={12}>
                        {checkNadra && <Typography variant="body1"><span style={{ fontWeight: 'bold' }}>{e}:</span> {`${checkNadra[[verifyParam[i]]] || ''}`}</Typography>}
                    </Grid>
                ))
        }
    </Box>

}
export default NadraVerisysData;
