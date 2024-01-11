import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartFromLocStor } from "../../utils";

export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (cart, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/order/send", {
        method: "POST",
        body: JSON.stringify({ cart }),
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

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    // cart: getCartFromLocStor(),
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, count } = action.payload;

      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].count += count;
      } else {
        state.cart.push(action.payload);
      }
    },
    incrementCount: (state, action) => {
      const { id } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += 1;
      }
    },
    decrementCount: (state, action) => {
      const { id } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItem) {
        existingItem.count -= 1;
        if (existingItem.count === 0) {
          state.cart.splice(existingItemIndex, 1);
        }
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.cart.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addToCart, incrementCount, decrementCount, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
