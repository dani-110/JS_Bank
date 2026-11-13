import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getmerchantwallet = createAsyncThunk(
  "getmerchantwallet",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantwallet(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantWalletCustomList,
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
export const getmerchantwalletlog = createAsyncThunk(
  "getmerchantwalletlog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantwalletlog(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantWalletLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantWalletLogCustomList,
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
export const getconsumerwallets = createAsyncThunk(
  "getconsumerwallets",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerwallets(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerWalletCustomList,
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
export const getRequestClouser = createAsyncThunk(
  "getRequestClouser",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerforwalletclose(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerWalletCustomList,
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

export const getmerchantforwalletclose = createAsyncThunk(
  "getmerchantforwalletclose",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantforwalletclose(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantWalletCustomList,
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

export const getwalletclosurerequestlist = createAsyncThunk(
  "getwalletclosurerequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletclosurerequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.walletClosureCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.walletClosureCustomList,
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
export const getwalletcloserequestmerchantlist = createAsyncThunk(
  "getwalletcloserequestmerchantlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletcloserequestmerchantlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.walletClosureCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.walletClosureCustomList,
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
export const getwalletcloserequesthistorylist = createAsyncThunk(
  "getwalletcloserequesthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletcloserequesthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.walletClosureLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.walletClosureLogCustomList,
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
export const getwalletcloserequestmerchanthistorylist = createAsyncThunk(
  "getwalletcloserequestmerchanthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletcloserequestmerchanthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.walletClosureLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.walletClosureLogCustomList,
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
export const getconsumerwalletlog = createAsyncThunk(
  "getconsumerwalletlog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerwalletlog(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerWalletLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerWalletLogCustomList,
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
export const getexternalwallets = createAsyncThunk(
  "getexternalwallets",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getexternalwallets(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.externalWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.externalWalletCustomList,
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
export const getexternalwalletlog = createAsyncThunk(
  "getexternalwalletlog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getexternalwalletlog(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.externalWalletLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.externalWalletLogCustomList,
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



export const getrevenuewallets = createAsyncThunk(
  "getrevenuewallets",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrevenuewallets(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.revenueWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.revenueWalletCustomList,
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
export const getrevenuewalletlog = createAsyncThunk(
  "getrevenuewalletlog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrevenuewalletlog(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.revenueWalletLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.revenueWalletLogCustomList,
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
export const gettaxwallets = createAsyncThunk(
  "gettaxwallets",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettaxwallets(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.taxWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.taxWalletCustomList,
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
export const gettaxwalletlog = createAsyncThunk(
  "gettaxwalletlog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettaxwalletlog(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.taxWalletLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.taxWalletLogCustomList,
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
export const getwalletsummary = createAsyncThunk(
  "getwalletsummary",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getwalletsummary(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.walletBalanceCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.walletBalanceCustomList
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


export const createwalletclosurerequest = createAsyncThunk(
  "createwalletclosurerequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createwalletclosurerequest(), data, thunkAPI);
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
export const createwalletcloserequestmerchant = createAsyncThunk(
  "createwalletcloserequestmerchant",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createwalletcloserequestmerchant(), data, thunkAPI);
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
export const checkerwalletclosurerequest = createAsyncThunk(
  "checkerwalletclosurerequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkerwalletclosurerequest(), data, thunkAPI);
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
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const checkerwalletcloserequestmerchant = createAsyncThunk(
  "checkerwalletcloserequestmerchant",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkerwalletcloserequestmerchant(), data, thunkAPI);
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
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const getconsumerfortachange = createAsyncThunk(
  "getconsumerfortachange",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerfortachange(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.trustAccountCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.trustAccountCustomList,
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
export const gettalist = createAsyncThunk(
  "gettalist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettalist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.trustAccountCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.trustAccountCustomList,
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
export const createtachangerequest = createAsyncThunk(
  "createtachangerequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createtachangerequest(), data, thunkAPI);
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



export const getconsumertarequestlist = createAsyncThunk(
  "getconsumertarequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumertarequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerTARequestCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerTARequestCustomList,
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


export const checkertachangerequest = createAsyncThunk(
  "checkertachangerequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkertachangerequest(), data, thunkAPI);
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


export const getconsumertarequesthistorylist = createAsyncThunk(
  "getconsumertarequesthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumertarequesthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.taRequestHistoryCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.taRequestHistoryCustomList,
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
export const getconsumertahistory = createAsyncThunk(
  "getconsumertahistory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumertahistory(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerTAHistoryCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerTAHistoryCustomList,
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
export const getmerchanttahistory = createAsyncThunk(
  "getmerchanttahistory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttahistory(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantTAHistoryCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantTAHistoryCustomList,
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



export const getmerchantfortachange = createAsyncThunk(
  "getmerchantfortachange",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantfortachange(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.trustAccountCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.trustAccountCustomList,
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


export const getmerchanttarequestlist = createAsyncThunk(
  "getmerchanttarequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttarequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantTARequestCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantTARequestCustomList,
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

export const getmerchanttarequesthistorylist = createAsyncThunk(
  "getmerchanttarequesthistorylist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttarequesthistorylist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.taRequestHistoryCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.taRequestHistoryCustomList,
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

export const getconsumerforpayrollcompany = createAsyncThunk(
  "getconsumerforpayrollcompany",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerforpayrollcompany(), data, thunkAPI);
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
export const consumerList = createAsyncThunk(
  "consumerList",
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
export const getconsumercompanykyc = createAsyncThunk(
  "getconsumercompanykyc",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumercompanykyc(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerCompanyCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
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



export const createcompanylinkrequest = createAsyncThunk(
  "createcompanylinkrequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createcompanylinkrequest(), data, thunkAPI);
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

export const consumercompanykycprocessing = createAsyncThunk(
  "consumercompanykycprocessing",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercompanykycprocessing(), data, thunkAPI);
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