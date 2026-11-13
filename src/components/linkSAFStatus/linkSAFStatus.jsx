import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Box, Typography } from "@mui/material";

const PepFlag = ({ value }) => {
    return (
        <>
            {
                value == 'Yes' ?
                    <MdOutlineVerifiedUser size={30} color='red' />
                    :
                    <IoCloseCircleOutline size={30} color='rgb(19, 222, 185)' />
            }
        </>
    )
}
export default PepFlag;

