import React, { useEffect, useState } from 'react';
import View from '../../../components/view';

const NadraView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})


    useEffect(() => {
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
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
}
export default NadraView;