import { createSlice } from "@reduxjs/toolkit";
import { PeriodicChecker, PeriodicMaker, complianceChecker, complianceMaker, consumergetconsumerbacklog, getComplianceCheckerlist, getComplianceMakerlist, getECIBbusinesslist, getKYCCheckerbusinesslist, getKYCMakerbusinesslist, getMerchantPeriodicCheckerbusinesslist, getMerchantPeriodicMakerbusinesslist, getScrutinyCheckerbusinesslist, getScrutinyMakerbusinesslist, getbusinesslist, getconsumercnicblocklist, getconsumerkycloglisting, getmerchantcnicblocklist, getmerchantkycloglisting, getminorChecketlist, getminorComplianceCheckerlist, getminorComplianceMakerlist, getminorEDDCheckerlist, getminorEDDMakerlist, getminorPeriodicChecketlist, getminorPeriodiclist, getminorconsumerkyclog, getminorconsumerlist, getminorconsumerlistbacklog, getminorconsumerlistblockbynationalid, getminorconsumerlistnationalidexp, getnearexpiryconsumerslist, getnearexpirymerchantslist, kycChecker, kycMaker, merchantgetmerchantbacklog, scrutinyChecker, scrutinyMaker } from "../actions/digitalIdentity";


const initialState = {
  ecibMerchant: [],
  totalECIBcount: 0,
  scrutinyMakerMerchant: [],
  totalScrutinyMakercount: 0,
  scrutinyCheckerMerchant: [],
  totalScrutinyCheckercount: 0,
  kycMakerMerchant: [],
  kycMakerCustomMerchant: [],
  totalkycMakercount: 0,
  kycCheckerMerchant: [],
  totalkycCheckercount: 0,
  merchantkycloglisting: [],
  merchantkycloglistingtotalcount: 0,
  consumerkycloglisting: [],
  consumerkycloglistingtotalcount: 0,
  periodicMakerMerchant: [],
  periodicMakerCustomMerchant: [],
  totalperiodicMakerMerchantcount: 0,
  periodicCheckerMerchant: [],
  totalperiodicCheckerMerchantcount: 0,
  complianceMakerMerchant: [],
  totalComplianceMakercount: 0,
  complianceCheckerMerchant: [],
  totalComplianceCheckercount: 0,
  scrutinyMakerList: [],
  totalscrutinyMakerList: 0,
  scrutinyCheckerList: [],
  totalscrutinyCheckerList: 0,
  kycMakerList: [],
  kycMakerCustomList: [],
  totalkycMakerList: 0,
  periodicMakerList: [],
  periodicMakerCustomList: [],
  totalperiodicMakerList: 0,
  kycCheckerList: [],
  totalkycCheckerList: 0,
  periodicCheckerList: [],
  totalperiodicCheckerList: 0,
  complianceMakerList: [],
  totalcomplianceMakerList: 0,
  complianceCheckerList: [],
  totalcomplianceCheckerList: 0,
  consumerbacklogList: [],
  totalconsumerbacklogcount: 0,
  merchantbacklogList: [],
  totalmerchantbacklogcount: 0,
  consumercnicblocklist: [],
  totalconsumercnicblocklistcount: 0,
  merchantcnicblocklist: [],
  totalmerchantcnicblocklistcount: 0,
  expirymerchantslist: [],
  totalexpirymerchantslistcount: 0,
  expiryconsumerlist: [],
  totalexpiryconsumerlistcount: 0,
  expiryminorlist: [],
  totalexpiryminorlistcount: 0,

  minorkycMakerList: [],
  minorkycMakerCustomList: [],
  totalMinorkycMakerList: 0,
  minorkycCheckerList: [],
  totalMinorkycCheckerList: 0,
  minorPeriodicMakerList: [],
  totalMinorPeriodicMakerList: 0,
  minorPeriodicCheckerList: [],
  totalMinorPeriodicCheckerList: 0,
  minorComplianceMakerList: [],
  totalMinorComplianceMakerList: 0,
  minorComplianceCheckerList: [],
  totalMinorComplianceCheckerList: 0,
  minorEDDMakerList: [],
  totalMinorEDDMakerList: 0,
  minorEDDCheckerList: [],
  totalMinorEDDCheckerList: 0,
  minorbacklogList: [],
  totalminorbacklogcount: 0,
  minorkycloglisting: [],
  minorkycloglistingtotalcount: 0,
  minorcnicblocklist: [],
  totalminorcnicblocklistcount: 0,


  merchantSearchScrutinyMaker: {},
  merchantSearchScrutinyChecker: {},
  merchantSearchKYCMaker: {},
  merchantSearchKYCChecker: {},
  merchantSearchPeriodicMaker: {},
  merchantSearchPeriodicChecker: {},
  merchantSearchComplianceMaker: {},
  merchantSearchComplianceChecker: {},
  merchantSearchEDDMaker: {},
  merchantSearchEDDChecker: {},
  merchantSearchBAHLScrutiny: {},
  merchantSearchBAHLAuthorization: {},

  consumerSearchKYCMaker: {},
  consumerSearchKYCChecker: {},
  consumerSearchPeriodicMaker: {},
  consumerSearchPeriodicChecker: {},
  consumerSearchComplianceMaker: {},
  consumerSearchComplianceChecker: {},
  consumerSearchEDDMaker: {},
  consumerSearchEDDChecker: {},

  minorSearchKYCMaker: {},
  minorSearchKYCChecker: {},
  minorSearchPeriodicMaker: {},
  minorSearchPeriodicChecker: {},
  minorSearchComplianceMaker: {},
  minorSearchComplianceChecker: {},
  minorSearchEDDMaker: {},
  minorSearchEDDChecker: {},


}

