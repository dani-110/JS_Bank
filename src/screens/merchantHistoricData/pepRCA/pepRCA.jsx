import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../../components/card/Card";
import Expandable from "../../../components/expandable/expandable";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { getmerchpepdata, getpephistoricdata, getpeprelscanhistoricdata } from "../../../store/actions/digitalIdentity";
import { useForm } from "react-hook-form";
import { setDataObject } from "../../../utils/Utils";
import { BreadCrumSelectorContext } from "../../../store/context/breadCrumSelector";

const PepRCA = (props) => {
    const { obj } = props
    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = React.useState({});
    const [dataSet, setDataSet] = React.useState({ list: [], total: 0 });

    const defaultValues = useForm({
        defaultValues: {
            mid: "",
            tid: "",
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
        dispatch(getpeprelscanhistoricdata(isData ? data : searchData)).then((res) => {
            console.log(res.payload?.response?.merchantPEPCustomList)
            setDataSet({
                list: res.payload?.list,
                total: res.payload?.total,
            })
            setIsLoading(false)
        });
    };
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* <Expandable title={"Pep:"} isNotOpen>
                <SearchPanel fetchList={fetchList}
                    data={item}
                    getValues={getValues}
                    control={control}
                    handleSubmit={handleSubmit}
                    reset={reset}
                />
            </Expandable>
            <Divider sx={{ margin: '10px 0px' }} /> */}
            <DataGrid fetchList={fetchList} isLoading={isLoading} dataSet={dataSet} />
        </Card>
    );
};

export default PepRCA;
