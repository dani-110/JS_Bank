// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Alert, AlertTitle, Typography } from "@mui/material";
// import { uiActions } from "../store/reducers/ui-slice";

// const Notification = (props) => {
//   const dispatch = useDispatch();
//   const { notification } = useSelector((state) => state.ui);

//   useEffect(() => {
//     if (notification) {
//       setTimeout(() => {
//         dispatch(uiActions.hideNotification());
//       }, 3000);
//     }
//   }, [notification]);

//   return (
//     <Alert
//       sx={{
//         borderRadius: 0,
//         position: "fixed",
//         right: "10px",
//         bottom: 10,
//         width: "20%",
//         zIndex: 1301,
//       }}
//       severity={props.status}
//     >
//       <AlertTitle sx={{ fontSize: "13px" }}>{props.title}</AlertTitle>
//       <Typography sx={{ fontSize: "15px" }}>{props.message}</Typography>
//     </Alert>
//   );

// };

// export default Notification;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, Typography, Slide } from "@mui/material";
import { uiActions } from "../store/reducers/ui-slice";
import { useTheme } from "@emotion/react";

const Notification = (props) => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.ui);
  const [show, setShow] = useState(false);
  const theme = useTheme()

  useEffect(() => {
    if (notification) {
      setShow(true);  // Slide in when notification appears

      // Hide after 3 seconds
      const timer = setTimeout(() => {
        setShow(false); // Slide out before hiding
        setTimeout(() => {
          dispatch(uiActions.hideNotification());
        }, 500); // Wait for the slide-out animation to complete
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  return (
    <Slide direction="up" in={show} mountOnEnter unmountOnExit>
      <Alert
        sx={{
          borderRadius: 0,
          position: "fixed",
          right: "10px",
          bottom: 10,
          width: "20%",
          zIndex: 1301,
        }}
        severity={props.status}
      >
        <AlertTitle sx={{ fontSize: "13px", color: '#000' }}>{props.title}</AlertTitle>
        <Typography variant="h5" sx={{ fontSize: "15px", color: '#000' }}>{props.message}</Typography>
      </Alert>
    </Slide>
  );
};

export default Notification;
