import { configureStore } from "@reduxjs/toolkit";

import FilterReducer from "../Features/FilterSlice";
import CartReducer from "../Features/CartSlice";

export const Store = configureStore({
  reducer: {
    Filter: FilterReducer,
    Cart: CartReducer,
  },
});
