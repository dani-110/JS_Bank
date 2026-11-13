import  React from 'react';
import { Box, Typography } from '@mui/material';
import './services.scss'

const ServicesHeader = () => {
    return <Box className='servicesHeaderContainer'>
            <Typography variant="h5" className='title' component="span">{`Merchant Services`}</Typography>
        </Box>
}
export default ServicesHeader;
