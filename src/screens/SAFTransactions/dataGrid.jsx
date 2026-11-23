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
import SAFTransactionsView from "./SAFTransactionsView";
import view from "../../assests/view.png";
import deleteIcon from "../../assests/delete.png";
import transactionalData from "../../assests/transactional-data.png";
import { useDispatch, useSelector } from "react-redux";
import { filterName } from "../../utils/Utils";
import {
  removesaftransaction,
  safretransmit,
} from "../../store/actions/monitoring";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import ViewModal from "../../components/viewModal/viewModal";
import { IoIosRefresh } from "react-icons/io";
import ButtonContainer from "../../components/buttonContainer";
import { IoTrashOutline } from "react-icons/io5";

const DataGrid = (props) => {
  const { isLoading, fetchList, tableHeading } = props;
  const { safTransactionsList, safTransactionsTotalcount } = useSelector(
    (state) => state.monitoring,
  );
  const { respcodeFilter, requestFilter } = useSelector(
    (state) => state.filter,
  );
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    console.log(safTransactionsList);
    let arr = [];
    safTransactionsList.forEach((ele) => {
      const obj = { ...ele };
      console.log(ele.safstatus);
      // obj['reqcodeValue'] = filterName(requestFilter, ele.reqscode);
      obj["respcodeValue"] = filterName(respcodeFilter, ele.responsecode);
      obj["safstatusTransaction"] = ele.safstatus;
      obj["reqcodeValue"] =
        `${filterName(requestFilter, ele.reqscode)} - ${ele.saftype}`;
      arr.push(obj);
    });
    setDataList(arr);
  }, [safTransactionsList]);

  const tableHeader = [
    "Transaction",
    "Amount",
    "Date Time",
    "Response Code",
    "STAN",
    "RRN",
    "SAF Status",
  ];
  const verifyParam = [
    "reqcodeValue",
    "amount",
    "transmitdatetime",
    "respcodeValue",
    "stan",
    "rrn",
    "safstatusTransaction",
  ];

  return (
    <TabelContainer
      tableHeader={tableHeader}
      action={TableAction}
      data={dataList}
      verifyParam={verifyParam}
      isLoading={isLoading}
      count={safTransactionsTotalcount}
      fetchList={fetchList}
      tableHeading={tableHeading}
      tableDescription="IBFT records"
    />
  );
};
export default DataGrid;

const TableAction = (data) => {
  const item = data.id;
  const [openView, setOpenView] = React.useState(false);
  const [openTransmit, setOpenTransmit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  console.log(item);
  const theme = useTheme();

  const dispatch = useDispatch();
  const breadCrumCtxt = useContext(BreadCrumSelectorContext);

  const deleteRecord = (data, type) => {
    const obj = {
      transactionid: data.transactionid,
      audittrace: breadCrumCtxt.breadCrumSelector.join("|") + `|${type}`,
    };
    dispatch(removesaftransaction(obj)).then((res) => {
      console.log(res);
    });
  };

  const reTransmitSAF = (data, type) => {
    setIsLoading(true);
    const obj = {
      transactionid: data.transactionid,
      audittrace: breadCrumCtxt.breadCrumSelector.join("|") + `|${type}`,
    };
    console.log(obj);
    dispatch(safretransmit(obj)).then((res) => {
      console.log(res);
      setIsLoading(false);
    });
  };
  return (
    <Box sx={{ display: "flex", gap: "5px" }}>
      {/* <ModalButton open={openView} setOpen={setOpenView} tooltip={'View'} img={view}>
                <SAFTransactionsView data={item} />
            </ModalButton> */}
      <ViewModal
        open={openView}
        setOpen={setOpenView}
        tooltip={"Vew"}
        heading={"TRANSACTION DETAILS"}
        type={"View"}
      >
        <SAFTransactionsView data={item} />
      </ViewModal>
      <ModalButton
        open={openTransmit}
        setOpen={setOpenTransmit}
        tooltip={"RE-TRANSMIT SAF"}
        heading={"TRANSACTION ACTION"}
        img={
          <IoIosRefresh
            color={theme.palette.darkBaseColor}
            size={20}
            strokeWidth={0.7}
          />
        }
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "20px", textAlign: "left", fontWeight: "500" }}
        >
          Re-Transmit SAF?
        </Typography>
        {/* <Typography variant='body1' sx={{ textAlign: 'left' }}>You are about to sign in <Typography component={'span'} sx={{ fontWeight: '500' }}>IP Consumer Notification.</Typography></Typography> */}

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
            {item.beneficiarybankname}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {item.reqcodeValue} ·  PKR {item.amount}
          </Typography>
        </Box>
        <Grid item xs={12}>
          <ButtonContainer>
            <Button
              size="medium"
              variant="outlined"
              color="secondary"
              disabled={isLoading}
              onClick={() => setOpenTransmit(false)}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              disabled={isLoading}
              onClick={() => {
                reTransmitSAF(item, "RE-TRANSMIT SAF");
              }}
            >
              {isLoading && (
                <CircularProgress
                  size={20}
                  sx={{ marginRight: 1, color: "#fff" }}
                />
              )}
              Confirm Re-Transmit SAF
            </Button>
          </ButtonContainer>
        </Grid>
      </ModalButton>
      <ModalButton
        open={openDelete}
        setOpen={setOpenDelete}
        tooltip={"Delete"}
        heading={"TRANSACTION ACTION"}
        img={<IoTrashOutline color={"#a83245"} size={20} strokeWidth={0.7} />}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "20px", textAlign: "left", fontWeight: "500" }}
        >
          Delete transaction?
        </Typography>
        {/* <Typography variant='body1' sx={{ textAlign: 'left' }}>You are about to sign in <Typography component={'span'} sx={{ fontWeight: '500' }}>IP Consumer Notification.</Typography></Typography> */}

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
            {item.beneficiarybankname}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {item.reqcodeValue} ·  PKR {item.amount}
          </Typography>
        </Box>
        <Grid item xs={12}>
          <ButtonContainer>
            <Button
              size="medium"
              variant="outlined"
              color="secondary"
              disabled={isLoading}
              onClick={() => setOpenDelete(false)}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="error"
              disabled={isLoading}
              onClick={() => {
                deleteRecord(item, "Delete");
              }}
              sx={{padding:"10px"}}
            >
              {isLoading && (
                <CircularProgress
                  size={20}
                  sx={{ marginRight: 1, color: "#fff" }}
                />
              )}
              Confirm Delete transaction
            </Button>
          </ButtonContainer>
        </Grid>
      </ModalButton>
      {/* <Tooltip title={'RE-TRANSMIT SAF'}>
                <IconButton onClick={() => { reTransmitSAF(item, 'RE-TRANSMIT SAF') }} sx={{ width: '40px' }}>
                    <img src={transactionalData} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip> */}
      {/* <Tooltip title={'Delete'}>
                <IconButton onClick={() => { deleteRecord(item, 'Delete') }} sx={{ width: '40px' }}>
                    <img src={deleteIcon} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip> */}
    </Box>
  );
};
