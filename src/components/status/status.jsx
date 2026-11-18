import React from "react";
import { Box, Typography } from "@mui/material";

const Status = ({ value }) => {
    const getBackgroundColor = (value) => {
        if (value == 'Active')
            return '#e1f1e8';
        if (value == 'Inactive')
            return '#edf1f7';

    };
    const getTextColor = (value) => {
        if (value.trim() == 'Active')
            return '#26765b';
        if (value == 'Inactive')
            return '#617088';
    };
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Box sx={{
                backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
                minHeight: '25px',
                borderRadius: '10px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'inline-flex',
                padding: '0px 20px',
                gap: '10px',
            }} >
                {/* <Box sx={{ height: '10px', width: '10px', backgroundColor: value ? getTextColor(value) : 'tansparent', borderRadius: '100px' }}></Box> */}
                <Typography sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
            </Box>
        </Box>
    )
}
export default Status;
