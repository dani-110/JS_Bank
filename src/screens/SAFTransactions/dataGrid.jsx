import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import SAFTransactionsView from './SAFTransactionsView';
import view from '../../assests/view.png'
import deleteIcon from '../../assests/delete.png'
import transactionalData from '../../assests/transactional-data.png'
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import { removesaftransaction, safretransmit } from '../../store/actions/monitoring';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import ViewModal from '../../components/viewModal/viewModal';

const DataGrid = (props) => {
    const { isLoading, fetchList, tableHeading } = props
    const { safTransactionsList, safTransactionsTotalcount } = useSelector(state => state.monitoring)
    const { respcodeFilter, requestFilter } = useSelector(state => state.filter)
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        console.log(safTransactionsList)
        let arr = []
        safTransactionsList.forEach((ele) => {
            const obj = { ...ele }
            console.log(ele.safstatus)
            // obj['reqcodeValue'] = filterName(requestFilter, ele.reqscode);
            obj['respcodeValue'] = filterName(respcodeFilter, ele.responsecode);
            obj['safstatusTransaction'] = ele.safstatus
            obj['reqcodeValue'] = `${filterName(requestFilter, ele.reqscode)} - ${ele.saftype}`
            arr.push(obj)
        })
        setDataList(arr)
    }, [safTransactionsList])

    const tableHeader = [
        'Transaction',
        'Amount',
        'Date Time',
        'Response Code',
        'STAN',
        'RRN',
        'SAF Status'
    ]
    const verifyParam = [
        'reqcodeValue',
        'amount',
        'transmitdatetime',
        'respcodeValue',
        'stan',
        'rrn',
        'safstatusTransaction'
    ]


    return <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={safTransactionsTotalcount}
        fetchList={fetchList}
        tableHeading={tableHeading}
    />
}
export default DataGrid;

const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);

    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const deleteRecord = (data, type) => {
        const obj = {
            "transactionid": data.transactionid,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + `|${type}`
        }
        dispatch(removesaftransaction(obj)).then((res) => {
            console.log(res)
        })

    }

    const reTransmitSAF = (data, type) => {
        const obj = {
            "transactionid": data.transactionid,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + `|${type}`
        }
        console.log(obj)
        dispatch(safretransmit(obj)).then((res) => {
            console.log(res)
        });
    }
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <SAFTransactionsView data={item} />
            </ModalButton> */}
            <ViewModal open={openView} setOpen={setOpenView} tooltip={'TRANSACTION DETAILS'} type={'View'}>
                <SAFTransactionsView data={item} />
            </ViewModal>
            <Tooltip title={'RE-TRANSMIT SAF'}>
                <IconButton onClick={() => { reTransmitSAF(item, 'RE-TRANSMIT SAF') }} sx={{ width: '40px' }}>
                    <img src={transactionalData} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
            <Tooltip title={'Delete'}>
                <IconButton onClick={() => { deleteRecord(item, 'Delete') }} sx={{ width: '40px' }}>
                    <img src={deleteIcon} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
        </Box>
    )
}