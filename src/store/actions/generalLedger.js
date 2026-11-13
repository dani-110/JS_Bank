import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const gettrangls = createAsyncThunk(
  "gettrangls",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettrangls(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.generalLedgerCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.generalLedgerCustomList,
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
export const getexporthistorylist = createAsyncThunk(
  "getexporthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getexporthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.fileExportCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.fileExportCustomList,
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
export const getpayouttransactions = createAsyncThunk(
  "getpayouttransactions",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpayouttransactions(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.payoutFileCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.payoutFileCustomList,
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
export const gettransactionlistformanualadjustment = createAsyncThunk(
  "gettransactionlistformanualadjustment",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettransactionlistformanualadjustment(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.transactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.transactionCustomList,
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
export const initiatemanualadjustment = createAsyncThunk(
  "initiatemanualadjustment",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.initiatemanualadjustment(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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

export const getmanualadjustmentactivity = createAsyncThunk(
  "getmanualadjustmentactivity",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmanualadjustmentactivity(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.transactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.transactionCustomList,
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


export const createopendcrequest = createAsyncThunk(
  "createopendcrequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createopendcrequest(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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
export const merchantcreateopendcrequest = createAsyncThunk(
  "merchantcreateopendcrequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcreateopendcrequest(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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
export const checkeraction = createAsyncThunk(
  "checkeraction",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkeraction(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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

export const openMakerDCList = createAsyncThunk(
  "openMakerDCList",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerList(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerCustomList,
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
export const getopendcrequestlist = createAsyncThunk(
  "getopendcrequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getopendcrequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.openDebitCreditCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.openDebitCreditCustomList,
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
export const getmerchantopendcrequestlist = createAsyncThunk(
  "getmerchantopendcrequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantopendcrequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.openDebitCreditCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.openDebitCreditCustomList,
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
export const getOpenDCHistorylist = createAsyncThunk(
  "getOpenDCHistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getopendcrequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.openDebitCreditCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.openDebitCreditCustomList,
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
export const getmerchantopendcrequesthistorylist = createAsyncThunk(
  "getmerchantopendcrequesthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantopendcrequesthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.openDebitCreditLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.openDebitCreditLogCustomList,
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
export const getopendcrequesthistorylist = createAsyncThunk(
  "getopendcrequesthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getopendcrequesthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.openDebitCreditLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.openDebitCreditLogCustomList,
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
export const settaximportfile = createAsyncThunk(
  "settaximportfile",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.settaximportfile(), data, thunkAPI);
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

export const getlienrequestlisting = createAsyncThunk(
  "getlienrequestlisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getlienrequestlisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.lienRequestCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.lienRequestCustomList,
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
export const getloglienrequestlisting = createAsyncThunk(
  "getloglienrequestlisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getlienrequestlisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.lienRequestCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.lienRequestCustomList,
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
export const getpendinglienrequestlisting = createAsyncThunk(
  "getpendinglienrequestlisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpendinglienrequestlisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.lienRequestCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.lienRequestCustomList,
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
export const getlienrequesttransactions = createAsyncThunk(
  "getlienrequesttransactions",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getlienrequesttransactions(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.lienRequestCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return  response.data.lienRequestCustomList
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
export const consumerLienMaker = createAsyncThunk(
  "consumerLienMaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerList(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerCustomList,
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

export const createlienrequest = createAsyncThunk(
  "createlienrequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createlienrequest(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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
export const setlienrequeststatus = createAsyncThunk(
  "setlienrequeststatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setlienrequeststatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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
export const forcelienrecovery = createAsyncThunk(
  "forcelienrecovery",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.forcelienrecovery(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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
export const checkerlienaction = createAsyncThunk(
  "checkerlienaction",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkerlienaction(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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


export const merchantOpenDCMaker = createAsyncThunk(
  "merchantOpenDCMaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantmanagementlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
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
          uiActions.showResponseNotification({
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