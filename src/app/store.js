import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/Slices/sliderSlice";
export const store = configureStore({
  reducer: {
    slide: slideReducer,
  },
});
