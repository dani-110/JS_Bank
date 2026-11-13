import React from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Divider } from "@mui/material";
const CustomerProfiling = () => {

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"Customer Profiling:"}>
                <SearchPanel />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <DataGrid />
        </Card>
    );
};

export default CustomerProfiling;
