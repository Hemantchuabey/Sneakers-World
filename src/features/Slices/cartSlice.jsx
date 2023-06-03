import { createSlice } from "@reduxjs/toolkit";

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
            product.id === checkoutProduct.id &&
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
            img: checkoutProduct.img,
            totalPrice: checkoutProduct.price,
            name: checkoutProduct.name,
            text: checkoutProduct.text,
            color: checkoutProduct.color,
          });
          state.totalAmount++;
          state.totalPrice += checkoutProduct.price;
        }
        console.log("checkout",checkoutProduct)
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const checkoutProduct = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === checkoutProduct.id &&
            product.size === checkoutProduct.size &&
            product.color === checkoutProduct.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== checkoutProduct.id ||
              product.size !== checkoutProduct.size ||
              product.color !== checkoutProduct.color
          );
          state.totalAmount--;
          state.totalPrice -= checkoutProduct.price;
        } else {
          exist.amount--;
          exist.totalPrice -= checkoutProduct.price;
          state.totalAmount--;
          state.totalPrice -= checkoutProduct.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;