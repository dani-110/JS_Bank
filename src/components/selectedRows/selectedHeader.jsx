import React from "react";
import { Box, Typography } from "@mui/material";

const SelectedHeader = ({ selectAllRow }) => {
    const selectBox = (res) => {
        selectAllRow(res.target.checked)
    }
    return (<>
        {selectAllRow && <input style={{ 'border': 'none', 'outline': 'none', backgroundColor: 'transparent', 'borderBottom': `1px solid black`, }}
            // value={value.selectedValue}
            type={'checkbox'}
            onChange={selectBox}
        />}
    </>
    )
}

export default SelectedHeader;
