import { createSlice } from "@reduxjs/toolkit";
import { getTaxList } from "../actions/tax";
import { getconfig } from "../actions/systemParameter";


const initialState = {
  systemParameter: [],
  totalcount: 0
}

const systemParameterSlice = createSlice({
  name: "systemParameter",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getconfig.pending, (state, action) => {
      state.systemParameter = []
    });
    builder.addCase(getconfig.fulfilled, (state, action) => {
      state.systemParameter = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateSystemParameterRecord: (state, action) => {
      console.log(action)
      const getIndex = state.systemParameter.findIndex(item => item.cid == action.payload.cid)
      state.systemParameter[getIndex] = action.payload;
    },
  },
});
export default systemParameterSlice.reducer;

export const { updateSystemParameterRecord } = systemParameterSlice.actions;