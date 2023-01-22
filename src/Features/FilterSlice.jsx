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
      state.size = action.payload.check
        ? [...state.size, action.payload.key]
        : state.size.length > 0
        ? state.size.filter((key) => key !== action.payload.key)
        : [];
    },
    color: (state, action) => {
      state.color = action.payload.check
        ? [...state.color, action.payload.key]
        : state.color.length > 0
        ? state.color.filter((key) => key !== action.payload.key)
        : [];
    },
    reset: (state, action) => {
      state.sort =""
      state.size =[]
      state.color =[]
       
    },
  },
});
export default FilterSlice.reducer;
export const { search, sort, size, color, reset } = FilterSlice.actions;
