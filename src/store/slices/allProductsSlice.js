import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await fetch( "http://localhost:3333/products/all", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        }
      } );
      if ( !response.ok ) {
        throw new Error( `Server Error! Status: ${response.status}` );
      }
      const data = await response.json();
      return data;
    } catch ( error ) {
      throw error;
    }
  }
);

export const allProductsSlice = createSlice( {
  name: "products",
  initialState: {
    productsList: [],
    status: null,
  },

  extraReducers: ( builder ) => {
    builder
      .addCase( getProducts.pending, ( state, action ) => {
        state.status = "pending";
      } )
      .addCase( getProducts.fulfilled, ( state, action ) => {
        state.status = "fulfilled";
        state.productsList = action.payload;
      } )
      .addCase( getProducts.rejected, ( state, action ) => {
        state.status = "rejected";
      } );
  },
} );

export default allProductsSlice.reducer;
