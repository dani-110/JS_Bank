import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { useDispatch } from "react-redux";
import { getTaxList } from "../../store/actions/tax";
import tax from '../../assests/tax.png'
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { getwalletlevels, mccfilter, statefilter, transactionfilter } from "../../store/actions/filter";
import SkeletonLoader from "../../components/skeletonLoader/skeletonLoader";

const MerchantLienChecker = () => {

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

                dispatch(getwalletlevels({}))


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
        dispatch(getTaxList(isData ? data : searchData)).then((res) => {
            setIsLoading(false)
        });
    };

    return (
        <>
            {isLoader ?
                <SkeletonLoader />
                : <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 8px', margin: '0px 0px 10px' }}>
                        <Expandable icon={tax} title={"Lien Checker:"}>
                            <SearchPanel fetchList={fetchList} />
                        </Expandable>
                    </Card>
                    <DataGrid fetchList={fetchList} isLoading={isLoading} />
                </Card>
            }
        </>
    );
};

export default MerchantLienChecker;
