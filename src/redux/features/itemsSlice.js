import { createSlice } from "@reduxjs/toolkit";

// creating slice
const itemSlice = createSlice({
  name: "items", // name of the slice 
  initialState: {
    items: [], // the initial state of the items is should be empty array
  },
  reducers: {
    // it the reducer to update the items in state 
    setItems: (state, action) => {
      state.items = action.payload; // setting the new value provided by action
    },
  },
});

export const { setItems } = itemSlice.actions;
export default itemSlice.reducer; // exporting the reducer function to be used in the Reduz store
