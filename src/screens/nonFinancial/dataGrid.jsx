import  React from 'react';
import TabelContainer from '../../components/table/table';
import { Box} from '@mui/material';
import view from '../../assests/view.png'
import ModalButton from '../../components/modalButton/modalButton';
import NonFinancialView from './nonFinancialView';

const DataGrid = () => {
    const tableHeader = ['Logging Date Time From', "Merchant ID", 'Legal Name', 'Owner Type', 'Nature Of Business', 'National ID', 'Tax ID', "No Of Pos", 'Contact No', 'Status']

    return <TabelContainer tableHeader={tableHeader} action={TableAction} />
}
export default DataGrid;

const TableAction = (data) => {
    const [openView, setOpenView] = React.useState(false);

    return (
        <Box>
            <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <NonFinancialView/>
            </ModalButton>
        </Box>
    )
}