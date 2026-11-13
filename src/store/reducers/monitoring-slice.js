import { createSlice } from "@reduxjs/toolkit";
import { apptransactionlist, getbillpaymentlist, getcompliancetransactionslist, getmerchantcompliancetransactionslist, getmerchantsignuptransactionslist, getmerchanttransactionlistUI, getsaflist, getsaftransactions, getsignuptransactionslist, gettransactionlist, gettransactionlisting, gettransactionslist, meezantransactionlist, onelinktransactionlist, otctransactionlist, raasttransactionlist } from "../actions/monitoring";


const initialState = {
  appTransaction: [],
  appTotalcount: 0,
  raastList: [],
  raastTotalcount: 0,
  oneLinkList: [],
  oneLinkTotalcount: 0,
  otcList: [],
  otcTotalcount: 0,
  meezanList: [],
  meezanTotalcount: 0,
  safTransactionsList: [],
  safTransactionsTotalcount: 0,
  transactionsList: [],
  transactionsTotalcount: 0,
  compliancetransactionsList: [],
  compliancetransactionsTotalcount: 0,
  signuptransactionslist: [],
  signuptransactionsTotalcount: 0,
  merchanttransactionlistUI: [],
  getmerchanttransactionUITotalcount: 0,
  merchantcompliancetransactionslist: [],
  merchantcompliancetransactionsTotalcount: 0,
  merchantsignuptransactionslist: [],
  merchantsignuptransactionsTotalcount: 0,
  transactionlistinglist: [],
  transactionlistingTotalcount: 0,
  gettransactionlistlist: [],
  gettransactionlistTotalcount: 0,
  getbillpaymentlistlist: [],
  getbillpaymentlistTotalcount: 0,
  getsaflistList: [],
  getsaflistTotalcount: 0
}

const monitoringSlice = createSlice({
  name: "monitoring",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(apptransactionlist.pending, (state, action) => {
      state.appTransaction = []
    });
    builder.addCase(apptransactionlist.fulfilled, (state, action) => {
      state.appTransaction = action.payload.list
      state.appTotalcount = action.payload.total
    });
    builder.addCase(raasttransactionlist.pending, (state, action) => {
      state.raastList = []
    });
    builder.addCase(raasttransactionlist.fulfilled, (state, action) => {
      state.raastList = action.payload.list
      state.raastTotalcount = action.payload.total
    });
    builder.addCase(onelinktransactionlist.pending, (state, action) => {
      state.oneLinkList = []
    });
    builder.addCase(onelinktransactionlist.fulfilled, (state, action) => {
      state.oneLinkList = action.payload.list
      state.oneLinkTotalcount = action.payload.total
    });
    builder.addCase(otctransactionlist.pending, (state, action) => {
      state.otcList = []
    });
    builder.addCase(otctransactionlist.fulfilled, (state, action) => {
      state.otcList = action.payload.list
      state.otcTotalcount = action.payload.total
    });
    builder.addCase(meezantransactionlist.pending, (state, action) => {
      state.meezanList = []
    });
    builder.addCase(meezantransactionlist.fulfilled, (state, action) => {
      state.meezanList = action.payload.list
      state.meezanTotalcount = action.payload.total
    });
    builder.addCase(getsaftransactions.pending, (state, action) => {
      state.safTransactionsList = []
    });
    builder.addCase(getsaftransactions.fulfilled, (state, action) => {
      state.safTransactionsList = action.payload.list
      state.safTransactionsTotalcount = action.payload.total
    });
    builder.addCase(gettransactionslist.pending, (state, action) => {
      state.transactionsList = []
    });
    builder.addCase(gettransactionslist.fulfilled, (state, action) => {
      state.transactionsList = action.payload.list
      state.transactionsTotalcount = action.payload.total
    });
    builder.addCase(getcompliancetransactionslist.pending, (state, action) => {
      state.compliancetransactionsList = []
    });
    builder.addCase(getcompliancetransactionslist.fulfilled, (state, action) => {
      state.compliancetransactionsList = action.payload.list
      state.compliancetransactionsTotalcount = action.payload.total
    });
    builder.addCase(getsignuptransactionslist.pending, (state, action) => {
      state.signuptransactionsList = []
    });
    builder.addCase(getsignuptransactionslist.fulfilled, (state, action) => {
      state.signuptransactionsList = action.payload.list
      state.signuptransactionsTotalcount = action.payload.total
    });
    builder.addCase(getmerchanttransactionlistUI.pending, (state, action) => {
      state.merchanttransactionlistUI = []
    });
    builder.addCase(getmerchanttransactionlistUI.fulfilled, (state, action) => {
      state.merchanttransactionlistUI = action.payload.list
      state.getmerchanttransactionUITotalcount = action.payload.total
    });
    builder.addCase(getmerchantcompliancetransactionslist.pending, (state, action) => {
      state.merchantcompliancetransactionslist = []
    });
    builder.addCase(getmerchantcompliancetransactionslist.fulfilled, (state, action) => {
      state.merchantcompliancetransactionslist = action.payload.list
      state.merchantcompliancetransactionsTotalcount = action.payload.total
    });
    builder.addCase(getmerchantsignuptransactionslist.pending, (state, action) => {
      state.merchantsignuptransactionslist = []
    });
    builder.addCase(getmerchantsignuptransactionslist.fulfilled, (state, action) => {
      state.merchantsignuptransactionslist = action.payload.list
      state.merchantsignuptransactionsTotalcount = action.payload.total
    });
    builder.addCase(gettransactionlisting.pending, (state, action) => {
      state.transactionlistinglist = []
    });
    builder.addCase(gettransactionlisting.fulfilled, (state, action) => {
      state.transactionlistinglist = action.payload.list
      state.transactionlistingTotalcount = action.payload.total
    });
    builder.addCase(gettransactionlist.pending, (state, action) => {
      state.gettransactionlistlist = []
    });
    builder.addCase(gettransactionlist.fulfilled, (state, action) => {
      state.gettransactionlistlist = action.payload.list
      state.gettransactionlistTotalcount = action.payload.total
    });
    builder.addCase(getbillpaymentlist.fulfilled, (state, action) => {
      state.getbillpaymentlistlist = action.payload.list
      state.getbillpaymentlistTotalcount = action.payload.total
    });
    builder.addCase(getsaflist.fulfilled, (state, action) => {
      state.getsaflistList = action.payload.list
      state.getsaflistTotalcount = action.payload.total
    });
  }
});
export default monitoringSlice.reducer;
