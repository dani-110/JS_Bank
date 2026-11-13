import React, { useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import './emailTemplate.scss'
import whatsapp from '../../assests/whatsapp.png'
import email from '../../assests/email.png'
import sms from '../../assests/sms.png'
import inapp from '../../assests/inapp.png'

const ModeSelection = (props) => {
    const { selectedMode, setSelectedMode } = props;

    const modeList = [
        {
            name: 'Whatsapp',
            icon: <img src={whatsapp} style={{ width: '30px' }} />
        },
        {
            name: 'Email',
            icon: <img src={email} style={{ width: '30px' }} />
        },
        {
            name: 'SMS',
            icon: <img src={sms} style={{ width: '30px' }} />
        },
        {
            name: 'In App',
            icon: <img src={inapp} style={{ width: '30px' }} />
        }
    ]

    const selectModeHandler = (item) => {
        setSelectedMode(item)
        // let arr = [...selectedMode]
        // if (!selectedMode.includes(item)) {
        //     arr.push(item)
        //     setSelectedMode(arr)
        // } else {
        //     const getIndex = arr.findIndex(val => val == item)
        //     arr.splice(getIndex, 1);
        //     setSelectedMode(arr)
        // }
    }

    return (
        <Box sx={{ maxWidth: '40%', margin: '0px auto 5px' }}>
            <Grid container spacing={2}>
                {modeList.map((item) => <Grid item xs={3}>
                    <Box className={`modeSelection ${selectedMode == item.name ? 'selected' : ''}`} onClick={() => selectModeHandler(item.name)}>
                        {item.icon}
                        <Typography variant="h3" color={selectedMode == item.name ? '#fff' : ''}>{item.name}</Typography>
                    </Box>
                </Grid>
                )}
            </Grid>
        </Box>

    );
};

export default ModeSelection;
