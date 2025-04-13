import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slicers/CartSlicer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
