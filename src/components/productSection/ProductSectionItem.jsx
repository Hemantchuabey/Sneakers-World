import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/Slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div>
      <Card className="w-96 h-[620px] hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <CardHeader floated={false} className="h-min object-cover">
          <img src={img} alt={name} className="object-cover"/>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center p-4">
            <Typography color="gray" className="font-medium" textGradient>
              Size Left : {defaultSize}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color :
              <span
                className="px-2 rounded-full mx-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
              
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(addToCart({
                  id: id,
                  img: img,
                  text: text,
                  amount: 1,
                  price: price,
                  totalPrice: totalPrice,
                  name: name,
                  size: defaultSize,
                  color: defaultColor,
                }))
              }
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
