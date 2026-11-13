import React from "react";
import "./permissionChildExpand.scss";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useTheme } from '@mui/material/styles';

const PermissionChildExpandable = (props) => {
    const { children, title, headerToggle } = props

    const theme = useTheme();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(prev => !prev);
    };
    return <>
        <Box onClick={handleExpandClick} className="searchChildPermissionBar"  >
            <Typography variant="h4" component="span" className="collapseableContainer">
                {/* {navItem.label} */}
                {title}
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {headerToggle}
                {
                    expanded ? <MdOutlineExpandLess size={25} color={'#5f1ce3'} />
                        : <MdExpandMore size={25} color={'#5f1ce3'} />}
            </Box>
        </Box >
        <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={{borderLeft:'1px solid #9b9b9b'}}
        >
            <Box sx={{marginLeft:'50px'}}>
                {children}
            </Box>
        </Collapse>
        {/* {expanded && <Divider variant="middle" sx={{ margin: '20px 0px' }} />} */}
    </>
};

export default PermissionChildExpandable;
