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
  // console.log("size", size);
  // console.log("color", colors);
  return (
    <div className="w-[80%] m-auto ">
      {products
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                  
              <div className="m-auto grow-[1] w-[80vw] md:w-[80vw]">
                <img
                  className="h-64 md:h-[28rem] w-[90%] object-cover rounded-lg "
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="grow-[4]">
                <div className="max-w-lg">
                  <h5 className="text-2xl md:text-3xl font-inter font-bold tracking-normal leading-none pb-2 ">
                    {item.name}
                  </h5>
                  <p className="text-red-400 text-sm md:text-lg font-inter font-bold tracking-normal leading-none pb-4">
                    15% off
                  </p>
                  <p className="text-blue-600 text-[15px] md:text-lg font-inter font-bold tracking-normal leading-none pb-4 md:pb-6">
                    {item.text}
                  </p>
                  <div className="pb-4 flex flex-col gap-4">
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
                          className="bg-gray-300 text-black w-[100%] hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-400 ease-in-out"
                          size="lg"
                          
                          ripple={true}
                          onClick={() => dispatch(addToCart({
                            id : item.id,
                            name :item.name,
                            img : item.img,
                            text:item.text,
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
