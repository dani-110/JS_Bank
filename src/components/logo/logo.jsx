import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Logo = ({ value }) => {
    console.log(value)
    const handleDownload = (file) => {
        console.log(file.split('/')[file.split('/').length - 1])
        const fileName = file.split('/')[file.split('/').length - 1]
        const link = document.createElement("a");
        link.href = file;
        link.download = `${fileName}`;
        link.click();
    };
    return (
        value ? value instanceof File ? value ? <img src={URL.createObjectURL(value)} style={{ height: '50px', width: '100px', objectFit: 'contain' }} /> : null : value?.includes('.png') || value?.includes('.jpeg') ? <img src={{ value }} style={{ height: '50px', width: '100px', objectFit: 'contain' }} /> :
            <Button onClick={() => handleDownload(value)}>Download</Button> : null
    )
}
export default Logo;

