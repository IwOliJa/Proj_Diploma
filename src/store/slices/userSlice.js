import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postSale = createAsyncThunk(
  "user/postSale",
  async (userForm, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/sale/send", {
        method: "POST",
        body: JSON.stringify({ userForm }),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      });
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {},
});

export default userSlice.reducer;
