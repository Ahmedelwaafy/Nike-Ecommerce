import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "" };

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});
export default FilterSlice.reducer;
export const { search } = FilterSlice.actions;
