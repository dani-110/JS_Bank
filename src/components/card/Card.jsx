import React from "react";
import "./Card.css";
import { Box } from "@mui/material";
const Card = (props) => {
  return <Box className={`card2 ${props.classes}`} style={props.style} sx={{ bgcolor:'backgroundColor', border:'1px solid rgba(0, 0, 0, 0.12)'}}>{props.children}</Box>;
};

export default Card;
