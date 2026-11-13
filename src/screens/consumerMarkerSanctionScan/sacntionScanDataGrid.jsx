import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import { stagestatus } from '../../utils/lists';
import { useNavigate } from 'react-router-dom';
import caseManagement from '../../assests/case_management.png'


const SanctionScanDataGrid = (props) => {
    const { isLoading } = props
    const { merchants } = useSelector(state => state.merchant)
    const [dataList, setDataList] = useState([]);

    const filterValue = (list, id) => {
        return list?.find(val => val?.value == id)?.label || ""
    }
    useEffect(() => {
        let arr = []
        merchants.forEach((ele) => {
            const obj = { ...ele }
            obj['stagestatus'] = filterValue(stagestatus, ele.stagestatus);
            arr.push(obj)
        })
        setDataList(arr)
    }, [merchants])

    const tableHeader = [
        'Merchant ID',
        'Legal Name',
        'National ID',
        'Tax ID',
        'Contact No',
        'Mobile No',
        'Phone No',
        'Email ',
        'Stage Status'
    ]
    const verifyParam = [
        'merchantid',
        'legalname',
        'nationalid',
        'taxid',
        'contactno',
        'mobileno',
        'phoneno',
        'emailid',
        'stagestatus'
    ]

    console.log(merchants, 'merchants')

    return <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        isLoading={isLoading}
    />
}
export default SanctionScanDataGrid;


const TableAction = (data) => {
    const navigate = useNavigate()
    return (
        <Box>
            <Tooltip title={'Edit'}>
                <IconButton onClick={()=>navigate(`markerLevelSanctionUpdateForm`)} sx={{ width: '40px', margin: '0px auto' }}>
                    <img src={caseManagement} style={{ width: '25px', height:'25px',  objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
        </Box>
    )
}