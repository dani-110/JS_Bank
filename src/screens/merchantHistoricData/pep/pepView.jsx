import React, { useEffect, useState } from 'react';
import View from '../../../components/view';

const PepView = (props) => {
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
        'Title',
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
        'title'
    ]
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
}
export default PepView;