import { createSlice } from "@reduxjs/toolkit";
import { getsettlementlog } from "../actions/settlementLog";
import { applicationAuthorizerlist, applicationCheckerlist, applicationlist, applicationLogList, applicationReviewerlist, appscrutiny, getmerchantbankcheckerobalist, getmerchantbankmakerobalist, getmerchantbranchApplicationHistorylist, getmerchantbranchcheckerobalist, getmerchantbranchmakerobalist, merchantobalist, merchantobaOprationallist } from "../actions/onboardingScrutiny";


const initialState = {
  onboardingScrutiny: [],
  totalcount: 0,
  merchantobaList: [],
  merchantobatotalcount: 0,
  applicationList: [],
  applicationListtotalcount: 0,
  applicationCheckerList: [],
  applicationCheckerListtotalcount: 0,
  applicationReiviewerList: [],
  applicationReiviewerListtotalcount: 0,
  applicationAuthorizerList: [],
  applicationAuthorizerListtotalcount: 0,
  applicationLogList: [],
  applicationLogListtotalcount: 0,
  merchantbranchmakerobaList: [],
  merchantbranchmakerobaAccountList: [],
  merchantbranchmakerobaListtotalcount: 0,
  merchantbranchcheckerobaList: [],
  merchantbranchcheckerobaAccountList: [],
  merchantbranchcheckerobaListtotalcount: 0,
  merchantbankmakerobaList: [],
  merchantbankmakerobaAccountList: [],
  merchantbankmakerobaListtotalcount: 0,
  merchantbankccheckerobaList: [],
  merchantbankccheckerobaAccountList: [],
  merchantbankccheckerobaListtotalcount: 0,
  merchantbranchapplicationhistoryList: [],
  merchantbranchapplicationhistoryAccountList: [],
  merchantbranchapplicationhistoryListtotalcount: 0,
}

const onboardingScrutinySlice = createSlice({
  name: "onboardingScrutiny",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(merchantobaOprationallist.pending, (state, action) => {
      state.onboardingScrutiny = []
    });
    builder.addCase(merchantobaOprationallist.fulfilled, (state, action) => {
      state.onboardingScrutiny = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(merchantobalist.pending, (state, action) => {
      state.merchantobaList = []
    });
    builder.addCase(merchantobalist.fulfilled, (state, action) => {
      state.merchantobaList = action.payload.list
      state.merchantobatotalcount = action.payload.total
    });
    builder.addCase(applicationlist.pending, (state, action) => {
      state.applicationList = []
    });
    builder.addCase(applicationlist.fulfilled, (state, action) => {
      state.applicationList = action.payload.list
      state.applicationListtotalcount = action.payload.total
    });
    builder.addCase(applicationCheckerlist.pending, (state, action) => {
      state.applicationCheckerList = []
    });
    builder.addCase(applicationCheckerlist.fulfilled, (state, action) => {
      state.applicationCheckerList = action.payload.list
      state.applicationCheckerListtotalcount = action.payload.total
    });
    builder.addCase(applicationReviewerlist.pending, (state, action) => {
      state.applicationReiviewerList = []
    });
    builder.addCase(applicationReviewerlist.fulfilled, (state, action) => {
      state.applicationReiviewerList = action.payload.list
      state.applicationReiviewerListtotalcount = action.payload.total
    });
    builder.addCase(applicationAuthorizerlist.pending, (state, action) => {
      state.applicationAuthorizerList = []
    });
    builder.addCase(applicationAuthorizerlist.fulfilled, (state, action) => {
      state.applicationAuthorizerList = action.payload.list
      state.applicationAuthorizerListtotalcount = action.payload.total
    });
    builder.addCase(applicationLogList.pending, (state, action) => {
      state.applicationLogList = []
    });
    builder.addCase(applicationLogList.fulfilled, (state, action) => {
      state.applicationLogList = action.payload.list
      state.applicationLogListtotalcount = action.payload.total
    });
    builder.addCase(getmerchantbranchmakerobalist.pending, (state, action) => {
      state.merchantbranchmakerobaList = []
    });
    builder.addCase(getmerchantbranchmakerobalist.fulfilled, (state, action) => {
      console.log(action.payload)
      state.merchantbranchmakerobaList = action.payload.list
      state.merchantbranchmakerobaAccountList = [...state.merchantbranchmakerobaAccountList, ...action.payload.accountList]
      state.merchantbranchmakerobaListtotalcount = action.payload.total
    });
    builder.addCase(getmerchantbranchcheckerobalist.pending, (state, action) => {
      state.merchantbranchcheckerobaList = []
    });
    builder.addCase(getmerchantbranchcheckerobalist.fulfilled, (state, action) => {
      state.merchantbranchcheckerobaList = action.payload.list
      state.merchantbranchcheckerobaAccountList = [...state.merchantbranchcheckerobaAccountList, ...action.payload.accountList]
      state.merchantbranchcheckerobaListtotalcount = action.payload.total
    });
    builder.addCase(getmerchantbankmakerobalist.pending, (state, action) => {
      state.merchantbankmakerobaList = []
    });
    builder.addCase(getmerchantbankmakerobalist.fulfilled, (state, action) => {
      state.merchantbankmakerobaList = action.payload.list
      state.merchantbankmakerobaAccountList = [...state.merchantbankmakerobaAccountList, ...action.payload.accountList]
      state.merchantbankmakerobaListtotalcount = action.payload.total
    });
    builder.addCase(getmerchantbankcheckerobalist.pending, (state, action) => {
      state.merchantbankccheckerobaList = []
    });
    builder.addCase(getmerchantbankcheckerobalist.fulfilled, (state, action) => {
      state.merchantbankccheckerobaList = action.payload.list
      state.merchantbankccheckerobaAccountList = [...state.merchantbankmakerobaAccountList, ...action.payload.accountList]
      state.merchantbankccheckerobaListtotalcount = action.payload.total
    });
     builder.addCase(getmerchantbranchApplicationHistorylist.pending, (state, action) => {
      state.merchantbranchapplicationhistoryList = []
    });
    builder.addCase(getmerchantbranchApplicationHistorylist.fulfilled, (state, action) => {
      state.merchantbranchapplicationhistoryList = action.payload.list
      state.merchantbranchapplicationhistoryAccountList = [...state.merchantbranchapplicationhistoryAccountList, ...action.payload.accountList]
      state.merchantbranchapplicationhistoryListtotalcount = action.payload.total
    });
  },
});
export default onboardingScrutinySlice.reducer;