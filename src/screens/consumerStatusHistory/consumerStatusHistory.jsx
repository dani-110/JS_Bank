import React, { useEffect, useState } from "react";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { consumerstatushistory, getconsumerdevice } from "../../store/actions/consumer";
import { filterName } from "../../utils/Utils";

const ConsumerStatusHistory = (props) => {
    const { data } = props

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState([])


    useEffect(() => {
        fetchList()
    }, [])

    const fetchList = () => {
        setIsLoading(true)
        const obj = {
            "cid": data.cid
        }
        dispatch(consumerstatushistory(obj)).then((res) => {
            setList(res.payload)
            setIsLoading(false)
        });
    }
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <DataGrid fetchList={fetchList} isLoading={isLoading} list={list} />
        </Card>
    );
};

export default ConsumerStatusHistory;
