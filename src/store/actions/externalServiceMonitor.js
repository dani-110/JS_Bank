import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getnadratranlist = createAsyncThunk(
  "getnadratranlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadratranlist(), data, thunkAPI);
      console.log(response.data.nadraReqRespCustomList)
      if (response.data.responsecode == 0) {
        if (response.data.nadraReqRespCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.nadraReqRespCustomList,
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
export const getnadraresponselist = createAsyncThunk(
  "getnadraresponselist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadraresponselist(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        return response.data.nadraReqRespCustomList;
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


export const getmsaasprotransactionlist = createAsyncThunk(
  "getmsaasprotransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmsaasprotransactionlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.msaasproReqRespCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.msaasproReqRespCustomList,
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
export const getmsaasproresponse = createAsyncThunk(
  "getmsaasproresponse",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmsaasproresponse(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        return response.data.msaasproReqRespCustomList;
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
export const getdocumentocrlist = createAsyncThunk(
  "getdocumentocrlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdocumentocrlist(), data, thunkAPI);
      console.log(response.data.docOCRCustomList)
      if (response.data.responsecode == 0) {
        if (response.data.docOCRCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.docOCRCustomList,
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
export const getdocumentvalidationlist = createAsyncThunk(
  "getdocumentvalidationlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdocumentvalidationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.docValidationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.docValidationCustomList,
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
export const getbiometricvalidationlist = createAsyncThunk(
  "getbiometricvalidationlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbiometricvalidationlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.bioValidationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.bioValidationCustomList,
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
export const getbillinquirylist = createAsyncThunk(
  "getbillinquirylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbillinquirylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.billInquiryCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.billInquiryCustomList,
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
export const getholdinglistresponse = createAsyncThunk(
  "getholdinglistresponse",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getholdinglistresponse(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.holdingCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.holdingCustomList,
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
export const getmerchantlistgesponse = createAsyncThunk(
  "getmerchantlistgesponse",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantlistgesponse(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantCustomList,
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
export const getmerchantbranchlistresponse = createAsyncThunk(
  "getmerchantbranchlistresponse",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantbranchlistresponse(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantBranchCustomList,
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
export const getmerchantterminallistresponse = createAsyncThunk(
  "getmerchantterminallistresponse",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantterminallistresponse(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantTerminalCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantTerminalCustomList,
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
export const getmerchantdocumentlistresponse = createAsyncThunk(
  "getmerchantdocumentlistresponse",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantdocumentlistresponse(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantCustomList,
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


export const retransmitholding = createAsyncThunk(
  "retransmitholding",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.retransmitholding(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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
export const retransmitmerchant = createAsyncThunk(
  "retransmitmerchant",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.retransmitmerchant(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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
export const retransmitmerchantbranch = createAsyncThunk(
  "retransmitmerchantbranch",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.retransmitmerchantbranch(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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
export const retransmitmerchantterminal = createAsyncThunk(
  "retransmitmerchantterminal",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.retransmitmerchantterminal(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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
export const retransmitmerchantdocument = createAsyncThunk(
  "retransmitmerchantdocument",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.retransmitmerchantdocument(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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