import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import CryptographyUpdateForm from './cryptographyUpdateForm';
import ModalButton from '../../components/modalButton/modalButton';
import edit from '../../assests/edit.png'

const DataGrid = () => {
    const tableHeader = ['Channel Id', "Key Type", 'Key Value', 'Key Length']
    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;



const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    return (
        <Box>
        <ModalButton open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} img={edit}>
            <CryptographyUpdateForm  />
        </ModalButton>
        </Box>
    )
}