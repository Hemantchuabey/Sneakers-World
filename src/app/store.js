import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/Slices/sliderSlice";
import productReducer from "../features/Slices/productSlice";
import cartReducer from "../features/Slices/cartSlice";
export const store = configureStore({
  reducer: {
    slide: slideReducer,
    product: productReducer,
    cart : cartReducer
  },
});
