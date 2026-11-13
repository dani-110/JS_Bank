import React from "react";
import { Box, Typography } from "@mui/material";

const SAFStatus = ({ value }) => {
    const getBackgroundColor = (value) => {
        switch (value) {
            case 'Retry':
                return 'rgb(230, 255, 250)';
            case 'Expire':
                return '#ffe80061';
            case 'Deleted':
                return '#ffd9d0';
            default:
                return 'transparent';
        }
    };
    const getTextColor = (value) => {
        switch (value) {
            case 'Retry':
                return 'rgb(19, 222, 185)';
            case 'Expire':
                return '#FFAE1F';
            case 'Deleted':
                return '#ffded2';
            default:
                return 'transparent';
        }
    };
    return (
        <Box sx={{
            backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
            minHeight: '25px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            padding:'0px 20px'
        }} >
            <Typography sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
        </Box>
    )
}

export default SAFStatus;