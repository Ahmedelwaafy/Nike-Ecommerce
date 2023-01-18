import { configureStore } from "@reduxjs/toolkit";

import FilterReducer from "../Features/FilterSlice";

export const Store = configureStore({
  reducer: {
    Filter: FilterReducer,
  },
});
