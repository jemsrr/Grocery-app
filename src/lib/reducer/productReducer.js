import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], cartvalue: 0 };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const x = state.cart.find((i) => i.item.id === action.payload.id);
      if (x) {
        x.count++;
      } else {
        state.cart.push({ item: action.payload, count: 1 });
      }
      state.cartvalue = state.cartvalue + action.payload.price;
    },
    removeTocart: (state, action) => {
      state.cart = state.cart.filter(
        (i) => i.item.id !== action.payload.item.id
      );
      state.cartvalue =
        state.cartvalue - action.payload.item.price * action.payload.count;
    },
    resetCart: (state) => {
      (state.cart = []), (state.cartvalue = 0);
    },
  },
});

export const { addTocart, removeTocart, resetCart } = productSlice.actions;
export default productSlice.reducer;
