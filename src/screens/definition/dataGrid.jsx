import  React from 'react';
import TabelContainer from '../../components/table/table';
import ModalButton from '../../components/modalButton/modalButton';
import DefinitionUpdateForm from './definitionUpdateForm';
import edit from '../../assests/edit.png'

const DataGrid = () => {
    const tableHeader = ['Id', "Name", 'Description', 'Version', 'OpenApiSpec', 'IsHosted']
    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;


const TableAction = (data) => {
    const [open, setOpen] = React.useState(false);
    return (
        <ModalButton open={open} setOpen={setOpen} tooltip={'Edit'} img={edit}>
            <DefinitionUpdateForm />
        </ModalButton>
    )
}