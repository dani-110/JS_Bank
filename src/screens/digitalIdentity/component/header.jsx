import React from 'react';
import { Box, Typography } from '@mui/material';
import '../digitalIdentity.scss'
import ConsumerJourneyView from '../consumerScrutinyLevel/viewConsumerJourney';
import MerchantJourneyView from '../../merchantScrutinyMakerLevel/viewMerchantJourney';

const Header = ({ state, title, journeyType }) => {
    return <Box className='digiheaderContainer'>
        <Box>
            <Typography variant="body1" component="span"></Typography>
        </Box>
        <Typography variant="h3" className='title' component="span">{title}</Typography>
        <Box className='type'>
            {journeyType == 'consumer' ?
                <ConsumerJourneyView state={state} />
                : <MerchantJourneyView state={state} />
            }
        </Box>
    </Box>
}
export default Header;
