import React from "react";
import "./Card.css";
import { Box } from "@mui/material";
const Card = (props) => {
  return <Box className={`card2 ${props.classes}`} style={props.style} sx={{
    bgcolor: 'backgroundColor', border: '1px solid rgba(0, 0, 0, 0.12)',
    '&:hover': {
      ...(props.style?.['--hover-border-color'] && {
        borderColor: props.style['--hover-border-color'],
      }),
    },
  }}>{props.children}</Box>;
};

export default Card;
