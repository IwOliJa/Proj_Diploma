import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 1,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count = Math.max(state.count - 1, 1);
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
