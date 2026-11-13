import  React from 'react';
import TabelContainer from '../../components/table/table';

const DataGrid = () => {
    const tableHeader = ['Api Id', "Key Id", 'Method', 'Status Code', 'Request Time']
    return <TabelContainer tableHeader={tableHeader} />
}
export default DataGrid;