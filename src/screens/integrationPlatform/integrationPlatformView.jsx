import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import Card from '../../components/card/Card';
import { Button, Grid } from '@mui/material';
import ButtonContainer from '../../components/buttonContainer';
import { useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';

const IntegrationPlatformView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    const { channelFilter } = useSelector(state => state.filter)

    useEffect(() => {
        let obj = { ...data }
        obj['channelidValue'] = filterName(channelFilter, data.channelid);
        setObjView(obj)
    }, [])

    const viewFields = [
        'Channel ID',
        'Channel Name',
        'Port',
        'Allowed IP',
        'IP',
        'Channel Type',
        'Processing Status',
        'Connection Status'
    ]
    const verifyParam = [
        'channelidValue',
        'channelname',
        'port',
        'allowedip',
        'ip',
        'channeltype',
        'processingstatus',
        'connectionstatus'
    ]
    return <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
}
export default IntegrationPlatformView;