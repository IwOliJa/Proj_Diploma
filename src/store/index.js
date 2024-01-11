import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice.js";
import allProductsReducer from "./slices/allProductsSlice.js";
import fromCategoryReducer from "./slices/fromCategorySlice.js";
import productInfoReducer from "./slices/productInfoSlice.js";
import countReducer from "./slices/countSchoppingSlice.js";
import cartReducer from "./slices/cartSlice.js";
import userReducer from "./slices/userSlice.js";

const store = configureStore({
  reducer: {
    schoppingCart: cartReducer,
    counter: countReducer,
    product: productInfoReducer,
    category: fromCategoryReducer,
    products: allProductsReducer,
    categories: categoriesReducer,
    user: userReducer,
  },
});

export default store;
