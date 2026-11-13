import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { useDispatch } from "react-redux";
import { getTaxList } from "../../store/actions/tax";
import requestclosure from '../../assests/requestclosure.png'
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { transactionfilter, uiuserfilter } from "../../store/actions/filter";
import SkeletonLoader from "../../components/skeletonLoader/skeletonLoader";
import { getconsumertarequesthistorylist, getconsumertarequestlist, getmerchanttarequesthistorylist } from "../../store/actions/merchantWallets";

const MerchantTrustAccountTA = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = React.useState({});
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);

    const [isLoader, setIsLoader] = useState(false);
    useEffect(() => {
        fetchFilterData()
    }, [])

    const fetchFilterData = async () => {
        setIsLoader(true)
        try {
            await Promise.all([
                dispatch(uiuserfilter({})),


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
        dispatch(getmerchanttarequesthistorylist(isData ? data : searchData)).then((res) => {
            setIsLoading(false)
        });
    };

    return (
        <>
            {isLoader ?
                <SkeletonLoader />
                : <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 8px', margin: '0px 0px 10px' }}>
                        <Expandable icon={requestclosure} title={"TA Requests Log:"}>
                            <SearchPanel fetchList={fetchList} />
                        </Expandable>
                    </Card>
                    <DataGrid fetchList={fetchList} isLoading={isLoading} />
                </Card>
            }
        </>
    );
};

export default MerchantTrustAccountTA;
