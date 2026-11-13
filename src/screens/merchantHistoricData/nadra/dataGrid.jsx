import React, { useEffect, useState } from 'react';
import TabelContainer from '../../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import ModalButton from '../../../components/modalButton/modalButton';
import view from '../../../assests/view.png'
import NadraView from './nadraView';

const DataGrid = (props) => {
    const { isLoading, fetchList, dataSet } = props
    const { list, total } = dataSet

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        console.log(list)
        let arr = []
        list?.forEach((ele) => {
            const obj = { ...ele }
            obj['isopenValue'] = obj.isopen ? 'True' : 'False'
            obj['ishighlightValue'] = obj.ishighlight ? 'True' : 'False'
            arr.push(obj)
        })
        setDataList(arr)
    }, [list])

    const tableHeader = [
        'MID',
        'Log Date',
        'TID',
        'Is Open',
        'IS Highlight',
        'Full Name',
        'DOB',
        'POB',
        'Gender',
        'National Id'
    ]
    const verifyParam = [
        'mid',
        'logdate',
        'tid',
        'isopenValue',
        'ishighlightValue',
        'fullname',
        'dob',
        'pob',
        'gender',
        'nationalid'
    ]

    // return <TabelContainer
    //     tableHeader={tableHeader}
    //     action={TableAction}
    //     data={dataList}
    //     verifyParam={verifyParam}
    //     isLoading={isLoading}
    //     count={total}
    //     fetchList={fetchList}
    // />
    return <NadraView data={list[0]} />
}
export default DataGrid;


const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>
            <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <NadraView data={item} />
            </ModalButton>
        </Box>
    )
}