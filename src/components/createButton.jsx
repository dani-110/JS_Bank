import { Box } from "@mui/material";
import React from "react";
const CreateButton = ({ children }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                justifyContent: 'end'
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, minmax(100px, 1fr))',
                    gap: 2,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CreateButton;
