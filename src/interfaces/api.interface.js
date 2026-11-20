//testing
// export const apiURL = "http://192.168.15.35:8742/api/middleware";
// export const apiURL2 = "http://192.168.15.35:8743/api/middleware/switch";
// export const apiURL3 = "http://192.168.15.35:8744/api/integrationplatformmw";
//production
// export const apiURL = "https://mmsad.keenu.pk/api/middleware";
// export const apiURL2 = "https://mmsipdb.keenu.pk/api/middleware/switch";
// export const apiURL3 = " https://mmsip.keenu.pk/api/integrationplatformmw";
//SITE
export const apiURL = "https://mmsuatauth.keenu.pk/api/middleware"; 
export const apiURL2 = "https://mmsuatip.keenu.pk/api/middleware/switch";
export const apiURL3 = "https://mmsuatipdb.keenu.pk/api/integrationplatformmw";

// import { loadConfig } from './configLoader';
// const config = await loadConfig();
// export const apiURL = config.apiURL;
// export const apiURL2 = config.apiURL2;
// export const apiURL3 = config.apiURL3;
// export const apiURL = "http://192.168.15.35:8742/api/middleware";
// export const apiURL2 = "http://192.168.15.35:8743/api/middleware/switch";
// export const apiURL3 = "http://192.168.15.35:8744/api/integrationplatformmw";


