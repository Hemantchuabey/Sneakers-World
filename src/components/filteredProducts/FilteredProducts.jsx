import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams,Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import ProductCard from "./productCard";
import Error from "../Error/Error";
import {
  filteredProducts,
  filterGender,
  sortByHighPrice,
  sortByLowPrice,
  filterByColor,
  filterBySize,
} from "../../features/Slices/productSlice";
const FilteredProducts = () => {
  const products = useSelector((state) => state.product.filteredProducts);
  // console.log("products", products);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.product.error);
  const { type } = useParams();
  const genderButton = ["male", "female"];
  const colorButton = [
    "red",
    "gray",
    "green",
    "yellow",
    "pink",
    "black",
    "blue",
    "brown",
  ];
  const sizeButton = ["40", "42", "44", "46", "48"];
  // console.log("params",params)
  return (
    <div className="w-[80%] mx-auto">
      <div className="pt-16">
        <div className="">
       <Link to="/"> 
          <h1 className="text-4xl font-inner text-gray-600 tracking-normal leading-none">
            {type}
          </h1></Link>
          <div className="flex items-center justify-between py-8">
            <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:flex items-center ">
              {genderButton.map((item, index) => (
                <div key={index}>
                  <Button
                    color="gray"
                    variant="outlined"
                    ripple={true}
                    className="text-black m-2 text-xs md:text-sm hover:bg-gray-400 duration-300 ease-in-out "
                    onClick={() => dispatch(filterGender(item))}
                  >
                    {item}
                  </Button>
                </div>
              ))}
              <Button
                color="gray"
            
                variant="outlined"
                ripple={true}
                className="text-black m-2 text-xs md:text-sm font-bold hover:bg-gray-400 duration-300 ease-in-out "
                onClick={() => dispatch(sortByHighPrice())}
              >
                High Price
              </Button>
              <Button
                color="gray"
            
                variant="outlined"
                ripple={true}
                className="text-black m-2 md:text-sm hover:bg-gray-400 duration-300 ease-in-out "
                onClick={() => dispatch(sortByLowPrice())}
              >
                Low Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                
                    variant="outlined"
                    ripple={true}
                    className="text-black m-2 md:text-sm hover:bg-gray-400 duration-300 ease-in-out "
                    
                  >
                    Select Color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButton.map((item, index) => (
                    <MenuItem style={{ color: item }} key={index} onClick={() => dispatch(filterByColor(item))}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                
                    variant="outlined"
                    ripple={true}
                    className="text-black m-2 md:text-sm hover:bg-gray-400 duration-300 ease-in-out "
                  >
                    Select Size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButton.map((item, index) => (
                    <MenuItem key={index} onClick={() => dispatch(filterBySize(item))}>{item}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
            <div className="float-right">
              <Button
                color="gray"
            
                variant="outlined"
                ripple={true}
                className="text-black m-2 md:text-sm hover:bg-gray-400 duration-300 ease-in-out "
                onClick={() => dispatch(filteredProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center py-4 gap-4 h-min mx-auto">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
