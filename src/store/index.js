import { configureStore } from "@reduxjs/toolkit";
import categoriesReduser from "./slices/categoriesSlice.js";
import allProductsReduser from "./slices/allProductsSlice.js";

export default configureStore({
  reducer: {
    products: allProductsReduser,
    categories: categoriesReduser,
  },
});
