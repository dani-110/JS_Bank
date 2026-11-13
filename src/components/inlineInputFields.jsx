import { useTheme } from "@emotion/react";
import { Box, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import { Controller } from "react-hook-form";

const InlineInputFields = ({ error, type, fieldName, control, rules, label, phone, disabled, inputProps, helperText, color, onchange, ...rest }) => {
  const theme = useTheme()
  const parseDate = (formattedStr) => {
    const [day, month, year] = formattedStr.split("-");
    return `${year}-${month}-${day}`;
  };
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <Tooltip title={error?.message ? error?.message : ""}>
            <Box sx={{ display: 'flex', 'alignItems': 'center' }}>
              <Typography sx={{ marginRight: '10px', color: `${color ? color : theme.palette.textColor}` }} variant="body1" component="span">{label}:</Typography>
              {/* {type == 'date' && <Typography sx={{ 'borderBottom': `1px solid ${color ? color : theme.palette.textColor}`, width: '50%', height:'17px' }} variant="body2" component="span">{field.value?moment(field.value).format('DD-MM-YYYY'):''}</Typography>} */}
              <input style={{ flex: 1, 'border': 'none', 'outline': 'none', width: type == 'checkbox' ? '3%' : type == 'date' ? '30%' : '50%', backgroundColor: 'transparent', 'borderBottom': `1px solid ${color ? color : theme.palette.textColor}`, }}
                value={field.value}
                checked={field.value}
                type={type}
                onChange={onchange ? onchange : field.onChange}
                disabled={disabled}
                ref={field.ref}
                placeholder={`${error ? error.message + '*' : ''}`}
                required={(rules?.required) && true}
                dateFormat="dd-MM-yyyy"

              />
            </Box>
            {/* {error && (
              <Typography variant="body2" color="error" sx={{ margin: '5px' }}>
                {`${error.message}*`}
              </Typography>
            )} */}
          </Tooltip>
        );
      }}
    />
  );
};

export default InlineInputFields;
