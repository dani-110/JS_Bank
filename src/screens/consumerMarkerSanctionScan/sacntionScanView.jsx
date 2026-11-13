import  React from 'react';
import View from '../../components/view';

const SanctionScanView = (props) => {

    const viewFields = [
        'Legal Name',
        'DBA',
        'CNIC',
        'FullName (As per CNIC)',
        "Father's / Husband name",
        'Present Address (As per CNIC)',
        'Business Address',
        'Date Of Birth',
        'Gender',
        'Email Address',
        'Mobile no',
        'Place of Birth',
        "Mother's Name",
        'City'
    ]

    return <View viewFields={viewFields} />

}
export default SanctionScanView;