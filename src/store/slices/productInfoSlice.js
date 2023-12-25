import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getByProductInfo = createAsyncThunk(
  "singlProduct/getByProductInfo",
  async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:3333/products/${categoryId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productInfoSlice = createSlice({
  name: "singlProduct",
  initialState: {
    productData: [],
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getByProductInfo.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getByProductInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productData = action.payload;
      })
      .addCase(getByProductInfo.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default productInfoSlice.reducer;
