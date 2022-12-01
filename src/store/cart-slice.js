import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartproducts: [],
    quantity: "1",
  },

  reducers: {
    AddProducts(state, actions) {
      const existing = state.cartproducts.find(
        (ele) => ele.id === actions.payload.id
      );

      if (!existing) {
        state.cartproducts.push(actions.payload);
      } else {
        existing.price = existing.price + actions.payload.price;
        existing.quantity = Number(existing.quantity) + 1;
      }
    },
    removeFromCart(state, actions) {
      state.cartproducts = state.cartproducts.filter(
        (ele) => ele.id != actions.payload
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
