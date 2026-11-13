import React from 'react';
import { Box, Typography } from '@mui/material';
import Sanction from '../sanction/sanction';
import AdverseMedia from '../adverseMedia/adverseMedia';
import Pep from '../pep/pep';
import Tabs from '../../../components/tabs/tabs';
import CompanyScreening from '../companyScreening/companyScreening';
import PepRCA from '../pepRCA/pepRCA';


const IndividualName = (props) => {
    const { data } = props
    console.log(data)

    const childArray = []

    const adverseMediaobj = {
        'mid': data.mid,
        'indnamesanctionnewstid': data.indnamesanctionnewstid,
        // 'merchantlegalname': data?.legalname,
        // 'newsquery': data?.individualname,
        // 'individualname': data?.individualname
    }

    const globalSanctionobj = {
        'mid': data.mid,
        'indnamesanctiontid':data.indnamesanctiontid
        // 'fullname': data?.individualname,
        // 'individualname': data?.individualname
    }

    const pepRCAObj = {
        'mid': data.mid,
        'indnamepeprcatid': data.indnamepeprcatid,
        // 'fullname': data?.individualname,
        'individualname': data?.individualname
    }
    const pepObj = {
        'mid': data.mid,
        'indnamepeptid': data.indnamepeptid,
        // 'fullname': data?.individualname,
        // 'individualname': data?.individualname
    }



    childArray.push(
        {
            label: "Pep",
            component: <Pep obj={pepObj} />
        }
    )
    childArray.push(
        {
            label: "RCA",
            component: <PepRCA obj={pepRCAObj} />
        },
    )
    childArray.push(
        {
            label: "Sanctions",
            component: <Sanction obj={globalSanctionobj} />
        }
    )
    childArray.push(
        {
            label: "Adverse Media",
            component: <AdverseMedia obj={adverseMediaobj} />
        }
    )
    return <Tabs childArray={childArray} />

};
export default IndividualName;