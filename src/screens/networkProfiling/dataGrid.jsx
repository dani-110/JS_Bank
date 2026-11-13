import  React from 'react';
import TabelContainer from '../../components/table/table';

const DataGrid = () => {
    const tableHeader = [
        'Originating Channel',
        'Destination Channel',
        'Transaction',
        'Min. Amount',
        'Max. Amount',
        'Transaction Count',
        'Last Transaction Date Time'
    ]

    return <TabelContainer tableHeader={tableHeader} />
}
export default DataGrid;