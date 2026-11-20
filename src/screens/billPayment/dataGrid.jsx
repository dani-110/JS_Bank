import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import { Box } from '@mui/material';
import ViewModal from '../../components/viewModal/viewModal';
import BillPaymentView from './billPaymentView';

const DataGrid = (props) => {
    const { isLoading, fetchList, tableHeading } = props
    const { getbillpaymentlistlist, getbillpaymentlistTotalcount } = useSelector(state => state.monitoring)
    const { respcodeFilter, requestFilter, ubpsrespcodeFilter } = useSelector(state => state.filter)
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        console.log(getbillpaymentlistlist)
        let arr = []
        getbillpaymentlistlist.forEach((ele) => {
            const obj = { ...ele }
            // obj['reqcodeValue'] = filterName(requestFilter, ele.reqscode);
            obj['respcodeValue'] = filterName(ubpsrespcodeFilter, ele.responsecode);
            obj['safstatusValue'] = ele.safstatus
            obj['reqcodeValue'] = `${filterName(requestFilter, ele.reqscode)} - ${ele.saftype}`
            arr.push(obj)
        })
        setDataList(arr)
    }, [getbillpaymentlistlist])

    const tableHeader = [
        'Service Name',
        'Date Time',
        'Reference No.',
        'Amount',
        'Response Code',
        'Company ID',
        'Consumer No.',
        'STAN',
        'Auth ID',
        'RRN',
    ]
    const verifyParam = [
        'servicename',
        'transdatetime',
        'txnrefnum',
        'amount',
        'respcodeValue',
        'companyid',
        'consumerno',
        'stan',
        'authid',
        'rrn',
    ]


    return <TabelContainer
        tableHeader={tableHeader}
        data={dataList}
        action={TableAction}
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={getbillpaymentlistTotalcount}
        tableDescription="Bill Payment records"
        fetchList={fetchList}
        tableHeading={tableHeading}
    />
}
export default DataGrid;


const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>

            <ViewModal open={openView} setOpen={setOpenView} tooltip={'TRANSACTION DETAILS'} type={'View'}>
                <BillPaymentView data={item} />
            </ViewModal>
        </Box>
    )
}
