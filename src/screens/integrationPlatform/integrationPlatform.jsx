import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { Box, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getchannellist, getswitchchannellist } from "../../store/actions/channelConfig";
import channel from '../../assests/channel.png'
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { channelfilter } from "../../store/actions/filter";
import SkeletonLoader from "../../components/skeletonLoader/skeletonLoader";
import { isEmptyObject } from "../../utils/Utils";

const IntegrationPlatform = () => {
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
                dispatch(channelfilter({}))
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
        dispatch(getswitchchannellist(isData ? data : searchData)).then((res) => {
            setIsLoading(false)
        });
    };

    useEffect(() => {
        let obj = {
            "channelid": "",
            "ipaddress": "",
            "port": "",
            "recordcount": 10,
            "pagenumber": 1,
        }
        fetchList(obj);
    }, [])
    useEffect(() => {
        if (!isEmptyObject(searchData)) {
            const interval = setInterval(() => {
                fetchList(searchData);
            }, 60000); // Increased interval time to avoid excessive calls

            return () => clearInterval(interval); // Cleanup function to stop the interval
        }
    }, [searchData]);

    return (
        <>
            {isLoader ?
                <SkeletonLoader />
                : <Box sx={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Card style={{ margin: '0px 0px 10px', padding: '10px' }}>
                        <Typography variant="h4" component="span" className="collapseableContainer">
                            Channel – Switch
                        </Typography>
                    </Card>
                    <Card style={{ margin: '0px 0px 10px' }}>
                        <Expandable title={"Search & filters"}>
                            <SearchPanel fetchList={fetchList} />
                        </Expandable>
                    </Card>
                    <DataGrid fetchList={fetchList} isLoading={isLoading} tableHeading={'Integration channels'} />
                </Box>
            }
        </>
    );
};

export default IntegrationPlatform;
