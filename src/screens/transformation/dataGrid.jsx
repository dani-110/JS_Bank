import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import TransformationUpdateForm from './transformationUpdateForm';
import ModalButton from '../../components/modalButton/modalButton';
import edit from '../../assests/edit.png'

const DataGrid = () => {
    const tableHeader = ['Channel ID', "Transformation ID", 'Source Field', 'Target Field']
    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;


const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    return (
        <Box>
        <ModalButton open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} img={edit}>
            <TransformationUpdateForm  />
        </ModalButton>
        </Box>
    )
}