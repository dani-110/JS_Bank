import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Collapse, Divider, Grid, TextField, Typography } from '@mui/material';
import './merchantMarkerSanctionScan.scss'
import Expandable from '../../components/expandable/expandable';
import { useTheme } from '@mui/material/styles';
import { MdExpandMore, MdOutlineExpandLess } from 'react-icons/md';
import { setsanctionalert } from '../../store/actions/digitalIdentity';
import { useDispatch } from 'react-redux';

const StifleContainer = (props) => {
    const { list, isLoading, globalSanction, isGlobalSanction } = props

    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleExpandClick = (index) => {
        setExpanded((prev) => (prev === index ? "" : index));
    };

    const checkedHandler = (index) => {
        let obj = { ...list[index - 1] }
        console.log(obj)
        let isHighlight = !obj.ishighlight
        let saveObj = {
            "slid": obj.slid,
            "highlightflag": isHighlight ? 1 : 0
        }
        if (obj.ishighlight) {
            obj.ishighlight = false
        } else {
            obj.ishighlight = true
        }
        list[index - 1] = obj

        dispatch(setsanctionalert(saveObj)).then((res) => {
            console.log(res.payload)
            if (res.payload.responsecode != 0) {
                if (obj.ishighlight) {
                    obj.ishighlight = false
                } else {
                    obj.ishighlight = true
                }
                list[index - 1] = obj
            }
        });
    };

    const theme = useTheme()
    return <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0px 0px' }}>
            <Typography variant="h3" className='title' component="span">{`Matches found in Global Sanctions:`}</Typography>
            <TextField size="small" label="Search" onChange={(e) => setSearch(e.target.value)} />
            <Button size="medium" variant="contained" color="primary" disabled={!isGlobalSanction} onClick={globalSanction} >Global Sanctions</Button>
        </Box>
        <Box className="stifleContainer">
            <Box sx={{ background: theme.palette.inputBorder, display: 'flex', alignItems: 'center', margin: '10px 0px' }}>
                <Grid container spacing={0}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h4" component="span" sx={{ padding: '6px 10px', }}>
                            PEP Alert
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h4" component="span" sx={{ padding: '6px 10px', }}>
                            National ID
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" component="span" sx={{ padding: '6px 10px', textTransform: 'uppercase' }}>
                            Entity
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" component="span" sx={{ padding: '6px 10px', textTransform: 'uppercase' }}>
                            Match Score
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" component="span" sx={{ padding: '6px 10px', textTransform: 'uppercase' }}>
                            Action
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {
                isLoading &&
                <Box className='tableLoadingContainer'>
                    <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                </Box>
            }
            {list && list.length == 0 && !isLoading ?
                <Box className='tableLoadingContainer'>
                    <Typography variant="body1" component="span" sx={{ padding: '6px 10px', color:'#000' }}>
                        No Data found
                    </Typography>
                </Box>
                : <>
                    {list && list.length > 0 && list?.filter(val =>
                        search === ""
                            ? val.nationalid === null || val.nationalid
                            : val.nationalid?.includes(search)
                    ).map((e, i) => <Box sx={{ margin: '10px 0px', backgroundColor: e.ishighlight ? 'rgb(237, 231, 246)' : '', padding: '10px 0px' }}>
                        <Box onClick={() => handleExpandClick(i + 1)}>
                            <Grid container spacing={0}>
                                <Grid item xs={1}>
                                    <Box>
                                        <input style={{ 'border': 'none', 'outline': 'none', backgroundColor: 'transparent' }}
                                            value={e.ishighlight}
                                            type={'checkbox'}
                                            checked={e.ishighlight}
                                            onChange={() => checkedHandler(i + 1)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography component="span" sx={{ padding: '6px 10px', fontWeight: 'bold', fontSize: '15px', color:'#000' }}>
                                        Alert {i + 1}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography component="span" sx={{ padding: '6px 10px', fontWeight: 'bold', fontSize: '15px', color:'#000' }}>
                                        {e.nationalid}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="body1" component="span" sx={{ padding: '6px 10px', color:'#000' }}>
                                        {e.entity}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="body1" component="span" sx={{ padding: '6px 10px', color:'#000' }}>
                                        {e.MatchingScore ? e.MatchingScore : 'N/A'}{e.MatchingScore ? '%' : ''}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    {
                                        expanded == i + 1 ? <MdOutlineExpandLess size={25} color={theme.palette.textColor} />
                                            : <MdExpandMore size={25} color={theme.palette.textColor} />}
                                </Grid>
                            </Grid>
                            <Collapse
                                in={expanded == i + 1}
                                timeout="auto"
                                unmountOnExit
                            >
                                <Grid container spacing={0}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={7} >
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            {Object.keys(e).map(ele => (<Typography variant="body1" sx={{ padding: '6px 10px', textTransform: ele == 'ntn' ? 'uppercase' : 'capitalize' }}>
                                                <span style={{ fontSize: '14px', fontWeight: 'bold', color:'#000'}}>{ele.replace('_', ' ')} :</span>  {e[ele]}
                                            </Typography>
                                            ))}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Collapse>
                            <Divider />
                        </Box>
                    </Box>
                    )}
                </>}
        </Box>
    </>
}
export default StifleContainer;
