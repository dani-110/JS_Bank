import React, { useEffect, useState } from 'react';
import TabelContainer from '../../../components/table/table';
import { Box, CircularProgress, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ModalButton from '../../../components/modalButton/modalButton';
import view from '../../../assests/view.png'
import AdverseMediaView from './atlView';

const DataGrid = (props) => {
    const { isLoading, fetchList, dataSet } = props
    const { list, total } = dataSet

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        console.log(list)
        let arr = []
        list?.forEach((ele) => {
            const obj = { ...ele }
            obj['isopenValue'] = obj.isopen ? 'True' : 'False'
            obj['ishighlightValue'] = obj.ishighlight ? 'True' : 'False'
            arr.push(obj)
        })
        setDataList(arr)
    }, [list])

    const tableHeader = [
        'MID',
        'Log Date',
        'TID',
        'Is Open',
        'IS Highlight',
        'Entity',
        'Full Name',
        'National Id',
    ]
    const verifyParam = [
        'mid',
        'logdate',
        'tid',
        'isopenValue',
        'ishighlightValue',
        'entity',
        'fullname',
        'nationalid',
    ]

    // return <TabelContainer
    //     tableHeader={tableHeader}
    //     action={TableAction}
    //     data={dataList}
    //     verifyParam={verifyParam}
    //     isLoading={isLoading}
    //     count={total}
    //     fetchList={fetchList}
    // />
    return <>
        <Box sx={{ background: '#b0b0b0f5', display: 'flex', alignItems: 'center', margin: '10px 0px', position: 'sticky', top: 0, zIndex: 100 }}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Typography variant="h4" component="span" sx={{ padding: '6px 10px', }}>
                        Customer Detail
                    </Typography>
                </Grid>
                <Grid item xs={10}>
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
        {dataList && dataList.length > 0 && dataList?.map((e, i) => <Box sx={{ margin: '10px 0px', backgroundColor: e.ishighlight ? 'rgb(237, 231, 246)' : '' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0px 20px' }}>
                {Object.keys(e).map(ele => (e[ele] && ele != 'cid' && ele != 'isopen' && ele != 'ishighlight' && ele != 'mid' && ele != 'snlid' && ele != 'alid' && ele != 'logdate' && ele != 'tid' && ele != 'slid' && <Grid container spacing={0} >
                    <Grid item xs={2} sx={{ border: '0.5px solid rgb(145, 89, 255)' }}>
                        < Box >
                            <Typography variant="body1" sx={{ padding: '6px 10px', textTransform: ele == 'ntn' ? 'uppercase' : 'capitalize', textAlign: 'start' }}>
                                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>{ele.replace('_', ' ')} :</span>
                            </Typography>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={10} sx={{ border: '0.5px solid rgb(145, 89, 255)' }}>
                        <Box >
                            <Typography variant="body1" sx={{ padding: '6px 10px', textTransform: ele == 'ntn' ? 'uppercase' : 'capitalize', textAlign: 'start' }}>
                                <p style={{ fontSize: '16px', margin: '0px', color: '#000' }}>{String(e[ele])}</p>
                            </Typography>
                        </Box>
                    </Grid> */}

                    <Grid item xs={10} sx={{ border: '0.5px solid rgb(145, 89, 255)', minWidth: 0 }}>
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    padding: '6px 10px',
                                    textTransform: ele == 'ntn' ? 'uppercase' : 'capitalize',
                                    textAlign: 'start',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word',
                                    color: '#000 !important'
                                }}
                            >
                                {String(e[ele])}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                ))}
            </Box>
        </Box>
        )}
    </>
}
export default DataGrid;


const TableAction = (data) => {
    const item = data.id
    const [openView, setOpenView] = React.useState(false);
    return (
        <Box>
            <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <AdverseMediaView data={item} />
            </ModalButton>
        </Box>
    )
}