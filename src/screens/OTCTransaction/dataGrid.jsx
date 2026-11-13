import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import view from '../../assests/view.png'
import { useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import OTCTransactionsView from './OTCTransactionsView';
import ResponseCode from '../../components/responseCode/responseCode';

const DataGrid = (props) => {
    const { isLoading, fetchList } = props
    const { otcList, otcTotalcount } = useSelector(state => state.monitoring)
    const { respcodeFilter, requestFilter } = useSelector(state => state.filter)
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        let arr = []
        otcList.forEach((ele) => {
            const obj = { ...ele }
            obj['reqcodeValue'] = filterName(requestFilter, ele.reqcode);
            obj['respcodeValue'] = filterName(respcodeFilter, ele.respcode);
            arr.push(obj)
        })
        setDataList(arr)
    }, [otcList])


    // const tableHeader = [
    //     'Consumer ID',
    //     'Merchant ID',
    //     'Terminal ID',
    //     'Source Account',
    //     'Source Title',
    //     'Dest. Account',
    //     'Dest. Title',
    //     'Purpose Of Transaction',
    //     'Transaction Amount',
    //     'Transaction Ref.',
    //     'Fee',
    //     'RRN',
    //     'STAN',
    //     'Request Datetime',
    //     'Transaction',
    // ]
    // const verifyParam = [
    //     'consumerid',
    //     'merchantid',
    //     'terminalid',
    //     'sourceaccount',
    //     'sourceaccounttitle',
    //     'destaccount',
    //     'destaccounttitle',
    //     'purposeoftxn',
    //     'transactionamount',
    //     'txnrefnum',
    //     'fee',
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
        'Fee',
        'Consumer ID',
        'Merchant ID',
        'Source Account',
        'Source Title',
        'Dest.Account',
        'Dest.Title',
        'Purpose Of Transaction',
    ]
    const verifyParam = [
        'reqcodeValue',
        'transactionamount',
        'requestdatetime',
        'respcodeValue',
        'txnrefnum',
        'stan',
        'rrn',
        'fee',
        'consumerid',
        'merchantid',
        'sourceaccount',
        'sourceaccounttitle',
        'destaccount',
        'destaccounttitle',
        'purposeoftxn',
    ]
    return <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={otcTotalcount}
        fetchList={fetchList}
    />
}
export default DataGrid;

const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);

    return (
        <Box>
            <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <OTCTransactionsView data={item} />
            </ModalButton>
        </Box>
    )
}