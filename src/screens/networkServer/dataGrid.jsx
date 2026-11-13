import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box} from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import NetworkServerUpdateForm from './networkServerUpdateForm';
import NetworkServerView from './networkServerView';

import view from '../../assests/view.png'
import edit from '../../assests/edit.png'
import create from '../../assests/create.png'
import ButtonContainer from '../../components/buttonContainer';

const DataGrid = () => {
    const [openCreate, setOpenCreate] = React.useState(false);

    const tableHeader = ['Server ID', "Server Name", 'Port', 'IP', 'Server Type', 'Connect Timeout', 'Read Timeout', 'SSL ENABLE']

    return <>
        <ButtonContainer isSingle>
            <ModalButton open={openCreate} setOpen={setOpenCreate} tooltip={'Create'} img={create}>
                <NetworkServerUpdateForm open={openCreate} setOpen={setOpenCreate} />
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
            <NetworkServerUpdateForm  />
        </ModalButton>
        <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
            <NetworkServerView />
        </ModalButton>
        </Box>
    )
}