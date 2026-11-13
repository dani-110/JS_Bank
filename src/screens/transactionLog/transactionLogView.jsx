import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';

const TransactionLogView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    const { respcodeFilter, requestFilter } = useSelector(state => state.filter)
    console.log(data)
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
        'Fee',
        'RRN',
        'STAN',
        'Request Datetime',
        'Transaction',
        'Tax',
        'Response Code'
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
        'fee',
        'rrn',
        'stan',
        'requestdatetime',
        'reqcodeValue',
        'tax',
        'respcodeValue'
    ]

    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
}
export default TransactionLogView;