import  React from 'react';
import View from '../../components/view';

const CustomerTransactionDetails = (props) => {

    const viewFields = [
        'Customer ID',
        'IMEI Number',
        'Last Transaction Date Time',
        'Last IP Address',
        'Last GPS Latitude',
        'Last GPS Longitude',
        'App version',
        'Is Rooted Device',
        'Device Model',
        'OS',
    ]

    return <View viewFields={viewFields} />
}
export default CustomerTransactionDetails;