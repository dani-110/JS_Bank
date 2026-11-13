import React from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Divider } from "@mui/material";
const Key = () => {

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"Key:"}>
                <SearchPanel />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <DataGrid />
        </Card>
    );
};

export default Key;