export const api = {

  //================Auth================
  login: () => {
    return {
      url: `${apiURL}/v1.0.0/login`,
      method: "post",
    };
  },
  logout: () => {
    return {
      // url: `http://localhost:3001/api/echo`,
      url: `${apiURL}/v1.0.0/logout`,
      method: "post",
    };
  },

  getdashboarddata: () => {
    return {
      url: `${apiURL}/v1.0.0/home/dashboard/getdashboarddata`,
      method: "post",
    };
  },

  // =========== Channel Configuration=============
  getchannellist: () => {
    return {
      url: `${apiURL}/v1.0.0/network/channels/getchannellist`,
      method: "post",
    };
  },
  networkmanagementgetchannellist: () => {
    return {
      url: `${apiURL3}/v1.0.0/networkmanagement/channel/getchannellist`,
      method: "post",
    };
  },
  sendchannelcommand: () => {
    return {
      url: `${apiURL}/v1.0.0/network/channels/sendchannelcommand`,
      method: "post",
    };
  },
  sendnetworkmessage: () => {
    return {
      url: `${apiURL2}/v1.0.0/network/channels/sendnetworkmessage`,
      method: "post",
    };
  },
  getswitchchannellist: () => {
    return {
      url: `${apiURL2}/v1.0.0/network/channels/getswitchchannellist`,
      method: "post",
    };
  },

  // =========== Product Manager=============
  getProductList: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/productlist`,
      method: "post",
    };
  },
  getconsumerproductlist: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/getconsumerproductlist`,
      method: "post",
    };
  },
  getconsumerproductflow: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/getconsumerproductflow`,
      method: "post",
    };
  },
  productlimit: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/limits/productlimit`,
      method: "post",
    };
  },
  getconsumerproductlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/getconsumerproductlimits`,
      method: "post",
    };
  },
  setproductloadlimit: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/limits/setproductloadlimit`,
      method: "post",
    };
  },
  setconsumerproductloadlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/setconsumerproductloadlimits`,
      method: "post",
    };
  },
  editproductloadlimit: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/limits/editproductloadlimit`,
      method: "post",
    };
  },
  modifyproductloadlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/modifyproductloadlimits`,
      method: "post",
    };
  },
  setproductspendlimit: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/limits/setproductspendlimit`,
      method: "post",
    };
  },
  setconsumerproductspendlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/setconsumerproductspendlimits`,
      method: "post",
    };
  },
  editproductspendlimit: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/limits/editproductspendlimit`,
      method: "post",
    };
  },
  modifyconsumerproductspendlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/modifyconsumerproductspendlimits`,
      method: "post",
    };
  },
  setproduct: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/gen/setproduct`,
      method: "post",
    };
  },
  setconsumerproduct: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/setconsumerproduct`,
      method: "post",
    };
  },
  getproductkyc: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/kyc/getproductkyc`,
      method: "post",
    };
  },
  getconsumerproductkycparams: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/getconsumerproductkycparams`,
      method: "post",
    };
  },
  setproductconsumerkyc: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/kyc/setproductconsumerkyc`,
      method: "post",
    };
  },
  setconsumerproductkycparams: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/setconsumerproductkycparams`,
      method: "post",
    };
  },
  getproductbenefits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/benefits/getproductbenefits`,
      method: "post",
    };
  },
  setproductbenefits: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/benefits/setproductbenefits`,
      method: "post",
    };
  },
  getproductworkflow: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/wf/getproductworkflow`,
      method: "post",
    };
  },
  setproductworkflow: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/wf/setproductworkflow`,
      method: "post",
    };
  },
  setConsumerproductworkflow: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/setproductworkflow`,
      method: "post",
    };
  },
  deleteproductworkflow: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/wf/deleteproductworkflow`,
      method: "post",
    };
  },
  deleteconsumerproductworkflow: () => {
    return {
      url: `${apiURL}/v1.0.0/productmgmt/consumer/deleteconsumerproductworkflow`,
      method: "post",
    };
  },


  //================Tax==================
  getTaxList: () => {
    return {
      url: `${apiURL}/v1.0.0/tax/taxlist`,
      method: "post",
    };
  },
  edittax: () => {
    return {
      url: `${apiURL}/v1.0.0/tax/edittax`,
      method: "post",
    };
  },
  addtax: () => {
    return {
      url: `${apiURL}/v1.0.0/tax/addtax`,
      method: "post",
    };
  },
  getTaxById: () => {
    return {
      url: `${apiURL}/v1.0.0/tax/tax`,
      method: "post",
    };
  },

  //=================Transaction Fee================
  getTransactionFeeList: () => {
    return {
      url: `${apiURL}/v1.0.0/fee/feelist`,
      method: "post",
    };
  },
  editfee: () => {
    return {
      url: `${apiURL}/v1.0.0/fee/editfee`,
      method: "post",
    };
  },
  addfee: () => {
    return {
      url: `${apiURL}/v1.0.0/fee/addfee`,
      method: "post",
    };
  },


  //=================Filters================
  statefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/statefilter`,
      method: "post",
    };
  },
  transactionfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/requestfilter`,
      method: "post",
    };
  },
  channelfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/channelfilter`,
      method: "post",
    };
  },
  productfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getallproducts`,
      // url: `${apiURL}/v1.0.0/filler/productfilter`,
      method: "post",
    };
  },
  taxfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/taxfilter`,
      method: "post",
    };
  },
  configfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/configfilter`,
      method: "post",
    };
  },
  cityfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/cityfilter`,
      method: "post",
    };
  },
  countryfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/countryfilter`,
      method: "post",
    };
  },
  requestfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/requestfilter`,
      method: "post",
    };
  },
  getfinancialtransactionnames: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getfinancialtransactionnames`,
      method: "post",
    };
  },
  currencyfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/currencyfilter`,
      method: "post",
    };
  },
  districtfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/districtfilter`,
      method: "post",
    };
  },
  departmentfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/departmentfilter`,
      method: "post",
    };
  },
  poolactfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/poolactfilter`,
      method: "post",
    };
  },
  respcodefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/respcodefilter`,
      method: "post",
    };
  },
  getrequeststatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getrequeststatus`,
      method: "post",
    };
  },
  getbusinesstype: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getbusinesstype`,
      method: "post",
    };
  },
  uirolefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/uirolefilter`,
      method: "post",
    };
  },
  uiuserfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/uiuserfilter`,
      method: "post",
    };
  },
  actstatusfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/actstatusfilter`,
      method: "post",
    };
  },
  riskfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/riskfilter`,
      method: "post",
    };
  },
  mccfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/mccfilter`,
      method: "post",
    };
  },
  payrollcompanyfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/payrollcompanyfilter`,
      method: "post",
    };
  },
  applanguagefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/applanguagefilter`,
      method: "post",
    };
  },
  holdingfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/holdingfilter`,
      method: "post",
    };
  },
  employeefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/employeefilter`,
      method: "post",
    };
  },
  businessnaturefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/businessnaturefilter`,
      method: "post",
    };
  },
  merchantindicatorfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/merchantindicatorfilter`,
      method: "post",
    };
  },
  partnertypefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/partnertypefilter`,
      method: "post",
    };
  },
  legalentityfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/legalentityfilter`,
      method: "post",
    };
  },
  getobaappstatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getobaappstatus`,
      method: "post",
    };
  },
  relationacqfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/relationacqfilter`,
      method: "post",
    };
  },
  terminaltypefilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/terminaltypefilter`,
      method: "post",
    };
  },
  telecomfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/telecomfilter`,
      method: "post",
    };
  },
  branchfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/branchfilter`,
      method: "post",
    };
  },
  terminalfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/terminalfilter`,
      method: "post",
    };
  },
  merchantfilter: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/merchantfilter`,
      method: "post",
    };
  },
  notificationtoken: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/notificationtoken`,
      method: "post",
    };
  },
  faqcategory: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/faqcategory`,
      method: "post",
    };
  },
  soccategory: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/soccategory`,
      method: "post",
    };
  },
  faqquestion: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/faqquestion`,
      method: "post",
    };
  },
  socchargetype: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/socchargetype`,
      method: "post",
    };
  },
  merchanttype: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/merchanttype`,
      method: "post",
    };
  },
  getreportlist: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getreportlist`,
      method: "post",
    };
  },
  getdeclinereason: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getdeclinereason`,
      method: "post",
    };
  },
  getkycprocstage: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getkycprocstage`,
      method: "post",
    };
  },
  getkycstagestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getkycstagestatus`,
      method: "post",
    };
  },
  getwalletlevels: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getwalletlevels`,
      method: "post",
    };
  },
  getdevicestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getdevicestatus`,
      method: "post",
    };
  },
  getconsumerproducts: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getconsumerproducts`,
      method: "post",
    };
  },
  getcompliancetransactionnames: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getcompliancetransactionnames`,
      method: "post",
    };
  },
  getsafstatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getsafstatus`,
      method: "post",
    };
  },
  getreportformats: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getreportformats`,
      method: "post",
    };
  },
  getbillertype: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getbillertype`,
      method: "post",
    };
  },
  getauditeventtypes: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getauditeventtypes`,
      method: "post",
    };
  },
  getauditmoduletypes: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getauditmoduletypes`,
      method: "post",
    };
  },
  getrequestelements: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getrequestelements`,
      method: "post",
    };
  },
  getservicename: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getservicename`,
      method: "post",
    };
  },
  getrequestmanualadjustment: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getrequestmanualadjustment`,
      method: "post",
    };
  },
  crmMerchantproductfilter: () => {
    return {
      // url: `${apiURL}/v1.0.0/filler/crmMerchantproductfilter`,
      url: `${apiURL}/v1.0.0/filler/productfilter`,
      method: "post",
    };
  },
  getmerchantproductlevel: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getmerchantproductlevel`,
      method: "post",
    };
  },
  getbanks: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getbanks`,
      method: "post",
    };
  },
  allfilters: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/allfilters`,
      method: "post",
    };
  },
  getubpsrespcode: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getubpsrespcode`,
      method: "post",
    };
  },
  trannature: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/trannature`,
      method: "post",
    };
  },
  getcityregion: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getcityregion`,
      method: "post",
    };
  },
  getdeclinereasonmerchant: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getdeclinereasonmerchant`,
      method: "post",
    };
  },
  getaccounttype: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getaccounttype`,
      method: "post",
    };
  },
  getwalletcategory: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getwalletcategory`,
      method: "post",
    };
  },
  getofficestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getofficestatus`,
      method: "post",
    };
  },
  getresidencestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getresidencestatus`,
      method: "post",
    };
  },
  getmerchantfiller: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/getmerchantfiller`,
      method: "post",
    };
  },
  getholdingfiller: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/getholdingfiller`,
      method: "post",
    };
  },
  getmerchantbranchfiller: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/getmerchantbranchfiller`,
      method: "post",
    };
  },
  getrequesttype: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getrequesttype`,
      method: "post",
    };
  },
  getpaymentmode: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getpaymentmode`,
      method: "post",
    };
  },
  getsettlementdelay: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getsettlementdelay`,
      method: "post",
    };
  },
  getdeclinereasonminor: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getdeclinereasonminor`,
      method: "post",
    };
  },


  //=================Consumers================
  keenuconsumerlist: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/keenuconsumerlist`,
      method: "post",
    };
  },
  consumerList: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/consumerList`,
      method: "post",
    };
  },
  getlienrequestlisting: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/getlienrequestlisting`,
      method: "post",
    };
  },
  getpendinglienrequestlisting: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/getpendinglienrequestlisting`,
      method: "post",
    };
  },
  getlienrequesttransactions: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/getlienrequesttransactions`,
      method: "post",
    };
  },
  getgrouplimits: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/getgrouplimits`,
      method: "post",
    };
  },
  getmerchantgrouplimits: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getgrouplimits`,
      method: "post",
    };
  },
  editconsumer: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/editconsumer`,
      method: "post",
    };
  },
  consumerwallets: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/consumerwallets`,
      method: "post",
    };
  },
  getconsumerloadlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/comsumer/getconsumerloadlimits`,
      method: "post",
    };
  },
  getconsumerspendlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/getconsumerspendlimits`,
      method: "post",
    };
  },
  getconsumertranlist: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/getconsumertranlist`,
      method: "post",
    };
  },
  getconsumerdevice: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/getconsumerdevice`,
      method: "post",
    };
  },
  setconsumeralloweddevice: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/setconsumeralloweddevice`,
      method: "post",
    };
  },
  consumerstatushistory: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/statushistory`,
      method: "post",
    };
  },
  merchantstatushistory: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/statushistory`,
      method: "post",
    };
  },
  setconsumerdevicestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/setconsumerdevicestatus`,
      method: "post",
    };
  },


  //=================Merchants================
  getmerchantlist: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantlist`,
      method: "post",
    };
  },
  editmerchant: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/editmerchant`,
      method: "post",
    };
  },
  setmerchantpeprisk: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/setmerchantpeprisk`,
      method: "post",
    };
  },
  getbusinessphotosstaging: () => {
    return {
      url: `${apiURL}/v1.0.0/merchant/edd/getbusinessphotosstaging`,
      method: "post",
    };
  },
  getmerchantloadlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantloadlimits`,
      method: "post",
    };
  },
  getmerchantspendlimits: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantspendlimits`,
      method: "post",
    };
  },
  getmerchantwallets: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantwallets`,
      method: "post",
    };
  },
  getmerchanttransactions: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchanttransactions`,
      method: "post",
    };
  },
  getmerchantdevice: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantdevice`,
      method: "post",
    };
  },
  setmerchantalloweddevice: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/setmerchantalloweddevice`,
      method: "post",
    };
  },
  setmerchantdevicestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/setmerchantdevicestatus`,
      method: "post",
    };
  },

  //=================General Configuration================
  citylist: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/city/citylist`,
      method: "post",
    };
  },
  addcity: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/city/addcity`,
      method: "post",
    };
  },
  addcityURL3: () => {
    return {
      url: `${apiURL3}/v1.0.0/genconf/city/addcity`,
      method: "post",
    };
  },
  editcity: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/city/editcity`,
      method: "post",
    };
  },
  editcity3: () => {
    return {
      url: `${apiURL3}/v1.0.0/genconf/city/editcity`,
      method: "post",
    };
  },
  statelist: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/state/statelist`,
      method: "post",
    };
  },
  addstate: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/state/addstate`,
      method: "post",
    };
  },
  editstate: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/state/editstate`,
      method: "post",
    };
  },
  countrylist: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/country/countrylist`,
      method: "post",
    };
  },
  addcountry: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/country/addcountry`,
      method: "post",
    };
  },
  editcountry: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/country/editcountry`,
      method: "post",
    };
  },
  currencylist: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/currency/currencylist`,
      method: "post",
    };
  },
  createcurrency: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/currency/createcurrency`,
      method: "post",
    };
  },
  editcurrency: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/currency/editcurrency`,
      method: "post",
    };
  },
  forexlist: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/forex/forexList`,
      method: "post",
    };
  },
  addforex: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/forex/addforex`,
      method: "post",
    };
  },
  setforex: () => {
    return {
      url: `${apiURL}/v1.0.0/genconf/forex/setforex`,
      method: "post",
    };
  },
  requestlist: () => {
    return {
      url: `${apiURL}/requestList`,
      method: "post",
    };
  },
  getfaqlist: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/faq/getfaqlist`,
      method: "post",
    };
  },
  setfaq: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/faq/setfaq`,
      method: "post",
    };
  },
  editfaq: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/faq/editfaq`,
      method: "post",
    };
  },
  getsoclist: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/soc/getsoclist`,
      method: "post",
    };
  },
  setsoc: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/soc/setsoc`,
      method: "post",
    };
  },
  editsoc: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/soc/editsoc`,
      method: "post",
    };
  },
  getappdoclist: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/appdoc/getappdoclist`,
      method: "post",
    };
  },
  setappdoc: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/appdoc/setappdoc`,
      method: "post",
    };
  },
  editappdoc: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/appdoc/editappdoc`,
      method: "post",
    };
  },

  //=================Holding================
  getholdinglist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/institution/getholdinglist`,
      method: "post",
    };
  },
  getmerchantposbatchsettlementlist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/getmerchantposbatchsettlementlist`,
      method: "post",
    };
  },
  gettransaction: () => {
    return {
      url: `${apiURL}/v1.0.0/transaction/monitoring/gettransaction`,
      method: "post",
    };
  },
  getmerchanttransactionlistui: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getmerchanttransactionlistui`,
      method: "post",
    };
  },
  getmerchantsettlogpos: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/getmerchantsettlogpos`,
      method: "post",
    };
  },
  getmerchantsettlementpending: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/saf/getmerchantsettlementpending`,
      method: "post",
    };
  },
  getmerchantpospayoutdetailen: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/getmerchantpospayoutdetailen`,
      method: "post",
    };
  },
  setimportfiledetails: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/setimportfiledetails`,
      method: "post",
    };
  },
  importmerchantpospayoutdetails: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/importmerchantpospayoutdetails`,
      method: "post",
    };
  },
  getsettlementsummary: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/getsettlementsummary`,
      method: "post",
    };
  },
  modifyholding: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/institution/modifyholding`,
      method: "post",
    };
  },
  createholding: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/institution/createholding`,
      method: "post",
    };
  },
  //=================Institution Group================
  getinstgrouplist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchholdinggroup/getinstgrouplist`,
      method: "post",
    };
  },
  viewgroupinstitutions: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchholdinggroup/viewgroupinstitutions`,
      method: "post",
    };
  },
  assigninstituiongroup: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchholdinggroup/assigninstituiongroup`,
      method: "post",
    };
  },
  createmercinstgroup: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchholdinggroup/createmercinstgroup`,
      method: "post",
    };
  },
  //=================Merchant Branch================
  merchantbranchlist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantbranch/merchantbranchlist`,
      method: "post",
    };
  },
  createmerchantbranch: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantbranch/createmerchantbranch`,
      method: "post",
    };
  },
  modifymerchantbranch: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantbranch/modifymerchantbranch`,
      method: "post",
    };
  },
  //=================Merchant Terminal================
  getmerchantterminallist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantterminal/getmerchantterminallist`,
      method: "post",
    };
  },
  createmerchantterminal: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantterminal/createmerchantterminal`,
      method: "post",
    };
  },
  modifymerchantterminal: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantterminal/modifymerchantterminal`,
      method: "post",
    };
  },
  linkterminal: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantterminal/linkterminal`,
      method: "post",
    };
  },
  delinkterminal: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchantterminal/delinkterminal`,
      method: "post",
    };
  },
  //=================Merchant Management================
  merchantmangementlist: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantlist`,
      method: "post",
    };
  },
  getmerchantmanagementlist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/getmerchantlist`,
      method: "post",
    };
  },
  merchantpospayoutdetail: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/merchantpospayoutdetail`,
      method: "post",
    };
  },
  getentity: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/getentity`,
      method: "post",
    };
  },
  createbusiness: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/createbusiness`,
      method: "post",
    };
  },
  getmerchantmember: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/getmerchantmember`,
      method: "post",
    };
  },
  editemember: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/editemember`,
      method: "post",
    };
  },
  createmember: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/createmember`,
      method: "post",
    };
  },
  getmerchantfinancialinfo: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/getmerchantfinancialinfo`,
      method: "post",
    };
  },
  modifymerchantfinancialinfo: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/modifymerchantfinancialinfo`,
      method: "post",
    };
  },
  createmerchantfinancialinfo: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/createmerchantfinancialinfo`,
      method: "post",
    };
  },
  //=================Merchant Maintenance================
  getchangedba: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/dba/getchangedba`,
      method: "post",
    };
  },
  createchangedba: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/dba/createchangedba`,
      method: "post",
    };
  },
  postchangedba: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/dba/postchangedba`,
      method: "post",
    };
  },
  getchangeaddress: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/address/getchangeaddress`,
      method: "post",
    };
  },
  createchangeaddress: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/address/createchangeaddress`,
      method: "post",
    };
  },
  postchangeaddress: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/address/postchangeaddress`,
      method: "post",
    };
  },
  getchangemdr: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/mdr/getchangemdr`,
      method: "post",
    };
  },
  createchangemdr: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/mdr/createchangemdr`,
      method: "post",
    };
  },
  getmakerlisting: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/mdr/getmakerlisting`,
      method: "post",
    };
  },
  getmerchantupgraderequestlist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/upgrade/getmerchantupgraderequestlist`,
      method: "post",
    };
  },
  reviewrequpgradeproduct: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/upgrade/reviewrequpgradeproduct`,
      method: "post",
    };
  },
  authorizerrequpgradeproduct: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/upgrade/authorizerrequpgradeproduct`,
      method: "post",
    };
  },
  getcheckerlisting: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/mdr/getcheckerlisting`,
      method: "post",
    };
  },
  postchangemdr: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/mdr/postchangemdr`,
      method: "post",
    };
  },
  getchangetip: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/tip/getchangetip`,
      method: "post",
    };
  },
  createchangetip: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/tip/createchangetip`,
      method: "post",
    };
  },
  postchangetip: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/tip/postchangetip`,
      method: "post",
    };
  },
  postservicesrequest: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/services/postservicesrequest`,
      method: "post",
    };
  },
  setraastsqrflag: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/setraastsqrflag`,
      method: "post",
    };
  },
  getmerchantservice: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmaintenance/services/getmerchantservice`,
      method: "post",
    };
  },
  //=================User Management================
  userlist: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/user/userlist`,
      method: "post",
    };
  },
  edituser: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/user/edituser`,
      method: "post",
    };
  },
  createuser: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/user/createuser`,
      method: "post",
    };
  },
  setpassword: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/user/setpassword`,
      method: "post",
    };
  },
  forcelogout: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/user/forcelogout`,
      method: "post",
    };
  },
  resendemail: () => {
    return {
      url: `${apiURL}/v1.0.0/obausrmgmt/user/resendemail`,
      method: "post",
    };
  },
  getobauserlist: () => {
    return {
      url: `${apiURL}/v1.0.0/obausrmgmt/user/getobauserlist`,
      method: "post",
    };
  },
  obacreateuser: () => {
    return {
      url: `${apiURL}/v1.0.0/obausrmgmt/user/obacreateuser`,
      method: "post",
    };
  },
  obaedituser: () => {
    return {
      url: `${apiURL}/v1.0.0/obausrmgmt/user/obaedituser`,
      method: "post",
    };
  },
  obachangepassword: () => {
    return {
      url: `${apiURL}/v1.0.0/obausrmgmt/user/obachangepassword`,
      method: "post",
    };
  },

  //=================Roles================
  rolelist: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/role/rolelist`,
      method: "post",
    };
  },
  createrole: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/role/createrole`,
      method: "post",
    };
  },
  setrolepermissions: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/role/setrolepermissions`,
      method: "post",
    };
  },
  getrolepermissions: () => {
    return {
      url: `${apiURL}/v1.0.0/usrmgmt/role/getrolepermissions`,
      method: "post",
    };
  },
  //=================Transaction Monitoring================
  apptransactionlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/apptransactionlist`,
      method: "post",
    };
  },
  raasttransactionlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/raasttransactionlist`,
      method: "post",
    };
  },
  gettransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/gettransactionslist`,
      method: "post",
    };
  },
  gettransactionlisting: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/biometric/gettransactionlisting`,
      method: "post",
    };
  },
  gettransactionlist: () => {
    return {
      url: `${apiURL2}/v1.0.0/monitoring/transactions/gettransactionlist`,
      method: "post",
    };
  },
  getmerchanttransactionlistUI: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getmerchanttransactionlistUI`,
      method: "post",
    };
  },
  getcompliancetransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getcompliancetransactionslist`,
      method: "post",
    };
  },
  getmerchantsignuptransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getmerchantsignuptransactionslist`,
      method: "post",
    };
  },
  getmerchantcompliancetransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getmerchantcompliancetransactionslist`,
      method: "post",
    };
  },
  getsignuptransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getsignuptransactionslist`,
      method: "post",
    };
  },
  onelinktransactionlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/onelinktransactionlist`,
      method: "post",
    };
  },
  otctransactionlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/otctransactionlist`,
      method: "post",
    };
  },
  meezantransactionlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/meezantransactionlist`,
      method: "post",
    };
  },
  getsaftransactions: () => {
    return {
      url: `${apiURL2}/v1.0.0/monitoring/transactions/getsaftransactions`,
      method: "post",
    };
  },
  getsaflist: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/saf/getsaflist`,
      method: "post",
    };
  },
  getbillpaymentlist: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/onelink/getbillpaymentlist`,
      method: "post",
    };
  },
  safretransmit: () => {
    return {
      url: `${apiURL2}/v1.0.0/monitoring/transactions/safretransmit`,
      method: "post",
    };
  },
  rapidsafretransmit: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/settlement/saf/safretransmit`,
      method: "post",
    };
  },
  removesaftransaction: () => {
    return {
      url: `${apiURL2}/v1.0.0/monitoring/transactions/removesaftransaction`,
      method: "post",
    };
  },
  safSAFretransmit: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/saf/safretransmit`,
      method: "post",
    };
  },
  safremoveSAFtransaction: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/saf/removesaftransaction`,
      method: "post",
    };
  },
  //=================Finance================
  getpoolacctlist: () => {
    return {
      url: `${apiURL}/v1.0.0/finance/poolaccount/getpoolacctlist`,
      method: "post",
    };
  },
  getpoolacctlog: () => {
    return {
      url: `${apiURL}/v1.0.0/finance/poolaccount/getpoolacctlog`,
      method: "post",
    };
  },
  //=================General Ledger================
  gettrangls: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/gl/gettrangls`,
      method: "post",
    };
  },
  getexporthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/settlement/getexporthistorylist`,
      method: "post",
    };
  },
  getpayouttransactions: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/settlement/getpayouttransactions`,
      method: "post",
    };
  },
  getsettlementlog: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/settlement/getsettlementlog`,
      method: "post",
    };
  },
  gettalist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/trustaccount/gettalist`,
      method: "post",
    };
  },
  addtrustaccount: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/trustaccount/addtrustaccount`,
      method: "post",
    };
  },
  edittrustaccount: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/trustaccount/edittrustaccount`,
      method: "post",
    };
  },
  gettransactionlistformanualadjustment: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/settlement/gettransactionlistformanualadjustment`,
      method: "post",
    };
  },
  initiatemanualadjustment: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/settlement/initiatemanualadjustment`,
      method: "post",
    };
  },
  getmanualadjustmentactivity: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/settlement/getmanualadjustmentactivity`,
      method: "post",
    };
  },
  createopendcrequest: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/opendc/createopendcrequest`,
      method: "post",
    };
  },
  merchantcreateopendcrequest: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/opendc/createopendcrequest`,
      method: "post",
    };
  },
  checkeraction: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/opendc/checkeraction`,
      method: "post",
    };
  },
  getopendcrequestlist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/opendc/getopendcrequestlist`,
      method: "post",
    };
  },
  getmerchantopendcrequesthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/opendc/getopendcrequesthistorylist`,
      method: "post",
    };
  },
  getmerchantopendcrequestlist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/opendc/getopendcrequestlist`,
      method: "post",
    };
  },
  getopendcrequesthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/opendc/getopendcrequesthistorylist`,
      method: "post",
    };
  },
  settaximportfile: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/taxcertificate/settaximportfile`,
      method: "post",
    };
  },
  createlienrequest: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/createlienrequest`,
      method: "post",
    };
  },
  setlienrequeststatus: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/setlienrequeststatus`,
      method: "post",
    };
  },
  forcelienrecovery: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/forcelienrecovery`,
      method: "post",
    };
  },
  checkerlienaction: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/lienmarking/checkerlienaction`,
      method: "post",
    };
  },
  //=================Digital Identity================
  getconsumerlist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/scrutiny/getconsumerlist`,
      method: "post",
    };
  },
  getconsumerkycloglisting: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/kyc/getconsumerkycloglisting`,
      method: "post",
    };
  },
  periodicreviewgetconsumerlist: () => {
    return {
      url: `${apiURL}/v1.0.0/consumer/periodicreview/getconsumerlist`,
      method: "post",
    };
  },
  consumergetconsumerbacklog: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getconsumerbacklog`,
      method: "post",
    };
  },
  getbusinesslist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/scrutiny/getbusinesslist`,
      method: "post",
    };
  },
  getmerchantkycloglisting: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/kyc/getmerchantkycloglisting`,
      method: "post",
    };
  },
  merchantgetmerchantbacklog: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/getmerchantbacklog`,
      method: "post",
    };
  },
  getpepscandata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/msaaspro/getpepscandata`,
      method: "post",
    };
  },
  getcompanyscandata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/msaaspro/getcompanyscandata`,
      method: "post",
    };
  },
  getpepscanrcadata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/msaaspro/getpepscanrcadata`,
      method: "post",
    };
  },
  setconsumeradversemediaalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/mckchk/setconsumeradversemediaalert`,
      method: "post",
    };
  },
  getadversenewsdata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/msaaspro/getadversenewsdata`,
      method: "post",
    };
  },
  getmerchpepdata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/getmerchpepdata`,
      method: "post",
    };
  },
  getpeprelscan: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/getpeprelscan`,
      method: "post",
    };
  },
  getconsumerpeprca: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/kyc/getconsumerpeprca`,
      method: "post",
    };
  },
  getsanctioncompanyscan: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/getsanctioncompanyscan`,
      method: "post",
    };
  },
  getsanctioncompanyscandata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/kyc/getsanctioncompanyscandata`,
      method: "post",
    };
  },
  proreviewmerchantmakerassignchecker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchant/periodicreview/proreviewmakerassignchecker`,
      method: "post",
    };
  },
  getmerchadversemediadata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/getmerchadversemediadata`,
      method: "post",
    };
  },
  setpepalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setpepalert`,
      method: "post",
    };
  },
  setcompanyscanalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setcompanyscanalert`,
      method: "post",
    };
  },
  setpeprcaalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setpeprcaalert`,
      method: "post",
    };
  },
  setadversemediaalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setadversemediaalert`,
      method: "post",
    };
  },
  getfbratldata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/msaaspro/getfbratldata`,
      method: "post",
    };
  },
  consumergetfbratldata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/msaaspro/getfbratldata`,
      method: "post",
    };
  },
  consumermakerfbrdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/fbrdecline`,
      method: "post",
    };
  },
  getmerchatldata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/getmerchatldata`,
      method: "post",
    };
  },
  setatlalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setatlalert`,
      method: "post",
    };
  },
  getsanctionscandata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/msaaspro/getsanctionscandata`,
      method: "post",
    };
  },
  consumergetsanctionscandata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/msaaspro/getsanctionscandata`,
      method: "post",
    };
  },
  getmerchsanctiondata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/getmerchsanctiondata`,
      method: "post",
    };
  },
  setsanctionalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setsanctionalert`,
      method: "post",
    };
  },
  getimage: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/getimage`,
      method: "post",
    };
  },
  getconsumerphotos: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/getconsumerphotos`,
      method: "post",
    };
  },
  setimage: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/setimage`,
      method: "post",
    };
  },
  getnadrabioverisysdata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/getnadrabioverisysdata`,
      method: "post",
    };
  },
  checknidduplication: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/kyc/maker/checknidduplication`,
      method: "post",
    };
  },
  checkMerchantnidduplication: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/kyc/maker/checknidduplication`,
      method: "post",
    };
  },
  getnadradata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/getnadradata`,
      method: "post",
    };
  },
  fileupload: () => {
    return {
      url: `${apiURL}/v1.0.0/utility/fileupload`,
      method: "post",
    };
  },
  filedownload: () => {
    return {
      url: `${apiURL}/v1.0.0/utility/filedownload`,
      method: "post",
    };
  },
  marknadrafields: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/marknadrafields`,
      method: "post",
    };
  },
  modifybusiness: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/modifybusiness`,
      method: "post",
    };
  },
  setfuzzyscore: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/setfuzzyscore`,
      method: "post",
    };
  },
  merchantmakerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/scrutiny/makerapprove`,
      method: "post",
    };
  },
  modifymerchantbusiness: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantmgmt/merchant/modifybusiness`,
      method: "post",
    };
  },
  assigntobankchecker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/bank/assigntobankchecker`,
      method: "post",
    };
  },
  makerassigntokeenu: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/bank/makerassigntokeenu`,
      method: "post",
    };
  },
  getmerchantjourney: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/getmerchantjourney`,
      method: "post",
    };
  },
  getmerchantonboardingjourney: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantonboardingjourney`,
      method: "post",
    };
  },
  getconsumerjourney: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/getconsumerjourney`,
      method: "post",
    };
  },
  scrutinycheckerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/scrutiny/checker/checkerdecline`,
      method: "post",
    };
  },
  assigntobank: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/scrutiny/assigntobank`,
      method: "post",
    };
  },
  savescrutiny: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/scrutiny/savescrutiny`,
      method: "post",
    };
  },
  assigntobankmaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/bank/assigntobankmaker`,
      method: "post",
    };
  },
  checkerassigntokeenu: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/bank/checkerassigntokeenu`,
      method: "post",
    };
  },
  ecibapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/ecib/ecibapprove`,
      method: "post",
    };
  },
  nadrasavenext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/nadrasavenext`,
      method: "post",
    };
  },
  merchantmakerkycnadraapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/nadraapprove`,
      method: "post",
    };
  },
  merchantkycmakernadradecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/nadradecline`,
      method: "post",
    };
  },
  merchantmakerkycdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/nadradecline`,
      method: "post",
    };
  },
  makerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/makerdecline`,
      method: "post",
    };
  },
  merchantmakereddapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/eddapprove`,
      method: "post",
    };
  },
  merchantmakereddassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/eddassigntocompliance`,
      method: "post",
    };
  },
  merchantmakeredddecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/edddecline`,
      method: "post",
    };
  },
  merchantcheckereddapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/eddapprove`,
      method: "post",
    };
  },
  merchantcheckereddassigntomaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/eddassigntomaker`,
      method: "post",
    };
  },
  merchantcheckereddassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/eddassigntocompliance`,
      method: "post",
    };
  },
  merchantmarkblacklist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/markblacklist`,
      method: "post",
    };
  },
  merchantcheckeredddecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/edddecline`,
      method: "post",
    };
  },
  setpeprisk: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/setpeprisk`,
      method: "post",
    };
  },
  setConsumerpeprisk: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/setpeprisk`,
      method: "post",
    };
  },
  getpeprisk: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/getpeprisk`,
      method: "post",
    };
  },
  getConsumerpeprisk: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/getpeprisk`,
      method: "post",
    };
  },
  pepnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/pepnext`,
      method: "post",
    };
  },
  gsnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/gsnext`,
      method: "post",
    };
  },
  makerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/makerapprove`,
      method: "post",
    };
  },
  assignsanctionflow: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/mckchk/assignsanctionflow`,
      method: "post",
    };
  },
  merchantmakerfbrapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/fbrapprove`,
      method: "post",
    };
  },
  merchantmakerfbrdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/maker/fbrdecline`,
      method: "post",
    };
  },
  merchantscrutinydecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/scrutiny/scrutinydecline`,
      method: "post",
    };
  },
  approvetocompliancemaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/compliance/checker/assigntocompliancemaker`,
      method: "post",
    };
  },
  approvetoobchecker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/compliance/checker/approvetoobchecker`,
      method: "post",
    };
  },
  assigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/assigntocompliance`,
      method: "post",
    };
  },
  merchantcheckerfbrassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/fbrassigntocompliance`,
      method: "post",
    };
  },
  merchantcheckersanctionsassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/sanctionsassigntocompliance`,
      method: "post",
    };
  },
  merchantcheckerfbrdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/fbrdecline`,
      method: "post",
    };
  },
  declinetoobchecker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/compliance/maker/declinetoobchecker`,
      method: "post",
    };
  },
  compliancemakerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/compliance/makerdecline`,
      method: "post",
    };
  },
  compliancemakerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/compliance/makerapprove`,
      method: "post",
    };
  },
  compliancecheckerassignmaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/compliance/checkerassignmaker`,
      method: "post",
    };
  },
  compliancecheckerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/compliance/checkerapprove`,
      method: "post",
    };
  },
  assigntochecker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/compliance/maker/assigntochecker`,
      method: "post",
    };
  },
  checknadranext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/nadranext`,
      method: "post",
    };
  },
  checkpepnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/pepnext`,
      method: "post",
    };
  },
  checkgsnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/gsnext`,
      method: "post",
    };
  },
  assigntomaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/assigntomaker`,
      method: "post",
    };
  },
  merchantcheckernadraapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/nadraapprove`,
      method: "post",
    };
  },
  merchantcheckernadradecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/nadradecline`,
      method: "post",
    };
  },
  checkerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/checkerapprove`,
      method: "post",
    };
  },
  merchantcheckerfbrapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/fbrapprove`,
      method: "post",
    };
  },
  checkerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/checker/checkerdecline`,
      method: "post",
    };
  },
  getmerchantkycdocs: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/getmerchantkycdocs`,
      method: "post",
    };
  },
  getconsumerkycdocs: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getconsumerkycdocs`,
      method: "post",
    };
  },
  getconsumercnicblocklist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getconsumercnicblocklist`,
      method: "post",
    };
  },
  getmerchantcnicblocklist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/getmerchantcnicblocklist`,
      method: "post",
    };
  },
  getnearexpirymerchantslist: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/merchant/getnearexpirymerchantslist`,
      method: "post",
    };
  },
  getnearexpiryconsumerslist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getnearexpiryconsumerslist`,
      method: "post",
    };
  },
  getnadrahistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getnadrahistoricdata`,
      method: "post",
    };
  },
  getpephistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getpephistoricdata`,
      method: "post",
    };
  },
  getpeprelscanhistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getpeprelscanhistoricdata`,
      method: "post",
    };
  },
  getsanctionshistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getsanctionshistoricdata`,
      method: "post",
    };
  },
  getadversemediahistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getadversemediahistoricdata`,
      method: "post",
    };
  },
  getatlhistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getatlhistoricdata`,
      method: "post",
    };
  },
  getconsumernadrahistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getnadrahistoricdata`,
      method: "post",
    };
  },
  getconsumerpephistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getpephistoricdata`,
      method: "post",
    };
  },
  getconsumersanctionshistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getsanctionshistoricdata`,
      method: "post",
    };
  },
  getConsumerAdversemediahistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getadversemediahistoricdata`,
      method: "post",
    };
  },
  getConsumerAtlhistoricdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getatlhistoricdata`,
      method: "post",
    };
  },

  getminorconsumerlist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/minor/getminorconsumerlist`,
      method: "post",
    };
  },
  getminorconsumerlistbacklog: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/minor/getminorconsumerlistbacklog`,
      method: "post",
    };
  },
  getminorconsumerkyclog: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/minor/getminorconsumerkyclog`,
      method: "post",
    };
  },
  getminorconsumerlistblockbynationalid: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/minor/getminorconsumerlistblockbynationalid`,
      method: "post",
    };
  },
  getminorconsumerlistnationalidexp: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/minor/getminorconsumerlistnationalidexp`,
      method: "post",
    };
  },


  //===================Consumer======================
  consumergetimage: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/consumergetimage`,
      method: "post",
    };
  },
  getconsumerstatement: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/getconsumerstatement`,
      method: "post",
    };
  },
  consumersetimage: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/mckchk/consumersetimage`,
      method: "post",
    };
  },
  scrutinydecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/scrutinydecline`,
      method: "post",
    };
  },
  saveconsumerscrutiny: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/scrutiny/saveconsumerscrutiny`,
      method: "post",
    };
  },
  scrutinyapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/scrutinyapprove`,
      method: "post",
    };
  },
  setconsumerfuzzyscore: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/setconsumerfuzzyscore`,
      method: "post",
    };
  },
  consumernadrasavenext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/consumernadrasavenext`,
      method: "post",
    };
  },
  consumerEddSaveInfo: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/edd/maker/modifyconsumeredd`,
      method: "post",
    };
  },
  consumerkycmakernadraapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/nadraapprove`,
      method: "post",
    };
  },
  makerassignchecker: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/kyc/maker/makerassignchecker`,
      method: "post",
    };
  },
  consumermakernadradecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/nadradecline`,
      method: "post",
    };
  },
  consumerMakerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/makerdecline`,
      method: "post",
    };
  },
  consumermakereddassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/eddassigntocompliance`,
      method: "post",
    };
  },
  consumermakereddapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/eddapprove`,
      method: "post",
    };
  },
  consumermakeredddecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/edddecline`,
      method: "post",
    };
  },
  getconsumerpepdata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/getconsumerpepdata`,
      method: "post",
    };
  },
  getconsumeradversenewsdata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/getconsumeradversenewsdata`,
      method: "post",
    };
  },
  consumerpepnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/consumerpepnext`,
      method: "post",
    };
  },
  setconsumerpepalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/mckchk/setconsumerpepalert`,
      method: "post",
    };
  },
  getconsumersanctiondata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/getconsumersanctiondata`,
      method: "post",
    };
  },
  consumergsnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/consumergsnext`,
      method: "post",
    };
  },
  setconsumersanctionalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/mckchk/setconsumersanctionalert`,
      method: "post",
    };
  },
  getconsumeratldata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/getconsumeratldata`,
      method: "post",
    };
  },
  setconsumeratlalert: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/mckchk/setconsumeratlalert`,
      method: "post",
    };
  },
  consumermakerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/consumermakerapprove`,
      method: "post",
    };
  },
  proreviewmakerassignchecker: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/periodicreview/maker/proreviewmakerassignchecker`,
      method: "post",
    };
  },
  proreviewcheckerasigncompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/periodicreview/checker/proreviewcheckerasigncompliance`,
      method: "post",
    };
  },
  proreviewmerchantcheckerasigncompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchant/periodicreview/proreviewcheckerasigncompliance`,
      method: "post",
    };
  },
  proreviewcheckerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/periodicreview/checker/proreviewcheckerdecline`,
      method: "post",
    };
  },
  proreviewmerchantcheckerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchant/periodicreview/proreviewcheckerdecline`,
      method: "post",
    };
  },
  proreviewcheckerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/periodicreview/checker/proreviewcheckerapprove`,
      method: "post",
    };
  },
  proreviewmerchantcheckerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchant/periodicreview/proreviewcheckerapprove`,
      method: "post",
    };
  },
  proreviewcheckerassignmaker: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/periodicreview/maker/proreviewcheckerassignmaker`,
      method: "post",
    };
  },
  proreviewmerchantcheckerassignmaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchant/periodicreview/proreviewcheckerassignmaker`,
      method: "post",
    };
  },
  consumermakerfbrapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/maker/fbrapprove`,
      method: "post",
    };
  },
  consumermarknadrafields: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumermarknadrafields`,
      method: "post",
    };
  },
  consumernadranext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumernadranext`,
      method: "post",
    };
  },
  consumercheckerpepnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumerpepnext`,
      method: "post",
    };
  },
  consumerassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/assigntocompliance`,
      method: "post",
    };
  },
  fbrassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/fbrassigntocompliance`,
      method: "post",
    };
  },
  getconsumernadradata: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/getconsumernadradata`,
      method: "post",
    };
  },
  consumergetnadrafields: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/maker/consumergetnadrafields`,
      method: "post",
    };
  },
  consumercheckergsnext: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumergsnext`,
      method: "post",
    };
  },
  consumercheckerapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumercheckerapprove`,
      method: "post",
    };
  },
  consumercheckerdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumercheckerdecline`,
      method: "post",
    };
  },
  consumercheckerfbrapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/fbrapprove`,
      method: "post",
    };
  },
  consumercheckerfbrdecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/fbrdecline`,
      method: "post",
    };
  },
  consumerassigntomaker: () => {
    return {
      url: `${apiURL}/v1.0.0/merchantonboarding/consumer/checker/consumerassigntomaker`,
      method: "post",
    };
  },
  consumercheckereddapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/eddapprove`,
      method: "post",
    };
  },
  consumercheckereddassigntocompliance: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/eddassigntocompliance`,
      method: "post",
    };
  },
  consumercheckeredddecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/edddecline`,
      method: "post",
    };
  },
  consumermarkblacklist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/markblacklist`,
      method: "post",
    };
  },
  consumercheckereddassigntomaker: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/eddassigntomaker`,
      method: "post",
    };
  },
  consumercheckernadraapprove: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/nadraapprove`,
      method: "post",
    };
  },
  consumercheckernadradecline: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/checker/nadradecline`,
      method: "post",
    };
  },

  // =====================Wallets=======================
  getmerchantwallet: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getmerchantwallets`,
      method: "post",
    };
  },
  getmerchantwalletlog: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getmerchantwalletlog`,
      method: "post",
    };
  },
  getconsumerwallets: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getconsumerwallets`,
      method: "post",
    };
  },
  getconsumerforwalletclose: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/consumer/getconsumerforwalletclose`,
      method: "post",
    };
  },
  getmerchantforwalletclose: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/merchant/getmerchantforwalletclose`,
      method: "post",
    };
  },
  getwalletclosurerequestlist: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/consumer/getwalletclosurerequestlist`,
      method: "post",
    };
  },
  getwalletcloserequestmerchantlist: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/merchant/getwalletcloserequestmerchantlist`,
      method: "post",
    };
  },
  getwalletcloserequesthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/consumer/getwalletcloserequesthistorylist`,
      method: "post",
    };
  },
  getwalletcloserequestmerchanthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/merchant/getwalletcloserequestmerchanthistorylist`,
      method: "post",
    };
  },
  getconsumerwalletlog: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getconsumerwalletlog`,
      method: "post",
    };
  },
  getexternalwallets: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getexternalwallets`,
      method: "post",
    };
  },
  getexternalwalletlog: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getexternalwalletlog`,
      method: "post",
    };
  },
  getrevenuewallets: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getrevenuewallets`,
      method: "post",
    };
  },
  getrevenuewalletlog: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getrevenuewalletlog`,
      method: "post",
    };
  },
  gettaxwallets: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/gettaxwallets`,
      method: "post",
    };
  },
  gettaxwalletlog: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/gettaxwalletlog`,
      method: "post",
    };
  },
  getwalletsummary: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/getwalletsummary`,
      method: "post",
    };
  },
  checkerwalletclosurerequest: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/consumer/checkerwalletclosurerequest`,
      method: "post",
    };
  },
  checkerwalletcloserequestmerchant: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/merchant/checkerwalletcloserequestmerchant`,
      method: "post",
    };
  },
  createwalletclosurerequest: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/consumer/createwalletclosurerequest`,
      method: "post",
    };
  },
  createwalletcloserequestmerchant: () => {
    return {
      url: `${apiURL}/v1.0.0/wallets/merchant/createwalletcloserequestmerchant`,
      method: "post",
    };
  },
  getconsumerfortachange: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/trustaccount/getconsumerfortachange`,
      method: "post",
    };
  },
  createtachangerequest: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/conmer/trustaccount/createtachangerequest`,
      method: "post",
    };
  },
  getconsumertarequestlist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/trustaccount/getconsumertarequestlist`,
      method: "post",
    };
  },
  checkertachangerequest: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/conmer/trustaccount/checkertachangerequest`,
      method: "post",
    };
  },
  getconsumertarequesthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/trustaccount/getconsumertarequesthistorylist`,
      method: "post",
    };
  },
  getconsumertahistory: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/consumer/trustaccount/getconsumertahistory`,
      method: "post",
    };
  },
  getmerchanttahistory: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/trustaccount/getmerchanttahistory`,
      method: "post",
    };
  },
  getmerchantfortachange: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/trustaccount/getmerchantfortachange`,
      method: "post",
    };
  },
  getmerchanttarequestlist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/trustaccount/getmerchanttarequestlist`,
      method: "post",
    };
  },
  getmerchanttarequesthistorylist: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/trustaccount/getmerchanttarequesthistorylist`,
      method: "post",
    };
  },
  getconsumerforpayrollcompany: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getconsumerforpayrollcompany`,
      method: "post",
    };
  },
  createcompanylinkrequest: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/createcompanylinkrequest`,
      method: "post",
    };
  },
  getconsumercompanykyc: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/getconsumercompanykyc`,
      method: "post",
    };
  },
  consumercompanykycprocessing: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/consumer/consumercompanykycprocessing`,
      method: "post",
    };
  },


  // =====================Notification============
  getnotificationconfiglist: () => {
    return {
      url: `${apiURL}/v1.0.0/notifications/transaction/getnotificationconfiglist`,
      method: "post",
    };
  },
  setnotificationconfig: () => {
    return {
      url: `${apiURL}/v1.0.0/notifications/transaction/setnotificationconfig`,
      method: "post",
    };
  },
  getbroadcastnotificationconfiglist: () => {
    return {
      url: `${apiURL}/v1.0.0/notifications/broadcast/getbroadcastnotificationconfiglist`,
      method: "post",
    };
  },
  setbroadcastnotificationconfig: () => {
    return {
      url: `${apiURL}/v1.0.0/notifications/broadcast/setbroadcastnotificationconfig`,
      method: "post",
    };
  },
  // =====================System Parameters============
  getconfig: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/systemparameters/getconfig`,
      method: "post",
    };
  },
  editconfig: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/systemparameters/editconfig`,
      method: "post",
    };
  },
  getcoolingofflist: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/coolingoff/getcoolingofflist`,
      method: "post",
    };
  },
  editcoolingofflist: () => {
    return {
      url: `${apiURL}/v1.0.0/systemsettings/coolingoff/editcoolingofflist`,
      method: "post",
    };
  },

  // =====================OnBoarding Scrutiny============
  appscrutiny: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/appscrutiny`,
      method: "post",
    };
  },
  merchantobalist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/merchantobalist`,
      method: "post",
    };
  },
  applicationlist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/applicationlist`,
      method: "post",
    };
  },
  setapplicationstatus: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setapplicationstatus`,
      method: "post",
    };
  },
  getobaapplicationdataexport: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getobaapplicationdataexport`,
      method: "post",
    };
  },
  getmerchantbranchobalist: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantbranchobalist`,
      method: "post",
    };
  },
  obaprocess: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/obaprocess`,
      method: "post",
    };
  },
  branchobaprocess: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/branchobaprocess`,
      method: "post",
    };
  },
  getappstageonedata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstageonedata`,
      method: "post",
    };
  },
  getmerchantonboardinginfo: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantonboardinginfo`,
      method: "post",
    };
  },
  getoutletdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/branch/getoutletdata`,
      method: "post",
    };
  },
  getbrancheditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getbrancheditflag`,
      method: "post",
    };
  },
  setbrancheditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setbrancheditflag`,
      method: "post",
    };
  },
  getbobaeditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getbobaeditflag`,
      method: "post",
    };
  },
  setbranchobaccounteditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setbranchobaccounteditflag`,
      method: "post",
    };
  },
  getmerchantbranch: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantbranch`,
      method: "post",
    };
  },
  getmerchantbranchonboardingbankaccount: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantbranchonboardingbankaccount`,
      method: "post",
    };
  },
  getapplicationflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getapplicationflags`,
      method: "post",
    };
  },
  getbankaccountflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getbankaccountflags`,
      method: "post",
    };
  },
  getmemberflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmemberflags`,
      method: "post",
    };
  },
  setmemberflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setmemberflags`,
      method: "post",
    };
  },
  getdocumentflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getdocumentflags`,
      method: "post",
    };
  },
  getmerchantbrancheditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantbrancheditflag`,
      method: "post",
    };
  },
  getmerchantbranchonboardingbankaccounteditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantbranchonboardingbankaccounteditflag`,
      method: "post",
    };
  },
  setapplicationflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setapplicationflags`,
      method: "post",
    };
  },
  editmerchantdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/editmerchantdata`,
      method: "post",
    };
  },
  setbankaccountflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setbankaccountflags`,
      method: "post",
    };
  },
  setdocumentflags: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setdocumentflags`,
      method: "post",
    };
  },
  setmerchantbrancheditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setmerchantbrancheditflag`,
      method: "post",
    };
  },
  uploadkycdocument: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/uploadkycdocument`,
      method: "post",
    };
  },
  setmerchantrisk: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setmerchantrisk`,
      method: "post",
    };
  },
  setmerchantbranchonboardingbankaccounteditflag: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/setmerchantbranchonboardingbankaccounteditflag`,
      method: "post",
    };
  },
  getmerchantonboardingjourneyComments: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getmerchantonboardingjourney`,
      method: "post",
    };
  },
  getbranchobajourney: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getbranchobajourney`,
      method: "post",
    };
  },
  getdocuments: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getdocuments`,
      method: "post",
    };
  },
  uploaddeviationsdocument: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/uploaddeviationsdocument`,
      method: "post",
    };
  },
  uploadBranchDeviationsdocument: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchantbranch/uploaddeviationsdocument`,
      method: "post",
    };
  },
  getappstagetwodata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstagetwodata`,
      method: "post",
    };
  },
  getappstagethreedata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstagethreedata`,
      method: "post",
    };
  },
  getappstagefourdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstagefourdata`,
      method: "post",
    };
  },
  getappstagefivedata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstagefivedata`,
      method: "post",
    };
  },
  getappstagesixdata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstagesixdata`,
      method: "post",
    };
  },
  getappstagesevendata: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/getappstagesevendata`,
      method: "post",
    };
  },
  merchantobaprocess: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/merchantobaprocess `,
      method: "post",
    };
  },
  // merchantobalist: () => {
  //   return {
  //     url: `${apiURL}/v1.0.0/onboarding/merchant/merchantobalist`,
  //     method: "post",
  //   };
  // },
  // =====================Reporting============
  getreportslist: () => {
    return {
      url: `${apiURL}/v1.0.0/reporting/main/getreportslist`,
      method: "post",
    };
  },
  getreportsFillerlist: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getreportlist`,
      method: "post",
    };
  },
  getagentapprequeststatus: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getagentapprequeststatus`,
      method: "post",
    };
  },
  getreportparameters: () => {
    return {
      url: `${apiURL}/v1.0.0/reporting/main/getreportparameters`,
      method: "post",
    };
  },
  createreportrequest: () => {
    return {
      url: `${apiURL}/v1.0.0/reporting/main/createreportrequest`,
      method: "post",
    };
  },
  getsourceapp: () => {
    return {
      url: `${apiURL}/v1.0.0/filler/getsourceapp`,
      method: "post",
    };
  },

  // =====================Fraud Monitoring============
  getlatesttransactions: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/transactions/getlatesttransactions`,
      method: "post",
    };
  },
  getconsumertransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/fruad/monitoring/transactions/getconsumertransactionslist`,
      method: "post",
    };
  },
  setconsumercooling: () => {
    return {
      url: `${apiURL}/v1.0.0/fruad/consumer/coolingoff/setconsumercooling`,
      method: "post",
    };
  },
  setmerchantcooling: () => {
    return {
      url: `${apiURL}/v1.0.0/fruad/merchant/coolingoff/setmerchantcooling`,
      method: "post",
    };
  },
  getmerchanttransactionslist: () => {
    return {
      url: `${apiURL}/v1.0.0/fruad/monitoring/transactions/getmerchanttransactionslist`,
      method: "post",
    };
  },
  setmerchantwalletcontrols: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/setmerchantwalletcontrols`,
      method: "post",
    };
  },
  getmerchantstatement: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/merchant/getmerchantstatement`,
      method: "post",
    };
  },
  setconsumerwalletcontrols: () => {
    return {
      url: `${apiURL}/v1.0.0/crm/consumer/setconsumerwalletcontrols`,
      method: "post",
    };
  },
  getipblockinglist: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/ipbasedblocking/getipblockinglist`,
      method: "post",
    };
  },
  setipblockingrule: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/ipbasedblocking/setipblockingrule`,
      method: "post",
    };
  },
  editipblocking: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/ipbasedblocking/editipblocking`,
      method: "post",
    };
  },
  getgeofencinglist: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/geofencingblocking/getgeofencinglist`,
      method: "post",
    };
  },
  setgeofencingrule: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/geofencingblocking/setgeofencingrule`,
      method: "post",
    };
  },
  editgeofencingrule: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/geofencingblocking/editgeofencingrule`,
      method: "post",
    };
  },

  // =====================Fraud Monitoring============
  getuserauditlog: () => {
    return {
      url: `${apiURL}/v1.0.0/security/getuserauditlog`,
      method: "post",
    };
  },

  // =====================PayNest============
  getbankslist: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/bank/getbankslist`,
      method: "post",
    };
  },
  addbank: () => {
    return {
      url: `${apiURL}/v1.0.0/paymententities/bank/addbank`,
      method: "post",
    };
  },
  api3addbank: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/bank/addbank`,
      method: "post",
    };
  },
  editbank: () => {
    return {
      url: `${apiURL}/v1.0.0/paymententities/bank/editbank`,
      method: "post",
    };
  },
  api3editbank: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/bank/editbank`,
      method: "post",
    };
  },

  getbillerslist: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/billers/getbillerslist`,
      method: "post",
    };
  },
  addbiller: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/billers/addbiller`,
      method: "post",
    };
  },
  editbiller: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/billers/editbiller`,
      method: "post",
    };
  },
  uploadlogo: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/billers/uploadlogo`,
      method: "post",
    };
  },
  uploadbanklogo: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/banks/uploadlogo`,
      method: "post",
    };
  },
  getlogo: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/billers/getlogo`,
      method: "post",
    };
  },
  getbanklogo: () => {
    return {
      url: `${apiURL3}/v1.0.0/paymententities/banks/getlogo`,
      method: "post",
    };
  },
  getrulelist: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/transactionblocking/getrulelist`,
      method: "post",
    };
  },
  setrule: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/transactionblocking/setrule`,
      method: "post",
    };
  },
  setruleelements: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/transactionblocking/setruleelements`,
      method: "post",
    };
  },
  editrule: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/transactionblocking/editrule`,
      method: "post",
    };
  },
  getruleelementslist: () => {
    return {
      url: `${apiURL3}/v1.0.0/fraud/transactionblocking/getruleelementslist`,
      method: "post",
    };
  },
  // =====================Settelment============
  getgettimporthistory: () => {
    return {
      url: `${apiURL}/v1.0.0/settlement/onelnk/getgettimporthistory`,
      method: "post",
    };
  },
  getraastpayoutdetaillisting: () => {
    return {
      url: `${apiURL}/v1.0.0/settlement/raast/getraastpayoutdetaillisting`,
      method: "post",
    };
  },
  processfile: () => {
    return {
      url: `${apiURL}/v1.0.0/settlement/raast/processfile`,
      method: "post",
    };
  },
  retransmitfilestatus: () => {
    return {
      url: `${apiURL}/v1.0.0/settlement/raast/retransmitfilestatus`,
      method: "post",
    };
  },
  getmerchanttaxtranslisting: () => {
    return {
      url: `${apiURL}/v1.0.0/accounting/merchant/taxcertificate/getmerchanttaxtranslisting`,
      method: "post",
    };
  },
  getbillpaymentfiledata: () => {
    return {
      url: `${apiURL}/v1.0.0/settlement/onelnk/getbillpaymentfiledata`,
      method: "post",
    };
  },
  // =====================External Services Monitor============
  getnadratranlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/nadra/getnadratranlist`,
      method: "post",
    };
  },
  getnadraresponselist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/nadra/getnadraresponselist`,
      method: "post",
    };
  },
  getmsaasprotransactionlist: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/msaaspro/getmsaasprotransactionlist`,
      method: "post",
    };
  },
  getmsaasproresponse: () => {
    return {
      url: `${apiURL}/v1.0.0/monitoring/msaaspro/getmsaasproresponse`,
      method: "post",
    };
  },
  getdocumentocrlist: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/covalent/getdocumentocrlist`,
      method: "post",
    };
  },
  getholdinglistresponse: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/getholdinglistresponse`,
      method: "post",
    };
  },
  retransmitholding: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/retransmitholding`,
      method: "post",
    };
  },
  retransmitmerchant: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/retransmitmerchant`,
      method: "post",
    };
  },
  retransmitmerchantbranch: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/retransmitmerchantbranch`,
      method: "post",
    };
  },
  retransmitmerchantterminal: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/retransmitmerchantterminal`,
      method: "post",
    };
  },
  retransmitmerchantdocument: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/retransmitmerchantdocument`,
      method: "post",
    };
  },
  getmerchantlistgesponse: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/getmerchantlistgesponse`,
      method: "post",
    };
  },
  getmerchantdocumentlistresponse: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/getmerchantdocumentlistresponse`,
      method: "post",
    };
  },
  getmerchantbranchlistresponse: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/getmerchantbranchlistresponse`,
      method: "post",
    };
  },
  getmerchantterminallistresponse: () => {
    return {
      url: `${apiURL}/v1.0.0/onboarding/merchant/erpposting/getmerchantterminallistresponse`,
      method: "post",
    };
  },
  getdocumentvalidationlist: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/covalent/getdocumentvalidationlist`,
      method: "post",
    };
  },
  getbiometricvalidationlist: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/covalent/getbiometricvalidationlist`,
      method: "post",
    };
  },
  getbillinquirylist: () => {
    return {
      url: `${apiURL3}/v1.0.0/monitoring/onelinkbillpayment/getbillinquirylist`,
      method: "post",
    };
  },
};
