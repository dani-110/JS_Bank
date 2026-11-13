import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { useDispatch } from 'react-redux';
import Expandable from '../../components/expandable/expandable';
import SearchPanel from './searchPanel';
import ConsumersDataGrid from './consumerDataGrid';
import { Divider } from '@mui/material';
import { consumerList } from '../../store/actions/consumer';
import { getconsumerlist, scrutinyMaker } from '../../store/actions/digitalIdentity';

const ConsumerMakerScrutinyLevel = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const fetchList = (data) => {
        setIsLoading(true)
        dispatch(scrutinyMaker(data)).then((res) => {
            console.log(res.payload)
            setIsLoading(false)
        });
    };
    return (

        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"Scrutiny Checker:"}>
                <SearchPanel fetchList={fetchList} />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <ConsumersDataGrid isLoading={isLoading} />
        </Card>

    );
}
export default ConsumerMakerScrutinyLevel;
