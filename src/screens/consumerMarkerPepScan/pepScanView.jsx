import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';

const PepScanView = (props) => {
    const { data } = props
    console.log(data)
    const [objView, setObjView] = useState({})
    const { cityFilter, stateFilter, genderFilter } = useSelector(state => state.filter)



    useEffect(() => {
        let obj = { ...data }
        obj['dateofbirthValue'] = data?.dateofbirth?.split(' ')[0]
        obj['nationalidexpirydateValue'] = data?.nationalidexpirydate?.split(' ')[0]
        obj['nationalidissuedateValue'] = data?.nationalidissuedate?.split(' ')[0]
        obj['isidlifetimeValue'] = data?.isidlifetime == 1
        obj['genderValue'] = filterName(genderFilter, data?.gender);
        obj['stateValue'] = filterName(stateFilter, obj.state)
        obj['cityValue'] = filterName(cityFilter, obj.city) + (obj.cityothers ? ' - ' + obj.cityothers : '')
        setObjView(obj)
    }, [])
    const viewFields = [
        "Full Name",
        "Mother Name",
        "Father's / Husband Name",
        "Mobile Number",
        "CNIC",
        "Date Of Birth",
        "Email Address",
        "Place of Birth",
        "City",
        "Present Address",
        "Permanent Address",
    ]
    const viewParams = [
        'fullname',
        'mothername',
        'fathername',
        'mobileno',
        'nationalid',
        'dateofbirthValue',
        'emailid',
        'placeofbirth',
        "cityValue",
        'address',
        'permanentaddress',
    ]

    return <View viewFields={viewFields} viewData={objView} verifyParam={viewParams} />

}
export default PepScanView;