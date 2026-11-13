import  React from 'react';
import { Box, Typography } from '@mui/material';
import './changeOfAddressMaker.scss'

const ChangeOfAddressMakerHeader = () => {
    return <Box className='changeOfAddressMakerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default ChangeOfAddressMakerHeader;
