import  React from 'react';
import View from '../../components/view';

const NetworkChannelView = (props) => {

    const viewFields = [
        'Channel ID',
        'Channel Name',
        'Port',
        'Allowed Ips',
        'IP',
        'Key',
        'Channel Type',
        'Key Type',
        'KCV',
        'Username',
        'Password',
        'Channel Code'
    ]

    return  <View viewFields={viewFields} />
}
export default NetworkChannelView;