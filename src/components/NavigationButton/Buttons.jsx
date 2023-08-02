import { Button } from "@material-tailwind/react";
import React from "react";
import nike3 from "../../assets/image/nike3.jpg";
import { filteredProducts } from "../../features/Slices/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Buttons = () => {
  const buttons = ["Nike", "Adidas", "Puma", "Reebok", "Jordan"];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-center py-8 w-auto">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-2 md:mr-8">
              <Link to={"/filteredProduct/" + button}>
                <Button
                  color="gray"
                  variant="outlined"
                  ripple={true}
                  className="hover : bg-gray-700 hover:scale-105 hover:font-bolder duration-300 ease-in-out w-18 p-[0.75rem] text-[12px] font-bold md:text-md md:p-4 md:w-30 lg:w-36"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-400 p-2 w-[80%] mx-auto rounded-md mt-8 md:mt-0">
        <h3 className="text-gray-800  text-center font-inter font-bold tracking-normal leading-none text-base justify-items-center md:text-lg hover:scale-105 duration-300 ease-in-out">
          SALE UPTO 80%
        </h3>
      </div>
      <div className="flex jus py-6 item-center">
        <img
          className="h-[450px] w-[80%] my-8 md:h-[600px] rounded-md shadow-lg shadow-gray-500 mx-auto cursor-pointer hover:scale-105 duration-300 ease-in-out"
          src={nike3}
          alt="offerOnNike"
        ></img>
      </div>
    </div>
  );
};

export default Buttons;
