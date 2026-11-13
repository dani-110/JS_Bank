import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import OpenDCLogUpdateForm from './openDCLogUpdateForm';
import OpenDCLogView from './openDCLogView';
import view from '../../assests/view.png'
import edit from '../../assests/edit.png'
import create from '../../assests/create.png'
import ButtonContainer from '../../components/buttonContainer';
import { useSelector } from 'react-redux';
import PermissionComp from '../../components/permissionComp/permissionComp';
import { filterName } from '../../utils/Utils';

const DataGrid = (props) => {
    const { isLoading, fetchList } = props
    const { opendcrequesthistorylist, opendcrequesthistorylistTotalcount } = useSelector(state => state.generalLedger)
    const { trannatureFilter } = useSelector(state => state.filter)

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        console.log(opendcrequesthistorylist)
        let arr = []
        opendcrequesthistorylist.forEach((ele) => {
            const obj = { ...ele }
            obj['natureValue'] = filterName(trannatureFilter, ele.nature);
            obj['openDCProcessingstatus'] = ele.processingstatus;
            arr.push(obj)
        })
        setDataList(arr)

    }, [opendcrequesthistorylist])

    const tableHeader = [
        "Nature",
        "Debit Account",
        "Credit Account",
        'Tran Ref Num.',
        "Old Request Status",
        "New Request Status",
        "Processing Status",
    ]

    const verifyParam = [
        'natureValue',
        'debitaccount',
        'creditaccount',
        'txnrefnum',
        'oldrequeststatus',
        'newrequeststatus',
        'openDCProcessingstatus',
    ]

    return <>
        <TabelContainer
            tableHeader={tableHeader}
            action={TableAction}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={opendcrequesthistorylistTotalcount}
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
                <OpenDCLogView data={item} />
            </ModalButton>
        </Box>
    )
}