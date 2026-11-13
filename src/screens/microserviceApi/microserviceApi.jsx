import React from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Divider } from "@mui/material";
const MicroserviceAPI = () => {

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Expandable title={"Microservice API:"}>
                <SearchPanel />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} />
            <DataGrid />
        </Card>
    );
};

export default MicroserviceAPI;
