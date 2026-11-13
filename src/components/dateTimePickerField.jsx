import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";
import { Box, Tooltip, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
const CssDateTimePicker = styled(DateTimePicker)(({ theme }) => ({
  // '& label.Mui-focused': {
  //   color: theme.palette.inputLabelFocusedColor,
  // },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.inputFieldsetColor,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.inputFocusedColor,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.inputFocusedColor,
    },
  }
}));

const DateTimePickerFields = ({ error, type, fieldName, control, minDate, rules, label, phone, disabled, helperText, format, ...rest }) => {
  const theme = useTheme()
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (

          <Tooltip title={rules && rules?.required ? rules.required : ""}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CssDateTimePicker
                minutesStep={1}
                format={format ? format : "DD/MM/YYYY HH:mm"}
                slotProps={{
                  layout: { sx: { bgcolor: theme.palette.backgroundBaseColor } },
                  leftArrowIcon: { sx: { color: theme.palette.textColor } },
                  rightArrowIcon: { sx: { color: theme.palette.textColor } },
                  switchViewIcon: { sx: { color: theme.palette.textColor } },
                  openPickerIcon: { sx: { color: theme.palette.textColor } },
                  textField: {
                    size: 'small',
                  }
                }}
                inputRef={field.ref}
                label={`${label}${rules?.required ? '*' : ''}`}
                value={field.value ? dayjs(field.value) : null}
                minDateTime={minDate ? dayjs(minDate) : null}
                onChange={e => e ? field.onChange(String(e)) : field.onChange('')}
                disabled={disabled}
                ampm={false}
                timeSteps={{ hours: 1, minutes: 1, seconds: 5 }}
                {...rest}
                sx={{ width: '100%' }}
              />
            </LocalizationProvider>
            {/* {error && (
              <Typography variant="body2" color="error" sx={{ margin: '5px' }}>
                {`${error.message}`}
              </Typography>
            )} */}
          </Tooltip>

        );
      }}
    />
  );
};

export default DateTimePickerFields;
