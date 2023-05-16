import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/Slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
const Slider = () => {
  const slideIndex = useSelector((state) => state.slide.value);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div className="">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={
                parseInt(slide.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(slide.id) === slideIndex && (
                  <img
                    className="object-cover h-[36rem] min-h-min w-full"
                    src={slide.img}
                    alt="imgSlides"
                  />
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x/4">
                <p className="text-gray-700 text-3xl  font-inter font-bold">
                  {parseInt(slide.id) === slideIndex && slide.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot,index) => {
          return (
            <div className="mr-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-gray-300 rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-[50%] right-4 rounded-full bg-white p-2 hover:scale-110 hover:bg-gray-500 transition-all ease-in-out duration-500"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[50%] left-4 rounded-full bg-white p-2 hover:scale-110 hover:bg-gray-500 transition-all ease-in-out duration-500"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
