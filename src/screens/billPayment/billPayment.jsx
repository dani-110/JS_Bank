import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Box, Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getbillpaymentlist, getsaftransactions } from "../../store/actions/monitoring";
import BillPaymentIcon from '../../assests/BillPayment.png'
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { channelfilter, getsafstatus, getubpsrespcode, requestfilter, respcodefilter } from "../../store/actions/filter";
import SkeletonLoader from "../../components/skeletonLoader/skeletonLoader";

const BillPayment = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = React.useState({});
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const [isLoader, setIsLoader] = useState(false);
    useEffect(() => {
        fetchFilterData()
    }, [])

    const fetchFilterData = async () => {
        setIsLoader(true)
        try {
            await Promise.all([

                dispatch(getubpsrespcode({}))

            ]).then(res => {
                setIsLoader(false)
            });
        } catch (error) {
            console.error("Error loading filters:", error);
        }
    };

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
        dispatch(getbillpaymentlist(isData ? data : searchData)).then((res) => {
            setIsLoading(false)
        });
    };

    useEffect(() => {
        let obj = {
            "transactiondatefrom": "",
            "transactiondateto": "",
            "stan": "",
            "authid": "",
            "responsecode": "",
            "responsestatus": "",
            "recordcount": 10,
            "pagenumber": 1,
        }
        fetchList(obj);
    }, [])

    return (
        <>
            {isLoader ?
                <SkeletonLoader />
                : <Box sx={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Card style={{ margin: '0px 0px 10px', padding: '10px' }}>
                        <Typography variant="h4" component="span" className="collapseableContainer">
                            1Link – Bill Payment
                        </Typography>
                    </Card>
                    <Card style={{ margin: '0px 0px 10px' }}>
                        <Expandable title={"Search & filters"}>
                            <SearchPanel fetchList={fetchList} />
                        </Expandable>
                    </Card>
                    <DataGrid fetchList={fetchList} isLoading={isLoading} tableHeading={'Bill Payment'} />
                </Box>
            }
        </>
    );
};

export default BillPayment;
