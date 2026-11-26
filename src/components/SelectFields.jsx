import React, { useEffect, useRef, useState } from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
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

const SelectFields = ({
  label,
  fieldName,
  onChangeValue,
  control,
  options,
  rules,
  error,
  disabled,
  onBlur,
  body,
  filterEndPoint,
  mapperName,
  mapperId,
  getValueName,
  setValue,
  getValueID,
  setIsLoadingFiller,
  fieldValue
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(options);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const theme = useTheme()
  const dispatch = useDispatch();

  const debounceRef = useRef(null);

  const fetchFilter = (search, page = 1) => {
    if (options?.length == 0 && filterEndPoint) {
      setIsLoading(true)
      console.log(fieldValue)
      if (setIsLoadingFiller && !fieldValue) {
        setIsLoadingFiller(true)
      }
      dispatch(filterEndPoint({
        "text": search,
        "recordcount": 50,
        "pagenumber": pageNumber
      })).then(async res => {
        setIsLoading(false)


        const newlist = res.payload.map((e) => {
          return { label: e[mapperName], value: e[mapperId] };
        })
        await setList(prev => {
          const existingValues = new Set(prev.map(item => item.value));
          const uniqueNewItems = newlist.filter(item => !existingValues.has(item.value));

          return [...prev, ...uniqueNewItems];
        })


        // setList(prev => [...prev, ...list])
        if (setValue && getValueName) {
          setTimeout(() => {

            setValue(fieldName, getValueName)
            if (setIsLoadingFiller) {
              setIsLoadingFiller(false)
            }
          }, 100)

        }
      })
        .finally(() => {
          setIsLoading(false);
          if (setIsLoadingFiller) {
            setIsLoadingFiller(false);
          }
        });
    }
  }

  useEffect(() => {
    if (getValueName && getValueID && options?.length === 0 && filterEndPoint) {
      fetchFilter(getValueID);

    }
  }, [getValueName, getValueID]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        const updateValue = (data) => {
          onChange(data ? String(data.value) : "")
          if (onChangeValue) {
           onChangeValue(data ? String(data.value) : "");
          }
        }
        return (
          // <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
          //   {isLoading && <CircularProgress size={10} sx={{ marginRight: '1px' }} />}
          <Tooltip title={rules?.required ? rules.required : ""}>
            <CssAutocomplete
              size="small"
              componentsProps={{
                paper: { sx: { bgcolor: theme.palette.backgroundBaseColor } }
              }}
              disabled={disabled}
              onBlur={onBlur}
              options={list}
              loading={isLoading}
              loadingText="Loading..."
              onChange={(_, data) => updateValue(data)}
              onInputChange={async (_, value, reason) => {
                if (!filterEndPoint) return;
                if (reason !== "input") return;

                setSearchText(value);
                setList([]);

                if (debounceRef.current) {
                  clearTimeout(debounceRef.current);
                }
                debounceRef.current = setTimeout(() => {
                  if (value.length >= 5) {
                    setPageNumber(1);
                    fetchFilter(value, 1);
                  }
                }, 500);
              }}
              noOptionsText={
                filterEndPoint
                  ? searchText.length < 5
                    ? "Enter at least 5 characters"
                    : isLoading
                      ? "Loading..."
                      : "No records found"
                  : "No options"
              }
              value={value ? value : null}
              ListboxProps={filterEndPoint ? {
                onScroll: (event) => {
                  const listboxNode = event.currentTarget;

                  const isBottom =
                    listboxNode.scrollTop + listboxNode.clientHeight >=
                    listboxNode.scrollHeight - 5;

                  if (
                    filterEndPoint &&
                    isBottom &&
                    !isLoading &&
                    hasMore &&
                    searchText.length >= 5 &&
                    list.length > 0 &&
                    list.length % 50 === 0
                  ) {
                    const nextPage = pageNumber + 1;

                    setPageNumber(nextPage);
                    fetchFilter(searchText, nextPage);
                  }
                }
              } : undefined}
              getOptionLabel={(option) => {
                if (option?.label) {
                  return option?.label;
                } else if (option) {
                  return list?.filter(e => (e.value == option))[0]?.label || ""
                }
                return "";
              }}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  error={error && true}
                  // onFocus={() => fetchFilter()}
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

          // </Box>
        )
      }}
    />
  );
};

export default SelectFields;
