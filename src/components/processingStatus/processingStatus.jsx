import React from "react";
import { Box, Typography } from "@mui/material";

const ProcessingStatus = ({ value }) => {
    const getTextColor = (value) => {
        if (value == 'Online')
            return '#26765b';
        if (value == 'Not Processing')
            return '#a83245';
    };
    const getBackgroundColor = (value) => {
        if (value == 'Online')
            return '#e1f1e8';
        if (value == 'Not Processing')
            return '#fff0f0';
    };
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{
                backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
                minHeight: '25px',
                borderRadius: '10px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                alignSelf: 'start',
                display: 'inline-flex',
                padding: '0px 20px',
                gap: '10px',
            }} >
                {getTextColor(value) ? <Box sx={{ height: '10px', width: '10px', backgroundColor: value ? getTextColor(value) : 'tansparent', borderRadius: '100px' }}></Box> : null}
                <Typography sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
            </Box>
        </Box>
    )
}
export default ProcessingStatus;
