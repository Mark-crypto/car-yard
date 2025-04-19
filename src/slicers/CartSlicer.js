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
    calculateTotal: (state, action) => {
      let price = parseInt(action.payload) || 0;
      let totalItems = parseInt(state.itemAmount) || 0;
      state.totalPrice += price * totalItems;
    },
    removeFromCart: (state, action) => {
      state.cartItems.pop();
    },
  },
});

export const {
  addItem,
  removeItem,
  addToCart,
  calculateTotal,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
