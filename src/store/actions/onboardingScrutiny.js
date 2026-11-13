import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const appscrutiny = createAsyncThunk(
  "appscrutiny",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.appscrutiny(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstageonedata = createAsyncThunk(
  "getappstageonedata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstageonedata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageOneCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageOneCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantonboardinginfo = createAsyncThunk(
  "getmerchantonboardinginfo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantonboardinginfo(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getoutletdata = createAsyncThunk(
  "getoutletdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getoutletdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "warning",
            title: "Info!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getbrancheditflag = createAsyncThunk(
  "getbrancheditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbrancheditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setbrancheditflag = createAsyncThunk(
  "setbrancheditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setbrancheditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getbobaeditflag = createAsyncThunk(
  "getbobaeditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbobaeditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setbranchobaccounteditflag = createAsyncThunk(
  "setbranchobaccounteditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setbranchobaccounteditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbranch = createAsyncThunk(
  "getmerchantbranch",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranch(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantBranchCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbranchonboardingbankaccount = createAsyncThunk(
  "getmerchantbranchonboardingbankaccount",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchonboardingbankaccount(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantBankAcctCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue([]);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getapplicationflags = createAsyncThunk(
  "getapplicationflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getapplicationflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantInfoFieldsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getbankaccountflags = createAsyncThunk(
  "getbankaccountflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbankaccountflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantBankAccFieldsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmemberflags = createAsyncThunk(
  "getmemberflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmemberflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantMemberFieldsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getdocumentflags = createAsyncThunk(
  "getdocumentflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdocumentflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantDocFieldsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbrancheditflag = createAsyncThunk(
  "getmerchantbrancheditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbrancheditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantBranchFieldsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbranchonboardingbankaccounteditflag = createAsyncThunk(
  "getmerchantbranchonboardingbankaccounteditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchonboardingbankaccounteditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantBankAccFieldsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setapplicationflags = createAsyncThunk(
  "setapplicationflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setapplicationflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const editmerchantdata = createAsyncThunk(
  "editmerchantdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editmerchantdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setbankaccountflags = createAsyncThunk(
  "setbankaccountflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setbankaccountflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setdocumentflags = createAsyncThunk(
  "setdocumentflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setdocumentflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setmerchantbrancheditflag = createAsyncThunk(
  "setmerchantbrancheditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantbrancheditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const uploadkycdocument = createAsyncThunk(
  "uploadkycdocument",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.uploadkycdocument(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setmerchantrisk = createAsyncThunk(
  "setmerchantrisk",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantrisk(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setmemberflags = createAsyncThunk(
  "setmemberflags",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmemberflags(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setmerchantbranchonboardingbankaccounteditflag = createAsyncThunk(
  "setmerchantbranchonboardingbankaccounteditflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantbranchonboardingbankaccounteditflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantonboardingjourneyComments = createAsyncThunk(
  "getmerchantonboardingjourneyComments",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantonboardingjourneyComments(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data?.merchantJourneyCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getbranchobajourney = createAsyncThunk(
  "getbranchobajourney",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbranchobajourney(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data?.branchJourneyCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getdocuments = createAsyncThunk(
  "getdocuments",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdocuments(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.obaMerchantDocsCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const uploaddeviationsdocument = createAsyncThunk(
  "uploaddeviationsdocument",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.uploaddeviationsdocument(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const uploadBranchDeviationsdocument = createAsyncThunk(
  "uploadBranchDeviationsdocument",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.uploadBranchDeviationsdocument(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstagetwodata = createAsyncThunk(
  "getappstagetwodata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstagetwodata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageTwoCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageTwoCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstagethreedata = createAsyncThunk(
  "getappstagethreedata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstagethreedata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageThreeCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageThreeCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstagefourdata = createAsyncThunk(
  "getappstagefourdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstagefourdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageFourCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageFourCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstagefivedata = createAsyncThunk(
  "getappstagefivedata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstagefivedata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageFiveCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageFiveCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstagesixdata = createAsyncThunk(
  "getappstagesixdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstagesixdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageSixCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageSixCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getappstagesevendata = createAsyncThunk(
  "getappstagesevendata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getappstagesevendata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaStageSevenCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.obaStageSevenCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const merchantobaprocess = createAsyncThunk(
  "merchantobaprocess",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantobaprocess(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const obaprocess = createAsyncThunk(
  "obaprocess",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.obaprocess(), data, thunkAPI);
      console.log(response.data.responsecode)
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const merchantobaOprationallist = createAsyncThunk(
  "merchantobaOprationallist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const applicationlist = createAsyncThunk(
  "applicationlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.applicationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setapplicationstatus = createAsyncThunk(
  "setapplicationstatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setapplicationstatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getobaapplicationdataexport = createAsyncThunk(
  "getobaapplicationdataexport",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getobaapplicationdataexport(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getmerchantbranchmakerobalist = createAsyncThunk(
  "getmerchantbranchmakerobalist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaMerchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        console.log(response.data)
        return {
          list: response.data.obaMerchantBranchCustomList,
          accountList: response.data.obaMerchantBranchAcctCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbranchcheckerobalist = createAsyncThunk(
  "getmerchantbranchcheckerobalist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaMerchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        console.log(response.data)
        return {
          list: response.data.obaMerchantBranchCustomList,
          accountList: response.data.obaMerchantBranchAcctCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getmerchantbranchApplicationHistorylist = createAsyncThunk(
  "getmerchantbranchApplicationHistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaMerchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        console.log(response.data)
        return {
          list: response.data.obaMerchantBranchCustomList,
          accountList: response.data.obaMerchantBranchAcctCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbankmakerobalist = createAsyncThunk(
  "getmerchantbankmakerobalist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaMerchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        console.log(response.data)
        return {
          list: response.data.obaMerchantBranchCustomList,
          accountList: response.data.obaMerchantBranchAcctCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getmerchantbankcheckerobalist = createAsyncThunk(
  "getmerchantbankcheckerobalist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaMerchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        console.log(response.data)
        return {
          list: response.data.obaMerchantBranchCustomList,
          accountList: response.data.obaMerchantBranchAcctCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const applicationCheckerlist = createAsyncThunk(
  "applicationCheckerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.applicationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const applicationReviewerlist = createAsyncThunk(
  "applicationReviewerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.applicationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const applicationAuthorizerlist = createAsyncThunk(
  "applicationAuthorizerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.applicationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const applicationLogList = createAsyncThunk(
  "applicationLogList",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.applicationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const merchantobalist = createAsyncThunk(
  "merchantobalist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantobalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.obaApplicationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.obaApplicationCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const branchobaprocess = createAsyncThunk(
  "branchobaprocess",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.branchobaprocess(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);