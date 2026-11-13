import { createSlice } from "@reduxjs/toolkit";
import { getinstgrouplist } from "../actions/institutionGroup";


const initialState = {
  institutionGroup: [],
  totalcount: 0
}

const institutionGroupSlice = createSlice({
  name: "institutionGroup",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getinstgrouplist.pending, (state, action) => {
      state.institutionGroup = []
    });
    builder.addCase(getinstgrouplist.fulfilled, (state, action) => {
      state.institutionGroup = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    createinstitutionGroupFeeRecord: (state, action) => {
      state.institutionGroup.unshift(action.payload)
    },
  },
});
export default institutionGroupSlice.reducer;

export const { createinstitutionGroupFeeRecord } = institutionGroupSlice.actions;