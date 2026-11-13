import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import view from '../../assests/view.png'
import { useSelector } from 'react-redux';
import MerchantTrustAccountChangeLogView from './merchantTrustAccountChangeLogView';

const DataGrid = (props) => {
    const { isLoading, fetchList } = props
    const { getmerchanttahistory, getmerchanttahistoryCount } = useSelector(state => state.merchantWallet)
    const [dataList, setDataList] = useState([])


    useEffect(() => {
        let arr = []
        console.log(getmerchanttahistory)
        getmerchanttahistory.forEach((ele) => {
            const obj = { ...ele }
            arr.push(obj)
        })
        setDataList(arr)

    }, [getmerchanttahistory])

    const tableHeader = [
        'Merchant ID',
        'Legal Name',
        'DBA',
        'Mobile No',
        'National ID',
        'Activity Date',
        'User',
    ]
    const verifyParam = [
        'merchantid',
        'legalname',
        'dba',
        'mobileno',
        'nationalid',
        'activitydate',
        'username',
    ]

    return <>

        <TabelContainer
            tableHeader={tableHeader}
            action={TableAction}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={getmerchanttahistoryCount}
            fetchList={fetchList}
        />
    </>
}
export default DataGrid;

const TableAction = (data) => {
    const item = data.id
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>

            <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <MerchantTrustAccountChangeLogView data={item} setOpen={setOpenView} type={'View'} />
            </ModalButton>

        </Box>
    )
}