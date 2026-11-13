import  React from 'react';
import { Box, Typography } from '@mui/material';
import './scrutinyLevel.scss'

const ScrutinyMakerLevelHeader = () => {
    return <Box className='scrutinyMakerLevelHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Consumer Scrutiny Level`}</Typography>
            {/* <Box className='type'>
                <Typography variant="body1" className='tag' component="span">{`Merchant Journey`}</Typography>
            </Box> */}
        </Box>
}
export default ScrutinyMakerLevelHeader;
