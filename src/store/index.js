import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice.js";
import allProductsReducer from "./slices/allProductsSlice.js";
import fromCategoryReducer from "./slices/fromCategorySlice.js";
import allDiscountsReducer from "./slices/allDiscountsSlice.js";
import productInfoReducer from "./slices/productInfoSlice.js";
import countReducer from "./slices/countSchoppingSlice.js";
import cartReducer from "./slices/cartSlice.js";

export default configureStore({
  reducer: {
    schoppingCart: cartReducer,
    counter: countReducer,
    product: productInfoReducer,
    discounts: allDiscountsReducer,
    category: fromCategoryReducer,
    products: allProductsReducer,
    categories: categoriesReducer,
  },
});
