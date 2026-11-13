import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ModalButton from '../../components/modalButton/modalButton';
import Tabs from '../../components/tabs/tabs';
import Nadra from './nadra/nadra';
import Pep from './pep/pep';
import Sanction from './sanction/sanction';
import AdverseMedia from './adverseMedia/adverseMedia';
import historicData from '../../assests/historic_data.png'
import ATL from './atl/atl';
import { Box, Typography } from '@mui/material';

const ConsumerHistoricData = (props) => {
    const { data } = props

    const [open, setOpen] = React.useState(false);
    // const permissions = user?.permissions

    const childArray = []

    console.log(data)
    if (data?.nadratid) {
        childArray.push(
            {
                label: "NADRA",
                component: <Nadra item={data} />
            }
        )
    }
    if (data?.atltid != null) {
        childArray.push(
            {
                label: "ATL",
                component: <ATL item={data} />
            }
        )
    }
    if (data?.peptid != null) {
        childArray.push(
            {
                label: "Pep",
                component: <Pep item={data} type={'PEP'}/>
            }
        )
    }
    if (data?.peprcatid != null) {
        childArray.push(
            {
                label: "RCA",
                component: <Pep item={data} type={'RCA'} />
            },
        )
    }
    if (data?.sanctiontid != null) {
        childArray.push(
            {
                label: "Sanctions",
                component: <Sanction item={data} />
            }
        )
    }
    if (data?.sanctionnewstid != null) {
        childArray.push(
            {
                label: "Adverse Media",
                component: <AdverseMedia item={data} />
            }
        )
    }

    return <ModalButton open={open} setOpen={setOpen} tooltip={'Historic Data'} title={'Historic Data'} type={'icon'} img={historicData}>
        {data?.nadratid ||
            data?.atltid ||
            data?.peptid ||
            data?.sanctiontid ||
            data?.sanctionnewstid ? <Tabs childArray={childArray} />
            : <Box sx={{ width: '100%', height: '60vh', typography: 'body1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h2'>No Data Found!</Typography>
            </Box>}
    </ModalButton>
};
export default ConsumerHistoricData;