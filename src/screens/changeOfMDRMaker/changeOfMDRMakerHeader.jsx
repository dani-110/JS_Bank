import  React from 'react';
import { Box, Typography } from '@mui/material';
import './changeOfMDRMaker.scss'

const ChangeOfMDRMakerHeader = () => {
    return <Box className='changeOfMDRMakerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default ChangeOfMDRMakerHeader;
