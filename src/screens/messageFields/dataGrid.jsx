import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box} from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import MessageFieldsUpdateForm from './messageFieldsUpdateForm';
import edit from '../../assests/edit.png'

const DataGrid = () => {
    const tableHeader = ['Name', 'Data Type']
    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;


const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    return (
        <Box>
        <ModalButton open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} img={edit}>
            <MessageFieldsUpdateForm  />
        </ModalButton>
        </Box>
    )
}