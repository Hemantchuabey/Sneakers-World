import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/Slices/sliderSlice";
import productReducer from "../features/Slices/productSlice";
export const store = configureStore({
  reducer: {
    slide: slideReducer,
    product: productReducer,
  },
});
