import  React from 'react';
import View from '../../components/view';

const CustomerProfileDetails = (props) => {

    const viewFields = [
        'Customer ID',
        'Relation ID',
        'Product',
        'Channel',
        'Transaction',
        'Count',
        'Average Amount',
        'Min. Amount',
        'Max. Amount',
        'Avg. Transaction Time (From)',
        'Avg. Transaction Time (To)'
    ]

    return <View viewFields={viewFields} />
}
export default CustomerProfileDetails;