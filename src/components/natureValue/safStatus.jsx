import React from "react";
import { Box, Typography } from "@mui/material";

const NatureValue = ({ value }) => {
    const getTextColor = (value) => {
        switch (value) {
            case 'DEBIT':
                return 'rgb(250, 137, 107)';
            case 'debit':
                return 'rgb(250, 137, 107)';
            case 'CREDIT':
                return '#5D87FF';
            case 'credit':
                return '#5D87FF';
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
            gap:'10px',
        }} >
            <Box sx={{height:'10px', width:'10px', backgroundColor: value ? getTextColor(value) : 'tansparent', borderRadius:'100px'}}></Box>
            <Typography sx={{ color: value ? getTextColor(value) : "#000", textTransform:'capitalize' }}>{value}</Typography>
        </Box>
    )
}

export default NatureValue;