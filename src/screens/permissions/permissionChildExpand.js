import React from "react";
import "./permissionChildExpand.scss";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const PermissionChildExpandable = (props) => {
  const { children, title, headerToggle,expandAllActive } = props;

  const theme = useTheme();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

React.useEffect(() => {
  if (expandAllActive) setExpanded(true);
}, [expandAllActive]);

  return (
    <>
      <Box className="searchChildPermissionBar">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {expanded ? (
            <MdOutlineExpandLess size={25} color={"#8253da"} />
          ) : (
            <MdExpandMore size={25} color={"#8253da"} />
          )}

          {headerToggle}
        </Box>
        <Typography
          variant="h4"
          onClick={() => handleExpandClick(title)}
          component="span"
          className="collapseableContainer"
        >
          {/* {navItem.label} */}
          {title}
        </Typography>
      </Box>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ borderLeft: "1px solid #d7dce5" }}
      >
        <Box sx={{ marginLeft: "50px" }}>{children}</Box>
      </Collapse>
      {/* {expanded && <Divider variant="middle" sx={{ margin: '20px 0px' }} />} */}
    </>
  );
};

export default PermissionChildExpandable;
