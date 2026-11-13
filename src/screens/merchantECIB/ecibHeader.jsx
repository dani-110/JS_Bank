import  React from 'react';
import { Box, Typography } from '@mui/material';
import './ecib.scss'

const ECIBHeader = () => {
    return <Box className='ecibHeaderContainer'>
            <Typography variant="h3" className='title' component="span">{`Merchant ECIB`}</Typography>
            {/* <Box className='type'>
                <Typography variant="body1" className='tag' component="span">{`Merchant Journey`}</Typography>
            </Box> */}
        </Box>
}
export default ECIBHeader;
