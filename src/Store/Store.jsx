 import { configureStore } from  "@reduxjs/toolkit"

 import FilterReducer from "../Features/FilterSlice";
 
 export const store = configureStore({
   reducer: {
     Filter: FilterReducer,
   },
 });