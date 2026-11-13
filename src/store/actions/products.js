import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getProductList = createAsyncThunk(
  "getProductList",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getProductList(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.productCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.productCustomList,
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
export const getconsumerproductlist = createAsyncThunk(
  "getconsumerproductlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerproductlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerProductCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerProductCustomList,
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
export const getconsumerproductflow = createAsyncThunk(
  "getconsumerproductflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerproductflow(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.productWorkFlowList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.productWorkFlowList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const productlimit = createAsyncThunk(
  "productlimit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.productlimit(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.productLimitCustomList,
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
export const getconsumerproductlimits = createAsyncThunk(
  "getconsumerproductlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerproductlimits(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.productLimitCustomList,
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
export const setproductloadlimit = createAsyncThunk(
  "setproductloadlimit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setproductloadlimit(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.productLimitCustomList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setconsumerproductloadlimits = createAsyncThunk(
  "setconsumerproductloadlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerproductloadlimits(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.productLimitCustomList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const editproductloadlimit = createAsyncThunk(
  "editproductloadlimit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editproductloadlimit(), data, thunkAPI);
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
export const modifyproductloadlimits = createAsyncThunk(
  "modifyproductloadlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifyproductloadlimits(), data, thunkAPI);
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

export const setproductspendlimit = createAsyncThunk(
  "setproductspendlimit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setproductspendlimit(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.productLimitCustomList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const setconsumerproductspendlimits = createAsyncThunk(
  "setconsumerproductspendlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerproductspendlimits(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.productLimitCustomList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editproductspendlimit = createAsyncThunk(
  "editproductspendlimit",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editproductspendlimit(), data, thunkAPI);
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
export const modifyconsumerproductspendlimits = createAsyncThunk(
  "modifyconsumerproductspendlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifyconsumerproductspendlimits(), data, thunkAPI);
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
export const setproduct = createAsyncThunk(
  "setproduct",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setproduct(), data, thunkAPI);
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
export const setconsumerproduct = createAsyncThunk(
  "setconsumerproduct",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerproduct(), data, thunkAPI);
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
export const getproductkyc = createAsyncThunk(
  "getproductkyc",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getproductkyc(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.productKYCCustomList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getconsumerproductkycparams = createAsyncThunk(
  "getconsumerproductkycparams",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerproductkycparams(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.productKYCCustomList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const setproductconsumerkyc = createAsyncThunk(
  "setproductconsumerkyc",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setproductconsumerkyc(), data, thunkAPI);
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
export const setconsumerproductkycparams = createAsyncThunk(
  "setconsumerproductkycparams",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerproductkycparams(), data, thunkAPI);
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
export const getproductbenefits = createAsyncThunk(
  "getproductbenefits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getproductbenefits(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.productBenefitsList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.productBenefitsList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const setproductbenefits = createAsyncThunk(
  "setproductbenefits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setproductbenefits(), data, thunkAPI);
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

export const getproductworkflow = createAsyncThunk(
  "getproductworkflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getproductworkflow(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.productWorkFlowList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.productWorkFlowList;
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const setproductworkflow = createAsyncThunk(
  "setproductworkflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setproductworkflow(), data, thunkAPI);
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
export const setConsumerproductworkflow = createAsyncThunk(
  "setConsumerproductworkflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setConsumerproductworkflow(), data, thunkAPI);
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
export const deleteproductworkflow = createAsyncThunk(
  "deleteproductworkflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.deleteproductworkflow(), data, thunkAPI);
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
export const deleteconsumerproductworkflow = createAsyncThunk(
  "deleteconsumerproductworkflow",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.deleteconsumerproductworkflow(), data, thunkAPI);
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