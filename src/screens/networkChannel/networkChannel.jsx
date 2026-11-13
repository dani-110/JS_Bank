import React from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Divider } from "@mui/material";
const NetworkChannel = () => {

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 8px', margin: '0px 0px 10px' }}>
                <Expandable title={"Network Channel:"}>
                    <SearchPanel />
                </Expandable>
            </Card>
            <DataGrid />
        </Card>
    );
};

export default NetworkChannel;
