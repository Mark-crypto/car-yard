import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemAmount = state.itemAmount + 1;
    },
    removeItem: (state, action) => {
      if (state.itemAmount > 0) {
        state.itemAmount = state.itemAmount - 1;
      }
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addItem, removeItem, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
