import React, { Fragment, useState } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/Slices/cartSlice";

const Cart = ({ openModel, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.length ? (
        <>
          <Dialog
            open={openModel}
            handler={() => setOpen(false)}
            size="xl"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider className="h-[80vh] flex flex-col justify-start items-start p-0 md:p-4 overflow-y-scroll overflow-x-hidden">
       
                {cart.map((item, index) => {
                  return (
                    <div key={index} className="w-[100%] mr-6 mt-1">
                      <div className="flex flex-row p-0 md:p-2 items-center justify-items-center justify-evenly">
                        <div>
                          <img
                            className="h-[80px] md:h-[130px] w-[20vw] rounded-md object-cover"
                            src={item.img}
                            alt={item.text}
                          ></img>
                          <div className="flex flex-col items-start">
                            <h4 className="text-black text-sm md:text-lg font-inter font-bold tracking-normal leading-none pt-2">
                              {item.name}
                            </h4>
                          </div>
                          {/* <div className="max-w-xs">
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div> */}
                        </div>
                        <div>
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            Selected Size :
                            <span className="ml-2">{item.size}</span>
                          </p>
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            Selected Color :
                            <span
                              className="rounded-full ml-2 px-2"
                              style={{ backgroundColor: item.color }}
                            ></span>
                          </p>
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            Item Price :
                            <span className="ml-2">{item.price}</span>
                          </p>
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            Amount :<span className="ml-2">{item.amount}</span>
                          </p>
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            Total Price :
                            <span className="ml-2">{item.totalPrice}</span>
                          </p>
                        </div>
                        <div className="pt-2">
                          <Tooltip
                            content="remove from the cart"
                            placement="bottom"
                          >
                            <Button
                              size="sm"
                              color="red"
                              className="hover:bg-red-600 duration-500 ease-in-out"
                              onClick={() => dispatch(removeFromCart(item))}
                            >
                              X
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  );
                })}
              
              <DialogFooter className="flex flex-col justify-center items-center text-center w-[100%]">
                <p className="text-black font-inter text-center text-lg md:text-xl tracking-normal leading-none pt-2">
                  Total :
                  <span className="ml-2 text-bold text-md">{totalPrice}</span>
                </p>
              </DialogFooter>
              
            </DialogBody>
          </Dialog>
        </>
      ) : (
        <>
          <Dialog
            className="border-0 outline-0"
            open={openModel}
            size="lg"
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className="text-black text-lg md:text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  Your package is empty
                </h1>
                <p className="text-black font-inter font-base md:text-lg tracking-normal leading-none ml-2">
                  Add some products
                </p>
              </div>
            </DialogBody>
            {/* <DialogFooter>
            
          </DialogFooter> */}
          </Dialog>
        </>
      )}
    </div>
  );
};

export default Cart;