const digitalIdentitySlice = createSlice({
  name: "digitalIdentity",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getECIBbusinesslist.pending, (state, action) => {
      state.ecibMerchant = []
    });
    builder.addCase(getECIBbusinesslist.fulfilled, (state, action) => {
      state.ecibMerchant = action.payload.list
      state.totalECIBcount = action.payload.total
    });
    builder.addCase(getScrutinyMakerbusinesslist.pending, (state, action) => {
      state.scrutinyMakerMerchant = []
    });
    builder.addCase(getScrutinyMakerbusinesslist.fulfilled, (state, action) => {
      state.scrutinyMakerMerchant = action.payload.list
      state.totalScrutinyMakercount = action.payload.total
    });
    builder.addCase(getScrutinyCheckerbusinesslist.pending, (state, action) => {
      state.scrutinyCheckerMerchant = []
    });
    builder.addCase(getScrutinyCheckerbusinesslist.fulfilled, (state, action) => {
      state.scrutinyCheckerMerchant = action.payload.list
      state.totalScrutinyCheckercount = action.payload.total
    });
    builder.addCase(getKYCMakerbusinesslist.pending, (state, action) => {
      state.kycMakerMerchant = []
      state.kycMakerCustomMerchant = []
      state.totalkycMakercount = 0
    });
    builder.addCase(getKYCMakerbusinesslist.fulfilled, (state, action) => {
      state.kycMakerMerchant = action.payload.list
      state.kycMakerCustomMerchant = action.payload.configurationCustomList
      state.totalkycMakercount = action.payload.total
    });
    builder.addCase(getmerchantkycloglisting.pending, (state, action) => {
      state.merchantkycloglisting = []
    });
    builder.addCase(getmerchantkycloglisting.fulfilled, (state, action) => {
      state.merchantkycloglisting = action.payload.list
      state.merchantkycloglistingtotalcount = action.payload.total
    });
    builder.addCase(getconsumerkycloglisting.pending, (state, action) => {
      state.consumerkycloglisting = []
    });
    builder.addCase(getconsumerkycloglisting.fulfilled, (state, action) => {
      state.consumerkycloglisting = action.payload.list
      state.consumerkycloglistingtotalcount = action.payload.total
    });
    builder.addCase(getminorconsumerkyclog.pending, (state, action) => {
      state.minorkycloglisting = []
    });
    builder.addCase(getminorconsumerkyclog.fulfilled, (state, action) => {
      state.minorkycloglisting = action.payload.list
      state.minorkycloglistingtotalcount = action.payload.total
    });
    builder.addCase(getKYCCheckerbusinesslist.pending, (state, action) => {
      state.kycCheckerMerchant = []
    });
    builder.addCase(getKYCCheckerbusinesslist.fulfilled, (state, action) => {
      state.kycCheckerMerchant = action.payload.list
      state.totalkycCheckercount = action.payload.total
    });
    builder.addCase(getMerchantPeriodicMakerbusinesslist.pending, (state, action) => {
      state.periodicMakerMerchant = []
      state.periodicMakerCustomMerchant = []
      state.totalperiodicMakerMerchantcount = 0
    });
    builder.addCase(getMerchantPeriodicMakerbusinesslist.fulfilled, (state, action) => {
      state.periodicMakerMerchant = action.payload.list
      state.periodicMakerCustomMerchant = action.payload.configurationCustomList
      state.totalperiodicMakerMerchantcount = action.payload.total
    });
    builder.addCase(getMerchantPeriodicCheckerbusinesslist.pending, (state, action) => {
      state.periodicCheckerMerchant = []
    });
    builder.addCase(getMerchantPeriodicCheckerbusinesslist.fulfilled, (state, action) => {
      state.periodicCheckerMerchant = action.payload.list
      state.totalperiodicCheckerMerchantcount = action.payload.total
    });
    builder.addCase(getComplianceMakerlist.pending, (state, action) => {
      state.complianceMakerMerchant = []
    });
    builder.addCase(getComplianceMakerlist.fulfilled, (state, action) => {
      state.complianceMakerMerchant = action.payload.list
      state.totalComplianceMakercount = action.payload.total
    });
    builder.addCase(getComplianceCheckerlist.pending, (state, action) => {
      state.complianceCheckerMerchant = []
    });
    builder.addCase(getComplianceCheckerlist.fulfilled, (state, action) => {
      state.complianceCheckerMerchant = action.payload.list
      state.totalComplianceCheckercount = action.payload.total
    });
    builder.addCase(scrutinyMaker.pending, (state, action) => {
      state.scrutinyMakerList = []
    });
    builder.addCase(scrutinyMaker.fulfilled, (state, action) => {
      state.scrutinyMakerList = action.payload.list
      state.totalscrutinyMakerList = action.payload.total
    });
    builder.addCase(scrutinyChecker.pending, (state, action) => {
      state.scrutinyCheckerList = []
    });
    builder.addCase(scrutinyChecker.fulfilled, (state, action) => {
      state.scrutinyCheckerList = action.payload.list
      state.totalscrutinyCheckerList = action.payload.total
    });
    builder.addCase(kycMaker.pending, (state, action) => {
      state.kycMakerList = []
      state.kycMakerCustomList = []
      state.totalkycMakerList = 0
    });
    builder.addCase(kycMaker.fulfilled, (state, action) => {
      state.kycMakerList = action.payload.list
      state.kycMakerCustomList = action.payload.configurationCustomList
      state.totalkycMakerList = action.payload.total
    });
    builder.addCase(getminorconsumerlist.pending, (state, action) => {
      state.minorkycMakerList = []
      state.minorkycMakerCustomList = []
      state.totalMinorkycMakerList = 0
    });
    builder.addCase(getminorconsumerlist.fulfilled, (state, action) => {
      state.minorkycMakerList = action.payload.list
      state.minorkycMakerCustomList = action.payload.configurationCustomList
      state.totalMinorkycMakerList = action.payload.total
    });
    builder.addCase(getminorChecketlist.pending, (state, action) => {
      state.minorkycCheckerList = []
      state.totalMinorkycCheckerList = 0
    });
    builder.addCase(getminorChecketlist.fulfilled, (state, action) => {
      state.minorkycCheckerList = action.payload.list
      state.totalMinorkycCheckerList = action.payload.total
    });
    builder.addCase(getminorPeriodiclist.pending, (state, action) => {
      state.minorPeriodicMakerList = []
      state.totalMinorPeriodicMakerList = 0
    });
    builder.addCase(getminorPeriodiclist.fulfilled, (state, action) => {
      state.minorPeriodicMakerList = action.payload.list
      state.totalMinorPeriodicMakerList = action.payload.total
    });
    builder.addCase(getminorPeriodicChecketlist.pending, (state, action) => {
      state.minorPeriodicCheckerList = []
      state.totalMinorPeriodicCheckerList = 0
    });
    builder.addCase(getminorPeriodicChecketlist.fulfilled, (state, action) => {
      state.minorPeriodicCheckerList = action.payload.list
      state.totalMinorPeriodicCheckerList = action.payload.total
    });
    builder.addCase(getminorComplianceMakerlist.pending, (state, action) => {
      state.minorComplianceMakerList = []
      state.totalMinorComplianceMakerList = 0
    });
    builder.addCase(getminorComplianceMakerlist.fulfilled, (state, action) => {
      state.minorComplianceMakerList = action.payload.list
      state.totalMinorComplianceMakerList = action.payload.total
    });
    builder.addCase(getminorComplianceCheckerlist.pending, (state, action) => {
      state.minorComplianceCheckerList = []
      state.totalMinorComplianceCheckerList = 0
    });
    builder.addCase(getminorComplianceCheckerlist.fulfilled, (state, action) => {
      state.minorComplianceCheckerList = action.payload.list
      state.totalMinorComplianceCheckerList = action.payload.total
    });
    builder.addCase(getminorEDDMakerlist.pending, (state, action) => {
      state.minorEDDMakerList = []
      state.totalMinorEDDMakerList = 0
    });
    builder.addCase(getminorEDDMakerlist.fulfilled, (state, action) => {
      state.minorEDDMakerList = action.payload.list
      state.totalMinorEDDMakerList = action.payload.total
    });
    builder.addCase(getminorEDDCheckerlist.pending, (state, action) => {
      state.minorEDDCheckerList = []
      state.totalMinorEDDCheckerList = 0
    });
    builder.addCase(getminorEDDCheckerlist.fulfilled, (state, action) => {
      state.minorEDDCheckerList = action.payload.list
      state.totalMinorEDDCheckerList = action.payload.total
    });
    builder.addCase(PeriodicMaker.pending, (state, action) => {
      state.periodicMakerList = []
      state.periodicMakerCustomList = []
    });
    builder.addCase(PeriodicMaker.fulfilled, (state, action) => {
      state.periodicMakerList = action.payload.list
      state.periodicMakerCustomList = action.payload.configurationCustomList
      state.totalperiodicMakerList = action.payload.total
    });
    builder.addCase(kycChecker.pending, (state, action) => {
      state.kycCheckerList = []
    });
    builder.addCase(kycChecker.fulfilled, (state, action) => {
      state.kycCheckerList = action.payload.list
      state.totalkycCheckerList = action.payload.total
    });
    builder.addCase(PeriodicChecker.pending, (state, action) => {
      state.periodicCheckerList = []
    });
    builder.addCase(PeriodicChecker.fulfilled, (state, action) => {
      state.periodicCheckerList = action.payload.list
      state.totalperiodicCheckerList = action.payload.total
    });
    builder.addCase(complianceMaker.pending, (state, action) => {
      state.complianceMakerList = []
    });
    builder.addCase(complianceMaker.fulfilled, (state, action) => {
      state.complianceMakerList = action.payload.list
      state.totalcomplianceMakerList = action.payload.total
    });
    builder.addCase(complianceChecker.pending, (state, action) => {
      state.complianceCheckerList = []
    });
    builder.addCase(complianceChecker.fulfilled, (state, action) => {
      state.complianceCheckerList = action.payload.list
      state.totalcomplianceCheckerList = action.payload.total
    });
    builder.addCase(consumergetconsumerbacklog.pending, (state, action) => {
      state.consumerbacklogList = []
    });
    builder.addCase(consumergetconsumerbacklog.fulfilled, (state, action) => {
      state.consumerbacklogList = action.payload.list
      state.totalconsumerbacklogcount = action.payload.total
    });
    builder.addCase(getminorconsumerlistbacklog.pending, (state, action) => {
      state.minorbacklogList = []
    });
    builder.addCase(getminorconsumerlistbacklog.fulfilled, (state, action) => {
      state.minorbacklogList = action.payload.list
      state.totalminorbacklogcount = action.payload.total
    });
    builder.addCase(merchantgetmerchantbacklog.pending, (state, action) => {
      state.merchantbacklogList = []
    });
    builder.addCase(merchantgetmerchantbacklog.fulfilled, (state, action) => {
      state.merchantbacklogList = action.payload.list
      state.totalmerchantbacklogcount = action.payload.total
    });
    builder.addCase(getconsumercnicblocklist.pending, (state, action) => {
      state.consumercnicblocklist = []
    });
    builder.addCase(getconsumercnicblocklist.fulfilled, (state, action) => {
      state.consumercnicblocklist = action.payload.list
      state.totalconsumercnicblocklistcount = action.payload.total
    });
    builder.addCase(getminorconsumerlistblockbynationalid.pending, (state, action) => {
      state.minorcnicblocklist = []
    });
    builder.addCase(getminorconsumerlistblockbynationalid.fulfilled, (state, action) => {
      state.minorcnicblocklist = action.payload.list
      state.totalminorcnicblocklistcount = action.payload.total
    });
    builder.addCase(getmerchantcnicblocklist.pending, (state, action) => {
      state.merchantcnicblocklist = []
    });
    builder.addCase(getmerchantcnicblocklist.fulfilled, (state, action) => {
      state.merchantcnicblocklist = action.payload.list
      state.totalmerchantcnicblocklistcount = action.payload.total
    });
    builder.addCase(getnearexpirymerchantslist.pending, (state, action) => {
      state.expirymerchantslist = []
    });
    builder.addCase(getnearexpirymerchantslist.fulfilled, (state, action) => {
      state.expirymerchantslist = action.payload.list
      state.totalexpirymerchantslistcount = action.payload.total
    });
    builder.addCase(getnearexpiryconsumerslist.pending, (state, action) => {
      state.expiryconsumerlist = []
    });
    builder.addCase(getnearexpiryconsumerslist.fulfilled, (state, action) => {
      state.expiryconsumerlist = action.payload.list
      state.totalexpiryconsumerlistcount = action.payload.total
    });
    builder.addCase(getminorconsumerlistnationalidexp.pending, (state, action) => {
      state.expiryminorlist = []
    });
    builder.addCase(getminorconsumerlistnationalidexp.fulfilled, (state, action) => {
      state.expiryminorlist = action.payload.list
      state.totalexpiryminorlistcount = action.payload.total
    });
  },
  reducers: {
    updateKYCMakerMerchant: (state, action) => {
      const getIndex = state.kycMakerMerchant.findIndex(item => item.mid == action.payload.mid)
      state.kycMakerMerchant[getIndex] = action.payload;
    },
    updateKYCMakerList: (state, action) => {
      const getIndex = state.kycMakerList.findIndex(item => item.cid == action.payload.cid)
      state.kycMakerList[getIndex] = action.payload;
    },
    updateConsumerKYCCheckerList: (state, action) => {
      const getIndex = state.kycCheckerList.findIndex(item => item.cid == action.payload.cid)
      state.kycCheckerList[getIndex] = action.payload;
    },
    updatePeriodicMakerList: (state, action) => {
      const getIndex = state.periodicMakerList.findIndex(item => item.cid == action.payload.cid)
      state.periodicMakerList[getIndex] = action.payload;
    },
    updatePeriodicCheckerList: (state, action) => {
      const getIndex = state.periodicCheckerList.findIndex(item => item.cid == action.payload.cid)
      state.periodicCheckerList[getIndex] = action.payload;
    },


    updatemerchantSearchScrutinyMaker: (state, action) => {
      state.merchantSearchScrutinyMaker = action.payload
    },
    updatemerchantSearchScrutinyChecker: (state, action) => {
      state.merchantSearchScrutinyChecker = action.payload
    },
    updatemerchantSearchKYCMaker: (state, action) => {
      state.merchantSearchKYCMaker = action.payload
    },
    updatemerchantSearchKYCChecker: (state, action) => {
      state.merchantSearchKYCChecker = action.payload
    },
    updatemerchantSearchPeriodicMaker: (state, action) => {
      state.merchantSearchPeriodicMaker = action.payload
    },
    updatemerchantSearchPeriodicChecker: (state, action) => {
      state.merchantSearchPeriodicChecker = action.payload
    },
    updatemerchantSearchComplianceMaker: (state, action) => {
      state.merchantSearchComplianceMaker = action.payload
    },
    updatemerchantSearchComplianceChecker: (state, action) => {
      state.merchantSearchComplianceChecker = action.payload
    },
    updatemerchantSearchEDDMaker: (state, action) => {
      state.merchantSearchEDDMaker = action.payload
    },
    updatemerchantSearchEDDChecker: (state, action) => {
      state.merchantSearchEDDChecker = action.payload
    },
    updatemerchantSearchBAHLScrutiny: (state, action) => {
      state.merchantSearchBAHLScrutiny = action.payload
    },
    updatemerchantSearchBAHLAuthorization: (state, action) => {
      state.merchantSearchBAHLAuthorization = action.payload
    },

    updateconsumerSearchKYCMaker: (state, action) => {
      console.log(action)
      state.consumerSearchKYCMaker = action.payload
    },

    updateconsumerSearchKYCChecker: (state, action) => {
      state.consumerSearchKYCChecker = action.payload
    },
    updateconsumerSearchPeriodicMaker: (state, action) => {
      state.consumerSearchPeriodicMaker = action.payload
    },
    updateconsumerSearchPeriodicChecker: (state, action) => {
      state.consumerSearchPeriodicChecker = action.payload
    },
    updateconsumerSearchComplianceMaker: (state, action) => {
      state.consumerSearchComplianceMaker = action.payload
    },
    updateconsumerSearchComplianceChecker: (state, action) => {
      state.consumerSearchComplianceChecker = action.payload
    },
    updateconsumerSearchEDDMaker: (state, action) => {
      state.consumerSearchEDDMaker = action.payload
    },
    updateconsumerSearchEDDChecker: (state, action) => {
      state.consumerSearchEDDChecker = action.payload
    },

    updateMinorSearchKYCMaker: (state, action) => {
      state.minorSearchKYCMaker = action.payload
    },
    updateMinorSearchKYCChecker: (state, action) => {
      state.minorSearchKYCChecker = action.payload
    },
    updateMinorSearchPeriodicMaker: (state, action) => {
      state.minorSearchPeriodicMaker = action.payload
    },
    updateMinorSearchPeriodicChecker: (state, action) => {
      state.minorSearchPeriodicChecker = action.payload
    },
    updateMinorSearchComplianceMaker: (state, action) => {
      state.minorSearchComplianceMaker = action.payload
    },
    updateMinorSearchComplianceChecker: (state, action) => {
      state.minorSearchComplianceChecker = action.payload
    },
    updateMinorSearchEDDMaker: (state, action) => {
      state.minorSearchEDDMaker = action.payload
    },
    updateMinorSearchEDDChecker: (state, action) => {
      state.minorSearchEDDChecker = action.payload
    },
  },
});

