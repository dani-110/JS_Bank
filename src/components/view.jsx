import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Logo from "./logo/logo";

const View = (props) => {
    const { viewFields, viewData, verifyParam, isSingle, CustomComponent, groupName } = props
    const theme = useTheme()


    return <>
        {groupName ? <Box className='generalInfoContainer'>
            < Box className='generalInfoHeaderContainer' >
                <Typography variant="h3" className='title' component="span">{groupName}</Typography>
            </Box >
            <Divider sx={{ margin: '10px 10px' }} />
            <Box sx={{ padding: '0px 10px' }}>
                <Grid container spacing={1} sx={{ padding: '0px 10px' }}>
                    {
                        viewFields.map((e, i) => (
                            <Grid key={i} item xs={12} md={isSingle ? 12 : 6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h4" color={theme.palette.textColor}>{e}:</Typography>
                                {viewData && (verifyParam[i]?.includes('logo')) ?
                                    <Logo value={viewData[[verifyParam[i]]]} /> :
                                    <Typography variant="body2" sx={{ marginLeft: '10px', textAlign: 'left', wordBreak: 'break-word', whiteSpace: 'normal' }}>{viewData[[verifyParam[i]]]}</Typography>}
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box >
            : <Grid container spacing={1} sx={{ padding: '0px 10px' }}>
                {
                    viewFields.map((e, i) => (
                        <Grid key={i} item xs={12} md={isSingle ? 12 : 6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h4" color={theme.palette.textColor}>{e}:</Typography>
                          
                            {viewData && (verifyParam[i]?.includes('logo')) ?
                                <Logo value={viewData[verifyParam[i]]} /> :
                                <Typography variant="body2" sx={{ marginLeft: '10px', textAlign: 'left', wordBreak: 'break-word', whiteSpace: 'normal' }}>{viewData[[verifyParam[i]]]}</Typography>}
                        </Grid>
                    ))
                }
            </Grid>}
    </>


};

export default View;
