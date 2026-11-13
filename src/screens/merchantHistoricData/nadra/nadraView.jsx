import React, { useEffect, useState } from 'react';
import View from '../../../components/view';
import { useSelector } from 'react-redux';
import { filterName } from '../../../utils/Utils';

const NadraView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    const { channelFilter } = useSelector(state => state.filter)

    useEffect(() => {
        console.log(data)
        let obj = { ...data }
        obj['isopenValue'] = obj.isopen ? 'True' : 'False'
        obj['ishighlightValue'] = obj.ishighlight ? 'True' : 'False'
        setObjView(obj)
    }, [data])


    const viewFields = [

        'Full Name',
        'Father Name',
        'Mother Name',
        'Present Address',
        'Permanent Address',
        'DOB',
        'POB',
        'Gender',
        'National Id',
        'National ID Issue Date',
        'National ID Expiry Date',
        'City',
        'State'
    ]
    const verifyParam = [

        "fullname",
        "fathername",
        "mothername",
        "presentaddress",
        "permanentaddress",
        "dob",
        "pob",
        "gender",
        "nationalid",
        "nationalidissuedate",
        "nationalidexpirydate",
        "city",
        "state",
    ]

    // const viewFields = [
    //     'MID',
    //     'Log Date',
    //     'TID',
    //     'Is Open',
    //     'IS Highlight',
    //     'Full Name',
    //     'DOB',
    //     'POB',
    //     'Gender',
    //     'National Id'
    // ]
    // const verifyParam = [
    //     'mid',
    //     'logdate',
    //     'tid',
    //     'isopenValue',
    //     'ishighlightValue',
    //     'fullname',
    //     'dob',
    //     'pob',
    //     'gender',
    //     'nationalid'
    // ]
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
}
export default NadraView;