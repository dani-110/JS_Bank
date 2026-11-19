import React from "react";
import { Box, Typography } from "@mui/material";

const ResponseCode = ({ value }) => {
    console.log(value)
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{
                // backgroundColor: value ? value == 'Success' ? 'rgb(230, 255, 250)' : '#ffd9d0' : 'tansparent',
                backgroundColor: value ? value == '0 Success' ? '#e1f1e8' : '##fff0f0' : 'tansparent',
                minHeight: '25px',
                borderRadius: '10px',
                justifyContent: 'flex-start',
                gap: '10px',
                alignItems: 'center',
                display: 'inline-flex',
                padding: '0px 5px',
            }} >
                {/* <Box sx={{ height: '10px', width: '10px', backgroundColor: value ? value == '0 Success' ? '#26765b' : '#ee4f32' : 'tansparent', borderRadius: '100px' }}></Box> */}
                {/* <Typography >{value}</Typography> */}
                <Typography sx={{ color: value ? value == '0 Success' ? '#26765b' : '#a83245' : "#000", textAlign: 'left' }}>{value}</Typography>
            </Box>
        </Box>
    )
}

export default ResponseCode;
