import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import View from '../../components/view';
import { useDispatch, useSelector } from 'react-redux';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { useForm } from 'react-hook-form';

const MerchantTrustAccountChangeLogView = (props) => {
    const { data, setOpen } = props
    console.log(data)

    const viewFields = [
        'National ID',
        'Mobile No',
        'Full Name',
        'Wallet IBAN',
        'Wallet Account Number',
        'On Boarding',
        'Activity Date',
        'User Name',
        'Old Trust Account Number',
        'Old Trust IBAN',
        'Old Trust Account Bank Code',
        'Old Trust Account Title',
        'New Trust Account Number',
        'New Trust IBAN',
        'New Trust Account Bank Code',
        'New Trust Account Title'
    ]

    const verifyParam = [
        "nationalid",
        "mobileno",
        "fullname",
        "walletiban",
        "walletaccountnumber",
        "onboarding",
        "activitydate",
        "username",
        "oldtrustaccountno",
        "oldtrustiban",
        "oldtrustaccountbankcode",
        "oldtrustaccounttitle",
        "newtrustaccountno",
        "newtrustiban",
        "newtrustaccountbankcode",
        "newtrustaccounttitle",
    ]

    return <>
        <View viewFields={viewFields} viewData={data} verifyParam={verifyParam} />

    </>
}
export default MerchantTrustAccountChangeLogView;