import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Box, Typography } from "@mui/material";

const LinkSAFStatusTransaction = ({ value }) => {
    const getTextColor = (value) => {
        switch (value) {
            case 'Approve':
                return 'rgb(19, 222, 185)';
            case 'Expire':
                return 'rgb(250, 137, 107)';
            case 'Transmitting':
                return '#FFAE1F';
            case 'Decline':
                return 'red';
            default:
                return 'transparent';
        }
    };
    return (
        <Box sx={{
            //    backgroundColor: value ? getBackgroundColor(value) : 'tansparent',
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
export default LinkSAFStatusTransaction;

