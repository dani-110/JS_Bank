import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import NotificationsUpdateForm from './notificationsupdateForm';
import edit from '../../assests/edit.png'

const DataGrid = () => {
    const tableHeader = ['From ID', 'URL', "Notification Type", 'Login ID']
    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;


const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    return (
        <Box>
            <ModalButton open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} img={edit}>
                <NotificationsUpdateForm />
            </ModalButton>
        </Box>
    )
}