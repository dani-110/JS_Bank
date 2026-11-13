import { createSlice } from "@reduxjs/toolkit";
import { citylist, countrylist, currencylist, forexlist, getappdoclist, getfaqlist, getsoclist, requestlist, statelist } from "../actions/generalConfig";


const initialState = {
  cityList: [],
  totalcitycount: 0,
  stateList: [],
  totalstatecount: 0,
  countryList: [],
  totalcountrycount: 0,
  currencyList: [],
  totalcurrencycount: 0,
  forexList: [],
  totalforexcount: 0,
  requestList: [],
  totalrequestcount: 0,
  faqList: [],
  totalfaqlistcount: 0,
  socList: [],
  totalsoccount: 0,
  appdocList: [],
  totalappdoccount: 0,
}

const generalConfigSlice = createSlice({
  name: "generalConfig",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(citylist.pending, (state, action) => {
      state.cityList = []
    });
    builder.addCase(citylist.fulfilled, (state, action) => {
      state.cityList = action.payload.list
      state.totalcitycount = action.payload.total
    });
    builder.addCase(statelist.pending, (state, action) => {
      state.stateList = []
    });
    builder.addCase(statelist.fulfilled, (state, action) => {
      state.stateList = action.payload.list
      state.totalstatecount = action.payload.total
    });
    builder.addCase(countrylist.pending, (state, action) => {
      state.countryList = []
    });
    builder.addCase(countrylist.fulfilled, (state, action) => {
      state.countryList = action.payload.list
      state.totalcountrycount = action.payload.total
    });
    builder.addCase(currencylist.pending, (state, action) => {
      state.currencyList = []
    });
    builder.addCase(currencylist.fulfilled, (state, action) => {
      state.currencyList = action.payload.list
      state.totalcurrencycount = action.payload.total
    });
    builder.addCase(forexlist.pending, (state, action) => {
      state.forexList = []
    });
    builder.addCase(forexlist.fulfilled, (state, action) => {
      state.forexList = action.payload.list
      state.totalforexcount = action.payload.total
    });
    builder.addCase(requestlist.pending, (state, action) => {
      state.requestList = []
    });
    builder.addCase(requestlist.fulfilled, (state, action) => {
      state.requestList = action.payload.list
      state.totalrequestcount = action.payload.total
    });
    builder.addCase(getfaqlist.pending, (state, action) => {
      state.faqList = []
    });
    builder.addCase(getfaqlist.fulfilled, (state, action) => {
      state.faqList = action.payload.list
      state.totalfaqlistcount = action.payload.total
    });
    builder.addCase(getsoclist.pending, (state, action) => {
      state.socList = []
    });
    builder.addCase(getsoclist.fulfilled, (state, action) => {
      state.socList = action.payload.list
      state.totalsoccount = action.payload.total
    });
    builder.addCase(getappdoclist.pending, (state, action) => {
      state.appdocList = []
    });
    builder.addCase(getappdoclist.fulfilled, (state, action) => {
      state.appdocList = action.payload.list
      state.totalappdoccount = action.payload.total
    });
  },
  reducers: {
    createCityRecord: (state, action) => {
      state.cityList.unshift(action.payload)
    },
    updateCityRecord: (state, action) => {
      const getIndex = state.cityList.findIndex(item => item.code == action.payload.code)
      state.cityList[getIndex] = action.payload;
    },
    createStateRecord: (state, action) => {
      state.stateList.unshift(action.payload)
    },
    updateStateRecord: (state, action) => {
      const getIndex = state.stateList.findIndex(item => item.code == action.payload.code)
      state.stateList[getIndex] = action.payload;
    },
    createCountryRecord: (state, action) => {
      state.countryList.unshift(action.payload)
    },
    updateCountryRecord: (state, action) => {
      const getIndex = state.countryList.findIndex(item => item.code == action.payload.code)
      state.countryList[getIndex] = action.payload;
    },
    createCurrencyRecord: (state, action) => {
      state.currencyList.unshift(action.payload)
    },
    updateCurrencyRecord: (state, action) => {
      const getIndex = state.currencyList.findIndex(item => item.code == action.payload.code)
      state.currencyList[getIndex] = action.payload;
    },
    createForexRecord: (state, action) => {
      state.forexList.unshift(action.payload)
    },
    updateForexRecord: (state, action) => {
      const getIndex = state.forexList.findIndex(item => item.exid == action.payload.exid)
      state.forexList[getIndex] = action.payload;
    },
    createFaqRecord: (state, action) => {
      state.faqList.unshift(action.payload)
    },
    updateFaqRecord: (state, action) => {
      const getIndex = state.faqList.findIndex(item => item.faqid == action.payload.faqid)
      state.faqList[getIndex] = action.payload;
    },
    createSocRecord: (state, action) => {
      state.socList.unshift(action.payload)
    },
    updateSocRecord: (state, action) => {
      const getIndex = state.socList.findIndex(item => item.socid == action.payload.socid)
      state.socList[getIndex] = action.payload;
    },
    createappdocRecord: (state, action) => {
      state.appdocList.unshift(action.payload)
    },
    updateappdocRecord: (state, action) => {
      const getIndex = state.appdocList.findIndex(item => item.apmid == action.payload.apmid)
      state.appdocList[getIndex] = action.payload;
    },
  },
});
export default generalConfigSlice.reducer;

export const { createCityRecord, updateCityRecord, createStateRecord, updateStateRecord, createCountryRecord, updateCountryRecord, createCurrencyRecord, updateCurrencyRecord, createForexRecord, updateForexRecord, createFaqRecord, updateFaqRecord, createSocRecord, updateSocRecord, createappdocRecord, updateappdocRecord } = generalConfigSlice.actions;