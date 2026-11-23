import React, { useContext, useEffect, useState } from "react";
import TabelContainer from "../../components/table/table";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import ModalButton from "../../components/modalButton/modalButton";
import IntegrationPlatformView from "./integrationPlatformView";
import UpdateForm from "./updateForm";

import view from "../../assests/view.png";
import signin from "../../assests/signin.png";
import signout from "../../assests/signout.png";
import { useDispatch, useSelector } from "react-redux";
import { filterName } from "../../utils/Utils";
import {
  sendchannelcommand,
  sendnetworkmessage,
} from "../../store/actions/channelConfig";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import Card from "../../components/card/Card";
import { IoEyeOutline } from "react-icons/io5";
import ViewModal from "../../components/viewModal/viewModal";
import ButtonContainer from "../../components/buttonContainer";
import { CiLogin, CiLogout } from "react-icons/ci";

const DataGrid = (props) => {
  const { isLoading, fetchList, tableHeading } = props;
  const { switchChannel, switchChannelTotalcount } = useSelector(
    (state) => state.channelConfig,
  );
  const { channelFilter } = useSelector((state) => state.filter);

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let arr = [];
    switchChannel.forEach((ele) => {
      const obj = { ...ele };
      obj["channelidValue"] = filterName(channelFilter, ele.channelid);
      arr.push(obj);
    });
    setDataList(arr);
  }, [switchChannel]);

  const tableHeader = [
    "Channel Name",
    "Port",
    "IP",
    "Channel Type",
    "Processing Status",
    "Connection Status",
  ];
  const verifyParam = [
    "channelname",
    "port",
    "ip",
    "channeltype",
    "processingstatus",
    "connectionstatus",
  ];

  return (
    <TabelContainer
      tableHeader={tableHeader}
      action={TableAction}
      data={dataList}
      verifyParam={verifyParam}
      isLoading={isLoading}
      count={switchChannelTotalcount}
      tableDescription="Switch Channel record"
      fetchList={fetchList}
      tableHeading={tableHeading}
    />
  );
};
export default DataGrid;

const TableAction = (data) => {
  const breadCrumCtxt = useContext(BreadCrumSelectorContext);
  const item = data.id;
  const theme = useTheme();
  const [openSignIn, setOpenSignIn] = React.useState(false);
const [openSignOff, setOpenSignOff] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  const sendSignInOut = (type, title) => {
    const obj = {
      channelid: item.channelid,
      commandtype: type,
      audittrace: breadCrumCtxt.breadCrumSelector.join("|") + `|${title}`,
    };
    console.log(obj);
    dispatch(sendnetworkmessage(obj)).then((res) => {
      setIsLoading(false);
    });
  };
  return (
    <Box sx={{ display: "flex", gap: "5px" }}>
      <ModalButton
        open={openSignIn}
        setOpen={setOpenSignIn}
        tooltip={"Send Sign In"}
        heading={"CHANNEL ACTION"}
        img={<CiLogin color={"#26765b"} size={20} strokeWidth={0.7} />}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "20px", textAlign: "left", fontWeight: "500" }}
        >
          Sign In channel?
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          You are about to sign in{" "}
          <Typography component={"span"} sx={{ fontWeight: "500" }}>
            {item.channelname}
          </Typography>
        </Typography>

        <Box
          sx={{
            background: theme.palette.lightBaseColor,
            margin: "10px 0px",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="body1" sx={{ textAlign: "left" }}>
           {item.ip} : {item.port}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {item.channeltype} ·  {item.channelname}
          </Typography>
        </Box>
        <Grid item xs={12}>
          <ButtonContainer>
            <Button
              size="medium"
              variant="outlined"
              color="secondary"
              disabled={isLoading}
              onClick={() => setOpenSignIn(false)}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              disabled={isLoading}
              onClick={() => {
                sendSignInOut("1", "Send Sign In");
              }}
            >
              {isLoading && (
                <CircularProgress
                  size={20}
                  sx={{ marginRight: 1, color: "#fff" }}
                />
              )}
              Confirm Sign In
            </Button>
          </ButtonContainer>
        </Grid>
      </ModalButton>
      <ModalButton
        open={openSignOff}
        setOpen={setOpenSignOff}
        tooltip={"Send Sign Off"}
        heading={"CHANNEL ACTION"}
        img={<CiLogout color={"#a83245"} size={20} strokeWidth={0.7} />}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "20px", textAlign: "left", fontWeight: "500" }}
        >
          Sign Off channel?
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          You are about to sign Off{" "}
          <Typography component={"span"} sx={{ fontWeight: "500" }}>
            {item.channelname}
          </Typography>
        </Typography>

        <Box
          sx={{
            background: theme.palette.lightBaseColor,
            margin: "10px 0px",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="body1" sx={{ textAlign: "left" }}>
           {item.ip} : {item.port}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {item.channeltype}  · {item.channelname}
          </Typography>
        </Box>
        <Grid item xs={12}>
          <ButtonContainer>
            <Button
              size="medium"
              variant="outlined"
              color="secondary"
              disabled={isLoading}
              onClick={() => setOpenSignOff(false)}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="error"
              disabled={isLoading}
              onClick={() => {
                sendSignInOut("2", "Send Sign Off");
              }}
            >
              {isLoading && (
                <CircularProgress
                  size={20}
                  sx={{ marginRight: 1, color: "#fff" }}
                />
              )}
              Confirm Sign Off
            </Button>
          </ButtonContainer>
        </Grid>
      </ModalButton>
      {/* <Tooltip title={'Send Sign In'}>
                <IconButton onClick={() => { sendSignInOut('1', 'Send Sign In') }} sx={{ width: '40px', margin: '0px auto' }}>

                    <img src={signin} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
            <Tooltip title={'Send Sign Off'}>
                <IconButton onClick={() => { sendSignInOut('2', 'Send Sign Off') }} sx={{ width: '40px'}}>
                    <img src={signout} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip> */}
      <ViewModal
        open={openView}
        setOpen={setOpenView}
        tooltip={"View"}
        heading={"CHANNEL DETAILS"}
        type={"View"}
      >
        <IntegrationPlatformView data={item} />
      </ViewModal>
    </Box>
  );
};
