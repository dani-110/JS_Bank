import React from "react";
import { Box, Typography } from "@mui/material";

const RiskValue = ({ value }) => {
    const getBackgroundColor = (value) => {
        switch (value) {
            case 'Low':
                return 'rgb(230, 255, 250)';
            case 'Medium':
                return '#ffe80061';
            case 'High':
                return '#ffd9d0';
            default:
                return 'transparent';
        }
    };
    const getTextColor = (value) => {
        switch (value) {
            case 'Low':
                return 'rgb(19, 222, 185)';
            case 'Medium':
                return '#FFAE1F';
            case 'High':
                return '#ee4f32';
            default:
                return 'transparent';
        }
    };
    return (
        <Box sx={{
            // backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
            minHeight: '25px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            padding: '0px 20px',
            gap: '10px',
        }} >
            <Box sx={{ height: '10px', width: '10px', backgroundColor: value ? getTextColor(value) : 'tansparent', borderRadius: '100px' }}></Box>
            <Typography sx={{ color: value ? getTextColor(value) : "#000", textTransform: 'capitalize' }}>{value}</Typography>
        </Box>
    )
}

export default RiskValue;
