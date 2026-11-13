import  React from 'react';
import View from '../../components/view';
import Card from '../../components/card/Card';
import { Button, Grid } from '@mui/material';
import ButtonContainer from '../../components/buttonContainer';
import CustomerProfileDetails from './customerProfileDetails';
import CustomerTransactionDetails from './customerTransactionDetails';
import Tabs from '../../components/tabs/tabs';

const CustomerProfilingView = (props) => {
    const { open, setOpen, heading } = props
    const handleOpen = () => {
        setOpen(!open)
    }

    const childArray = [
        {
            label: "Customer Transaction Details",
            component: <CustomerTransactionDetails />
        },
        {
            label: "Customer Profile Details",
            component: <CustomerProfileDetails />
        },
    ]

    return <Tabs childArray={childArray} />
}
export default CustomerProfilingView;