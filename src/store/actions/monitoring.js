import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const apptransactionlist = createAsyncThunk(
  "apptransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.apptransactionlist(), data, thunkAPI);
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

export const raasttransactionlist = createAsyncThunk(
  "raasttransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.raasttransactionlist(), data, thunkAPI);
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
export const gettransactionslist = createAsyncThunk(
  "gettransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettransactionslist(), data, thunkAPI);
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
export const gettransactionlisting = createAsyncThunk(
  "gettransactionlisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettransactionlisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.bioTransactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.bioTransactionCustomList,
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
export const gettransactionlist = createAsyncThunk(
  "gettransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettransactionlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.transactionsCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.transactionsCustomList,
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
export const getmerchanttransactionlistUI = createAsyncThunk(
  "getmerchanttransactionlistUI",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttransactionlistUI(), data, thunkAPI);
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
export const getcompliancetransactionslist = createAsyncThunk(
  "getcompliancetransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getcompliancetransactionslist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.complianceTransactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.complianceTransactionCustomList,
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
export const getmerchantsignuptransactionslist = createAsyncThunk(
  "getmerchantsignuptransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantsignuptransactionslist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.signUpTransactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.signUpTransactionCustomList,
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
export const getmerchantcompliancetransactionslist = createAsyncThunk(
  "getmerchantcompliancetransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantcompliancetransactionslist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.complianceTransactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.complianceTransactionCustomList,
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
export const getsignuptransactionslist = createAsyncThunk(
  "getsignuptransactionslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsignuptransactionslist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.signUpTransactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.signUpTransactionCustomList,
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
export const onelinktransactionlist = createAsyncThunk(
  "onelinktransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.onelinktransactionlist(), data, thunkAPI);
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
export const otctransactionlist = createAsyncThunk(
  "otctransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.otctransactionlist(), data, thunkAPI);
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
export const meezantransactionlist = createAsyncThunk(
  "meezantransactionlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.meezantransactionlist(), data, thunkAPI);
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
export const getsaftransactions = createAsyncThunk(
  "getsaftransactions",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsaftransactions(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.safTransactionsCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.safTransactionsCustomList,
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
export const getbillpaymentlist = createAsyncThunk(
  "getbillpaymentlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbillpaymentlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.billPaymentCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.billPaymentCustomList,
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
export const safretransmit = createAsyncThunk(
  "safretransmit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.safretransmit(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        )
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
export const rapidsafretransmit = createAsyncThunk(
  "rapidsafretransmit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.rapidsafretransmit(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        )
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
export const removesaftransaction = createAsyncThunk(
  "removesaftransaction",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.removesaftransaction(), data, thunkAPI);
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


export const getsaflist = createAsyncThunk(
  "getsaflist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsaflist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.safTransactionsCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.safTransactionsCustomList,
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
export const safSAFretransmit = createAsyncThunk(
  "safSAFretransmit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.safSAFretransmit(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        )
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
export const safremoveSAFtransaction = createAsyncThunk(
  "safremoveSAFtransaction",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.safremoveSAFtransaction(), data, thunkAPI);
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