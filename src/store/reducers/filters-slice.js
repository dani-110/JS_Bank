import { createSlice } from "@reduxjs/toolkit";
import { actstatusfilter, allfilters, applanguagefilter, branchfilter, businessnaturefilter, channelfilter, cityfilter, configfilter, countryfilter, crmMerchantproductfilter, currencyfilter, departmentfilter, districtfilter, employeefilter, faqcategory, faqquestion, getaccounttype, getagentapprequeststatus, getauditeventtypes, getauditmoduletypes, getbanks, getbillertype, getbusinesstype, getcityregion, getcompliancetransactionnames, getconsumerproducts, getdeclinereason, getdeclinereasonmerchant, getdeclinereasonminor, getdevicestatus, getfinancialtransactionnames, getkycprocstage, getkycstagestatus, getmerchantproductlevel, getobaappstatus, getofficestatus, getpaymentmode, getreportformats, getreportlist, getrequestelements, getrequestmanualadjustment, getrequeststatus, getrequesttype, getresidencestatus, getsafstatus, getservicename, getsettlementdelay, getsourceapp, getubpsrespcode, getwalletcategory, getwalletlevels, holdingfilter, legalentityfilter, mccfilter, merchantfilter, merchantindicatorfilter, merchanttype, notificationtoken, partnertypefilter, payrollcompanyfilter, poolactfilter, productfilter, relationacqfilter, requestfilter, respcodefilter, riskfilter, soccategory, socchargetype, statefilter, taxfilter, telecomfilter, terminalfilter, terminaltypefilter, trannature, transactionfilter, uirolefilter, uiuserfilter } from "../actions/filter";
import { logout } from "../actions/auth";


