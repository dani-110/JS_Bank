import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';
import { Box, Divider, Grid, Typography } from '@mui/material';
import ResponseCode from '../../components/responseCode/responseCode';

const BillPaymentView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    const { respcodeFilter, requestFilter, channelFilter } = useSelector(state => state.filter)

    const SAFStatus = [
        { label: "Retry", value: '1' },
        { label: "Expire", value: '2' },
        { label: "Deleted", value: '3' }
    ]
    const filterValue = (list, id) => {
        return list?.find(val => val?.value == id)?.label || ""
    }

    useEffect(() => {
        console.log(data)
        let obj = { ...data }
        obj['channelidValue'] = filterName(channelFilter, obj.channelid);
        obj['reqcodeValue'] = filterName(requestFilter, obj.reqscode);
        obj['respcodeValue'] = filterName(respcodeFilter, obj.responsecode);
        obj['safstatusValue'] = filterValue(SAFStatus, obj.safstatus);
        setObjView(obj)
    }, [])

    const viewFields = [
        "Service Name",
        "Transaction Date Time",
        "Reference No",
        "Amount",
        "Response Code",
        "Company ID",
        "Consumer No",
        "STAN",
        "Auth ID",
        "RRN",
    ]
    const verifyParam = [
        "servicename",
        "transdatetime",
        "txnrefnum",
        "amount",
        "respcodeValue",
        "companyid",
        "consumerno",
        "stan",
        "authid",
        "rrn",
    ]
    return <>
        <Typography variant='h2' sx={{ margin: '10px', textAlign: 'left', fontWeight: '500' }}>{objView['servicename']}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px', }} color={'#617088'}>{objView['txnrefnum']}</Typography>
        <Box sx={{ margin: '10px' }}>
            <ResponseCode value={objView['respcodeValue']} />
        </Box>
        <Divider sx={{ margin: '10px', bgcolor: '#617088' }} />
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px' }}>Payment Information</Typography>
        <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
    </>

}
export default BillPaymentView;