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
          className="m-0 rounded-none h-48 "
        >
          <img src={img} alt={name} className="h-full w-full object-contain" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="font-bold">
            {name}
          </Typography>
          <Typography
            variant=""
            color="gray"
            className="mt-3 font-normal font-immer"
          >
            {text}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between">
          <div className="grid grid-cols-2 items-center -space-x-3 gap-4">
            <Typography className="font-immer font-bold">{price}Rs.</Typography>
            <Typography className="font-normal ml-4">
              {colors.map((color, index) => {
                return (
                  <i
                    className="mt-[3px] p-2 mr-6 h-4 w-4 rounded-full cursor-pointer"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></i>
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
