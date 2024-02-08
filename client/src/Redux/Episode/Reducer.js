import { createSlice } from "@reduxjs/toolkit";

//Action Reducer
const initialValues = { Data: [], data: {} };
const EpisodeSlice = createSlice({
  name: "Count",
  initialState: initialValues,
  reducers: {
    fetch: (state, action) => {
      state.Data = action.payload;
    },
    
    default: (state) => {
      state.Data = [];
    },
  },
});

export const { fetch } = EpisodeSlice.actions;

export default EpisodeSlice.reducer;
