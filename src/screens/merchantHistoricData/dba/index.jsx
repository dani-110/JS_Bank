import React from 'react';
import { Box, Typography } from '@mui/material';
import Sanction from '../sanction/sanction';
import AdverseMedia from '../adverseMedia/adverseMedia';
import Tabs from '../../../components/tabs/tabs';
import CompanyScreening from '../companyScreening/companyScreening';


const DBA = (props) => {
    const { data } = props
    console.log(data)

    const childArray = []

    const adverseMediaobj = {
        'mid': data?.mid,
        'dbasanctionnewstid': data?.dbasanctionnewstid,
        // 'dba': data?.dba
    }

    const globalSanctionobj = {
        'mid': data?.mid,
        'dbasanctiontid': data?.dbasanctiontid,
        // 'dba': data?.dba
    }

    const companyScreeningObj = {
        'mid': data?.mid,
        'dbasanctioncompanytid': data?.dbasanctioncompanytid,
        'dba': data?.dba
    }


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
    childArray.push(
        {
            label: "Company Screening",
            component: <CompanyScreening obj={companyScreeningObj} />
        }
    )
    return <Tabs childArray={childArray} />
};
export default DBA;