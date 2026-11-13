import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import TransactionLogView from './transactionLogView';
import view from '../../assests/view.png'
import PermissionComp from '../../components/permissionComp/permissionComp';
import { useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import ResponseCode from '../../components/responseCode/responseCode';

const DataGrid = (props) => {

    const { isLoading, fetchList } = props
    const { appTransaction, appTotalcount } = useSelector(state => state.monitoring)
    const { respcodeFilter, requestFilter, channelFilter } = useSelector(state => state.filter)
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        let arr = []
        appTransaction.forEach((ele) => {
            const obj = { ...ele }
            obj['reqcodeValue'] = filterName(requestFilter, ele.reqcode);
            obj['respcodeValue'] = filterName(respcodeFilter, ele.respcode);
            arr.push(obj)
        })
        setDataList(arr)
    }, [appTransaction])

    // const tableHeader = [
    //     'Consumer ID',
    //     'Merchant ID',
    //     'Terminal ID',
    //     'Transaction Amount',
    //     'Transaction Ref.',
    //     'RRN',
    //     'STAN',
    //     'Request Datetime',
    //     'Transaction',
    // ]
    // const verifyParam = [
    //     'consumerid',
    //     'merchantid',
    //     'terminalid',
    //     'transactionamount',
    //     'txnrefnum',
    //     'rrn',
    //     'stan',
    //     'requestdatetime',
    //     'reqcodeValue',
    // ]

    const tableHeader = [
        'Transaction',
        'Amount',
        'Date Time',
        'Response Code',
        'Transaction Ref.',
        'STAN',
        'RRN',
        'Consumer ID',
        'Merchant ID',
    ]
    const verifyParam = [
        'reqcodeValue',
        'transactionamount',
        'requestdatetime',
        'respcodeValue',
        'txnrefnum',
        'stan',
        'rrn',
        'consumerid',
        'merchantid',
    ]


    return <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={appTotalcount}
        fetchList={fetchList}
    />
}
export default DataGrid;

const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>
            <PermissionComp list={['Transaction Monitoring', 'App Transactions', 'View']}>
                <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                    <TransactionLogView data={item} />
                </ModalButton>
            </PermissionComp>
        </Box>
    )
}