import React, { useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { raasttransactionlist } from "../../store/actions/monitoring";
const RAAST = () => {
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
        dispatch(raasttransactionlist(isData ? data : searchData)).then((res) => {
            setIsLoading(false)
        });
    };
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"RAAST:"}>
                <SearchPanel fetchList={fetchList} />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <DataGrid fetchList={fetchList} isLoading={isLoading}  />
        </Card>
    );
};

export default RAAST;
