import { createSlice } from "@reduxjs/toolkit";
import { consumerList, getconsumerforpayrollcompany, getconsumerfortachange, getconsumertahistory, getconsumertarequesthistorylist, getconsumertarequestlist, getconsumerwalletlog, getconsumerwallets, getexternalwalletlog, getexternalwallets, getmerchantfortachange, getmerchantforwalletclose, getmerchanttahistory, getmerchanttarequesthistorylist, getmerchanttarequestlist, getmerchantwallet, getmerchantwalletlog, getRequestClouser, getrevenuewalletlog, getrevenuewallets, gettaxwalletlog, gettaxwallets, getwalletcloserequesthistorylist, getwalletcloserequestmerchanthistorylist, getwalletcloserequestmerchantlist, getwalletclosurerequestlist, getwalletsummary } from "../actions/merchantWallets";


const initialState = {
  merchantWallet: [],
  merchantWalletCount: 0,
  merchantwalletlog: [],
  merchantwalletlogCount: 0,
  consumerwallets: [],
  consumerwalletsCount: 0,
  requestClouser: [],
  requestClouserCount: 0,
  consumerwalletlog: [],
  consumerwalletlogCount: 0,
  externalwallets: [],
  cexternalwalletsCount: 0,
  externalwalletlog: [],
  externalwalletlogCount: 0,
  revenuewallet: [],
  revenuewalletCount: 0,
  revenuewalletlog: [],
  revenuewalletlogCount: 0,
  taxwallet: [],
  taxwalletCount: 0,
  taxwalletlog: [],
  taxwalletlogCount: 0,
  walletsummary: [],
  walletclosurerequest: [],
  walletclosurerequestCount: 0,
  walletcloserequesthistory: [],
  walletcloserequesthistoryCount: 0,
  consumerTaRequest: [],
  consumerTaRequestCount: 0,
  consumertarequesthistory: [],
  consumertarequesthistoryCount: 0,
  getconsumertahistory: [],
  getconsumertahistoryCount: 0,
  getmerchanttahistory: [],
  getmerchanttahistoryCount: 0,
  merchantTrustAccountCustom: [],
  merchantTrustAccountCustomCount: 0,
  merchanttaRequest: [],
  merchanttaRequestCount: 0,
  merchanttarequesthistory: [],
  merchanttarequesthistoryCount: 0,
  consumerforpayrollcompany: [],
  consumerforpayrollcompanyCount: 0,
  consumer: [],
  consumerCount: 0,
  merchantRequestClouser: [],
  merchantRequestClouserCount: 0,
  merchantWalletclosurerequest: [],
  merchantWalletclosurerequestCount: 0,
  merchantWalletcloserequesthistory: [],
  merchantWalletcloserequesthistoryCount: 0,
}

