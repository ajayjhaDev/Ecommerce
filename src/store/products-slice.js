import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },

  reducers: {
    getProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
