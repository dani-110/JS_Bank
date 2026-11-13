import  React from 'react';
import { Box, Typography } from '@mui/material';
import './changeOfDBAMaker.scss'

const ChangeOfDBAMakerHeader = () => {
    return <Box className='changeOfDBAMakerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default ChangeOfDBAMakerHeader;
