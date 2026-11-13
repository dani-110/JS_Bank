import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, IconButton, Tooltip, Typography, styled } from '@mui/material';
import { FaRegEye } from "react-icons/fa";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from '@emotion/react';

export default function BalanceShown({ title, fetchBalance, isLoading }) {
    const [progress, setProgress] = React.useState(1);
    const [progressShow, setProgressShow] = React.useState(false);
    const [intervalId, setIntervalId] = React.useState();
    const [balance, setBalance] = React.useState('');
    const theme = useTheme()

    const startCountDown = async () => {
        await fetchBalance().then(res => {
            setBalance(res)
            setProgressShow(true)
            setIntervalId(setInterval(() => {

                setProgress(prevSeconds => prevSeconds + 1);

            }, 1000));
        })


    }
    React.useEffect(() => {
        if (progress === 11) {
            clearInterval(intervalId);
            setProgressShow(false);
            setProgress(0)
        }
    }, [progress]);


    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 10px', borderRadius: '5px', border: `1px solid ${theme.palette.inputBorder}` }}>
                {title && <Typography sx={{ marginRight: '5px' }} variant='body1'>{title}</Typography>}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {progressShow && <Typography sx={{ marginRight: '5px' }} variant='body1'>{balance}</Typography>}
                    {!progressShow && <Typography sx={{ marginRight: '5px' }} variant='body1'>
                        {/* {Array.from(value).map(() => '*').join('')} */}
                        ****
                    </Typography>}
                    <Box>
                        {!progressShow && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            {isLoading && <CircularProgress size={20} />}
                            <Tooltip title={'View'}>
                                <IconButton onClick={startCountDown} sx={{ width: '40px' }}>
                                    <FaRegEye size={25} color={'rgb(93, 135, 255)'} />
                                </IconButton>
                            </Tooltip>
                        </Box>}

                    </Box>
                    {progressShow && <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress
                            variant="determinate"
                            value={(progress / 10) * 100}
                            aria-label="Export data"
                        />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" color="text.secondary">
                                {`${progress}/10`}
                            </Typography>
                        </Box>
                    </Box>}
                    {/* <LinearProgress color='primary' variant="determinate" value={(progress / 30) * 100} />} */}
                </Box>

            </Box>
        </>
    );
}