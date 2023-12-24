import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice.js";
import allProductsReducer from "./slices/allProductsSlice.js";
import fromCategoryReducer from "./slices/fromCategorySlice.js";
import allDiscountsReducer from "./slices/allDiscountsSlice.js";

export default configureStore({
  reducer: {
    discounts: allDiscountsReducer,
    category: fromCategoryReducer,
    products: allProductsReducer,
    categories: categoriesReducer,
  },
});
