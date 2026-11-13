import React from "react";
import { Box, Grid, Slider, Switch, Tooltip, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTheme } from '@mui/material/styles';

const SliderBar = (props) => {
    const { fieldName, lable, control, rules, disabled, MIN, MAX, error, } = props;
    const theme = useTheme()

    const marks = [
        {
            value: MIN,
            label: '',
        },
        {
            value: MAX,
            label: '',
        },
    ];

    return (
        <Controller
            name={fieldName}
            control={control}
            rules={rules}
            render={({ field }) => {
                return (
                    <Tooltip title={rules?.required ? rules.required : ""}>
                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                            {lable && <Grid item xs={5}>
                                <Typography variant="body2" color={error ? 'red' : ''}>{lable}{rules?.required && '*'}</Typography>
                            </Grid>}
                            <Grid item xs={7} sx={{ padding: '0px 10px' }}>
                                <Slider
                                    aria-label="default"
                                    value={field.value}
                                    onChange={field.onChange}
                                    min={MIN}
                                    max={MAX}
                                    marks={marks}
                                    // step={MAX / 10}
                                    disabled={disabled}
                                    color="secondary"
                                // valueLabelDisplay="auto"
                                />
                                {console.log(field.value)}
                                <Typography variant="body2" sx={{ margin: '0px', padding: '0px' }} textAlign={'center'}>{field.value ? field.value : 0}</Typography>
                            </Grid>
                        </Grid>
                        {/* {error && (
                            <Typography variant="body2" color="error" sx={{ margin: '5px' }}>
                                {`* ${error.message}`}
                            </Typography>
                        )} */}
                    </Tooltip>
                );
            }}
        />
    )
};

export default SliderBar;
