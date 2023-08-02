import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/Slices/productSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();

  const { type } = useParams();

  return (
    <Link to={`/filteredProduct/${type}/` + id}>
      <Card
        className="max-w-[18rem] overflow-hidden hover:scale-105 duration-300 ease-in-out"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-fit "
        >
          <img src={img} alt={name} className="object-cover h-48 md:h-72 w-[100%]" />
        </CardHeader>
        <CardBody className="text-center pt-4 pl-4 pr-4 pb-0">
          <Typography variant="h4" color="blue-gray" className="font-bold">
            {name}
          </Typography>
          <Typography
            variant=""
            color="blue"
            className="mt-3 font-medium font-immer" textGradient
          >
            {text}
          </Typography>
        </CardBody>
        <CardFooter divider className="items-center justify-between">
          <div className="flex justify-items-center justify-between items-center -space-x-3 gap-4">
            <Typography className="font-immer font-bold">{price} Rs.</Typography>
            <Typography className="font-normal ml-4">
              {colors.map((color, index) => {
                return (
                  <span
                    className="px-2 rounded-full mx-2 cursor-pointer"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></span>
                );
              })}
            </Typography>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
