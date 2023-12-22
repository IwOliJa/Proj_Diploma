import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:3333/products/all");
      const data = await response.json();
      console.log(data);
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
      .addCase(getAllProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productsList = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default allProductsSlice.reducer;
