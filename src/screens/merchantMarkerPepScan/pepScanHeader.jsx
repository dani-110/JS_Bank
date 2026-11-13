import React from 'react';
import { Box, Typography } from '@mui/material';
import '../merchantScrutinyMakerLevel/merchantScrutinyMakerLevel.scss'
import MerchantJourneyView from '../merchantScrutinyMakerLevel/viewMerchantJourney';

const PepScanHeader = ({ state }) => {
    return <Box className='merchantScrutinyMakerLevelHeaderContainer'>
        {/* <Typography variant="h3" className='title' component="span">{`FBR Active Tax Payer Scan`}</Typography> */}
        {/* <Box className='type'>
                <Typography variant="body1" className='tag' component="span">{`Merchant Journey`}</Typography>
            </Box> */}
        <Box>
            <Typography variant="body1" component="span"></Typography>
        </Box>
        <Typography variant="h3" className='title' component="span">{`FBR Active Tax Payer Scan`}</Typography>
        <Box className='type'>
            <MerchantJourneyView auditTrace={'FBR ATL SCAN'} state={state} />
        </Box>
    </Box>
}
export default PepScanHeader;
