import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/singleProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
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
