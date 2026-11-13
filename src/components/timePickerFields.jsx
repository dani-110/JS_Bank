import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker'; // <-- yahan DateTimePicker ki jagah TimePicker import karein
import dayjs from "dayjs";
import { Box, Tooltip, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

const CssTimePicker = styled(TimePicker)(({ theme }) => ({
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

const TimePickerFields = ({ error, fieldName, control, rules, label, disabled, ...rest }) => {
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
              <CssTimePicker
                views={['hours', 'minutes']}
                format="HH:mm" // Sirf time ka format
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
                // Agar value string ya dayjs object hai toh usay handle karna
                value={field.value ? dayjs(`2026-01-01 ${field.value}`) : null} 
                onChange={e => e ? field.onChange(dayjs(e).format('HHmmss')) : field.onChange('')}
                disabled={disabled}
                ampm={false} // 24-hour format ke liye (agar 12-hour chahiye toh true kar dein)
                {...rest}
                sx={{ width: '100%' }}
              />
            </LocalizationProvider>
          </Tooltip>
        );
      }}
    />
  );
};

export default TimePickerFields;