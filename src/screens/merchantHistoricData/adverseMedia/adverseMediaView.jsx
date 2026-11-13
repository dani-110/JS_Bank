import React, { useEffect, useState } from 'react';
import View from '../../../components/view';

const AdverseMediaView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    useEffect(() => {
        let obj = { ...data }
        obj['isopenValue'] = obj.isopen ? 'True' : 'False'
        obj['ishighlightValue'] = obj.ishighlight ? 'True' : 'False'
        setObjView(obj)
    }, [])

    const viewFields = [
        'MID',
        'Log Date',
        'TID',
        'Is Open',
        'IS Highlight',
        'Entity',
        'Full Name',
        'National Id',
    ]
    const verifyParam = [
        'mid',
        'logdate',
        'tid',
        'isopenValue',
        'ishighlightValue',
        'entity',
        'fullname',
        'nationalid',
    ]
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
}
export default AdverseMediaView;