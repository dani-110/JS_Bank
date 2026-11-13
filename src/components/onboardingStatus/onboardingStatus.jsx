import React from "react";
import { Box, Typography } from "@mui/material";

const OnboardingStatus = ({ value }) => {
const camelCase = value.toLowerCase()

    const getBackgroundColor = (value) => {
        switch (value) {
            case 'APPROVED':
                return '#e9f0e8';
            case 'IN PROGRESS':
                return '#f6e9e1';
            case 'DISCRIPENT':
                return '#f5ede2';
            case 'DECLINED':
                return '#f4e2e2';
            default:
                return 'transparent';
        }
    };
    const getTextColor = (value) => {
        switch (value) {
            case 'APPROVED':
                return '#77bc6c';
            case 'IN PROGRESS':
                return '#f57635';
            case 'DISCRIPENT':
                return '#f6a12b';
            case 'DECLINED':
                return '#f23230';
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
            <Typography sx={{ color: value ? getTextColor(value) : "#000", textTransform:'capitalize' }}>{camelCase}</Typography>
        </Box>
    )
}
export default OnboardingStatus;
