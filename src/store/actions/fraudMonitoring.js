import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getlatesttransactions = createAsyncThunk(
  "getlatesttransactions",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getlatesttransactions(), data, thunkAPI);
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
        return response.data.transactionCustomList

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

export const getconsumertransactionslist = createAsyncThunk(
  "getconsumertransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumertransactionslist(), data, thunkAPI);
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
export const getmerchanttransactionslist = createAsyncThunk(
  "getmerchanttransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttransactionslist(), data, thunkAPI);
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

export const setmerchantwalletcontrols = createAsyncThunk(
  "setmerchantwalletcontrols",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantwalletcontrols(), data, thunkAPI);
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
export const getmerchantstatement = createAsyncThunk(
  "getmerchantstatement",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantstatement(), data, thunkAPI);
      if (response.data.responsecode == 0) {
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
export const setconsumerwalletcontrols = createAsyncThunk(
  "setconsumerwalletcontrols",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerwalletcontrols(), data, thunkAPI);
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

export const getipblockinglist = createAsyncThunk(
  "getipblockinglist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getipblockinglist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.ipBlockingCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.ipBlockingCustomList,
          total: response.data.totalcount
        }

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
export const setipblockingrule = createAsyncThunk(
  "setipblockingrule",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setipblockingrule(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.ipBlockingCustomList[0];
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const editipblocking = createAsyncThunk(
  "editipblocking",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editipblocking(), data, thunkAPI);
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
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getgeofencinglist = createAsyncThunk(
  "getgeofencinglist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getgeofencinglist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.geoFencingBlockingCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.geoFencingBlockingCustomList,
          total: response.data.totalcount
        }

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

export const setgeofencingrule = createAsyncThunk(
  "setgeofencingrule",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setgeofencingrule(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.geoFencingBlockingCustomList[0];
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const editgeofencingrule = createAsyncThunk(
  "editgeofencingrule",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editgeofencingrule(), data, thunkAPI);
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
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setconsumercooling = createAsyncThunk(
  "setconsumercooling",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumercooling(), data, thunkAPI);
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
        return response.data
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setmerchantcooling = createAsyncThunk(
  "setmerchantcooling",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantcooling(), data, thunkAPI);
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
         return response.data
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);