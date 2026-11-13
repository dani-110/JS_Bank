import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { useDispatch } from 'react-redux';
import Expandable from '../../components/expandable/expandable';
import SearchPanel from './searchPanel';
import MerchantsECIBDataGrid from './merchantECIBDataGrid';
import { Divider } from '@mui/material';
import { getECIBbusinesslist } from '../../store/actions/digitalIdentity';

const ECIB = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = React.useState({});

    const fetchList = (data, rowsPerPage, page) => {
        if (Object.keys(data).length > 0) {
            data["recordcount"] = 10
            data["pagenumber"] = 1
            setSearchData(data)
        }
        setIsLoading(true)
        const isData = Object.keys(data).length > 0
        if (rowsPerPage) {
            searchData["recordcount"] = rowsPerPage
            searchData["pagenumber"] = page + 1
        }
        dispatch(getECIBbusinesslist(isData ? data : searchData)).then((res) => {
            console.log(res)
            setIsLoading(false)
        });
    };

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"Inspection:"}>
                <SearchPanel fetchList={fetchList} />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <MerchantsECIBDataGrid fetchList={fetchList} isLoading={isLoading} />
        </Card>
    );
}
export default ECIB;
