import React, { useCallback, useState } from "react";
import { Box, IconButton, Switch, Tooltip, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTheme } from '@mui/material/styles';
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import './counter.scss'

const Counter = (props) => {
    const { fieldName, label, control, rules, disabled, error } = props;

    const theme = useTheme()
    const handleDecrease = useCallback((onChange, value) => {
        if (value > 0) {
            onChange(value - 1);
        }
    }, []);


    const handleIncrease = useCallback((onChange, value) => {
        onChange(value + 1);
    }, []);

    return (
        <Controller
            name={fieldName}
            control={control}
            rules={rules}
            render={({ field }) => {
                return (
                    <Box className='counterContainerView' sx={{ border: `1px solid ${theme.palette.inputBorder}` }}>
                        <Typography variant="body1" color={error ? 'red' : ''}>{label}{rules?.required && '*'}</Typography>
                        <Tooltip title={rules?.required ? rules.required : ""}>
                            <Box style={{ display: 'flex', alignItems: 'center' }} >
                                <IconButton
                                    style={{
                                        background: theme.palette.secondary.main,
                                        borderRadius: '10px',
                                        height: '25px',
                                        width: '25px',
                                    }}
                                    onClick={() => {
                                        handleDecrease(field.onChange, field.value)
                                    }}
                                >
                                    <TiMinus color="#fff" />
                                </IconButton>
                                {/* <Box className='actionButton' style={{ background: theme.palette.secondary.main }} onClick={() => {
                                    handleDecrease(field.onChange, field.value)
                                }}> */}
                                {/* <button
                                    className='actionButton'
                                    style={{ background: theme.palette.secondary.main }}
                                    onClick={() => handleDecrease(field.onChange, field.value)}
                                >
                                </button> */}

                                {/* </Box> */}
                                <Typography variant="body1" sx={{ margin: '0px 10px', width: '10px', textAlign: 'center' }}>{field.value ? field.value : 0}</Typography>
                                {/* <button
                                    className='actionButton'
                                    style={{ background: theme.palette.secondary.main }}
                                    onClick={() =>handleIncrease(field.onChange, field.value)}
                                >
                                    <TiPlus color="#fff" />
                                </button> */}
                                <IconButton
                                    style={{
                                        background: theme.palette.secondary.main,
                                        borderRadius: '10px',
                                        height: '25px',
                                        width: '25px'
                                    }}
                                    onClick={() => {
                                        handleIncrease(field.onChange, field.value)
                                    }}>

                                    <TiPlus color="#fff" />
                                </IconButton>
                            </Box>
                        </Tooltip>
                    </Box>
                );
            }}
        />
    )
};

export default Counter;
