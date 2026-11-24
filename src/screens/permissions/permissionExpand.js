import React from "react";
import "./permissionExpand.scss";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import { MdExpandMore, MdKeyboardArrowRight} from "react-icons/md";

const PermissionExpandable = (props) => {
  const {
    children,
    title,
    headerToggle,
    expanded,
    submenuExpanded,
    handleExpandClick,
    expandAllActive
  } = props;

  return (
    <>
      <Box className="searchPermissionBar">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {submenuExpanded == title ? (
            <MdExpandMore size={25} color={"#5f1ce3"} />
          ) : (
            <MdKeyboardArrowRight  size={25} color={"#5f1ce3"} />
          )}
          {headerToggle}
        </Box>
        <Typography
          variant="h4"
          onClick={() => handleExpandClick(title)}
          component="span"
          className="collapseableContainer"
          sx={{ flex: 1 }}
        >
          {/* {navItem.label} */}
          {title}
        </Typography>
      </Box>
      <Collapse
        in={ expandAllActive || submenuExpanded == title}
        timeout="auto"
        unmountOnExit
        sx={{ borderLeft: "1px solid #d7dce5",background:"#fff" }}
      >
        <Box className="childPermissionContainer">{children}</Box>
      </Collapse>
      {/* {expanded && <Divider variant="middle" sx={{ margin: '20px 0px' }} />} */}
    </>
  );
};

export default PermissionExpandable;
