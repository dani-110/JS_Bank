import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';

import view from '../../assests/view.png'
import edit from '../../assests/edit.png'
import create from '../../assests/create.png'
import ModalButton from '../../components/modalButton/modalButton';
import NetworkChannelUpdateForm from './networkChannelUpdateForm';
import NetworkChannelView from './networkChannelView';
import ButtonContainer from '../../components/buttonContainer';

const DataGrid = () => {

    const [openCreate, setOpenCreate] = React.useState(false);

    const tableHeader = [
        'Channel ID',
        'Channel Name',
        'Port',
        'IP',
        'Channel Type',
        'Channel Code'
    ]
    return <>
        <ButtonContainer isSingle>
            <ModalButton open={openCreate} setOpen={setOpenCreate} tooltip={'Create'} img={create}>
                <NetworkChannelUpdateForm open={openCreate} setOpen={setOpenCreate} />
            </ModalButton>
        </ButtonContainer>
        <TabelContainer tableHeader={tableHeader} action={TableAction} />
    </>
}
export default DataGrid;


const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>
        <ModalButton open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} img={edit}>
            <NetworkChannelUpdateForm  />
        </ModalButton>
        <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
            <NetworkChannelView />
        </ModalButton>
        </Box>
    )
}