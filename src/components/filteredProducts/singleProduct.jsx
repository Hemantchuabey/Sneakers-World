import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/Slices/cartSlice";


const SingleProduct = () => {
  const products = useSelector((state) => state.product.singleProduct);
  const productSize = products[0].size ? products[0].size : "";
  const productColor = products[0].color;
  const { id } = useParams();
  const dispatch = useDispatch()
  const [size, setSize] = useState(productSize[0]);
  const [colors, setColor] = useState(productColor[0]);
  console.log("size", size);
  console.log("color", colors);
  return (
    <div className="justify-center my-12">
      {products
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center py-10">
              <div className="pl-32 grow-[1]">
                <img
                  className="h-[450px] w-[780px] object-cover rounded-lg "
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="grow-[2]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-8">
                    {item.name}
                  </h5>
                  <p className="text-blue-400 text-md font-inter font-bold tracking-normal leading-none pb-8">
                    15% off
                  </p>
                  <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-8">
                    {item.text}
                  </p>
                  <div className="pb-8">
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick Size
                      </label>
                      <select
                        name="size"
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.size.map((size, index) => {
                          return (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <div className="pb-8">
                        <label
                          htmlFor="color"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Colors
                        </label>
                        <select
                          name="color"
                          id="color"
                          value={colors}
                          onChange={(e) => setColor(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.color.map((color, index) => {
                            return (
                              <option key={index} value={color}>
                                {color}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <Tooltip content="Add to cart" placement="bottom">
                        <Button
                          color="gray"
                          size="lg"
                          variant="outlined"
                          ripple={true}
                          onClick={() => dispatch(addToCart({
                            id : item.id,
                            name :item.name,
                            size : size,
                            color : colors,
                            price : item.price,
                            amount : 1,
                            totalPrice : item.price

                          }))}
                        >
                          Add to Cart
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
