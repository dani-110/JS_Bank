import  React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';

const SanctionScanView = (props) => {
    const { data } = props
    console.log(data)
    const [objView, setObjView] = useState({})
    const { cityFilter } = useSelector(state => state.filter)

    useEffect(() => {
        let obj = { ...data }
        obj['cityname'] = filterName(cityFilter, obj.city)
        setObjView(obj)
    }, [])
    const viewFields = [
        'Legal Name',
        'DBA',
        'CNIC',
        'FullName (As per CNIC)',
        "Father's / Husband name",
        'Present Address (As per CNIC)',
        'Business Address',
        'Date Of Birth',
        'Gender',
        'Email Address',
        'Mobile no',
        'Place of Birth',
        "Mother's Name",
        'City'
    ]
    const viewParams = [
        'legalname',
        'dba',
        'nationalid',
        'legalname',
        "Father's / Husband name",
        'address',
        'Business Address',
        'dateofbirth',
        'Gender',
        'emailid',
        'mobileno',
        'Place of Birth',
        "Mother's Name",
        'cityname'
    ]

    return <View viewFields={viewFields} viewData={objView} verifyParam={viewParams} />

}
export default SanctionScanView;