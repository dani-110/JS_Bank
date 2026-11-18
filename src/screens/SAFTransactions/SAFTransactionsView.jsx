import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';
import { Box, Divider, Grid, Typography } from '@mui/material';
import ResponseCode from '../../components/responseCode/responseCode';

const SAFTransactionsView = (props) => {
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
        "Transaction Ref.",
        "Request Datetime",
        "Channel Name",
        "RRN",
        "Transaction Amount",
        "Auth Code",
        "Transaction Date",
        "App Pan",
        "STAN",
        "Currency Code Transaction",
        "Sender Mobile",
        "Account Number From",
        "Account Number To",
        "To Bank IMD",
        "From Bank IMD",
        "Beneficiary Bank Name",
        "Sender Name",
        "Sender IBAN",
        "Account Title",
        "Merchant Type",
        "Response Code",
        "Transaction",
    ]
    const verifyParam = [
        "transactionid",
        "transmitdatetime",
        "channelname",
        "rrn",
        "amount",
        "authcode",
        "trandate",
        "apppan",
        "stan",
        "currencycodetransaction",
        "sendermobile",
        "accountnumberfrom",
        "accountnumberto",
        "tobankimd",
        "frombankimd",
        "beneficiarybankname",
        "sendername",
        "senderiban",
        "accounttitle",
        "merchanttype",
        "respcodeValue",
        "reqcodeValue",
    ]

    const SAFField = [
        "SAF Status",
        "Re Transmit Counts",
        "Retries",
    ]
    const SAFParam = [
        "safstatus",
        "retransmitcounts",
        "retries",
    ]
    return <>
        <Typography variant='h2' sx={{ margin: '10px', textAlign: 'left', fontWeight: '500' }}>{objView['reqcodeValue']}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px', }} color={'#617088'}>{objView['transactionid']}</Typography>
        <Box sx={{ margin: '10px' }}>
            <ResponseCode value={objView['respcodeValue']} />
        </Box>
        <Divider sx={{ margin: '10px', bgcolor: '#617088' }} />
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px' }}>Transaction Information</Typography>
        <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
        <Divider sx={{ margin: '10px', bgcolor: '#617088' }} />
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px' }}>SAF Processing</Typography>
        <View viewFields={SAFField} viewData={objView} verifyParam={SAFParam} />
    </>

}
export default SAFTransactionsView;