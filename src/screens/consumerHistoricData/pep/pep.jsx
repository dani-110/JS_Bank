import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../../components/card/Card";
import Expandable from "../../../components/expandable/expandable";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { getconsumerpephistoricdata, getpephistoricdata, getpeprelscan } from "../../../store/actions/digitalIdentity";
import { setDataObject } from "../../../utils/Utils";
import { useForm } from "react-hook-form";
import { BreadCrumSelectorContext } from "../../../store/context/breadCrumSelector";

const Pep = (props) => {
    const { item, type } = props
    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = React.useState({});
    const [dataSet, setDataSet] = React.useState({ list: [], total: 0 });

    const defaultValues = useForm({
        defaultValues: {
            cid: "",
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
        let obj = setDataObject(getValues())
        obj['cid'] = item.cid
        obj['peptid'] = item?.peptid
        console.log(obj)
        fetchList(obj)
    }


    const fetchList = (data, rowsPerPage, page) => {
        if (Object.keys(data).length > 0) {
            data["recordcount"] = 0
            data["pagenumber"] = 0
            data["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Search'
            setSearchData(data)
        }
        setIsLoading(true)
        const isData = Object.keys(data).length > 0
        if (rowsPerPage) {
            searchData["recordcount"] = 0
            searchData["pagenumber"] = 0
        }
        if (type == 'RCA') {
            let obj = {
                "mid": "",
                "cid": item?.cid,
                "merchantlegalname": "",
                "dba": "",
                "individualname": "",
                "tid": item?.peprcatid,
                "recordcount": 0,
                "pagenumber": 0
            }
            console.log(item)
            dispatch(getpeprelscan(obj)).then((res) => {
                console.log(res.payload.response.merchantPEPRCACustomList)
                setDataSet({ list: res.payload.response.merchantPEPRCACustomList, total: res.payload.response.totalcount })
                setIsLoading(false)
            });
        } else {
            dispatch(getconsumerpephistoricdata(isData ? data : searchData)).then((res) => {
                setDataSet(res.payload)
                setIsLoading(false)
            });
        }
    };
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* <Expandable title={"Pep:"} isNotOpen>
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

export default Pep;
