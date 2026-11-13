import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';

const IBFTTransactionView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    const { respcodeFilter, requestFilter } = useSelector(state => state.filter)
   
    useEffect(() => {
        let obj = { ...data }
        obj['natureValue'] = obj.nature === '1' ? 'debit' : obj.nature === '2' ? 'credit' : '';
        obj['respcodeValue'] = filterName(respcodeFilter, obj.respcode);
        obj['reqcodeValue'] = filterName(requestFilter, obj.reqcode);
        setObjView(obj)
    }, [])

    const viewFields = [
        'Transaction ID',
        'Consumer ID',
        'Merchant ID',
        'Terminal ID',
        'Terminal Location',
        'Source Account',
        'Destination Account',
        'Transaction Amount',
        'Previous Balance',
        'Updated Balance',
        'Channel Name',
        'Nature',
        "Fee",
        'RRN',
        'STAN',
        'Request Datetime',
        'Transaction',
        'Tax',
        'Response Code',
        'Purpose Of Transaction',
    ]
    const verifyParam = [
        'tid',
        'consumerid',
        'merchantid',
        'terminalid',
        'terminallocation',
        'sourceaccount',
        'destaccount',
        'transactionamount',
        'oldbalance',
        'updatedbalance',
        'channelname',
        'natureValue',
        "fee",
        'rrn',
        'stan',
        'requestdatetime',
        'reqcodeValue',
        'tax',
        'respcodeValue',
        'purposeoftxnn',
    ]
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />

}
export default IBFTTransactionView;