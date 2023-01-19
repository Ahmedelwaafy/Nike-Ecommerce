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
    size: (state, action) => {
      state.size = action.payload.check? [...state.size,action.payload.key ] : state.size.length > 0 ? state.size.filter(key=> key !== action.payload.key) : []
    },
  },
});
export default FilterSlice.reducer;
export const { search, sort, size, color } = FilterSlice.actions;
