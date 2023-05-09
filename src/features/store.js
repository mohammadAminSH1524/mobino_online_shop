import { configureStore } from "@reduxjs/toolkit";

import sortReducer from "./sort/sort";
const store = configureStore({
  reducer: {
   
    sort: sortReducer,
  },
});

export default store;
