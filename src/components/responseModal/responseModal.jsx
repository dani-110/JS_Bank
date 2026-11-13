import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import './responseModal.scss'
import { useDispatch, useSelector } from "react-redux";
import { LuCircleCheck, LuCircleX, LuInfo, LuLightbulb, LuMessageCircleWarning } from "react-icons/lu";
import { uiActions } from "../../store/reducers/ui-slice";

const style = {
    top: '50%',
    left: '50%',
    width: '25%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ResponseModal = (props) => {
    const { title, status, message } = props
    const { responseNotification } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const showCancel = props.showCancel ?? responseNotification?.showCancel ?? false;
    const cancelText = props.cancelText || responseNotification?.cancelText || "Cancel";
    const proceedText = props.proceedText || responseNotification?.proceedText || "OK";

    const onCancel = props.onCancel || responseNotification?.onCancel;
    const onProceed = props.onProceed || responseNotification?.onProceed;

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        dispatch(uiActions.hideResponseNotification());
        setOpen(false)
    }


    useEffect(() => {
        console.log(status)
        if (responseNotification) {
            console.log('here')
            handleOpen();
        }
    }, [responseNotification, dispatch]);

    const getStatus = () => {
        if (status == 'success')
            return {
                headerBackground: '#f3fdf8',
                background: '#10bb58',
                BtnHoverbackground: '#0fa04e',
                icon: <LuCircleCheck color="#10bb58" size={'50%'} />
            };
        if (status == 'error')
            return {
                headerBackground: '#fff6f6',
                background: '#f03d3d',
                BtnHoverbackground: '#bd3333',
                icon: <LuCircleX color="#f03d3d" size={'50%'} />
            };
        if (status == 'warning')
            return {
                headerBackground: '#fef5e5',
                background: '#f5c455',
                BtnHoverbackground: '#9a7b34',
                icon: <LuMessageCircleWarning color="#f5c455" size={'50%'} />
            };
        if (status == 'info')
            return {
                headerBackground: '#eef2fe',
                background: '#3d89e7',
                BtnHoverbackground: '#2f6bb4',
                icon: <LuLightbulb color="#3d89e7" size={'50%'} />
            };
    };

    const handleCancelClick = () => {
        if (onCancel) onCancel();
        handleClose();
    };

    const handleProceedClick = () => {
        if (onProceed) onProceed();
        handleClose();
    };

    return (
        <>
            {open && <Box style={{ height: '100vh', width: '100vw', background: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: '0px', left: '0px', zIndex: '2000', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Box style={{ ...style, width: style.width }}>
                    <Card classes='responseModalCardContainer' >
                        <Box sx={{ height: '25vh', background: getStatus().headerBackground, borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <LuCircleCheck color={getStatus().background} size={'50%'} /> */}
                            {getStatus().icon}
                        </Box>
                        <Box sx={{ height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: "25px", color: '#000', fontWeight: '500' }}>{title}</Typography>
                            <Typography sx={{ fontSize: "15px", color: '#000', fontWeight: '400', textAlign: 'center' }}>{message}</Typography>

                            {/* {!showCancel && <Button variant="contained" sx={{
                                background: getStatus().background, width: '40%', marginTop: '20px', '&:hover': {
                                    background: getStatus().BtnHoverbackground
                                }
                            }}
                                onClick={handleClose}>OK</Button>} */}

                            <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center', marginTop:'10px' }}>
                                {showCancel && (
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        sx={{ width: '40%' }}
                                        onClick={handleCancelClick}
                                    >
                                        {cancelText}
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    sx={{
                                        background: getStatus().background,
                                        width: showCancel ? '40%' : '50%',
                                        '&:hover': {
                                            background: getStatus().BtnHoverbackground
                                        }
                                    }}
                                    onClick={handleProceedClick}
                                >
                                    {proceedText}
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Box>}
        </>
    );
};

export default ResponseModal;
