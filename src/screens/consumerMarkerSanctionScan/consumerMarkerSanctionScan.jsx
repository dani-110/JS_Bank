import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import './consumerMarkerSanctionScan.scss'
import StifleContainer from './stifleContainer';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import MarkerLevelSanctionHeader from './sacntionScanHeader';
import MarkerLevelSanctionView from './sacntionScanView';
import { getmerchantlist } from '../../store/actions/merchants';
import { useDispatch } from 'react-redux';
import Expandable from '../../components/expandable/expandable';
import SearchPanel from './searchPanel';
import SanctionDataGrid from './sacntionScanDataGrid';

const ConsumerMarkerSanctionScan = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const fetchList = (data) => {
        setIsLoading(true)
        dispatch(getmerchantlist(data)).then((res) => {
            setIsLoading(false)
        });
    };

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"Merchants:"}>
                <SearchPanel fetchList={fetchList} />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <SanctionDataGrid isLoading={isLoading} />
        </Card>
    );
}
export default ConsumerMarkerSanctionScan;
