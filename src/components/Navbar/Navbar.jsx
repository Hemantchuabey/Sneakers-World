import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Avatar,Tooltip,Button } from "@material-tailwind/react";
import {logout} from '../../features/Slices/authSlice'
const Navbar = () => {
  const [open,setOpen] = useState(false)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const user = useSelector((state) => state.login)
  const {image} = user
  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true)
  }
  // console.log("name inside navbar" , user)
  return (
    <>
      <div className="bg-black p-4 w-full flex justify-around items-center">
        <div>
          <img src={logo} alt="Store" className="w-20 h-6  md:w-40 md:h-10 " />
        </div>
        {/* <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>
                Welcome to Sneaker-World
            </h3> */}
        <div className="flex flex-row items-center ml-8 text-[12px] md:text-xl">
          <button className="text-white font-inter font-medium tracking-normal leading-none text-center mr-6" onClick={() => dispatch(logout(user.user))}> 
            Logout
          </button>
          <div className="flex flex-row items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-white mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="text-white font-inter font-medium tracking-normal leading-none">
              WishList
            </p>
          </div>
          <div className="flex flex-row items-center cursor-pointer ml-4" onClick={handleOpen}>
            {totalAmount> 0  ? <span className="rounded-full bg-gray-400 font-inter px-2 text-sm mr-1">{totalAmount}</span> : (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-white mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            )}
            
            <p className="text-white font-inter font-medium tracking-normal leading-none">
              ShoppingCart
            </p>
            <div>
              {open &&  <Cart openModel={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4  ">
              {image && (<Avatar src={image} alt="avatar" size="sm" className="mr-2"></Avatar>)}
              <div onClick={() => dispatch(logout)}>
                <Tooltip content="Sign Out" placement="bottom" >
<p className="font-inter text-sm font-medium tracking-normal leading-none ">
              {/* Hi, {name.charAt("0").toUpperCase() + name.slice(1)} */}
</p>
</Tooltip>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-4 w-full justify-around flex flex-row items-center mt-1 text-[12px] md:text-xl">
        <div className="text-white font-inter font-medium tracking-normal leading-none transition-all ease-in-out delay-150 hover:scale-110 hover:text-gray-200 cursor-pointer">
          50% OFF
        </div>
        <div className="text-white font-inter font-medium tracking-normal leading-none transition-all ease-in-out delay-150 hover:scale-110 hover:text-gray-200 cursor-pointer">
          Free Shipping and Return
        </div>
        <div className="text-white font-inter font-medium tracking-normal leading-none transition-all ease-in-out delay-150 hover:scale-110 hover:text-gray-200 cursor-pointer">
          Different payment method
        </div>
      </div>
    </>
  );
};

export default Navbar;
