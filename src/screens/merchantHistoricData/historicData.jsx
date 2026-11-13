import React from 'react';
import ModalButton from '../../components/modalButton/modalButton';
import Tabs from '../../components/tabs/tabs';
import Nadra from './nadra/nadra';
import Pep from './pep/pep';
import Sanction from './sanction/sanction';
import AdverseMedia from './adverseMedia/adverseMedia';
import ATL from './atl/atl';
import { Box, Typography } from '@mui/material';
import LegalName from './legalName';
import IndividualName from './individual';
import DBA from './dba';


const MerchantHistoricData = (props) => {
    // const { data } = props

    // console.log('open hwa hao')
    // const childArray = [
    //     {
    //         label: "NADRA",
    //         component: <Nadra item={data} />
    //     },
    //     {
    //         label: "Pep",
    //         component: <Pep item={data} />
    //     },
    //     {
    //         label: "Sanctions",
    //         component: <Sanction item={data} />
    //     }
    // ]
    const { data } = props

    console.log(data.legalentity)
    const [open, setOpen] = React.useState(false);
    // const permissions = user?.permissions

    const childArray = []

    childArray.push(
        {
            label: "NADRA",
            component: <Nadra item={data} />
        }
    )

    childArray.push(
        {
            label: "ATL",
            component: <ATL item={data} />
        }
    )

    if (data.legalentity == 2) {
        childArray.push(
            {
                label: "Screening Legal Name",
                component: <LegalName data={data} />
            }
        )
    }
    childArray.push(
        {
            label: "Screening DBA",
            component: <DBA data={data} />
        }
    )
    childArray.push(
        {
            label: "Screening Name (as per CNIC)",
            component: <IndividualName data={data} />
        }
    )
    // if (data?.peptid != null) {
    //     childArray.push(
    //         {
    //             label: "Pep",
    //             component: <Pep item={data} />
    //         }
    //     )
    //     childArray.push(
    //         {
    //             label: "RCA",
    //             component: <Pep item={data} />
    //         },
    //     )
    // }
    // if (data?.sanctiontid != null) {
    //     childArray.push(
    //         {
    //             label: "Sanctions",
    //             component: <Sanction item={data} />
    //         }
    //     )
    // }
    // if (data?.sanctionnewstid != null) {
    //     childArray.push(
    //         {
    //             label: "Adverse Media",
    //             component: <AdverseMedia item={data} />
    //         }
    //     )
    // }
    return <>
        {data?.nadratid ||
            data?.atltid ||
            data?.peptid ||
            data?.sanctiontid ||
            data?.sanctionnewstid ? <Tabs childArray={childArray} />
            : <Box sx={{ width: '100%', height: '60vh', typography: 'body1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h2'>No Data Found!</Typography>
            </Box>}
    </>

};
export default MerchantHistoricData;