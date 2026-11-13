import React, { useState } from "react";
import SearchPanel from "./searchPanel";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { useDispatch } from "react-redux";
import ConsumerDataGrid from './consumerScrutinyDataGrid'
import { consumerList } from "../../store/actions/consumer";
import { Divider } from "@mui/material";
import { getconsumerlist, scrutinyChecker } from "../../store/actions/digitalIdentity";
const ConsumerScrutiny = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const fetchList = (data) => {
        setIsLoading(true)
        dispatch(scrutinyChecker(data)).then((res) => {
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
            <ConsumerDataGrid isLoading={isLoading} />
        </Card>

    );
};

export default ConsumerScrutiny;
