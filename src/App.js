import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/singleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const user = useSelector((state) => state.login.user);
  const { authUser } = user;
  // console.log("authUser", authUser);
  console.log("User", user);
  // console.log("cart", cart);
  // console.log("totalAmount", totalAmount);
  // console.log("totalPrice", totalPrice);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />}></Route>
          <Route
            path="/filteredProduct/:type"
            element={<FilteredProducts />}
          ></Route>
          <Route
            path="/filteredProduct/:type/:id"
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
