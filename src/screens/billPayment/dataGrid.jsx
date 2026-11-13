import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';

const DataGrid = (props) => {
    const { isLoading, fetchList,tableHeading } = props
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
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={getbillpaymentlistTotalcount}
        fetchList={fetchList}
        tableHeading={tableHeading}
    />
}
export default DataGrid;
