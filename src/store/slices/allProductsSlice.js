import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:3333/products/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const allProductsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productsList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default allProductsSlice.reducer;
