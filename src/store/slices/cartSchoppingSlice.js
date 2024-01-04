import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    plus(state) {
      state.count++;
    },
    minus(state) {
      state.count--;
    },
  },
});

export const { plus, minus } = countSlice.actions;
export default countSlice.reducer;
