import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';

import view from '../../assests/view.png'
import CustomerProfilingView from './customerProfilingView';

const DataGrid = () => {
    const tableHeader = [
        'First Name',
        'Last Name',
        'CNIC',
        'Risk Status',
        'Customer Type'
    ]

    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;


const TableAction = (data) => {
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>
            <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <CustomerProfilingView/>
            </ModalButton>
        </Box>
    )
}