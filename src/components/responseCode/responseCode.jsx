import React from "react";
import { Box, Typography } from "@mui/material";

const ResponseCode = ({ value }) => {
    return (
        <Box sx={{
            // backgroundColor: value ? value == 'Success' ? 'rgb(230, 255, 250)' : '#ffd9d0' : 'tansparent',
            // backgroundColor: value ? value == 'SUCCESS' ? 'rgb(19, 222, 185)' : '#ffded2' : 'tansparent',
            minHeight: '25px',
            borderRadius: '10px',
            // justifyContent: 'left',
            gap:'10px',
            alignItems: 'center',
            display: 'flex',
        }} >
            <Box sx={{height:'10px', width:'10px', backgroundColor: value ? value == 'Success' ? 'rgb(19, 222, 185)' : '#ee4f32' : 'tansparent', borderRadius:'100px'}}></Box>
            {/* <Typography >{value}</Typography> */}
            <Typography sx={{ color: value ? value == 'Success' ? 'rgb(19, 222, 185)' : '#ee4f32':"#000", textAlign:'left' }}>{value}</Typography>
        </Box>
    )
}

export default ResponseCode;
