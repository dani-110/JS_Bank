import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { downloadExcel, filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import excelExport from '../../assests/excel_export.png'

const DataGrid = (props) => {
    const { isLoading, list } = props

    const { actstatusFilter } = useSelector(state => state.filter)

    const tableHeader = [
        // 'CID',
        'Username',
        'Activity Date',
        'Old Status',
        'New Status',
        'Comments',
        // 'Relationship',
        // 'Relationship Type'
    ]
    const verifyParam = [
        // 'cid',
        'username',
        'activitydate',
        'oldstatusvalue',
        'newstatusvalue',
        'comments',
        // 'relationship',
        // 'relationshiptypeValue'
    ]

    const [dataList, setDataList] = useState([])
    const relationType = [
        {
            label: "Merchant ID",
            value: '1'
        },
        {
            label: "Consumer ID",
            value: '2'
        },
        {
            label: "Account/ Wallet",
            value: '3'
        },
        {
            label: "Card",
            value: '4'
        }
    ]

    const filterValue = (list, id) => {
        return list?.find(val => val?.value == id)?.label || ""
    }

    useEffect(() => {
        console.log(list)
        let arr = []
        list?.map((ele) => {
            const obj = { ...ele }
            obj['oldstatusvalue'] = filterName(actstatusFilter, ele.oldstatus);
            obj['newstatusvalue'] = filterName(actstatusFilter, ele.newstatus);
            obj['relationshiptypeValue'] = filterValue(relationType, ele.relationshiptype);
            arr.push(obj)
        })
        setDataList(arr)

    }, [list])

    const filteredData = dataList?.map((item) => {
        return verifyParam?.reduce((obj, key, index) => {
          obj[tableHeader[index]] = item[key] ? item[key] : ""
          return obj;
        }, {});
      });

    return <>
        <TabelContainer
            tableHeader={tableHeader}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Tooltip title={'Export'}>
                <IconButton onClick={() => downloadExcel(filteredData)} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={excelExport} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Typography variant='body1' sx={{ marginLeft: '10px' }}>Export</Typography>
                </IconButton>
            </Tooltip>
        </Box>
    </>
}
export default DataGrid;
