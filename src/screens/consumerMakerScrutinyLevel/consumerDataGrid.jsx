import React, { useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import caseManagement from '../../assests/case_management.png'


const ConsumersDataGrid = (props) => {

    const { isLoading } = props
    const { scrutinyMakerList, totalscrutinyMakerList } = useSelector(state => state.digitalIdentity)

    const [dataList, setDataList] = useState([]);

    const bioVerified = [{ label: "True", value: '1' }, { label: "False", value: '0' }]

    const filterValue = (list, id) => {
        return list?.find(val => val?.value == id)?.label || ""
    }

    useEffect(() => {
        let arr = []
        scrutinyMakerList.forEach((ele) => {
            const obj = { ...ele }
            obj['isBioVerifiedStatus'] = filterValue(bioVerified, ele.isbioverified);
            arr.push(obj)
        })
        setDataList(arr)
    }, [scrutinyMakerList])

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
        count={totalscrutinyMakerList}
    />
}
export default ConsumersDataGrid;


const TableAction = (data) => {
    const navigate = useNavigate()
    const item = data.id
    return (
        <Box>
            <Tooltip title={'Edit'}>
                <IconButton onClick={() => navigate(`scrutinyLevelUpdateForm`, { state: item })} sx={{ width: '40px', margin: '0px auto' }}>
                    <img src={caseManagement} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
        </Box>
    )
}