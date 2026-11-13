import React, { useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { useTheme } from '@emotion/react';
import { LuCheck } from "react-icons/lu";

const OtpTextField = styled(TextField)(({ theme, height, width, fontSize }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: '#000',
    },
    "&:hover fieldset": {
      borderColor: '#000',
    },
    "&.Mui-focused fieldset": {
      borderColor: '#000',
    },
  },
  "& input": {
    textAlign: "center",
    height: height ? height : '14px',
    width: width ? width : '18px',
    fontSize: fontSize ? fontSize : '10px',
    padding: '0px',
    margin: '0px',
    lineHeight: '10px'

  },
}));

const BlockField = ({
  fieldName,
  control,
  length,
  disabled = false,
  rules,
  error,
  height,
  width,
  fontSize,
  value
}) => {
  const inputsRef = useRef([]);
  const theme = useTheme()

  const handleChange = (value, index, otpArray, onChange) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpArray];
    newOtp[index] = value; // ✅ index fixed
    onChange(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index, otpArray, onChange) => {
    if (e.key !== "Backspace") return;

    e.preventDefault();

    const newOtp = [...otpArray];
    newOtp[index] = ""; // ✅ sirf isi index ko empty
    onChange(newOtp);

    if (index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      {Array.from({ length }).map((_, i) => (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: "center",
          height: height ? height : '14px',
          width: width ? width : '14px',
          fontSize: fontSize ? fontSize : '10px',
          lineHeight: '10px',
          border: '1px solid',
          borderRight:
            i === length - 1 ? `1px solid ${theme.palette.inputFieldsetColor}` : "none"
        }}>
          {
            value == 'tick' ?
            <LuCheck size={8}/>
            :
              <Typography sx={{ fontSize: '8px', fontWeight: '400', textAlign: 'center', lineHeight: '10px', textTransform:'capitalize' }}>{value?.[i] || ""}</Typography>
          }
        </Box>
      ))}
    </Box>
    // <Controller
    //   name={fieldName}
    //   control={control}
    //   defaultValue=""
    //   rules={rules}
    //   render={({ field }) => (
    //     <Box display="flex">
    //       {Array.from({ length }).map((_, i) => (
    //         <OtpTextField
    //           height={height}
    //           width={width}
    //           fontSize={fontSize}
    //           key={i}
    //           inputRef={(el) => (inputsRef.current[i] = el)}
    //           value={field.value?.[i] || ""}
    //           disabled={disabled}
    //           onChange={(e) =>
    //             handleChange(e.target.value, i, field.value, field.onChange)
    //           }
    //           onKeyDown={(e) =>
    //             handleKeyDown(e, i, field.value, field.onChange)
    //           }

    //           required={(rules?.required) && true}
    //           inputProps={{ maxLength: 1 }}
    //           sx={{
    //             "& fieldset": {
    //               borderRight:
    //                 i === length - 1 ? `1px solid ${theme.palette.inputFieldsetColor}` : "none",
    //               borderRadius: '0px'
    //             },
    //           }}
    //         />
    //       ))}
    //       {error && (
    //         <Typography variant="body2" color="error" sx={{ margin: '5px' }}>
    //           {`${error.message}*`}
    //         </Typography>
    //       )}
    //     </Box>
    //   )}
    // />
  );
};

export default BlockField;