const initialState = {
  stateFilter: [],
  transactionFilter: [],
  channelFilter: [],
  productFilter: [],
  taxFilter: [],
  configFilter: [],
  cityFilter: [],
  countryFilter: [],
  requestFilter: [],
  financialtransactionFilter: [],
  currencyFilter: [],
  districtFilter: [],
  departmentFilter: [],
  poolactFilter: [],
  respcodeFilter: [],
  uiroleFilter: [],
  uiuserFilter: [],
  actstatusFilter: [],
  riskFilter: [],
  mccFilter: [],
  payrollcompanyFilter: [],
  applanguageFilter: [],
  holdingFilter: [],
  employeeFilter: [],
  businessnatureFilter: [],
  merchantindicatorFilter: [],
  partnertypeFilter: [],
  legalentityFilter: [],
  obaappstatusFilter: [],
  relationacqFilter: [],
  terminaltypeFilter: [],
  telecomFilter: [],
  branchFilter: [],
  terminalFilter: [],
  merchantFilter: [],
  notificationtokenFilter: [],
  faqcategoryFilter: [],
  soccategoryFilter: [],
  faqquestionFilter: [],
  socchargetypeFilter: [],
  merchanttypeFilter: [],
  reportFilter: [],
  declinereasonFilter: [],
  kycprocstageFilter: [],
  kycstagestatusFilter: [],
  walletlevelsFilter: [],
  devicestatusFilter: [],
  consumerproductsFilter: [],
  compliancetransactionnamesFilter: [],
  safstatusFilter: [],
  reportformatsFilter: [],
  billertypeFilter: [],
  auditeventtypesFilter: [],
  auditmoduletypesFilter: [],
  requestelementsFilter: [],
  businesstypeFilter: [],
  genderFilter: [],
  servicenameFilter: [],
  requestmanualadjustmentFilter: [],
  crmMerchantproductFilter: [],
  merchantproductlevelFilter: [],
  banksFilter: [],
  cityregionFilter: [],
  declinereasonmerchantFilter: [],
  requeststatus: [],
  trannatureFilter: [],
  ubpsrespcodeFilter: [],
  accounttypeFilter: [],
  walletcategoryFilter: [],
  officestatusFilter: [],
  residencestatusFilter: [],
  agentapprequeststatusFilter: [],
  sourceappFilter: [],
  requesttypeFilter: [],
  paymentmodeFilter: [],
  settlementdelayFilter: [],
  declinereasonminorFilter: [],
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(statefilter.fulfilled, (state, action) => {
      state.stateFilter = action.payload
    });
    builder.addCase(transactionfilter.fulfilled, (state, action) => {
      const filter = action.payload.map((res) => ({ ...res, codevalue: String(res.codevalue) }))
      state.transactionFilter = filter
    });
    builder.addCase(channelfilter.fulfilled, (state, action) => {
      state.channelFilter = action.payload
    });
    builder.addCase(productfilter.fulfilled, (state, action) => {
      state.productFilter = action.payload
    });
    builder.addCase(taxfilter.fulfilled, (state, action) => {
      state.taxFilter = action.payload
    });
    builder.addCase(configfilter.fulfilled, (state, action) => {
      state.configFilter = action.payload
    });
    builder.addCase(cityfilter.fulfilled, (state, action) => {
      state.cityFilter = action.payload
    });
    builder.addCase(countryfilter.fulfilled, (state, action) => {
      state.countryFilter = action.payload
    });
    builder.addCase(requestfilter.fulfilled, (state, action) => {
      const filter = action.payload.map((res) => ({ ...res, codevalue: String(res.codevalue) }))
      state.requestFilter = filter
    });
    builder.addCase(getfinancialtransactionnames.fulfilled, (state, action) => {
      const filter = action.payload.map((res) => ({ ...res, codevalue: String(res.codevalue) }))
      state.financialtransactionFilter = filter
    });
    builder.addCase(currencyfilter.fulfilled, (state, action) => {
      state.currencyFilter = action.payload
    });
    builder.addCase(districtfilter.fulfilled, (state, action) => {
      state.districtFilter = action.payload
    });
    builder.addCase(departmentfilter.fulfilled, (state, action) => {
      state.departmentFilter = action.payload
    });
    builder.addCase(poolactfilter.fulfilled, (state, action) => {
      state.poolactFilter = action.payload
    });
    builder.addCase(respcodefilter.fulfilled, (state, action) => {
      state.respcodeFilter = action.payload
    });
    builder.addCase(uirolefilter.fulfilled, (state, action) => {
      state.uiroleFilter = action.payload
    });
    builder.addCase(uiuserfilter.fulfilled, (state, action) => {
      state.uiuserFilter = action.payload
    });
    builder.addCase(actstatusfilter.fulfilled, (state, action) => {
      state.actstatusFilter = action.payload
    });
    builder.addCase(riskfilter.fulfilled, (state, action) => {
      state.riskFilter = action.payload
    });
    builder.addCase(mccfilter.fulfilled, (state, action) => {
      state.mccFilter = action.payload
    });
    builder.addCase(payrollcompanyfilter.fulfilled, (state, action) => {
      state.payrollcompanyFilter = action.payload
    });
    builder.addCase(applanguagefilter.fulfilled, (state, action) => {
      state.applanguageFilter = action.payload
    });
    builder.addCase(holdingfilter.fulfilled, (state, action) => {
      state.holdingFilter = action.payload
    });
    builder.addCase(employeefilter.fulfilled, (state, action) => {
      state.employeeFilter = action.payload
    });
    builder.addCase(businessnaturefilter.fulfilled, (state, action) => {
      state.businessnatureFilter = action.payload
    });
    builder.addCase(merchantindicatorfilter.fulfilled, (state, action) => {
      state.merchantindicatorFilter = action.payload
    });
    builder.addCase(partnertypefilter.fulfilled, (state, action) => {
      state.partnertypeFilter = action.payload
    });
    builder.addCase(legalentityfilter.fulfilled, (state, action) => {
      state.legalentityFilter = action.payload
    });
    builder.addCase(getobaappstatus.fulfilled, (state, action) => {
      state.obaappstatusFilter = action.payload
    });
    builder.addCase(relationacqfilter.fulfilled, (state, action) => {
      state.relationacqFilter = action.payload
    });
    builder.addCase(terminaltypefilter.fulfilled, (state, action) => {
      state.terminaltypeFilter = action.payload
    });
    builder.addCase(telecomfilter.fulfilled, (state, action) => {
      state.telecomFilter = action.payload
    });
    builder.addCase(branchfilter.fulfilled, (state, action) => {
      state.branchFilter = action.payload
    });
    builder.addCase(terminalfilter.fulfilled, (state, action) => {
      state.terminalFilter = action.payload
    });
    builder.addCase(merchantfilter.fulfilled, (state, action) => {
      state.merchantFilter = action.payload
    });
    builder.addCase(notificationtoken.fulfilled, (state, action) => {
      state.notificationtokenFilter = action.payload
    });
    builder.addCase(faqcategory.fulfilled, (state, action) => {
      state.faqcategoryFilter = action.payload
    });
    builder.addCase(soccategory.fulfilled, (state, action) => {
      state.soccategoryFilter = action.payload
    });
    builder.addCase(faqquestion.fulfilled, (state, action) => {
      state.faqquestionFilter = action.payload
    });
    builder.addCase(socchargetype.fulfilled, (state, action) => {
      state.socchargetypeFilter = action.payload
    });
    builder.addCase(merchanttype.fulfilled, (state, action) => {
      state.merchanttypeFilter = action.payload
    });
    builder.addCase(getreportlist.fulfilled, (state, action) => {
      state.reportFilter = action.payload
    });
    builder.addCase(getdeclinereason.fulfilled, (state, action) => {
      state.declinereasonFilter = action.payload
    });
    builder.addCase(getkycprocstage.fulfilled, (state, action) => {
      state.kycprocstageFilter = action.payload
    });
    builder.addCase(getkycstagestatus.fulfilled, (state, action) => {
      state.kycstagestatusFilter = action.payload
    });
    builder.addCase(getwalletlevels.fulfilled, (state, action) => {
      state.walletlevelsFilter = action.payload
    });
    builder.addCase(getdevicestatus.fulfilled, (state, action) => {
      state.devicestatusFilter = action.payload
    });
    builder.addCase(getconsumerproducts.fulfilled, (state, action) => {
      state.consumerproductsFilter = action.payload
    });
    builder.addCase(getcompliancetransactionnames.fulfilled, (state, action) => {
      state.compliancetransactionnamesFilter = action.payload
    });
    builder.addCase(getsafstatus.fulfilled, (state, action) => {
      state.safstatusFilter = action.payload
    });
    builder.addCase(getreportformats.fulfilled, (state, action) => {
      state.reportformatsFilter = action.payload
    });
    builder.addCase(getbillertype.fulfilled, (state, action) => {
      state.billertypeFilter = action.payload
    });
    builder.addCase(getauditeventtypes.fulfilled, (state, action) => {
      state.auditeventtypesFilter = action.payload
    });
    builder.addCase(getauditmoduletypes.fulfilled, (state, action) => {
      state.auditmoduletypesFilter = action.payload
    });
    builder.addCase(getrequestelements.fulfilled, (state, action) => {
      state.requestelementsFilter = action.payload
    });
    builder.addCase(getservicename.fulfilled, (state, action) => {
      state.servicenameFilter = action.payload
    });
    builder.addCase(getrequestmanualadjustment.fulfilled, (state, action) => {
      state.requestmanualadjustmentFilter = action.payload
    });
    builder.addCase(crmMerchantproductfilter.fulfilled, (state, action) => {
      console.log(action.payload)
      state.crmMerchantproductFilter = action.payload
    });
    builder.addCase(getmerchantproductlevel.fulfilled, (state, action) => {
      state.merchantproductlevelFilter = action.payload
    });
    builder.addCase(getbanks.fulfilled, (state, action) => {
      state.banksFilter = action.payload
    });
    builder.addCase(getcityregion.fulfilled, (state, action) => {
      state.cityregionFilter = action.payload
    });
    builder.addCase(getdeclinereasonmerchant.fulfilled, (state, action) => {
      state.declinereasonmerchantFilter = action.payload
    });
    builder.addCase(getrequeststatus.fulfilled, (state, action) => {
      state.requeststatus = action.payload
    });
    builder.addCase(trannature.fulfilled, (state, action) => {
      state.trannatureFilter = action.payload
    });
    builder.addCase(getubpsrespcode.fulfilled, (state, action) => {
      state.ubpsrespcodeFilter = action.payload
    });
    builder.addCase(getaccounttype.fulfilled, (state, action) => {
      state.accounttypeFilter = action.payload
    });
    builder.addCase(getwalletcategory.fulfilled, (state, action) => {
      state.walletcategoryFilter = action.payload
    });
    builder.addCase(getofficestatus.fulfilled, (state, action) => {
      state.officestatusFilter = action.payload
    });
    builder.addCase(getresidencestatus.fulfilled, (state, action) => {
      state.residencestatusFilter = action.payload
    });
    builder.addCase(getagentapprequeststatus.fulfilled, (state, action) => {
      state.agentapprequeststatusFilter = action.payload
    });
    builder.addCase(getsourceapp.fulfilled, (state, action) => {
      state.sourceappFilter = action.payload
    });
    builder.addCase(getrequesttype.fulfilled, (state, action) => {
      state.requesttypeFilter = action.payload
    });
    builder.addCase(getpaymentmode.fulfilled, (state, action) => {
      state.paymentmodeFilter = action.payload
    });
    builder.addCase(getsettlementdelay.fulfilled, (state, action) => {
      state.settlementdelayFilter = action.payload
    });
    builder.addCase(getdeclinereasonminor.fulfilled, (state, action) => {
      state.declinereasonminorFilter = action.payload
    });
    builder.addCase(allfilters.fulfilled, (state, action) => {
      console.log(action.payload)
      state.channelFilter = action.payload.channelfilter;
      state.configFilter = action.payload.configfilter;
      state.cityFilter = action.payload.cityfilter;
      state.stateFilter = action.payload.statefilter;
      state.countryFilter = action.payload.countryfilter;
      state.requestFilter = action.payload.requestfilter;
      state.currencyFilter = action.payload.currencyfilter;
      state.districtFilter = action.payload.districtfilter;
      state.departmentFilter = action.payload.departmentfilter;
      state.poolactFilter = action.payload.poolactfilter;
      state.respcodeFilter = action.payload.respcodefilter;
      state.actstatusFilter = action.payload.actstatusfilter;
      state.riskFilter = action.payload.riskfilter;
      state.mccFilter = action.payload.mccfilter;
      state.applanguageFilter = action.payload.applanguagefilter;
      state.employeeFilter = action.payload.employeefilter;
      state.businessnatureFilter = action.payload.businessnaturefilter;
      state.merchantindicatorFilter = action.payload.merchantindicatorfilter;
      state.partnertypeFilter = action.payload.partnertypefilter;
      state.legalentityFilter = action.payload.legalentityfilter;
      state.relationacqFilter = action.payload.relationacqfilter;
      state.telecomFilter = action.payload.telecomfilter;
      state.notificationtokenFilter = action.payload.notificationtoken;
      state.faqcategoryFilter = action.payload.faqcategory;
      state.soccategoryFilter = action.payload.soccategory;
      state.merchanttypeFilter = action.payload.merchanttype;
      state.declinereasonFilter = action.payload.getdeclinereason;
      state.kycstagestatusFilter = action.payload.getkycstagestatus;
      state.kycprocstageFilter = action.payload.getkycprocstage;
      state.walletlevelsFilter = action.payload.getwalletlevels;
      state.devicestatusFilter = action.payload.getdevicestatus;
      state.compliancetransactionnamesFilter = action.payload.getcompliancetransactionnames;
      state.safstatusFilter = action.payload.getsafstatus;
      state.reportformatsFilter = action.payload.getreportformats;
      state.billertypeFilter = action.payload.getbillertype;
      state.auditeventtypesFilter = action.payload.getauditeventtypes;
      state.auditmoduletypesFilter = action.payload.getauditmoduletypes;
      state.requestelementsFilter = action.payload.getrequestelements;
      state.servicenameFilter = action.payload.getservicename;
      state.requestmanualadjustmentFilter = action.payload.getrequestmanualadjustment;
      state.cityregionFilter = action.payload.getcityregion;
      state.requeststatus = action.payload.getrequeststatus;
      state.businesstypeFilter = action.payload.getbusinesstype;
      state.genderFilter = action.payload.getgender;
      state.declinereasonminorFilter = action.payload.getdeclinereasonminor;
    });
    builder.addCase(logout.fulfilled, () => initialState);
  },
  reducers: {
  },
});
export default filtersSlice.reducer;
