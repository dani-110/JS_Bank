import React, { useEffect } from "react";
import "./expandable.scss";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useTheme } from '@mui/material/styles';

const Expandable = (props) => {
  const { children, icon, title, optionLabel, style, childStyle, isOpen } = props

  const theme = useTheme();

  const [expanded, setExpanded] = React.useState(false);
  useEffect(() => {
    setExpanded(isOpen ? true : false);
  }, [isOpen]);
  const handleExpandClick = () => {
    setExpanded(prev => !prev);
  };
  return <>
    <Box onClick={handleExpandClick} className="searchBar" sx={style}  >
      <Box sx={{ display: 'flex', alignItems: 'center', }}>
        <img src={icon} style={{ height: '30px' }} />
        <Typography variant="h4" component="span" className="collapseableContainer">
          {title}
        </Typography>
      </Box>

      {optionLabel ? <Typography variant="body1" component="span" className="optionLabel">
        {optionLabel}
      </Typography> : <>
        {
          expanded ? <MdOutlineExpandLess size={25} color={theme.palette.textColor} />
            : <MdExpandMore size={25} color={theme.palette.textColor} />}
      </>}
    </Box >
    <Collapse
      in={expanded}
      timeout="auto"
      unmountOnExit
    >
      <Divider sx={{ width: '100%' }} />
      <Box className='childContainer' sx={childStyle}>
        {children}
      </Box>
    </Collapse>
    {/* {expanded && <Divider variant="middle" sx={{ margin: '20px 0px' }} />} */}
  </>
};

export default Expandable;