const merchantWalletSlice = createSlice({
  name: "merchantWallet",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getmerchantwallet.pending, (state, action) => {
      state.merchantWallet = []
    });
    builder.addCase(getmerchantwallet.fulfilled, (state, action) => {
      state.merchantWallet = action.payload.list
      state.merchantWalletCount = action.payload.total
    });
    builder.addCase(getmerchantwalletlog.pending, (state, action) => {
      state.merchantwalletlog = []
    });
    builder.addCase(getmerchantwalletlog.fulfilled, (state, action) => {
      state.merchantwalletlog = action.payload.list
      state.merchantwalletlogCount = action.payload.total
    });
    builder.addCase(getconsumerwallets.pending, (state, action) => {
      state.consumerwallets = []
    });
    builder.addCase(getconsumerwallets.fulfilled, (state, action) => {
      state.consumerwallets = action.payload.list
      state.consumerwalletsCount = action.payload.total
    });
    builder.addCase(getRequestClouser.pending, (state, action) => {
      state.requestClouser = []
    });
    builder.addCase(getRequestClouser.fulfilled, (state, action) => {
      state.requestClouser = action.payload.list
      state.requestClouserCount = action.payload.total
    });
    builder.addCase(getmerchantforwalletclose.pending, (state, action) => {
      state.merchantRequestClouser = []
    });
    builder.addCase(getmerchantforwalletclose.fulfilled, (state, action) => {
      state.merchantRequestClouser = action.payload.list
      state.merchantRequestClouserCount = action.payload.total
    });
    builder.addCase(getconsumerwalletlog.pending, (state, action) => {
      state.consumerwalletlog = []
    });
    builder.addCase(getconsumerwalletlog.fulfilled, (state, action) => {
      state.consumerwalletlog = action.payload.list
      state.consumerwalletlogCount = action.payload.total
    });
    builder.addCase(getexternalwallets.pending, (state, action) => {
      state.externalwallets = []
    });
    builder.addCase(getexternalwallets.fulfilled, (state, action) => {
      state.externalwallets = action.payload.list
      state.externalwalletsCount = action.payload.total
    });
    builder.addCase(getexternalwalletlog.pending, (state, action) => {
      state.externalwalletlog = []
    });
    builder.addCase(getexternalwalletlog.fulfilled, (state, action) => {
      state.externalwalletlog = action.payload.list
      state.externalwalletlogCount = action.payload.total
    });
    builder.addCase(getrevenuewallets.pending, (state, action) => {
      state.revenuewallet = []
    });
    builder.addCase(getrevenuewallets.fulfilled, (state, action) => {
      state.revenuewallet = action.payload.list
      state.revenuewalletCount = action.payload.total
    });
    builder.addCase(getrevenuewalletlog.pending, (state, action) => {
      state.revenuewalletlog = []
    });
    builder.addCase(getrevenuewalletlog.fulfilled, (state, action) => {
      state.revenuewalletlog = action.payload.list
      state.revenuewalletlogCount = action.payload.total
    });
    builder.addCase(gettaxwallets.pending, (state, action) => {
      state.taxwallet = []
    });
    builder.addCase(gettaxwallets.fulfilled, (state, action) => {
      state.taxwallet = action.payload.list
      state.taxwalletCount = action.payload.total
    });
    builder.addCase(gettaxwalletlog.pending, (state, action) => {
      state.taxwalletlog = []
    });
    builder.addCase(gettaxwalletlog.fulfilled, (state, action) => {
      state.taxwalletlog = action.payload.list
      state.taxwalletlogCount = action.payload.total
    });
    builder.addCase(getwalletsummary.pending, (state, action) => {
      state.walletsummary = []
    });
    builder.addCase(getwalletsummary.fulfilled, (state, action) => {
      state.walletsummary = action.payload
    });
    builder.addCase(getwalletclosurerequestlist.pending, (state, action) => {
      state.walletclosurerequest = []
    });
    builder.addCase(getwalletclosurerequestlist.fulfilled, (state, action) => {
      state.walletclosurerequest = action.payload.list
      state.walletclosurerequestCount = action.payload.total
    });
    builder.addCase(getwalletcloserequestmerchantlist.pending, (state, action) => {
      state.merchantWalletclosurerequest = []
    });
    builder.addCase(getwalletcloserequestmerchantlist.fulfilled, (state, action) => {
      state.merchantWalletclosurerequest = action.payload.list
      state.merchantWalletclosurerequestCount = action.payload.total
    });
    builder.addCase(getwalletcloserequesthistorylist.pending, (state, action) => {
      state.walletcloserequesthistory = []
    });
    builder.addCase(getwalletcloserequesthistorylist.fulfilled, (state, action) => {
      state.walletcloserequesthistory = action.payload.list
      state.walletcloserequesthistoryCount = action.payload.total
    });
    builder.addCase(getwalletcloserequestmerchanthistorylist.pending, (state, action) => {
      state.merchantWalletcloserequesthistory = []
    });
    builder.addCase(getwalletcloserequestmerchanthistorylist.fulfilled, (state, action) => {
      state.merchantWalletcloserequesthistory = action.payload.list
      state.merchantWalletcloserequesthistoryCount = action.payload.total
    });
    builder.addCase(getconsumerfortachange.pending, (state, action) => {
      state.consumerTrustAccountMaker = []
    });
    builder.addCase(getconsumerfortachange.fulfilled, (state, action) => {
      state.consumerTrustAccountMaker = action.payload.list
      state.consumerTrustAccountMakerCount = action.payload.total
    });
    builder.addCase(getconsumertarequestlist.pending, (state, action) => {
      state.consumerTaRequest = []
    });
    builder.addCase(getconsumertarequestlist.fulfilled, (state, action) => {
      state.consumerTaRequest = action.payload.list
      state.consumerTaRequestCount = action.payload.total
    });
    builder.addCase(getconsumertarequesthistorylist.pending, (state, action) => {
      state.consumertarequesthistory = []
    });
    builder.addCase(getconsumertarequesthistorylist.fulfilled, (state, action) => {
      state.consumertarequesthistory = action.payload.list
      state.consumertarequesthistoryCount = action.payload.total
    });
    builder.addCase(getconsumertahistory.pending, (state, action) => {
      state.getconsumertahistory = []
    });
    builder.addCase(getconsumertahistory.fulfilled, (state, action) => {
      state.getconsumertahistory = action.payload.list
      state.getconsumertahistoryCount = action.payload.total
    });
    builder.addCase(getmerchanttahistory.pending, (state, action) => {
      state.getmerchanttahistory = []
    });
    builder.addCase(getmerchanttahistory.fulfilled, (state, action) => {
      state.getmerchanttahistory = action.payload.list
      state.getmerchanttahistoryCount = action.payload.total
    });
    builder.addCase(getmerchantfortachange.pending, (state, action) => {
      state.merchantTrustAccountCustom = []
    });
    builder.addCase(getmerchantfortachange.fulfilled, (state, action) => {
      state.merchantTrustAccountCustom = action.payload.list
      state.merchantTrustAccountCustomCount = action.payload.total
    });
    builder.addCase(getmerchanttarequestlist.pending, (state, action) => {
      state.merchanttaRequest = []
    });
    builder.addCase(getmerchanttarequestlist.fulfilled, (state, action) => {
      state.merchanttaRequest = action.payload.list
      state.merchanttaRequestCount = action.payload.total
    });
    builder.addCase(getmerchanttarequesthistorylist.pending, (state, action) => {
      state.merchanttarequesthistory = []
    });
    builder.addCase(getmerchanttarequesthistorylist.fulfilled, (state, action) => {
      state.merchanttarequesthistory = action.payload.list
      state.merchanttarequesthistoryCount = action.payload.total
    });
    builder.addCase(getconsumerforpayrollcompany.pending, (state, action) => {
      state.consumerforpayrollcompany = []
    });
    builder.addCase(getconsumerforpayrollcompany.fulfilled, (state, action) => {
      state.consumerforpayrollcompany = action.payload.list
      state.consumerforpayrollcompanyCount = action.payload.total
    });
    builder.addCase(consumerList.pending, (state, action) => {
      state.consumer = []
    });
    builder.addCase(consumerList.fulfilled, (state, action) => {
      state.consumer = action.payload.list
      state.consumerCount = action.payload.total
    });
  }
});
export default merchantWalletSlice.reducer;