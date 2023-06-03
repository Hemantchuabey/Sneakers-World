import React, { Fragment, useState } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/Slices/cartSlice";

const Cart = ({ openModel, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch()
  return (
    <div>
      {cart.length ? (
        <Fragment>
          <Dialog
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag.</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.text}
                        ></img>
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
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
                          Single Item Price :
                          <span className="ml-2">{item.price}</span>
                        </p>
                        <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                          Amount :
                          <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black font-inter text-xs tracking-normal leading-none pt-2">
                          Total Item Price :
                          <span className="ml-2">{item.totalPrice}</span>
                        </p>
                        <div className="pt-2">
                          <Tooltip
                            content="remove from the cart"
                            placement="bottom"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="red"
                              className="w-6 h-6"
                              onClick={() => dispatch(removeFromCart(item))}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex flex-col justify-start items-center">
              <p className="text-black font-inter text-bold text-lg tracking-normal leading-none pt-2">
                Total :{" "}
                <span className="ml-2 text-bold text-md">{totalPrice}</span>{" "}
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  Your package is empty
                </h1>
                <p className="text-black font-inter font-base tracking-normal leading-none ml-2">
                  Add some products
                </p>
              </div>
            </DialogBody>
            {/* <DialogFooter>
            
          </DialogFooter> */}
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
