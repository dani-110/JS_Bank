import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import view from '../../assests/view.png'
import { useSelector } from 'react-redux';
import MerchantTrustAccountTAView from './merchantTrustAccountTAView';

const DataGrid = (props) => {
    const { isLoading, fetchList } = props
    const { merchanttarequesthistory, merchanttarequesthistoryCount } = useSelector(state => state.merchantWallet)

    const [dataList, setDataList] = useState([])
    const processingStatus = [
        { label: "Processed", value: 0 },
        { label: "Pending", value: 1 },
        { label: "Under Review", value: 2 }
    ]


    useEffect(() => {
        let arr = []
        merchanttarequesthistory.forEach((ele) => {
            const obj = { ...ele }
            arr.push(obj)
        })
        setDataList(arr)

    }, [merchanttarequesthistory])

    const tableHeader = [
        'National ID',
        'Mobile No',
        'Log Date Time',
        'User',
        'Comment',
        'Old Status',
        'New Status',
        'Processing Status',
    ]

    const verifyParam = [
        'nationalid',
        'mobileno',
        'logdatetime',
        'username',
        'usercomments',
        'oldrequeststatus',
        'newrequeststatus',
        'processingstatus',
    ]

    return <>

        <TabelContainer
            tableHeader={tableHeader}
            action={TableAction}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={merchanttarequesthistoryCount}
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
                <MerchantTrustAccountTAView data={item} setOpen={setOpenView} type={'View'} />
            </ModalButton>

        </Box>
    )
}