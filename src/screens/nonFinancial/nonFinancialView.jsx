import  React from 'react';
import View from '../../components/view';

const NonFinancialView = (props) => {

    const viewFields = [
        'TID',
        'Logging Date Time',
        'Req Code',
        'MID',
        'Merchant ID',
        'Legal Name',
        'Address',
        'Number Of Employee',
        'Sales Turnover',
        'DBA',
        'City',
        'Account',
        'Bank Code',
        'Branch Code',
        'Age Of Business',
        'ownership Status',
        'Province',
        'Number Of Outlets',
        'Name Of Owner',
        'Onwer Type',
        'Nature Of Business',
        'MDR',
        'Salesperson Name',
        'National ID',
        'Tax ID',
        'No. Of Pos',
        'Contact No',
        'Map',
        'Map ID',
        'Map Desingation',
        'Map Sign',
        'Bank Certificate Photo',
        'National ID Photo Front',
        'Partnership Deed Photo',
        'Reserve 1',
        'Reserve 2',
        'Reserve 3',
        'Reserve 4',
        'Reserve 5',
        'Status',
        'Processing Percentage',
        'Org Salesperson',
        'Datetime',
        'National ID Photo Back',
        'National ID Issue Date',
        'National ID Expiry Date'
    ]

    return  <View viewFields={viewFields} />

}
export default NonFinancialView;