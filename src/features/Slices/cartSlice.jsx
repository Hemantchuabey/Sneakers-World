import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const checkoutProduct = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === checkoutProduct &&
            product.size === checkoutProduct.size &&
            product.color === checkoutProduct.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += checkoutProduct.price;
          state.totalAmount++;
          state.totalPrice += checkoutProduct.price;
        } else {
          state.cart.push({
            id: checkoutProduct.id,
            price: checkoutProduct.price,
            size: checkoutProduct.size,
            amount: 1,
            totalPrice: checkoutProduct.price,
            name: checkoutProduct.name,
            color: checkoutProduct.color,
          });
        }
        state.totalAmount++;
        state.totalPrice += checkoutProduct.price;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
