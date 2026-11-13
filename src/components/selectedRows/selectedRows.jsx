import React from "react";
import { Box, Typography } from "@mui/material";

const SelectedRows = ({ value, setSelectedRows }) => {
    const selectBox = (res) => {
        setSelectedRows(value,res.target.checked)
    }
    return (
        <input style={{ 'border': 'none', 'outline': 'none', backgroundColor: 'transparent', 'borderBottom': `1px solid black`, }}
            value={value?.selectedValue}
            type={'checkbox'}
            checked={value?.selectedValue}
            onChange={selectBox}
        />
    )
}

export default SelectedRows;
