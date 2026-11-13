import  React from 'react';
import View from '../../components/view';

const NetworkServerView = (props) => {
    const viewFields = [
        'Server ID',
        'Server Name',
        'Port',
        'IP',
        'Server Type',
        'Connect Timeout',
        'Read Timeout',
        'SSL Enabled',
        'URL',
        'Allowed Ips'
    ]

    return <View viewFields={viewFields} />
}
export default NetworkServerView;