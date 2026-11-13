import  React from 'react';
import { Box, Typography } from '@mui/material';
import './tipAdjustmentChecker.scss'

const TipAdjustmentCheckerHeader = () => {
    return <Box className='tipAdjustmentCheckerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default TipAdjustmentCheckerHeader;
