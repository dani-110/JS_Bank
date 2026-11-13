import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  TextField,
  Tooltip,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { LuSearch } from "react-icons/lu";

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

const SearchSelectFields = ({
  label,
  fieldName,
  onChangeValue,
  control,
  options,
  rules,
  error,
  disabled,
  filterEndPoint
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(options || []);
  const theme = useTheme()
  const dispatch = useDispatch();

  const fetchFilter = () => {
    if (filterEndPoint) {
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
        const updateValue = (data) => {
          onChange(data ? String(data.value) : "")
          if (onChangeValue) {
            onChangeValue()
          }
        }
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
              onChange={(_, data) => updateValue(data)}
              value={value ? value : null}
              getOptionLabel={(option) => {
                // if (option?.label) {
                //   return option?.label;
                // } else if (option) {
                //   return list?.filter(e => (e.value == option))[0]?.label || ""
                // }
                // return "";
                if (option?.label) return option.label;

                // option may be a primitive (value) → find matching label
                if (option && list?.length > 0) {
                  const item = list.find(e => e.value == option);
                  return item?.label || "";
                }

                return "";
              }}
              fullWidth
              renderInput={(params) => (
                <Box sx={{ display: 'flex', }}>
                  <TextField
                    {...params}
                    label={label}
                    error={error && true}
                    // onFocus={() => fetchFilter()}
                    autoComplete="off"
                    required={(rules?.required) && true}
                    InputProps={{
                      ...params.InputProps,   // 👈 Required to avoid crash
                      endAdornment: (
                        <>
                          {params.InputProps.endAdornment}
                          <Box
                            onClick={() => fetchFilter()}
                            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                          >
                            <LuSearch />
                          </Box>
                        </>
                      )
                    }}
                  />

                </Box>
              )}
              isOptionEqualToValue={(option, value) => {
                if (value.value) {
                  return option?.value == value?.value;
                } else if (value) {
                  return option?.value == value;
                }
              }}
            />
          </Tooltip>
        )
      }}
    />
  );
};

export default SearchSelectFields;
