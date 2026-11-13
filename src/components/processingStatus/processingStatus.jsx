import React from "react";
import { Box, Typography } from "@mui/material";

const ProcessingStatus = ({ value }) => {
    const getTextColor = (value) => {
        if (value == 'Online')
            return 'rgb(19, 222, 185)';
        if (value != 'Online')
            return '#ee4f32';
    };
    return (
        <Box sx={{
            // backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
            minHeight: '25px',
            borderRadius: '10px',
            // justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            padding: '0px 20px',
            gap:'10px',
        }} >
             <Box sx={{height:'10px', width:'10px', backgroundColor: value ? getTextColor(value) : 'tansparent', borderRadius:'100px'}}></Box>
            <Typography sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
        </Box>
    )
}
export default ProcessingStatus;
