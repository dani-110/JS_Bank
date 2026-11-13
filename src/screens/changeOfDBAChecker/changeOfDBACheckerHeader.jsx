import  React from 'react';
import { Box, Typography } from '@mui/material';
import './changeOfDBAChecker.scss'

const ChangeOfDBACheckerHeader = () => {
    return <Box className='changeOfDBACheckerHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant Maintenance`}</Typography>
        </Box>
}
export default ChangeOfDBACheckerHeader;
