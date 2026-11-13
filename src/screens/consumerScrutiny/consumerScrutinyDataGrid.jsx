import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import caseManagement from '../../assests/case_management.png'
import { useNavigate } from 'react-router-dom';


const ConsumerDataGrid = (props) => {

    const { isLoading } = props

    const { scrutinyCheckerList, totalscrutinyCheckerList } = useSelector(state => state.digitalIdentity)

    const [dataList, setDataList] = useState([]);

    const bioVerified = [{ label: "True", value: '1' }, { label: "False", value: '0' }]

    const filterValue = (list, id) => {
        return list?.find(val => val?.value == id)?.label || ""
    }

    useEffect(() => {
        let arr = []
        scrutinyCheckerList.forEach((ele) => {
            const obj = { ...ele }
            obj['isBioVerifiedStatus'] = filterValue(bioVerified, ele.isbioverified);
            arr.push(obj)
        })
        setDataList(arr)
    }, [scrutinyCheckerList])

    const tableHeader = [
        'Consumer ID',
        'First Name',
        'Last Name',
        'Mobile No',
        'National ID',
        'On-Boarded On',
        'Bio Verified'
    ]
    const verifyParam = [
        'consumerid',
        'firstname',
        'lastname',
        'mobileno',
        'nationalid',
        'onboarding',
        'isBioVerifiedStatus',
    ]

    return <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={totalscrutinyCheckerList}
    />
}
export default ConsumerDataGrid;


const TableAction = (data) => {
    const navigate = useNavigate()
    const item = data.id
    return (
        <Box>
            <Tooltip title={'Edit'}>
                <IconButton onClick={() => navigate(`consumerScrutinyLevelUpdateForm`, { state: item })} sx={{ width: '40px', margin: '0px auto' }}>
                    <img src={caseManagement} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
        </Box>
    )
}