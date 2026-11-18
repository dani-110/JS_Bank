import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import Card from '../../components/card/Card';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import ButtonContainer from '../../components/buttonContainer';
import { useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import ProcessingStatus from '../../components/processingStatus/processingStatus';

const IntegrationPlatformView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    const { channelFilter } = useSelector(state => state.filter)

    useEffect(() => {
        console.log(data,channelFilter)
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
        // 'Processing Status',
        // 'Connection Status'
    ]
    const verifyParam = [
        'channelidValue',
        'channelname',
        'port',
        'allowedip',
        'ip',
        'channeltype',
        // 'processingstatus',
        // 'connectionstatus'
    ]
    return <>
        <Typography variant='h2' sx={{ margin: '10px', textAlign: 'left', fontWeight:'500' }}>{objView['channelname']}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px', }} color={'#617088'}>Channel – Switch</Typography>
        <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
        <Divider sx={{ margin: '10px', bgcolor: '#617088' }} />
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px' }}>Current state</Typography>

        <Grid container spacing={1} sx={{ padding: '0px 10px' }}>

            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Typography variant="body2" sx={{ textAlign: 'left' }} color={'#617088'}>Processing Status</Typography>
                <ProcessingStatus value={objView['processingstatus']} />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Typography variant="body2" sx={{ textAlign: 'left' }} color={'#617088'}>Connection Status</Typography>
                <ProcessingStatus value={objView['connectionstatus']} />
            </Grid>
        </Grid>
    </>
}
export default IntegrationPlatformView;