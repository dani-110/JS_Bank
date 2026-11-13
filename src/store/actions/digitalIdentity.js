import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";


export const getECIBbusinesslist = createAsyncThunk(
  "getECIBbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
export const getScrutinyMakerbusinesslist = createAsyncThunk(
  "getScrutinyMakerbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
export const getScrutinyCheckerbusinesslist = createAsyncThunk(
  "getScrutinyCheckerbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
export const getKYCMakerbusinesslist = createAsyncThunk(
  "getKYCMakerbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
        console.log(response.data)
        return {
          list: response.data.merchantCustomList,
          configurationCustomList: response.data.configurationCustomList,
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

export const getmerchantkycloglisting = createAsyncThunk(
  "getmerchantkycloglisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantkycloglisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantKYCLogCustomList.length == 0) {
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
          list: response.data.merchantKYCLogCustomList,
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
export const merchantgetmerchantbacklog = createAsyncThunk(
  "merchantgetmerchantbacklog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantgetmerchantbacklog(), data, thunkAPI);
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
export const getKYCCheckerbusinesslist = createAsyncThunk(
  "getKYCCheckerbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
export const getMerchantPeriodicMakerbusinesslist = createAsyncThunk(
  "getMerchantPeriodicMakerbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
          configurationCustomList: response.data.configurationCustomList,
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

export const getMerchantPeriodicCheckerbusinesslist = createAsyncThunk(
  "getMerchantPeriodicCheckerbusinesslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
export const getComplianceMakerlist = createAsyncThunk(
  "getComplianceMakerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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
export const getComplianceCheckerlist = createAsyncThunk(
  "getComplianceCheckerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinesslist(), data, thunkAPI);
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

export const scrutinyMaker = createAsyncThunk(
  "scrutinyMaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerlist(), data, thunkAPI);
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
export const scrutinyChecker = createAsyncThunk(
  "scrutinyChecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerlist(), data, thunkAPI);
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
export const kycMaker = createAsyncThunk(
  "kycMaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorconsumerlist = createAsyncThunk(
  "getminorconsumerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorChecketlist = createAsyncThunk(
  "getminorChecketlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorPeriodiclist = createAsyncThunk(
  "getminorPeriodiclist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorPeriodicChecketlist = createAsyncThunk(
  "getminorPeriodicChecketlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorComplianceMakerlist = createAsyncThunk(
  "getminorComplianceMakerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorComplianceCheckerlist = createAsyncThunk(
  "getminorComplianceCheckerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorEDDMakerlist = createAsyncThunk(
  "getminorEDDMakerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getminorEDDCheckerlist = createAsyncThunk(
  "getminorEDDCheckerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlist(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
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
          configurationCustomList: response.data.configurationCustomList,
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
export const getconsumerkycloglisting = createAsyncThunk(
  "getconsumerkycloglisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerkycloglisting(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
      if (response.data.responsecode == 0) {
        if (response.data.consumerKYCLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerKYCLogCustomList,
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
export const getminorconsumerkyclog = createAsyncThunk(
  "getminorconsumerkyclog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerkyclog(), data, thunkAPI);
      console.log(response.data.configurationCustomList)
      if (response.data.responsecode == 0) {
        if (response.data.consumerKYCLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerKYCLogCustomList,
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

export const PeriodicMaker = createAsyncThunk(
  "PeriodicMaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.periodicreviewgetconsumerlist(), data, thunkAPI);
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
          configurationCustomList: response.data.configurationCustomList,
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
export const kycChecker = createAsyncThunk(
  "kycChecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerlist(), data, thunkAPI);
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
export const PeriodicChecker = createAsyncThunk(
  "PeriodicChecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.periodicreviewgetconsumerlist(), data, thunkAPI);
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
export const consumergetconsumerbacklog = createAsyncThunk(
  "consumergetconsumerbacklog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumergetconsumerbacklog(), data, thunkAPI);
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
export const getminorconsumerlistbacklog = createAsyncThunk(
  "getminorconsumerlistbacklog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlistbacklog(), data, thunkAPI);
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
export const complianceMaker = createAsyncThunk(
  "complianceMaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerlist(), data, thunkAPI);
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
export const complianceChecker = createAsyncThunk(
  "complianceChecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerlist(), data, thunkAPI);
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

export const getpepscandata = createAsyncThunk(
  "getpepscandata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpepscandata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
        };
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
export const getcompanyscandata = createAsyncThunk(
  "getcompanyscandata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getcompanyscandata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getpepscanrcadata = createAsyncThunk(
  "getpepscanrcadata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpepscanrcadata(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
        };
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
export const setconsumeradversemediaalert = createAsyncThunk(
  "setconsumeradversemediaalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumeradversemediaalert(), data, thunkAPI);
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
export const getadversenewsdata = createAsyncThunk(
  "getadversenewsdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getadversenewsdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
        };
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
export const getmerchpepdata = createAsyncThunk(
  "getmerchpepdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchpepdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getpeprelscan = createAsyncThunk(
  "getpeprelscan",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpeprelscan(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getconsumerpeprca = createAsyncThunk(
  "getconsumerpeprca",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerpeprca(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getsanctioncompanyscan = createAsyncThunk(
  "getsanctioncompanyscan",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsanctioncompanyscan(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getsanctioncompanyscandata = createAsyncThunk(
  "getsanctioncompanyscandata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsanctioncompanyscandata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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

export const proreviewmerchantmakerassignchecker = createAsyncThunk(
  "proreviewmerchantmakerassignchecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewmerchantmakerassignchecker(), data, thunkAPI);
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
export const getmerchadversemediadata = createAsyncThunk(
  "getmerchadversemediadata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchadversemediadata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getmerchsanctiondata = createAsyncThunk(
  "getmerchsanctiondata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchsanctiondata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getmerchatldata = createAsyncThunk(
  "getmerchatldata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchatldata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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

export const setpepalert = createAsyncThunk(
  "setpepalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setpepalert(), data, thunkAPI);
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
export const setcompanyscanalert = createAsyncThunk(
  "setcompanyscanalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setcompanyscanalert(), data, thunkAPI);
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
export const setpeprcaalert = createAsyncThunk(
  "setpeprcaalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setpeprcaalert(), data, thunkAPI);
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
export const setadversemediaalert = createAsyncThunk(
  "setadversemediaalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setadversemediaalert(), data, thunkAPI);
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
export const setsanctionalert = createAsyncThunk(
  "setsanctionalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setsanctionalert(), data, thunkAPI);
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
export const setatlalert = createAsyncThunk(
  "setatlalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setatlalert(), data, thunkAPI);
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

export const getfbratldata = createAsyncThunk(
  "getfbratldata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getfbratldata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const consumergetfbratldata = createAsyncThunk(
  "consumergetfbratldata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumergetfbratldata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const consumermakerfbrdecline = createAsyncThunk(
  "consumermakerfbrdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakerfbrdecline(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const getsanctionscandata = createAsyncThunk(
  "getsanctionscandata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsanctionscandata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
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
export const consumergetsanctionscandata = createAsyncThunk(
  "consumergetsanctionscandata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumergetsanctionscandata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          response: response.data,
        };
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
export const getimage = createAsyncThunk(
  "getimage",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getimage(), data, thunkAPI);
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
export const getconsumerphotos = createAsyncThunk(
  "getconsumerphotos",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerphotos(), data, thunkAPI);
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
export const setimage = createAsyncThunk(
  "setimage",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setimage(), data, thunkAPI);
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
export const getnadrafields = createAsyncThunk(
  "getnadrafields",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadrafields(), data, thunkAPI);
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
export const getnadrabioverisysdata = createAsyncThunk(
  "getnadrabioverisysdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadrabioverisysdata(), data, thunkAPI);
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
            message: response.data.respdescription.replace('null-', ''),
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getnadrabioverisysdata2 = createAsyncThunk(
  "getnadrabioverisysdata2",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadrabioverisysdata(), data, thunkAPI);
      return response.data
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
            message: response.data.respdescription.replace('null-', ''),
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const checknidduplication = createAsyncThunk(
  "checknidduplication",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checknidduplication(), data, thunkAPI);
      if (response.data.responsecode == 2) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
      }
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const checkMerchantnidduplication = createAsyncThunk(
  "checkMerchantnidduplication",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkMerchantnidduplication(), data, thunkAPI);
      if (response.data.responsecode == 2) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
      }
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const fileupload = createAsyncThunk(
  "fileupload",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.fileupload(), data, thunkAPI);
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

export const filedownload = createAsyncThunk(
  "filedownload",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.filedownload(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
        return response
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

export const getnadradata = createAsyncThunk(
  "getnadradata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadradata(), data, thunkAPI);
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
export const marknadrafields = createAsyncThunk(
  "marknadrafields",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.marknadrafields(), data, thunkAPI);
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

export const modifybusiness = createAsyncThunk(
  "modifybusiness",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifybusiness(), data, thunkAPI);
      if (response.data.responsecode == 0 || response.data.responsecode == 2) {
        return response.data
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
export const setfuzzyscore = createAsyncThunk(
  "setfuzzyscore",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setfuzzyscore(), data, thunkAPI);
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
export const scrutinycheckerdecline = createAsyncThunk(
  "scrutinycheckerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.scrutinycheckerdecline(), data, thunkAPI);
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
export const assigntobank = createAsyncThunk(
  "assigntobank",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assigntobank(), data, thunkAPI);
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
export const savescrutiny = createAsyncThunk(
  "savescrutiny",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.savescrutiny(), data, thunkAPI);
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
export const assigntobankmaker = createAsyncThunk(
  "assigntobankmaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assigntobankmaker(), data, thunkAPI);
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
export const checkerassigntokeenu = createAsyncThunk(
  "checkerassigntokeenu",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkerassigntokeenu(), data, thunkAPI);
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
export const getmerchantjourney = createAsyncThunk(
  "getmerchantjourney",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantjourney(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantJourneyCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantJourneyCustomList,
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
export const getmerchantonboardingjourney = createAsyncThunk(
  "getmerchantonboardingjourney",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantonboardingjourney(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantJourneyCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantJourneyCustomList,
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
export const getconsumerjourney = createAsyncThunk(
  "getconsumerjourney",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerjourney(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        // if (response.data.consumerJourneyCustomList.length == 0) {
        //   thunkAPI.dispatch(
        //     uiActions.showNotification({
        //       status: "success",
        //       title: "Success!",
        //       message: 'Fetched! No data found',
        //     })
        //   );
        // }
        return {
          list: response.data.consumerJourneyCustomList,
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
export const merchantmakerapprove = createAsyncThunk(
  "merchantmakerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakerapprove(), data, thunkAPI);
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
export const modifymerchantbusiness = createAsyncThunk(
  "modifymerchantbusiness",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifymerchantbusiness(), data, thunkAPI);
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
export const assigntobankchecker = createAsyncThunk(
  "assigntobankchecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assigntobankchecker(), data, thunkAPI);
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
export const makerassigntokeenu = createAsyncThunk(
  "makerassigntokeenu",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.makerassigntokeenu(), data, thunkAPI);
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
export const ecibapprove = createAsyncThunk(
  "ecibapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.ecibapprove(), data, thunkAPI);
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

export const makerdecline = createAsyncThunk(
  "makerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.makerdecline(), data, thunkAPI);
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
export const merchantmakereddapprove = createAsyncThunk(
  "merchantmakereddapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakereddapprove(), data, thunkAPI);
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
export const merchantmakereddassigntocompliance = createAsyncThunk(
  "merchantmakereddassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakereddassigntocompliance(), data, thunkAPI);
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
export const merchantmakeredddecline = createAsyncThunk(
  "merchantmakeredddecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakeredddecline(), data, thunkAPI);
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
export const merchantcheckereddapprove = createAsyncThunk(
  "merchantcheckereddapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckereddapprove(), data, thunkAPI);
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
export const merchantcheckereddassigntomaker = createAsyncThunk(
  "merchantcheckereddassigntomaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckereddassigntomaker(), data, thunkAPI);
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
export const merchantcheckereddassigntocompliance = createAsyncThunk(
  "merchantcheckereddassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckereddassigntocompliance(), data, thunkAPI);
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
export const merchantmarkblacklist = createAsyncThunk(
  "merchantmarkblacklist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmarkblacklist(), data, thunkAPI);
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
export const merchantcheckeredddecline = createAsyncThunk(
  "merchantcheckeredddecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckeredddecline(), data, thunkAPI);
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

export const nadrasavenext = createAsyncThunk(
  "nadrasavenext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.nadrasavenext(), data, thunkAPI);
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
export const merchantmakerkycnadraapprove = createAsyncThunk(
  "merchantmakerkycnadraapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakerkycnadraapprove(), data, thunkAPI);
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
export const merchantkycmakernadradecline = createAsyncThunk(
  "merchantkycmakernadradecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantkycmakernadradecline(), data, thunkAPI);
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
export const merchantmakerkycdecline = createAsyncThunk(
  "merchantmakerkycdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakerkycdecline(), data, thunkAPI);
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
export const getpeprisk = createAsyncThunk(
  "getpeprisk",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpeprisk(), data, thunkAPI);
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
)
export const getConsumerpeprisk = createAsyncThunk(
  "getConsumerpeprisk",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getConsumerpeprisk(), data, thunkAPI);
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
)

export const setpeprisk = createAsyncThunk(
  "setpeprisk",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setpeprisk(), data, thunkAPI);
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
export const setConsumerpeprisk = createAsyncThunk(
  "setConsumerpeprisk",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setConsumerpeprisk(), data, thunkAPI);
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

export const pepnext = createAsyncThunk(
  "pepnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.pepnext(), data, thunkAPI);
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
export const gsnext = createAsyncThunk(
  "gsnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gsnext(), data, thunkAPI);
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
export const makerapprove = createAsyncThunk(
  "makerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.makerapprove(), data, thunkAPI);
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
export const assignsanctionflow = createAsyncThunk(
  "assignsanctionflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assignsanctionflow(), data, thunkAPI);
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
export const merchantmakerfbrapprove = createAsyncThunk(
  "merchantmakerfbrapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakerfbrapprove(), data, thunkAPI);
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
export const merchantmakerfbrdecline = createAsyncThunk(
  "merchantmakerfbrdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmakerfbrdecline(), data, thunkAPI);
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
export const merchantscrutinydecline = createAsyncThunk(
  "merchantscrutinydecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantscrutinydecline(), data, thunkAPI);
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

export const approvetocompliancemaker = createAsyncThunk(
  "approvetocompliancemaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.approvetocompliancemaker(), data, thunkAPI);
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
export const approvetoobchecker = createAsyncThunk(
  "approvetoobchecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.approvetoobchecker(), data, thunkAPI);
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
export const assigntocompliance = createAsyncThunk(
  "assigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assigntocompliance(), data, thunkAPI);
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
export const merchantcheckerfbrassigntocompliance = createAsyncThunk(
  "merchantcheckerfbrassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckerfbrassigntocompliance(), data, thunkAPI);
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
export const merchantcheckersanctionsassigntocompliance = createAsyncThunk(
  "merchantcheckersanctionsassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckersanctionsassigntocompliance(), data, thunkAPI);
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
export const merchantcheckerfbrdecline = createAsyncThunk(
  "merchantcheckerfbrdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckerfbrdecline(), data, thunkAPI);
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
export const assigntochecker = createAsyncThunk(
  "assigntochecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assigntochecker(), data, thunkAPI);
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
export const declinetoobchecker = createAsyncThunk(
  "declinetoobchecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.declinetoobchecker(), data, thunkAPI);
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
export const compliancemakerdecline = createAsyncThunk(
  "compliancemakerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.compliancemakerdecline(), data, thunkAPI);
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
export const compliancemakerapprove = createAsyncThunk(
  "compliancemakerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.compliancemakerapprove(), data, thunkAPI);
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
export const compliancecheckerassignmaker = createAsyncThunk(
  "compliancecheckerassignmaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.compliancecheckerassignmaker(), data, thunkAPI);
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
export const compliancecheckerapprove = createAsyncThunk(
  "compliancecheckerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.compliancecheckerapprove(), data, thunkAPI);
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
export const checknadranext = createAsyncThunk(
  "checknadranext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checknadranext(), data, thunkAPI);
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
export const checkpepnext = createAsyncThunk(
  "checkpepnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkpepnext(), data, thunkAPI);
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
export const checkgsnext = createAsyncThunk(
  "checkgsnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkgsnext(), data, thunkAPI);
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
export const assigntomaker = createAsyncThunk(
  "assigntomaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.assigntomaker(), data, thunkAPI);
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

export const merchantcheckernadraapprove = createAsyncThunk(
  "merchantcheckernadraapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckernadraapprove(), data, thunkAPI);
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
export const merchantcheckernadradecline = createAsyncThunk(
  "merchantcheckernadradecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckernadradecline(), data, thunkAPI);
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
export const checkerapprove = createAsyncThunk(
  "checkerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkerapprove(), data, thunkAPI);
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
export const merchantcheckerfbrapprove = createAsyncThunk(
  "merchantcheckerfbrapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantcheckerfbrapprove(), data, thunkAPI);
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
export const checkerdecline = createAsyncThunk(
  "checkerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.checkerdecline(), data, thunkAPI);
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

//===================Consumer======================

export const consumergetimage = createAsyncThunk(
  "consumergetimage",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumergetimage(), data, thunkAPI);
      console.log(response)
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
export const getconsumerstatement = createAsyncThunk(
  "getconsumerstatement",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerstatement(), data, thunkAPI);
      console.log(response)
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

export const consumersetimage = createAsyncThunk(
  "consumersetimage",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumersetimage(), data, thunkAPI);
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
export const scrutinydecline = createAsyncThunk(
  "scrutinydecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.scrutinydecline(), data, thunkAPI);
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
export const saveconsumerscrutiny = createAsyncThunk(
  "saveconsumerscrutiny",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.saveconsumerscrutiny(), data, thunkAPI);
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
export const scrutinyapprove = createAsyncThunk(
  "scrutinyapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.scrutinyapprove(), data, thunkAPI);
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

export const setconsumerfuzzyscore = createAsyncThunk(
  "setconsumerfuzzyscore",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerfuzzyscore(), data, thunkAPI);
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

export const consumernadrasavenext = createAsyncThunk(
  "consumernadrasavenext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumernadrasavenext(), data, thunkAPI);
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
export const consumerEddSaveInfo = createAsyncThunk(
  "consumerEddSaveInfo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerEddSaveInfo(), data, thunkAPI);
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
export const consumerkycmakernadraapprove = createAsyncThunk(
  "consumerkycmakernadraapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerkycmakernadraapprove(), data, thunkAPI);
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
export const makerassignchecker = createAsyncThunk(
  "makerassignchecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.makerassignchecker(), data, thunkAPI);
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

export const consumermakernadradecline = createAsyncThunk(
  "consumermakernadradecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakernadradecline(), data, thunkAPI);
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
export const consumerMakerdecline = createAsyncThunk(
  "consumerMakerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerMakerdecline(), data, thunkAPI);
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
export const consumermakereddassigntocompliance = createAsyncThunk(
  "consumermakereddassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakereddassigntocompliance(), data, thunkAPI);
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
export const consumermakereddapprove = createAsyncThunk(
  "consumermakereddapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakereddapprove(), data, thunkAPI);
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
export const consumermakeredddecline = createAsyncThunk(
  "consumermakeredddecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakeredddecline(), data, thunkAPI);
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
export const getconsumerpepdata = createAsyncThunk(
  "getconsumerpepdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerpepdata(), data, thunkAPI);
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
export const getconsumeradversenewsdata = createAsyncThunk(
  "getconsumeradversenewsdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumeradversenewsdata(), data, thunkAPI);
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
export const consumerpepnext = createAsyncThunk(
  "consumerpepnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerpepnext(), data, thunkAPI);
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
export const setconsumerpepalert = createAsyncThunk(
  "setconsumerpepalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerpepalert(), data, thunkAPI);
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

export const getconsumersanctiondata = createAsyncThunk(
  "getconsumersanctiondata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumersanctiondata(), data, thunkAPI);
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
export const consumergsnext = createAsyncThunk(
  "consumergsnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumergsnext(), data, thunkAPI);
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

export const setconsumersanctionalert = createAsyncThunk(
  "setconsumersanctionalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumersanctionalert(), data, thunkAPI);
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
export const getconsumeratldata = createAsyncThunk(
  "getconsumeratldata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumeratldata(), data, thunkAPI);
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
export const setconsumeratlalert = createAsyncThunk(
  "setconsumeratlalert",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumeratlalert(), data, thunkAPI);
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
export const consumermakerapprove = createAsyncThunk(
  "consumermakerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakerapprove(), data, thunkAPI);
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
export const proreviewmakerassignchecker = createAsyncThunk(
  "proreviewmakerassignchecker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewmakerassignchecker(), data, thunkAPI);
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
export const proreviewcheckerasigncompliance = createAsyncThunk(
  "proreviewcheckerasigncompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewcheckerasigncompliance(), data, thunkAPI);
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
export const proreviewmerchantcheckerasigncompliance = createAsyncThunk(
  "proreviewmerchantcheckerasigncompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewmerchantcheckerasigncompliance(), data, thunkAPI);
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
export const proreviewcheckerdecline = createAsyncThunk(
  "proreviewcheckerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewcheckerdecline(), data, thunkAPI);
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
export const proreviewmerchantcheckerdecline = createAsyncThunk(
  "proreviewmerchantcheckerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewmerchantcheckerdecline(), data, thunkAPI);
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
export const proreviewcheckerapprove = createAsyncThunk(
  "proreviewcheckerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewcheckerapprove(), data, thunkAPI);
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
export const proreviewmerchantcheckerapprove = createAsyncThunk(
  "proreviewmerchantcheckerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewmerchantcheckerapprove(), data, thunkAPI);
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
export const proreviewcheckerassignmaker = createAsyncThunk(
  "proreviewcheckerassignmaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewcheckerassignmaker(), data, thunkAPI);
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
export const proreviewmerchantcheckerassignmaker = createAsyncThunk(
  "proreviewmerchantcheckerassignmaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.proreviewmerchantcheckerassignmaker(), data, thunkAPI);
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
export const consumermakerfbrapprove = createAsyncThunk(
  "consumermakerfbrapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermakerfbrapprove(), data, thunkAPI);
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

export const consumermarknadrafields = createAsyncThunk(
  "consumermarknadrafields",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermarknadrafields(), data, thunkAPI);
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
export const consumernadranext = createAsyncThunk(
  "consumernadranext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumernadranext(), data, thunkAPI);
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
export const consumercheckerpepnext = createAsyncThunk(
  "consumercheckerpepnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckerpepnext(), data, thunkAPI);
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
export const consumerassigntocompliance = createAsyncThunk(
  "consumerassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerassigntocompliance(), data, thunkAPI);
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
export const fbrassigntocompliance = createAsyncThunk(
  "fbrassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.fbrassigntocompliance(), data, thunkAPI);
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
export const consumergetnadrafields = createAsyncThunk(
  "consumergetnadrafields",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumergetnadrafields(), data, thunkAPI);
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
export const getconsumernadradata = createAsyncThunk(
  "getconsumernadradata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumernadradata(), data, thunkAPI);
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
export const consumercheckergsnext = createAsyncThunk(
  "consumercheckergsnext",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckergsnext(), data, thunkAPI);
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
export const consumercheckerapprove = createAsyncThunk(
  "consumercheckerapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckerapprove(), data, thunkAPI);
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
export const consumercheckerdecline = createAsyncThunk(
  "consumercheckerdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckerdecline(), data, thunkAPI);
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

export const consumercheckerfbrapprove = createAsyncThunk(
  "consumercheckerfbrapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckerfbrapprove(), data, thunkAPI);
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
export const consumercheckerfbrdecline = createAsyncThunk(
  "consumercheckerfbrdecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckerfbrdecline(), data, thunkAPI);
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
export const consumerassigntomaker = createAsyncThunk(
  "consumerassigntomaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerassigntomaker(), data, thunkAPI);
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
export const consumercheckereddapprove = createAsyncThunk(
  "consumercheckereddapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckereddapprove(), data, thunkAPI);
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
export const consumercheckereddassigntocompliance = createAsyncThunk(
  "consumercheckereddassigntocompliance",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckereddassigntocompliance(), data, thunkAPI);
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
export const consumercheckeredddecline = createAsyncThunk(
  "consumercheckeredddecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckeredddecline(), data, thunkAPI);
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
export const consumermarkblacklist = createAsyncThunk(
  "consumermarkblacklist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumermarkblacklist(), data, thunkAPI);
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
export const consumercheckereddassigntomaker = createAsyncThunk(
  "consumercheckereddassigntomaker",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckereddassigntomaker(), data, thunkAPI);
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
export const consumercheckernadraapprove = createAsyncThunk(
  "consumercheckernadraapprove",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckernadraapprove(), data, thunkAPI);
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
export const consumercheckernadradecline = createAsyncThunk(
  "consumercheckernadradecline",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumercheckernadradecline(), data, thunkAPI);
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

export const getmerchantkycdocs = createAsyncThunk(
  "getmerchantkycdocs",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantkycdocs(), data, thunkAPI);
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
export const getconsumerkycdocs = createAsyncThunk(
  "getconsumerkycdocs",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerkycdocs(), data, thunkAPI);
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
export const getconsumercnicblocklist = createAsyncThunk(
  "getconsumercnicblocklist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumercnicblocklist(), data, thunkAPI);
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
export const getminorconsumerlistblockbynationalid = createAsyncThunk(
  "getminorconsumerlistblockbynationalid",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlistblockbynationalid(), data, thunkAPI);
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
export const getmerchantcnicblocklist = createAsyncThunk(
  "getmerchantcnicblocklist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantcnicblocklist(), data, thunkAPI);
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
export const getnearexpirymerchantslist = createAsyncThunk(
  "getnearexpirymerchantslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnearexpirymerchantslist(), data, thunkAPI);
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
export const getnearexpiryconsumerslist = createAsyncThunk(
  "getnearexpiryconsumerslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnearexpiryconsumerslist(), data, thunkAPI);
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
export const getminorconsumerlistnationalidexp = createAsyncThunk(
  "getminorconsumerlistnationalidexp",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getminorconsumerlistnationalidexp(), data, thunkAPI);
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
export const getnadrahistoricdata = createAsyncThunk(
  "getnadrahistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnadrahistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.nadraDataCustomList,
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
export const getpephistoricdata = createAsyncThunk(
  "getpephistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpephistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantPEPCustomList,
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
export const getpeprelscanhistoricdata = createAsyncThunk(
  "getpeprelscanhistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getpeprelscanhistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantPEPCustomList,
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
export const getsanctionshistoricdata = createAsyncThunk(
  "getsanctionshistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsanctionshistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantSanctionCustomList,
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
export const getadversemediahistoricdata = createAsyncThunk(
  "getadversemediahistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getadversemediahistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.adverseMediaCustomList,
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
export const getatlhistoricdata = createAsyncThunk(
  "getatlhistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getatlhistoricdata(), data, thunkAPI);
      console.log(response.data)
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantATLCustomList,
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
export const getconsumernadrahistoricdata = createAsyncThunk(
  "getconsumernadrahistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumernadrahistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.nadraDataCustomList,
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
export const getconsumerpephistoricdata = createAsyncThunk(
  "getconsumerpephistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerpephistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantPEPCustomList,
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
export const getconsumersanctionshistoricdata = createAsyncThunk(
  "getconsumersanctionshistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumersanctionshistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantSanctionCustomList,
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
export const getConsumerAdversemediahistoricdata = createAsyncThunk(
  "getConsumerAdversemediahistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getConsumerAdversemediahistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.adverseMediaCustomList,
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
export const getConsumerAtlhistoricdata = createAsyncThunk(
  "getConsumerAtlhistoricdata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getConsumerAtlhistoricdata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantATLCustomList,
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