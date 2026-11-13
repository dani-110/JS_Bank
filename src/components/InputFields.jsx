import { TextField, Tooltip, colors } from "@mui/material";
import { styled } from '@mui/material/styles';
import React, { useRef } from "react";
import { Controller } from "react-hook-form";
import { onlyPhone } from "../utils/Utils";

const CssTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.inputLabelFocusedColor,
  },
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
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.textColor
  },
}));
const InputFields = ({ error, type, fieldName, control, rules, label, phone, disabled, inputProps, helperText, pattern, limit, isCaps, ...rest }) => {

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field }) => {
        const handleChange = (event) => {
          // const newValue = event.target.value;
          if (pattern.test(event)) {
            field.onChange(event);
          }
        };
        return (
          <Tooltip title={error?.message ? error?.message : ""}>
            <CssTextField
              size="small"
              className="outlined"
              required={(rules?.required) && true}
              variant="outlined"
              error={error && true}
              // helperText={error ? error.message : " "}
              type={type}
              inputRef={field.ref}
              label={label}
              value={phone ? onlyPhone(field.value) : field.value}
              onChange={(e) => {
                if (limit && e.target.value.length > limit) {
                  return
                }
                const value = isCaps ? e.target.value?.toUpperCase() : e.target.value;
                pattern ? handleChange(value) : field.onChange(value)
              }}
              fullWidth
              disabled={disabled}
              autoComplete=""
              InputProps={inputProps}
              {...rest}
            />
          </Tooltip>
        );
      }}
    />
  );
};

export default InputFields;
