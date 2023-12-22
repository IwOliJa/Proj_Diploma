import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const response = await fetch("http://localhost:3333/categories/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categoriesList = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default categoriesSlice.reducer;
