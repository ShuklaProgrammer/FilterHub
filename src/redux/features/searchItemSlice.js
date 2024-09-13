import { createSlice } from "@reduxjs/toolkit";

// creating slice
const searchItemSlice = createSlice({
  name: "searchItem", // name of the slice 
  initialState: {
    searchItem: "", // initial state of the search term is a string or empty
  },
  reducers: {
    // reducer to update the search term in the state
    setSearchItem: (state, action) => {
      state.searchItem = action.payload; // setting the new value provided by the action
    },
  },
});

export const { setSearchItem } = searchItemSlice.actions;
export default searchItemSlice.reducer; // exporting the reducer function to be used in the Reduz store
