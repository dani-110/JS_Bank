import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';

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
        "Re Transmit Counts",
        "Beneficiary Bank Name",
        "Sender Name",
        "Sender IBAN",
        "Account Title",
        "Merchant Type",
        "Response Code",
        "Retries",
        "SAF Status",
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
        "retransmitcounts",
        "beneficiarybankname",
        "sendername",
        "senderiban",
        "accounttitle",
        "merchanttype",
        "respcodeValue",
        "retries",
        "safstatus",
        "reqcodeValue",
    ]
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />

}
export default SAFTransactionsView;