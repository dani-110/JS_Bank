import { createSlice } from "@reduxjs/toolkit";
import { getTaxList } from "../actions/tax";
import { consumerLienMaker, getexporthistorylist, getlienrequestlisting, getloglienrequestlisting, getmanualadjustmentactivity, getmerchantopendcrequesthistorylist, getmerchantopendcrequestlist, getOpenDCHistorylist, getopendcrequesthistorylist, getopendcrequestlist, getpendinglienrequestlisting, gettrangls, gettransactionlistformanualadjustment, merchantOpenDCMaker, openMakerDCList } from "../actions/generalLedger";


const initialState = {
  generalLedger: [],
  totalcount: 0,
  exportHistory: [],
  exporthistoryTotalcount: 0,
  openMakerDCList: [],
  openMakerDCListTotalcount: 0,
  transactionlistForManualAdjustment: [],
  transactionlistForManualAdjustmentTotalcount: 0,
  manualadjustmentactivity: [],
  manualadjustmentactivityTotalcount: 0,
  openDebitCredit: [],
  openDebitCreditTotalcount: 0,
  openDCHistory: [],
  openDCHistoryTotalcount: 0,
  opendcrequesthistorylist: [],
  opendcrequesthistorylistTotalcount: 0,
  consumerLienMakerList: [],
  consumerLienMakerListTotalcount: 0,
  loglienrequestList: [],
  loglienrequestListTotalcount: 0,
  merchantOpenDCMaker: [],
  merchantOpenDCMakerTotalcount: 0,
  merchantOpenDCChecker: [],
  merchantOpenDCCheckerTotalcount: 0,
  merchantOpenDCHistory: [],
  merchantOpenDCHistoryTotalcount: 0,
  pendinglienrequestList: [],
  pendinglienrequestListTotalcount: 0,
}

const generalLedgerSlice = createSlice({
  name: "generalLedger",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(gettrangls.pending, (state, action) => {
      state.generalLedger = []
    });
    builder.addCase(gettrangls.fulfilled, (state, action) => {
      state.generalLedger = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getexporthistorylist.pending, (state, action) => {
      state.exportHistory = []
    });
    builder.addCase(getexporthistorylist.fulfilled, (state, action) => {
      state.exportHistory = action.payload.list
      state.exportHistoryTotalcount = action.payload.total
    });
    builder.addCase(openMakerDCList.pending, (state, action) => {
      state.openMakerDCList = []
    });
    builder.addCase(openMakerDCList.fulfilled, (state, action) => {
      state.openMakerDCList = action.payload.list
      state.openMakerDCListTotalcount = action.payload.total
    });
    builder.addCase(getopendcrequesthistorylist.pending, (state, action) => {
      state.opendcrequesthistorylist = []
    });
    builder.addCase(getopendcrequesthistorylist.fulfilled, (state, action) => {
      state.opendcrequesthistorylist = action.payload.list
      state.opendcrequesthistorylistTotalcount = action.payload.total
    });
    builder.addCase(gettransactionlistformanualadjustment.fulfilled, (state, action) => {
      state.transactionlistForManualAdjustment = action.payload.list
      state.transactionlistForManualAdjustmentTotalcount = action.payload.total
    });
    builder.addCase(getmanualadjustmentactivity.fulfilled, (state, action) => {
      state.manualadjustmentactivity = action.payload.list
      state.manualadjustmentactivityTotalcount = action.payload.total
    });
    builder.addCase(getopendcrequestlist.pending, (state, action) => {
      state.openDebitCredit = []
    });
    builder.addCase(getopendcrequestlist.fulfilled, (state, action) => {
      state.openDebitCredit = action.payload.list
      state.openDebitCreditTotalcount = action.payload.total
    });
    builder.addCase(merchantOpenDCMaker.pending, (state, action) => {
      state.merchantOpenDCMaker = []
    });
    builder.addCase(merchantOpenDCMaker.fulfilled, (state, action) => {
      state.merchantOpenDCMaker = action.payload.list
      state.merchantOpenDCMakerTotalcount = action.payload.total
    });
    builder.addCase(getmerchantopendcrequestlist.pending, (state, action) => {
      state.merchantOpenDCChecker = []
    });
    builder.addCase(getmerchantopendcrequestlist.fulfilled, (state, action) => {
      state.merchantOpenDCChecker = action.payload.list
      state.merchantOpenDCCheckerTotalcount = action.payload.total
    });
    builder.addCase(getmerchantopendcrequesthistorylist.pending, (state, action) => {
      state.merchantOpenDCHistory = []
    });
    builder.addCase(getmerchantopendcrequesthistorylist.fulfilled, (state, action) => {
      state.merchantOpenDCHistory = action.payload.list
      state.merchantOpenDCHistoryTotalcount = action.payload.total
    });
    builder.addCase(getOpenDCHistorylist.fulfilled, (state, action) => {
      state.openDCHistory = action.payload.list
      state.openDCHistoryTotalcount = action.payload.total
    });
    builder.addCase(consumerLienMaker.fulfilled, (state, action) => {
      state.consumerLienMakerList = action.payload.list
      state.consumerLienMakerListTotalcount = action.payload.total
    });
    builder.addCase(getlienrequestlisting.fulfilled, (state, action) => {
      state.lienrequestList = action.payload.list
      state.lienrequestListTotalcount = action.payload.total
    });
    builder.addCase(getloglienrequestlisting.fulfilled, (state, action) => {
      state.loglienrequestList = action.payload.list
      state.loglienrequestListTotalcount = action.payload.total
    });
    builder.addCase(getpendinglienrequestlisting.pending, (state, action) => {
      state.pendinglienrequestList = []
    });
    builder.addCase(getpendinglienrequestlisting.fulfilled, (state, action) => {
      state.pendinglienrequestList = action.payload.list
      state.pendinglienrequestListTotalcount = action.payload.total
    });
  },
});
export default generalLedgerSlice.reducer;