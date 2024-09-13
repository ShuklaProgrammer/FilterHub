import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import itemsSliceReducer from "./features/itemsSlice";
import searchItemSliceReducer from "./features/searchItemSlice";

const store = configureStore({
  reducer: {
    items: itemsSliceReducer,
    searchItem: searchItemSliceReducer,
  },
});

setupListeners(store.dispatch);
export default store;
