import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";

export const statefilter = createAsyncThunk(
  "statefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.statefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const transactionfilter = createAsyncThunk(
  "transactionfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.transactionfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const channelfilter = createAsyncThunk(
  "channelfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.channelfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const productfilter = createAsyncThunk(
  "productfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.productfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const taxfilter = createAsyncThunk(
  "taxfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.taxfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const configfilter = createAsyncThunk(
  "configfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.configfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const cityfilter = createAsyncThunk(
  "cityfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.cityfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const countryfilter = createAsyncThunk(
  "countryfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.countryfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const requestfilter = createAsyncThunk(
  "requestfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.requestfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getfinancialtransactionnames = createAsyncThunk(
  "getfinancialtransactionnames",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getfinancialtransactionnames(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const currencyfilter = createAsyncThunk(
  "currencyfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.currencyfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const districtfilter = createAsyncThunk(
  "districtfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.districtfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const departmentfilter = createAsyncThunk(
  "departmentfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.departmentfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const poolactfilter = createAsyncThunk(
  "poolactfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.poolactfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const respcodefilter = createAsyncThunk(
  "respcodefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.respcodefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const uirolefilter = createAsyncThunk(
  "uirolefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.uirolefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const uiuserfilter = createAsyncThunk(
  "uiuserfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.uiuserfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const actstatusfilter = createAsyncThunk(
  "actstatusfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.actstatusfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const riskfilter = createAsyncThunk(
  "riskfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.riskfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const mccfilter = createAsyncThunk(
  "mccfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.mccfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const payrollcompanyfilter = createAsyncThunk(
  "payrollcompanyfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.payrollcompanyfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const applanguagefilter = createAsyncThunk(
  "applanguagefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.applanguagefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const holdingfilter = createAsyncThunk(
  "holdingfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.holdingfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const employeefilter = createAsyncThunk(
  "employeefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.employeefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const businessnaturefilter = createAsyncThunk(
  "businessnaturefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.businessnaturefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const merchantindicatorfilter = createAsyncThunk(
  "merchantindicatorfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantindicatorfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const partnertypefilter = createAsyncThunk(
  "partnertypefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.partnertypefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const legalentityfilter = createAsyncThunk(
  "legalentityfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.legalentityfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getobaappstatus = createAsyncThunk(
  "getobaappstatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getobaappstatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const relationacqfilter = createAsyncThunk(
  "relationacqfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.relationacqfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const terminaltypefilter = createAsyncThunk(
  "terminaltypefilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.terminaltypefilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const telecomfilter = createAsyncThunk(
  "telecomfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.telecomfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const branchfilter = createAsyncThunk(
  "branchfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.branchfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const terminalfilter = createAsyncThunk(
  "terminalfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.terminalfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const merchantfilter = createAsyncThunk(
  "merchantfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const notificationtoken = createAsyncThunk(
  "notificationtoken",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.notificationtoken(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.notificationTokenCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const faqcategory = createAsyncThunk(
  "faqcategory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.faqcategory(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const soccategory = createAsyncThunk(
  "soccategory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.soccategory(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const faqquestion = createAsyncThunk(
  "faqquestion",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.faqquestion(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const socchargetype = createAsyncThunk(
  "socchargetype",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.socchargetype(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const merchanttype = createAsyncThunk(
  "merchanttype",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchanttype(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getreportlist = createAsyncThunk(
  "getreportlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getreportlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getdeclinereason = createAsyncThunk(
  "getdeclinereason",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdeclinereason(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getkycprocstage = createAsyncThunk(
  "getkycprocstage",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getkycprocstage(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getkycstagestatus = createAsyncThunk(
  "getkycstagestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getkycstagestatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getwalletlevels = createAsyncThunk(
  "getwalletlevels",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletlevels(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getdevicestatus = createAsyncThunk(
  "getdevicestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdevicestatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getconsumerproducts = createAsyncThunk(
  "getconsumerproducts",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerproducts(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getcompliancetransactionnames = createAsyncThunk(
  "getcompliancetransactionnames",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getcompliancetransactionnames(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getsafstatus = createAsyncThunk(
  "getsafstatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsafstatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getreportformats = createAsyncThunk(
  "getreportformats",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getreportformats(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getbillertype = createAsyncThunk(
  "getbillertype",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbillertype(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getauditeventtypes = createAsyncThunk(
  "getauditeventtypes",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getauditeventtypes(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getauditmoduletypes = createAsyncThunk(
  "getauditmoduletypes",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getauditmoduletypes(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getrequestelements = createAsyncThunk(
  "getrequestelements",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrequestelements(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getservicename = createAsyncThunk(
  "getservicename",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getservicename(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getrequestmanualadjustment = createAsyncThunk(
  "getrequestmanualadjustment",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrequestmanualadjustment(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const crmMerchantproductfilter = createAsyncThunk(
  "crmMerchantproductfilter",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.crmMerchantproductfilter(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantproductlevel = createAsyncThunk(
  "getmerchantproductlevel",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantproductlevel(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getbanks = createAsyncThunk(
  "getbanks",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbanks(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const allfilters = createAsyncThunk(
  "allfilters",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.allfilters(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getubpsrespcode = createAsyncThunk(
  "getubpsrespcode",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getubpsrespcode(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const trannature = createAsyncThunk(
  "trannature",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.trannature(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getcityregion = createAsyncThunk(
  "getcityregion",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getcityregion(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getdeclinereasonmerchant = createAsyncThunk(
  "getdeclinereasonmerchant",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdeclinereasonmerchant(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getrequeststatus = createAsyncThunk(
  "getrequeststatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrequeststatus(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getaccounttype = createAsyncThunk(
  "getaccounttype",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getaccounttype(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getwalletcategory = createAsyncThunk(
  "getwalletcategory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletcategory(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getofficestatus = createAsyncThunk(
  "getofficestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getofficestatus(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getresidencestatus = createAsyncThunk(
  "getresidencestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getresidencestatus(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getagentapprequeststatus = createAsyncThunk(
  "getagentapprequeststatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getagentapprequeststatus(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getsourceapp = createAsyncThunk(
  "getsourceapp",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsourceapp(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantfiller = createAsyncThunk(
  "getmerchantfiller",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantfiller(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.merchantCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getholdingfiller = createAsyncThunk(
  "getholdingfiller",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getholdingfiller(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.holdingCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbranchfiller = createAsyncThunk(
  "getmerchantbranchfiller",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchfiller(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.merchantBranchCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getrequesttype = createAsyncThunk(
  "getrequesttype",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrequesttype(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getpaymentmode = createAsyncThunk(
  "getpaymentmode",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpaymentmode(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getsettlementdelay = createAsyncThunk(
  "getsettlementdelay",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsettlementdelay(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getdeclinereasonminor = createAsyncThunk(
  "getdeclinereasonminor",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdeclinereasonminor(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response.data.filterCustomList;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const filterThunks = {
  statefilter,
  transactionfilter,
  channelfilter,
  productfilter,
  taxfilter,
  configfilter,
  cityfilter,
  countryfilter,
  requestfilter,
  getrequeststatus,
  getfinancialtransactionnames,
  currencyfilter,
  districtfilter,
  departmentfilter,
  poolactfilter,
  respcodefilter,
  uirolefilter,
  uiuserfilter,
  actstatusfilter,
  riskfilter,
  mccfilter,
  payrollcompanyfilter,
  applanguagefilter,
  holdingfilter,
  employeefilter,
  businessnaturefilter,
  merchantindicatorfilter,
  partnertypefilter,
  legalentityfilter,
  relationacqfilter,
  terminaltypefilter,
  telecomfilter,
  branchfilter,
  terminalfilter,
  merchantfilter,
  notificationtoken,
  faqcategory,
  soccategory,
  faqquestion,
  socchargetype,
  merchanttype,
  getreportlist,
  getdeclinereason,
  getkycprocstage,
  getkycstagestatus,
  getwalletlevels,
  getdevicestatus,
  getconsumerproducts,
  getcompliancetransactionnames,
  getsafstatus,
  getsourceapp,
  getreportformats,
  getbillertype,
  getauditeventtypes,
  getauditmoduletypes,
  getrequestelements,
  getservicename,
  getrequestmanualadjustment,
  crmMerchantproductfilter,
  getbanks,
  getagentapprequeststatus,
  getpaymentmode,
  getsettlementdelay,
  allfilters
};