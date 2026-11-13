import React, { useContext, useEffect, useState } from "react";
import SearchPanel from "./searchPanel";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import Expandable from "../../components/expandable/expandable";
import { useDispatch } from "react-redux";
import { rolelist } from "../../store/actions/roles";
import role from '../../assests/role.png'
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { Box, Typography } from "@mui/material";

const Roles = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = useState({});
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);

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
        dispatch(rolelist(isData ? data : searchData)).then((res) => {
            setIsLoading(false)
        });
    };

    useEffect(() => {
        let obj = {
            "rolename": "",
            "creationdatefrom": "",
            "creationdateto": "",
            "recordcount": 10,
            "pagenumber": 1,
            "audittrace": "User Management|Roles|Search",
        }
        fetchList(obj);
    }, [])


    return (
        <Box sx={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Card style={{ margin: '0px 0px 10px', padding: '10px' }}>
                <Typography variant="h4" component="span" className="collapseableContainer">
                    Roles
                </Typography>
            </Card>
            <Card style={{ margin: '0px 0px 10px' }}>
                <Expandable title={"Search & filters"}>
                    <SearchPanel fetchList={fetchList} />
                </Expandable>
            </Card>
            <DataGrid fetchList={fetchList} isLoading={isLoading} tableHeading={'Roles & access'} />
        </Box>
    );
};

export default Roles;
