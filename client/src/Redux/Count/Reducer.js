import { createSlice } from "@reduxjs/toolkit";

//Action Reducer

const initialValues = { Data: [], data: {} };

const countSlice = createSlice({
  name: "Count",
  initialState: initialValues,
  reducers: {
   

    Count: (state, action) => {
      state.Data = action.payload;
    },
    
    default: (state) => {
      state.Data = [];
    },
  },
});

export const { Count } = countSlice.actions;

export default countSlice.reducer;
