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
                            <Grid key={i} item xs={12} md={isSingle ? 12 : 6} sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <Typography variant="body2" sx={{ textAlign: 'left' }} color={'#617088'}>{e}</Typography>
                                {viewData && (verifyParam[i]?.includes('logo')) ?
                                    <Logo value={viewData[[verifyParam[i]]]} /> :
                                    <Typography variant="body2" sx={{ textAlign: 'left', wordBreak: 'break-word', whiteSpace: 'normal' }}>{viewData[[verifyParam[i]]]}</Typography>}
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box >
            : <Grid container spacing={1} sx={{ padding: '0px 10px' }}>
                {
                    viewFields.map((e, i) => (
                        <Grid key={i} item xs={12} md={isSingle ? 12 : 6} sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <Typography variant="body2" sx={{ textAlign: 'left' }} color={'#617088'}>{e}</Typography>

                            {viewData && (verifyParam[i]?.includes('logo')) ?
                                <Logo value={viewData[verifyParam[i]]} /> :
                                <Typography variant="body1" sx={{ textAlign: 'left', wordBreak: 'break-word', whiteSpace: 'normal' }}>{viewData[[verifyParam[i]]]}</Typography>}
                        </Grid>
                    ))
                }
            </Grid>}
    </>


};

export default View;
