import React, { useContext } from "react";
import "./headingTitle.css";
import { Box, Breadcrumbs, Divider, IconButton, Typography } from "@mui/material";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { useTheme } from "@emotion/react";
import { IoMdClose } from "react-icons/io";
const HeadingTitle = (props) => {
  const { title, isNotBreadCrumb, descriptionText, handleClose } = props
  const theme = useTheme()
  const breadCrumCtxt = useContext(BreadCrumSelectorContext)

  return <Box sx={{ width: '100%' }}>
    <Box className="titleContainer">
      <Box>
        <Typography variant="h3" textAlign={'left'} className="headingTitle">
          {title}
        </Typography>
        {descriptionText && <Typography variant="h6" textAlign={'left'} className="">
          {descriptionText}
        </Typography>}
      </Box>
      <IconButton className='icon' onClick={handleClose} size="small">
        <IoMdClose color="rgb(94, 53, 177)" size={25} />
      </IconButton>
    </Box>

    {!isNotBreadCrumb && <>
      <Divider sx={{ margin: '10px 0px', bgcolor: 'textColor' }} />
      <Breadcrumbs aria-label="breadcrumb" className="breadCrumList" separator={">"} style={{ color: theme.palette.textColor }}>
        {
          breadCrumCtxt?.breadCrumSelector?.map((e, index) => (
            <Typography variant="body1">
              {`${e?.includes(' tabs') ? e.replace(/ tabs/g, "") : e}`}
            </Typography>
          ))
        }
      </Breadcrumbs>
    </>}
  </Box>
};

export default HeadingTitle;
