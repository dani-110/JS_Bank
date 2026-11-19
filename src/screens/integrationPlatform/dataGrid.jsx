import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import IntegrationPlatformView from './integrationPlatformView';
import UpdateForm from './updateForm';

import view from '../../assests/view.png'
import signin from '../../assests/signin.png'
import signout from '../../assests/signout.png'
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import { sendchannelcommand, sendnetworkmessage } from '../../store/actions/channelConfig';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import Card from '../../components/card/Card';
import { IoEyeOutline } from 'react-icons/io5';
import ViewModal from '../../components/viewModal/viewModal';

const DataGrid = (props) => {
    const { isLoading, fetchList, tableHeading } = props
    const { switchChannel, switchChannelTotalcount } = useSelector(state => state.channelConfig)
    const { channelFilter } = useSelector(state => state.filter)

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        let arr = []
        switchChannel.forEach((ele) => {
            const obj = { ...ele }
            obj['channelidValue'] = filterName(channelFilter, ele.channelid);
            arr.push(obj)
        })
        setDataList(arr)
    }, [switchChannel])

    const tableHeader = ["Channel Name", 'Port', 'IP', 'Channel Type', 'Processing Status', 'Connection Status']
    const verifyParam = ["channelname", 'port', 'ip', 'channeltype', 'processingstatus', 'connectionstatus']

    return <TabelContainer
        tableHeader={tableHeader}
        action={TableAction}
        data={dataList}
        verifyParam={verifyParam}
        isLoading={isLoading}
        count={switchChannelTotalcount}
        tableDescription="Switch Channel record"
        fetchList={fetchList}
        tableHeading={tableHeading}
    />
}
export default DataGrid;


const TableAction = (data) => {
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const item = data.id
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch()

    const sendSignInOut = (type, title) => {
        const obj = {
            "channelid": item.channelid,
            "commandtype": type,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + `|${title}`
        }
        console.log(obj)
        dispatch(sendnetworkmessage(obj)).then((res) => {
            setIsLoading(false)
        });
    };
    return (
        <Box sx={{ display: 'flex' ,justifyContent: 'center', gap: '4px'}}>
            <Tooltip title={'Send Sign In'}>
                <IconButton onClick={() => { sendSignInOut('1', 'Send Sign In') }} sx={{ width: '40px' }}>
                    <img src={signin} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
            <Tooltip title={'Send Sign Off'}>
                <IconButton onClick={() => { sendSignInOut('2', 'Send Sign Off') }} sx={{ width: '40px'}}>
                    <img src={signout} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
            <ViewModal open={openView} setOpen={setOpenView} tooltip={'CHANNEL DETAILS'} type={'View'}>
                <IntegrationPlatformView data={item} />
            </ViewModal>
        </Box>
    )
}