export default digitalIdentitySlice.reducer;

export const { updateKYCMakerMerchant, updateKYCMakerList, updateConsumerKYCCheckerList, updatePeriodicMakerList, updatePeriodicCheckerList,
  updatemerchantSearchScrutinyMaker,
  updatemerchantSearchScrutinyChecker,
  updatemerchantSearchKYCMaker,
  updatemerchantSearchKYCChecker,
  updatemerchantSearchPeriodicMaker,
  updatemerchantSearchPeriodicChecker,
  updatemerchantSearchComplianceMaker,
  updatemerchantSearchComplianceChecker,
  updatemerchantSearchEDDMaker,
  updatemerchantSearchEDDChecker,
  updatemerchantSearchBAHLScrutiny,
  updatemerchantSearchBAHLAuthorization,
  updateconsumerSearchKYCMaker,
  updateconsumerSearchKYCChecker,
  updateconsumerSearchPeriodicMaker,
  updateconsumerSearchPeriodicChecker,
  updateconsumerSearchComplianceMaker,
  updateconsumerSearchComplianceChecker,
  updateconsumerSearchEDDMaker,
  updateconsumerSearchEDDChecker,

  updateMinorSearchKYCMaker,
  updateMinorSearchKYCChecker,
  updateMinorSearchPeriodicMaker,
  updateMinorSearchPeriodicChecker,
  updateMinorSearchComplianceMaker,
  updateMinorSearchComplianceChecker,
  updateMinorSearchEDDMaker,
  updateMinorSearchEDDChecker,

} = digitalIdentitySlice.actions;