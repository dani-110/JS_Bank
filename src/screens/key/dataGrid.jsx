import  React from 'react';
import TabelContainer from '../../components/table/table';
import ModalButton from '../../components/modalButton/modalButton';
import edit from '../../assests/edit.png'
import KeyUpdateForm from './keyUpdateForm';

const DataGrid = () => {
    const tableHeader = ['OrganizationId', "Key", 'Secret', 'Quota', 'CreatedAt', 'UpdatedAt']
    return <TabelContainer tableHeader={tableHeader} action={TableAction}  />
}
export default DataGrid;



const TableAction = (data) => {
    const [open, setOpen] = React.useState(false);
    return (
        <ModalButton open={open} setOpen={setOpen} tooltip={'Edit'} img={edit}>
            <KeyUpdateForm />
        </ModalButton>
    )
}