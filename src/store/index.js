import { configureStore } from "@reduxjs/toolkit";
import categoriesReduser from "./slices/categoriesSlice";

export default configureStore({
  reducer: {
    categories: categoriesReduser,
  },
});
