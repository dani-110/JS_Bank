import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Tooltip,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch } from "react-redux";

const CssAutocomplete = styled(Autocomplete)(({ theme }) => ({
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
  '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
    color: theme.palette.textColor,
  },
  '& .MuiSvgIcon-root': {
    fill: theme.palette.textColor
  },
  '& .MuiSvgIcon-root': {
    fill: theme.palette.textColor
  }
}));

const TestSelectFields = ({
  label,
  fieldName,
  control,
  options,
  rules,
  error,
  disabled,
  filterEndPoint
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(options);
  const theme = useTheme()
  const dispatch = useDispatch();

  const fetchFilter = () => {
    if (options?.length == 0) {
      setIsLoading(true)
      dispatch(filterEndPoint({})).then(res => {
        setIsLoading(false)
        setList(res.payload.map(({ displayvalue, codevalue }) => {
          return { label: displayvalue, value: codevalue };
      }))
      })
    }
  }
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <Tooltip title={rules?.required ? rules.required : ""}>
            <CssAutocomplete
              size="small"
              componentsProps={{
                paper: { sx: { bgcolor: theme.palette.backgroundBaseColor } }
              }}
              disabled={disabled}
              options={list}
              loading={isLoading}
              loadingText="Loading..."
              onChange={(_, data) => onChange(data ? String(data.value) : "")}
              value={value ? value : null}
              getOptionLabel={(option) => {
                if (option.label) {
                  return option.label;
                } else if (option) {
                  return list.filter(e => (e.value == option))[0]?.label || ""
                }
                return "";
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  error={error && true}
                  onFocus={() => fetchFilter()}
                  autoComplete="off"
                  required={(rules?.required) && true}
                />
              )}
              isOptionEqualToValue={(option, value) => {
                if (value.value) {
                  return option.value == value.value;
                } else if (value) {
                  return option.value == value;
                }
              }}
            />
          </Tooltip>
        )
      }}
    />
  );
};

export default TestSelectFields;
