import { createSlice } from "@reduxjs/toolkit";
import { rolelist } from "../actions/roles";


const initialState = {
  roles: [],
  totalcount: 0
}

const roleSlice = createSlice({
  name: "roles",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(rolelist.pending, (state, action) => {
      state.roles = []
    });
    builder.addCase(rolelist.fulfilled, (state, action) => {
      state.roles = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateTaxRecord: (state, action) => {
      const getIndex = state.roles.findIndex(item => item.taxid == action.payload.taxid)
      state.roles[getIndex] = action.payload;
    },
    createTaxRecord: (state, action) => {
      state.roles.unshift(action.payload)
    },
  },
});
export default roleSlice.reducer;

export const { updateTaxRecord, createTaxRecord } = roleSlice.actions;