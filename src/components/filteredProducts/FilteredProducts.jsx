import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import ProductCard from "./productCard";
const FilteredProducts = () => {
  const products = useSelector((state) => state.product.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  const genderButton = ["Male", "Female"];
  const colorButton = ["red","gray","green","yellow","pink","black","blue","brown"]
  const sizeButton = ["S","M","L","XL","XXL"]
  // console.log("params",params)
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inner text-gray-600 tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center ">
              {genderButton.map((item, index) => (
                <div key={index}>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black m-2 hover:bg-gray-400 duration-300 ease-in-out "
                  >
                    {item}
                  </Button>
                </div>
              ))}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black m-2 hover:bg-gray-400 duration-300 ease-in-out "
              >
                High Price
              </Button>
              <Menu>
      <MenuHandler>
        <Button color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black m-2 hover:bg-gray-400 duration-300 ease-in-out ">Select Color </Button>
      </MenuHandler>
      <MenuList>{
        colorButton.map((item,index) => (
          <MenuItem style={{color : item}} key={index}>{item}</MenuItem>
        ))
        }

      </MenuList>
    </Menu>

    <Menu>
      <MenuHandler>
        <Button color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black m-2 hover:bg-gray-400 duration-300 ease-in-out ">Select Size </Button>
      </MenuHandler>
      <MenuList>{
        sizeButton.map((item,index) => (
          <MenuItem  key={index}>{item}</MenuItem>
        ))
        }

      </MenuList>
    </Menu>
            </div>
            <div className="float-right">
      <Button color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black m-2 hover:bg-gray-400 duration-300 ease-in-out ">Clear Filter</Button>
    </div>
          </div>
    
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
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
      </div>
    </div>
  );
};

export default FilteredProducts;
