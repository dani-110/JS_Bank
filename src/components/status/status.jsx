import React from "react";
import { Box, Typography } from "@mui/material";

const Status = ({ value }) => {
    const getBackgroundColor = (value) => {
        if (value == 'Online')
            return 'rgb(230, 255, 250)';
        if (value != 'Online')
            return '#ffd9d0';

    };
    const getTextColor = (value) => {
        if (value.trim() == 'Active')
            return 'rgb(19, 222, 185)';
        else
            return '#ee4f32';
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
            <Typography sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
        </Box>
    )
}
export default Status;
