import  React from 'react';
import TabelContainer from '../../components/table/table';

const DataGrid = () => {
    const tableHeader = [
        'Merchant ID',
        'First Name',
        'Last Name',
        'Merchant Type',
        'CNIC'
    ]

    return <TabelContainer tableHeader={tableHeader} />
}
export default DataGrid;