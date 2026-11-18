import { Box, Button, Divider, Fade, Grid, IconButton, Modal, Popper, Tooltip, Typography, useTheme } from "@mui/material";
import React, { Children, useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import HeadingTitle from "../headingTitle/headingTitle";
import './viewModal.scss'
import { IoEyeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";

const style = {
    width: '30%',
    height: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const ViewModal = (props) => {
    const { children, heading, showError, setShowError, open, setOpen, tooltip, title, type, fill, createLabel, disabled, buttonColor, isNotScrollable } = props
    const theme = useTheme()
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const handleOpen = () => {
        if (showError) {
            setShowError()
        } else {
            breadCrumCtxt.breadCrumSelectorAddHandler(tooltip);
            console.log('here')
            setOpen(true)
        }
    }
    const handleClose = () => {
        breadCrumCtxt.breadCrumSelectorRemoveHandler(tooltip);
        setOpen(false)
    }


    return (
        <>


            {tooltip == 'Create' ?
                <Button size="medium" variant="contained" color="secondary" sx={{ margin: '0px 0px 10px', }} onClick={handleOpen} disabled={disabled}> {createLabel ? createLabel : 'Add New'}</Button >
                :
                type == 'button' ?
                    <Button size="medium" color={buttonColor ? buttonColor : "primary"} variant={fill ? "contained" : 'text'} onClick={handleOpen} disabled={disabled}>{title}</Button>
                    :
                    <Tooltip title={tooltip}>
                        {
                            <Box onClick={handleOpen} disabled={disabled} sx={{ border: '1px solid #d7dfea', borderRadius: '8px', padding: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: disabled ? 0.4 : 1 }}>
                                {type == 'View' && <IoEyeOutline color={theme.palette.darkBaseColor} size={20} strokeWidth={3} />}
                                {type == 'Edit' && <MdOutlineModeEditOutline color={theme.palette.darkBaseColor} size={20} />}
                            </Box>}
                        {/* <IconButton onClick={handleOpen} sx={{ width: '40px', margin: '0px auto' }} disabled={disabled}>
                            <img src={img} style={{ width: '25px', height: '25px', objectFit: 'contain', opacity: disabled ? 0.4 : 1 }} />
                        </IconButton> */}
                    </Tooltip>

            }
            {
                open && <Box style={{ height: '100vh', width: '100vw', background: 'rgba(0, 0, 0, 0.1)', position: 'absolute', bottom: '0px', left: '0px', zIndex: '1000', display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                    <Box style={{ ...style }}>

                        <Card style={{
                            overflow: isNotScrollable ? 'hidden' : 'auto',
                            height: '98%',
                            padding: '5px',
                            display: 'flex',
                            flexDirection: 'column'

                        }} >
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                                {/* <HeadingTitle isNotBreadCrumb={isNotBreadCrumb} descriptionText={descriptionText} title={heading ? heading : tooltip} handleClose={handleClose} /> */}
                                <Typography variant="body1" color={'secondary'} sx={{ textAlign: 'left', letterSpacing: '1px', fontWeight: '500' }}>
                                    {heading ? heading : tooltip}
                                </Typography>
                                <Box onClick={handleClose} disabled={disabled} sx={{ border: '1px solid #d7dfea', borderRadius: '8px', padding: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: disabled ? 0.4 : 1 }}>
                                    {<IoMdClose color={theme.palette.darkBaseColor} size={20} strokeWidth={3} />}
                                </Box>
                            </Box>
                            {/* <Divider sx={{ margin: '10px 0px', bgcolor: 'textColor' }} /> */}
                            <Box sx={{ flex: 1 }}>
                                {children}
                            </Box>
                            {type == 'View' && <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0px' }}>
                                <Button onClick={handleClose} variant="outlined" color="secondary" sx={{ width: '70%' }}>Close Details</Button>
                            </Box>}
                        </Card>
                    </Box>
                </Box>
            }
        </>
    );
};

export default ViewModal;
