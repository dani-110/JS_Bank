import { Box, Button, Divider, Fade, Grid, IconButton, Modal, Popper, Tooltip, Typography } from "@mui/material";
import React, { Children, useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import HeadingTitle from "../headingTitle/headingTitle";
import './modalButton.scss'
import { IoIosArrowForward } from "react-icons/io";

const style = {
    top: '50%',
    left: '50%',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalButton = (props) => {
    const { children, isNotBreadCrumb, descriptionText, heading, isOpen, showError, setShowError, open, setOpen, tooltip, img, title, type, fill, width, height, createLabel, disabled, buttonColor, isNotScrollable } = props

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
                <Button size="medium" variant="contained" color="secondary" sx={{ margin: '0px 0px 10px',}} onClick={handleOpen} disabled={disabled}> {createLabel ? createLabel : 'Add New'}</Button >
                :
                type == 'button' ?
                    <Button size="medium" color={buttonColor ? buttonColor : "primary"} variant={fill ? "contained" : 'text'} onClick={handleOpen} disabled={disabled}>{title}</Button>
                    :
                    <Tooltip title={tooltip}>
                        <IconButton onClick={handleOpen} sx={{ width: '40px', margin: '0px auto' }} disabled={disabled}>
                            <img src={img} style={{ width: '25px', height: '25px', objectFit: 'contain', opacity: disabled ? 0.4 : 1 }} />
                        </IconButton>
                    </Tooltip>

            }
            {
                open && <Box style={{ height: '100vh', width: '100vw', background: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: '0px', left: '0px', zIndex: '1000', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Box style={{ ...style, width: width ? width : style.width }}>

                        <Card style={{
                            overflow: isNotScrollable ? 'hidden' : 'auto',
                            ...(height
                                ? { height }
                                : { maxHeight: '85vh' }
                            )

                        }} >
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <HeadingTitle isNotBreadCrumb={isNotBreadCrumb} descriptionText={descriptionText} title={heading ? heading : tooltip} handleClose={handleClose} />

                            </Box>
                            <Divider sx={{ margin: '10px 0px', bgcolor: 'textColor' }} />

                            {children}
                        </Card>
                    </Box>
                </Box>
            }
        </>
    );
};

export default ModalButton;
