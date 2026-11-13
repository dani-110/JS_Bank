import React, { useEffect } from 'react';
import { Box, Button, CircularProgress, Collapse, Divider, Grid, Typography } from '@mui/material';
import './merchantMarkerPepScan.scss'
import Expandable from '../../components/expandable/expandable';
import { useTheme } from '@mui/material/styles';
import { MdExpandMore, MdOutlineExpandLess } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setatlalert } from '../../store/actions/digitalIdentity';

const StifleContainer = (props) => {
    const { list, isLoading, fbrAtlScan, isFbrAtl } = props
    const theme = useTheme()
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState([]);

    useEffect(() => {
        if (list && list.length > 0) {
            const allExpanded = list.map((_, index) => index + 1);
            setExpanded(allExpanded);
        }
    }, [list]);

    const handleToggle = (group) => {
        console.log(expanded)
        setExpanded(prev =>
            prev?.includes(group) && prev.length > 0
                ? prev.filter(item => item !== group) // close
                : [...prev, group] // open
        );
    };

    const checkedHandler = (index) => {
        let obj = { ...list[index - 1] }
        let isHighlight = !obj.ishighlight
        let saveObj = {
            "alid": obj.alid,
            "highlightflag": isHighlight ? 1 : 0
        }
        if (obj.ishighlight) {
            obj.ishighlight = false
        } else {
            obj.ishighlight = true
        }
        list[index - 1] = obj

        dispatch(setatlalert(saveObj)).then((res) => {
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

    console.log(list)

    return <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0px 0px' }}>
            <Typography variant="h3" component="span">{`Matches found in FBR Active Tax Payer List:`}</Typography>
            <Button size="medium" variant="contained" color="primary" disabled={isLoading} onClick={fbrAtlScan} >
                {isLoading && (
                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                )}FBR ATL INQUIRY</Button>
        </Box>
        <Box className="fbrScreeningstifleContainer">
            <Box sx={{ background: theme.palette.inputBorder, display: 'flex', alignItems: 'center', margin: '10px 0px' }}>
                <Grid container spacing={0}>
                    <Box sx={{ background: '#b0b0b0f5', display: 'flex', alignItems: 'center', margin: '10px 0px', position: 'sticky', top: 0, zIndex: 100 }}></Box>
                    <Grid item xs={8}>
                        <Typography variant="h4" component="span" sx={{ padding: '6px 10px', }}>
                            Customer Detail
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h4" component="span" sx={{ padding: '6px 10px', }}>
                            ATL Status
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
                    <Typography variant="body1" component="span" sx={{ padding: '6px 10px', color: '#000' }}>
                        No Data found
                    </Typography>
                </Box>
                : <>
                    {list && list.length > 0 && list?.map((e, i) => <Box sx={{ margin: '10px 0px', backgroundColor: e.ishighlight ? 'rgb(237, 231, 246)' : '', padding: '10px 0px' }}>
                        <Box sx={{ display: 'flex' }} onClick={() => handleToggle(i + 1)}>
                            <Box sx={{ width: '20px' }}>
                                <input style={{ 'border': 'none', 'outline': 'none', backgroundColor: 'transparent' }}
                                    value={e.ishighlight}
                                    type={'checkbox'}
                                    checked={e.ishighlight}
                                    onChange={() => checkedHandler(i + 1)}
                                />
                            </Box>
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <Typography variant="body1" component="span" sx={{ padding: '6px 10px', color: '#000' }}>
                                        Alert {i + 1}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body1" component="span" sx={{ padding: '6px 10px', color: '#000' }}>

                                        {e['atlstatus']}
                                    </Typography>
                                    <Grid item xs={1}>
                                        {
                                            expanded?.includes(i + 1) ? <MdOutlineExpandLess size={25} color={theme.palette.textColor} />
                                                : <MdExpandMore size={25} color={theme.palette.textColor} />}
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Box>
                        <Collapse
                            in={expanded?.includes(i + 1)}
                            timeout="auto"
                            unmountOnExit
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0px 20px' }}>
                                {Object.keys(e).map(ele => (e[ele] && ele != 'cid' && ele != 'isopen' && ele != 'ishighlight' && ele != 'mid' && ele != 'snlid' && ele != 'alid' && ele != 'logdate' && ele != 'tid' && ele != 'slid' && <Grid container spacing={0} >
                                    <Grid item xs={2} sx={{ border: '0.5px solid rgb(145, 89, 255)' }}>
                                        < Box >
                                            <Typography variant="body1" sx={{ padding: '6px 10px', textTransform: ele == 'ntn' ? 'uppercase' : 'capitalize' }}>
                                                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>{ele.replace('_', ' ')} :</span>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={10} sx={{ border: '0.5px solid rgb(145, 89, 255)' }}>
                                        <Box >
                                            <Typography variant="body1" sx={{ padding: '6px 10px', textTransform: ele == 'ntn' ? 'uppercase' : 'capitalize' }}>
                                                <p style={{ fontSize: '16px', margin: '0px', color: '#000' }}>{String(e[ele])}</p>
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                                ))}
                            </Box>
                        </Collapse>
                    </Box>
                    )}
                </>}
        </Box>
    </Box>
}
export default StifleContainer;
