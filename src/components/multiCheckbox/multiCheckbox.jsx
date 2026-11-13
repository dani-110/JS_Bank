import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from '@mui/material/styles';
import { useTheme } from "@emotion/react";
import './multiCheckbox.scss'

const MultiCheckbox = (props) => {
    const { fieldName, lable, control, list } = props;
    const theme = useTheme()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const CssCheckbox = styled(Checkbox)(({ theme }) => ({
        '.MuiSvgIcon-root': {
            fill: theme.palette.secondary.main
        },
    }));
    return (
        <Controller
            name={fieldName}
            control={control}
            render={({ field }) => {
                return (<Box>
                    <Box className='multiCheckboxContainerView' sx={{ border: `1px solid ${theme.palette.inputBorder}` }}>
                    <Typography variant="body1">{lable}:</Typography>
                        {
                            list.map((item, i) => (
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                    <Typography variant="body1">{item}</Typography>
                                    <CssCheckbox
                                        value={field.value}
                                        checked={field.value.includes(item)}
                                        sx={{padding:'7px'}}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            const updatedValues = isChecked
                                                ? [...field.value, item]
                                                : field.value.filter((value) => value !== item);
                                            field.onChange(updatedValues)
                                        }} {...label} />

                                    {/* <div style={{ position: 'relative', display: 'inline-block', width: '20px', height: '20px' }}>
                                        <input style={{margin: '0px 5px'}} className="checkbox"
                                            type={'checkbox'}
                                            value={field.value}
                                            checked={field.value.includes(item)}
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;
                                                const updatedValues = isChecked
                                                    ? [...field.value, item]
                                                    : field.value.filter((value) => value !== item);
                                                field.onChange(updatedValues)
                                            }} {...label}
                                        />
                                    </div> */}
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                );
            }}
        />
    )
};

export default MultiCheckbox;
