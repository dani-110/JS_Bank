import React, { useCallback, useRef, useState } from "react";
import { Box, Button, IconButton, Switch, Tooltip, Typography } from "@mui/material";
import './uploadFile.scss'
import { useTheme } from '@emotion/react';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/reducers/ui-slice";

const UploadFile = (props) => {
    const { file, label, setFile, accept } = props
    const theme = useTheme()
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const now = new Date();

        const timestamp =
            now.getFullYear().toString() +
            String(now.getMonth() + 1).padStart(2, '0') +
            String(now.getDate()).padStart(2, '0') +
            String(now.getHours()).padStart(2, '0') +
            String(now.getMinutes()).padStart(2, '0') +
            String(now.getSeconds()).padStart(2, '0') +
            String(now.getMilliseconds()).padStart(3, '0');

        const selectedFile = e.target.files[0];

        const nameParts = selectedFile?.name.split('.');
        const extension = nameParts.pop(); // Get "docx"
        const baseName = nameParts.join('.');
        const newFileName = `${baseName}_${timestamp}.${extension}`;

        const renamedFile = new File([selectedFile], newFileName, { type: selectedFile.type });
        console.log(renamedFile)

        const maxSize = 10 * 1024 * 1024; // 5MB in bytes
        if (!accept && !(renamedFile.name.includes('.docx') || renamedFile?.name.includes('.pdf') || renamedFile?.name.includes('.zip') || renamedFile?.name.includes('.rar') || renamedFile?.name.includes('.png') || renamedFile?.name.includes('.jpeg'))) {
            setFile(null);
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Failed!",
                    message: 'File can only be in .docx or .pdf format.',
                })
            )
        } else {
            if (renamedFile?.size <= maxSize) {
                setFile(renamedFile);
            }
            else {
                setFile(null);
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Failed!",
                        message: "File size exceeds 5MB. Please select a smaller file.",
                    })
                )
            }
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // 🔹 input file clear
        }
    };
    return (
        <Box className='documentBox' sx={{ border: '1px solid', borderColor: theme.palette.inputBorder, gap: '5px' }}>
            {label && <Typography variant="body2">{label}</Typography>}
            <input ref={fileInputRef} style={{ color: theme.palette.textColor }} type="file" onChange={(e) => handleFileChange(e)} accept={accept ? accept : ".docx,.pdf,.zip,.rar"} />
            {file instanceof File && <Button size="medium" variant="text" color="primary" sx={{ padding: '-1px' }} onClick={() => handleRemoveFile()} >Remove</Button>}
        </Box>
    )
};

export default UploadFile;
