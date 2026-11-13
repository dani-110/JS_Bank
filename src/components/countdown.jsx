import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, IconButton, Tooltip, Typography, styled } from '@mui/material';
import { FaRegEye } from "react-icons/fa";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from '@emotion/react';

export default function CountDown({ value }) {
    const [progress, setProgress] = React.useState(1);
    const [progressShow, setProgressShow] = React.useState(false);
    const [intervalId, setIntervalId] = React.useState();
    const theme = useTheme()

    const startCountDown = () => {
        setProgressShow(true)
        setIntervalId(setInterval(() => {

            setProgress(prevSeconds => prevSeconds + 1);

        }, 1000));

    }
    React.useEffect(() => {
        if (progress === 30) {
            clearInterval(intervalId);
            setProgressShow(false);
            setProgress(0)
        }
    }, [progress]);


    return (
        <>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {progressShow && <Typography sx={{ marginRight: '5px' }} variant='body1'>{value}</Typography>}
                {!progressShow && <Typography sx={{ marginRight: '5px' }} variant='body1'>
                    {/* {Array.from(value).map(() => '*').join('')} */}
                    ****
                </Typography>}
                <Box>
                    {!progressShow && <Tooltip title={'View'}>
                        <IconButton onClick={startCountDown} sx={{ width: '40px', margin: '0px auto' }}>
                            <FaRegEye size={25} color={'rgb(93, 135, 255)'} />
                        </IconButton>
                    </Tooltip>}

                </Box>
            </Box>
            <Box>
                {progressShow && <LinearProgress color='primary' variant="determinate" value={(progress / 30) * 100} />}
            </Box>
        </>
    );
}