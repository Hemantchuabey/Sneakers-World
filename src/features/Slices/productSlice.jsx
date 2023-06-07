import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filteredProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        console.log("filter", filter);
        state.filteredProducts = filter;
        state.error = false;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
        console.log("oneProduct", oneProduct);
      } catch (err) {
        console.log(err);
      }
    },
    filterGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        console.log("gender", gender, state.filteredProducts);
        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          //   const saveState = JSON.stringify(gender);
          //   sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    sortByHighPrice(state, action) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        console.log("Price-->", price);
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            //     const saveState = JSON.stringify(price);
            //     sessionStorage.setItem("filteredItem", saveState);
          } else {
            state.error = true;
            state.filteredProducts = [];
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    sortByLowPrice(state, action) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price < b.price ? -1 : 1
        );
        console.log("Price-->", price);
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            //     const saveState = JSON.stringify(price);
            //     sessionStorage.setItem("filteredItem", saveState);
          } else {
            state.error = true;
            state.filteredProducts = [];
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    filterByColor(state, action) {
      try {
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = color;
        console.log("color-->", color);
        if (color.length > 0) {
          state.error = false;
          // const saveState = JSON.stringify(color);
          // sessionStorage.setItem("filteredItem", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    filterBySize(state, action) {
      try {
        const size = state.filteredProducts.filter((product) =>
        product.size.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = size;
        console.log("size-->", size);
        if (size.length > 0) {
          state.error = false;
          // const saveState = JSON.stringify(size);
          // sessionStorage.setItem("filteredItem", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
          // state.filteredProducts = action.payload;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const {
  filteredProducts,
  singleProduct,
  filterGender,
  sortByHighPrice,
  sortByLowPrice,
  filterByColor,
  filterBySize,
} = productSlice.actions;
export default productSlice.reducer;
