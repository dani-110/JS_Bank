import React from "react";
import { Box, Grid, Slider, Switch, Tooltip, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTheme } from '@mui/material/styles';

const RangeSliderBar = (props) => {
    const { fieldName, lable, control, rules, disabled, MIN, MAX, error, } = props;
    const theme = useTheme()
    return (
        <Controller
            name={fieldName}
            control={control}
            // defaultValue={[MIN, MAX]} // ✅ IMPORTANT
            rules={rules}
            render={({ field }) => {

                console.log(field.value, 'value')
                return (
                    <Box sx={{ border: '1px solid', borderColor: theme.palette.inputBorder, borderRadius: '5px' }}>
                        <Tooltip title={rules?.required ? rules.required : ""}>
                            <Grid container spacing={1} sx={{ alignItems: 'center', padding: '0px 10px' }}>

                                {lable && (
                                    <Grid item xs={2}>
                                        <Typography variant="body2" color={error ? 'red' : ''}>
                                            {lable}{rules?.required && '*'}
                                        </Typography>
                                    </Grid>
                                )}

                                <Grid item xs={10} sx={{ padding: '0px 10px', }}>
                                    <Box sx={{ flex: 1, display: 'flex', gap: '10px', alignItems: 'center', padding: '4px 0px' }}>
                                        <Typography variant="body2">
                                            {MIN}
                                        </Typography>

                                        <Slider
                                            sx={{
                                                border: '1px solid', padding: '0px', margin: '0px',
                                                '& .MuiSlider-markLabel': {
                                                    margin: 0,
                                                    padding: 0,
                                                    top: '10px',
                                                    left: '5px',
                                                    fontSize: '12px', // optional

                                                },
                                            }}
                                            getAriaLabel={() => 'Temperature range'}
                                            value={Array.isArray(field.value) ? field.value : [MIN, MAX]}
                                            min={MIN}
                                            max={MAX}
                                            color="secondary"
                                            // marks={[
                                            //     { value: MIN, label: `${MIN}` },
                                            //     { value: MAX, label: `${MAX}` },
                                            // ]}
                                            onChange={(e, newValue) => field.onChange(newValue)}
                                            valueLabelDisplay="auto"
                                        />

                                        {/* Display selected range */}

                                        <Typography variant="body2">
                                            {MAX}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" textAlign="center" sx={{ padding: '0px !important', lineHeight: '10px' }}>
                                        {field.value?.[0]} - {field.value?.[1]}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Tooltip>
                    </Box>
                )
            }}
        />
    )
};

export default RangeSliderBar;
