import { Box } from "@mui/material";
import React from "react";
const ButtonContainer = ({ children, isSingle, alignLeft, isThree, isFour, isFive }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                justifyContent: alignLeft ? 'start' : 'end',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${isSingle ? 1 : isThree ? 3 : isFour ? 4 : isFive ? 5 : 2}, minmax(100px, 1fr))`,
                    gap: 2,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default ButtonContainer;
