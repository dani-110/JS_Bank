import React, { useEffect, useState } from 'react';
import View from '../../components/view';

const OpenDCLogView = (props) => {
    const { data } = props
    const [viewData, setViewData] = useState({})

    useEffect(() => {
        setViewData(data)
    }, []);


    const viewFields = [
        "Amount",
        // 'Fee',
        // "Tax",
        "Debit Account",
        "Credit Account",
        'Tran Ref Num.',
        "Old Request Status",
        "New Request Status",
        "Processing Status",
        'Checker User',
        "User Comments",
        'Nature',
        // 'Checker User',
        'Consumer ID',
    ]

    const verifyParam = [
        "amount",
        // "fee",
        // "tax",
        'debitaccount',
        'creditaccount',
        'txnrefnum',
        'oldrequeststatus',
        'newrequeststatus',
        'processingstatus',
        'username',
        'usercomments',
        'natureValue',
        // 'checkeruser',
        'consumerid',
    ]

    return <View viewFields={viewFields} viewData={viewData} verifyParam={verifyParam} />
}
export default OpenDCLogView;