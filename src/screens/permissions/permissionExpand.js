import React from "react";
import "./permissionExpand.scss";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";

const PermissionExpandable = (props) => {
    const { children, title, headerToggle,expanded,submenuExpanded, handleExpandClick } = props

    return <>
        <Box className="searchPermissionBar"  >
            <Typography variant="h4" onClick={()=>handleExpandClick(title)} component="span" className="collapseableContainer" sx={{flex:1}}>
                {/* {navItem.label} */}
                {title}
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {headerToggle}
                {
                    submenuExpanded == title ? <MdOutlineExpandLess size={25} color={'#5f1ce3'} />
                        : <MdExpandMore size={25} color={'#5f1ce3'} />}
            </Box>
        </Box >
        <Collapse
            in={submenuExpanded == title}
            timeout="auto"
            unmountOnExit
            sx={{borderLeft:'1px solid #9b9b9b'}}
        >
            <Box className='childPermissionContainer'>
                {children}
            </Box>
        </Collapse>
        {/* {expanded && <Divider variant="middle" sx={{ margin: '20px 0px' }} />} */}
    </>
};

export default PermissionExpandable;
