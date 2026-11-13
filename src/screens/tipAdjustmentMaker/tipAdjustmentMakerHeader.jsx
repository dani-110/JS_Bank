import  React from 'react';
import { Box, Typography } from '@mui/material';
import './tipAdjustmentMaker.scss'

const TipAdjustmentMakerHeader = () => {
    return <Box className='tipAdjustmentMakerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default TipAdjustmentMakerHeader;
