import React from "react";
import { Box, Typography } from "@mui/material";

const Importstatus = ({ value }) => {
    const getBackgroundColor = (value) => {
        switch (value) {
            case 'Completed But Not Posted':
                return '#ffe80061';
            case 'In Process':
                return '#fad7a3d1';
            case 'Completed and Posted':
                return 'rgb(230, 255, 234)';
            case 'Partially Processed':
                return '#ffd9d0';
            case 'Failed':
                return '#ffd9d0';
            default:
                return 'transparent';
        }
    };
    const getTextColor = (value) => {
        switch (value) {
            case 'Completed But Not Posted':
                return '#FFAE1F';
            case 'In Process':
                return '#e98e0e';
            case 'Completed and Posted':
                return 'rgb(19, 222, 33)';
            case 'Partially Processed':
                return '#ee4f32';
            case 'Failed':
                return '#ee4f32';
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
            padding: '0px 20px'
        }} >
            <Typography sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
        </Box>
    )
}

export default Importstatus;