import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDiscounts = createAsyncThunk(
  "discounts/getAllDiscounts",
  async () => {
    try {
      const response = await fetch("http://localhost:3333/products/all");
      const data = await response.json();
      // return data;
      return data.filter((el) => el.discont_price !== null);
    } catch (error) {
      console.log(error);
    }
  }
);

export const allDiscountsSlice = createSlice({
  name: "discounts",
  initialState: {
    discountsList: [],
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDiscounts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getDiscounts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.discountsList = action.payload;
      })
      .addCase(getDiscounts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default allDiscountsSlice.reducer;
