import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "", sort: "", size: [], color: [] };

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
    sort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export default FilterSlice.reducer;
export const { search, sort } = FilterSlice.actions;
