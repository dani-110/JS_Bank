import React from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Divider } from "@mui/material";
const NonFinancial = () => {

    return (
        <Card style={{ flex: 1, display: 'flex', flexDirection: 'Column' }}>
            <Expandable title={"Non-Financial:"}>
                <SearchPanel />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <DataGrid />
        </Card>
    );
};

export default NonFinancial;
