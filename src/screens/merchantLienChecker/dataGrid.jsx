import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import MerchantLienCheckerView from './merchantLienCheckerView';
import view from '../../assests/view.png'
import { useSelector } from 'react-redux';
import PermissionComp from '../../components/permissionComp/permissionComp';
import { filterName } from '../../utils/Utils';

const DataGrid = (props) => {
    const { isLoading, fetchList } = props
    const [openCreate, setOpenCreate] = useState(false);
    const { tax, totalcount } = useSelector(state => state.tax)
    const { mccFilter, transactionFilter } = useSelector(state => state.filter)

    const [dataList, setDataList] = useState([])
    const type = [{ label: "Flat", value: 1 }, { label: "Percentage", value: 2 }, { label: "Slab", value: 3 }]


    useEffect(() => {
        let arr = []
        tax.forEach((ele) => {
            const obj = { ...ele }
            obj['statusValue'] = obj.isactive === '1' ? 'Active' : 'Inactive';
            obj['typename'] = type.find(val => val.value == ele.taxtype)?.label
            obj['mccValue'] = filterName(mccFilter, ele.mccid);
            obj['requestcodeValue'] = filterName(transactionFilter, ele.requestcode);
            arr.push(obj)
        })
        setDataList(arr)

    }, [tax])

    const tableHeader = [
        'Merchant ID',
        'Legal Name',
        'DBA',
        'Mobile No',
        'National ID',
        'Onboarded On',
    ]

    const verifyParam = [
        'Merchant ID',
        'Legal Name',
        'DBA',
        'Mobile No',
        'National ID',
        'Onboarded On',
    ]

    return <>
        <TabelContainer
            tableHeader={tableHeader}
            action={TableAction}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={totalcount}
            fetchList={fetchList}
        />
    </>
}
export default DataGrid;

const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>
            <PermissionComp list={['Accounting', 'Merchant Lien Posting', 'Lien Checker']}>
                <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                    <MerchantLienCheckerView data={item} />
                </ModalButton>
            </PermissionComp>
        </Box>
    )
}