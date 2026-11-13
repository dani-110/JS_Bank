import  React from 'react';
import { Box, Typography } from '@mui/material';
import './changeOfMDRChecker.scss'

const ChangeOfMDRCheckerHeader = () => {
    return <Box className='changeOfMDRCheckerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default ChangeOfMDRCheckerHeader;
