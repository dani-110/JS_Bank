import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../../components/card/Card";
import Expandable from "../../../components/expandable/expandable";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { getconsumernadrahistoricdata } from "../../../store/actions/digitalIdentity";
import { setDataObject } from "../../../utils/Utils";
import { useForm } from "react-hook-form";
import { BreadCrumSelectorContext } from "../../../store/context/breadCrumSelector";

const Nadra = (props) => {
    const { item } = props
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = React.useState({});
    const [dataSet, setDataSet] = React.useState({ list: [], total: 0 });
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const defaultValues = useForm({
        defaultValues: {
            cid: "",
            tid: "",
            nationalid: "",
            gender: "",
            expiryfrom: "",
            expiryto: "",
            nationalidissuedatefrom: "",
            nationalidissuedateto: "",
            activitydatefrom: "",
            activitydateto: "",
        }
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        resetField,
        getValues,
        formState: { errors },
    } = defaultValues;


    useEffect(() => {
        submit()
    }, [])

    const submit = () => {
        let obj = setDataObject(getValues())
        obj['cid'] = item.cid
        obj['nadratid'] = item?.nadratid
        console.log(obj)
        fetchList(obj)
    }

    const fetchList = (data, rowsPerPage, page) => {
        if (Object.keys(data).length > 0) {
            data["recordcount"] = 10
            data["pagenumber"] = 1
            data["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Search'
            setSearchData(data)
        }
        setIsLoading(true)
        const isData = Object.keys(data).length > 0
        if (rowsPerPage) {
            searchData["recordcount"] = rowsPerPage
            searchData["pagenumber"] = page + 1
        }
        dispatch(getconsumernadrahistoricdata(isData ? data : searchData)).then((res) => {
            setDataSet(res.payload)
            setIsLoading(false)
        });
    };
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* <Expandable title={"Nadra:"} isNotOpen>
                <SearchPanel fetchList={fetchList}
                    data={item}
                    getValues={getValues}
                    control={control}
                    handleSubmit={handleSubmit}
                    reset={reset} />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} /> */}
            <DataGrid fetchList={fetchList} isLoading={isLoading} dataSet={dataSet} />
        </Card>
    );
};

export default Nadra;
