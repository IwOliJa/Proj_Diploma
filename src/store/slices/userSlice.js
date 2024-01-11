import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    phone: "",
    email: "",
  },
  reducers: {
    generateName: (state, action) => {
      state.userName = action.payload;
    },
    generatePhone: (state, action) => {
      state.phone = action.payload;
    },
    generateEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});
export const { generateName, generatePhone, generateEmail } = userSlice.actions;
export default userSlice.reducer;
