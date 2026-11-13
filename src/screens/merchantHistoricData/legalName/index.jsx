import React from 'react';
import { Box, Typography } from '@mui/material';
import Sanction from '../sanction/sanction';
import AdverseMedia from '../adverseMedia/adverseMedia';
import Pep from '../pep/pep';
import Tabs from '../../../components/tabs/tabs';
import PepRCA from '../pepRCA/pepRCA';
import CompanyScreening from '../companyScreening/companyScreening';


const LegalName = (props) => {
    const { data } = props
    console.log(data)

    const childArray = []

    const adverseMediaobj = {
        'mid': data.mid,
        'sanctionnewstid': data.sanctionnewstid,
        'merchantlegalname': data?.legalname,
        'publishdatefrom':'',
        'publishdateto':'',
        'recordcount': 0,
        'pagenumber': 0
    }

    const globalSanctionobj = {
        'mid': data.mid,
        'getSanctiontid': data.sanctiontid,
        'activitydatefrom': '',
        'activitydateto': '',
        'merchantlegalname': data?.legalname,
        'recordcount': 0,
        'pagenumber': 0
    }

    const companyScreeningObj = {
        'mid': data.mid,
        'legalnamesanctioncompanytid': data.legalnamesanctioncompanytid,
        'merchantlegalname': data?.legalname
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
export default LegalName;