import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { dateFormat, filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@mui/material';

const PepScanView = (props) => {
    const { data, title } = props
    console.log(data)
    const [objView, setObjView] = useState({})
    const { cityFilter, stateFilter, legalentityFilter, genderFilter } = useSelector(state => state.filter)

    useEffect(() => {
        console.log(data)
        let obj = { ...data }
        obj['dateofbirthValue'] = dateFormat(data?.dateofbirth)
        obj['nationalidissuedateValue'] = dateFormat(data?.nationalidissuedate)
        obj['nationalidexpirydateValue'] = data?.isidlifetime == 1 ? 'Lifetime' : dateFormat(data?.nationalidexpirydate)
        obj['isidlifetimeValue'] = data?.isidlifetime == 1 ? 'Yes' : data?.isidlifetime == 0 ? 'No' : ''
        obj['genderValue'] = filterName(genderFilter, data?.gender);
        obj['cityValue'] = filterName(cityFilter, obj?.city)
        obj['stateValue'] = filterName(stateFilter, obj?.state)
        obj['legalentityValue'] = filterName(legalentityFilter, obj?.legalentity)
        setObjView(obj)
    }, [])



    // const viewFields = [
    //     "Legal Name",
    //     "DBA",
    //     "Type",
    //     "Tax ID",
    //     "Business Address",
    //     "CNIC",
    //     "Father's / Husband Name",
    //     "Present Address",
    //     "Permanent Address",
    //     "Date Of Birth",
    //     "Gender",
    //     "Birth Place",
    //     "Mother Name",
    //     "CNIC Issuance Date",
    //     "CNIC Expiry Date",
    //     "CNIC Lifetime Expiry",
    //     'Legal Entity',
    //     "Business City",
    //     "Province",
    //     // "Mailing Address",
    //     "Mobile Number",
    //     "Email Address",

    //     // "Individual or Sole Proprietor Name (As per CNIC)",
    // ]

    // const viewParams = [
    //     'legalname',
    //     'dba',
    //     'legalentityValue',
    //     'nationaltaxid',
    //     'address',
    //     'nationalid',
    //     'fathername',
    //     'currentaddress',
    //     'permanentaddress',
    //     'dateofbirthValue',
    //     'genderValue',
    //     'placeofbirth',
    //     'mothername',
    //     'nationalidissuedateValue',
    //     'nationalidexpirydateValue',
    //     'isidlifetimeValue',
    //     'legalentityValue',
    //     'cityValue',
    //     'stateValue',
    //     // 'mailingaddress',
    //     'mobileno',
    //     'emailid',

    //     // 'nameofowner',
    // ]

    const viewFields = [
        "Legal Name",
        "DBA",
        "Type",
        'Name (as per CNIC)',
        "Tax ID",
        "Father Name",
        "CNIC",
        "Gender",
        "Date Of Birth",
        "Place of Birth",
        "Mother Name",
        "Business Address",
        "Present Address",
        "Permanent Address",
        "Business City",
        "Mobile Number",
        "Email Address",

        // "CNIC Issuance Date",
        // "CNIC Expiry Date",
        // "CNIC Lifetime Expiry",
        // 'Legal Entity',
        // "Province",
        // "Mailing Address",

        // "Individual or Sole Proprietor Name (As per CNIC)",
    ]

    const viewParams = [
        'legalname',
        'dba',
        'legalentityValue',
        'individualname',
        'nationaltaxid',
        'fathername',
        'nationalid',
        'genderValue',
        'dateofbirthValue',
        'placeofbirth',
        'mothername',
        'address',
        'currentaddress',
        'permanentaddress',
        'cityValue',
        'mobileno',
        'emailid',

        // 'nationalidissuedateValue',
        // 'nationalidexpirydateValue',
        // 'isidlifetimeValue',
        // 'legalentityValue',
        // 'stateValue',
        // 'mailingaddress',

        // 'nameofowner',
    ]


    return <View viewFields={viewFields} viewData={objView} verifyParam={viewParams} />
}
export default PepScanView;