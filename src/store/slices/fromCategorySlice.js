import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategorySpecific = createAsyncThunk(
  "category/getCategorySpecific",
  async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:3333/categories/${categoryId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fromCategorySlice = createSlice({
  name: "category",
  initialState: {
    categoryData: {},
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategorySpecific.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getCategorySpecific.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categoryData = action.payload;
      })
      .addCase(getCategorySpecific.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default fromCategorySlice.reducer;
