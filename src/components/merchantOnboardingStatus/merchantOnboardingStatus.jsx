import React from "react";
import { Box, Typography } from "@mui/material";

const MerchantOnboardingStatus = ({ value }) => {
    const getBackgroundColor = (value) => {
        switch (value) {
            case 'Approved':
                return '#e9efe7';
            case 'Discrepant':
                return '#f6ede3';
            case 'Decline':
                return '#ffd9d0';
            default:
                return 'transparent';
        }
    };
    const getTextColor = (value) => {
        switch (value) {
            case 'Approved':
                return '#79bf6f';
            case 'Discrepant':
                return '#f7a02c';
            case 'Decline':
                return '#e88460ff';
            default:
                return 'transparent';
        }
    };
    return (
        <Box sx={{
            backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
            minHeight: '15px',
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            padding:'0px 5px'
        }} >
            <Typography variant="body1" sx={{ color: value ? getTextColor(value) : "#000" }}>{value}</Typography>
        </Box>
    )
}

export default MerchantOnboardingStatus;
