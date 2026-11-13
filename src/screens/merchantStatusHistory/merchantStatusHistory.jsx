import React, { useEffect, useState } from "react";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import { useDispatch } from "react-redux";
import { getmerchanttransactions, merchantstatushistory } from "../../store/actions/consumer";

const MerchantStatusHistory = (props) => {
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
            "mid": data.mid
        }
        dispatch(merchantstatushistory(obj)).then((res) => {
            setList(res.payload)
            setIsLoading(false)
        });
    }
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <DataGrid list={list} isLoading={isLoading} />
        </Card>
    );
};

export default MerchantStatusHistory;
