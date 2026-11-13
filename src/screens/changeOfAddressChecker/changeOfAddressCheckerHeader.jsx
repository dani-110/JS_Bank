import  React from 'react';
import { Box, Typography } from '@mui/material';
import './changeOfAddressChecker.scss'

const ChangeOfAddressCheckerHeader = () => {
    return <Box className='changeOfAddressCheckerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default ChangeOfAddressCheckerHeader;
