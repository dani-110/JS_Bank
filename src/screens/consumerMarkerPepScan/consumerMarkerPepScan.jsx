import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { Divider } from '@mui/material';
import './consumerMarkerPepScan.scss'
import { getmerchantlist } from '../../store/actions/merchants';
import { useDispatch } from 'react-redux';
import Expandable from '../../components/expandable/expandable';
import SearchPanel from './searchPanel';
import ConsumerDataGrid from './pepScanDataGrid';

const ConsumerMarkerPepScan = () => {
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
            <ConsumerDataGrid isLoading={isLoading} />
        </Card>
    );
}
export default ConsumerMarkerPepScan;
