import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { login } from '../../features/Slices/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const intitalState = {
    name: "",
    password: "",
    image: "",
  };

  const dispatch = useDispatch()
    const [loginValue,setLoginValue] = useState(intitalState)
    // Login Handler
    const onLoginHandler = (e) => {
      // const { name, value } = e.target;
      // console.log("onloginhandler..",e.target)
      setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
      console.log("valuevalue",loginValue)
    };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={loginValue.name}
            onChange={onLoginHandler}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={loginValue.password}
            onChange={onLoginHandler}
          />
          <Input
            label="Image URL address"
            size="lg"
            type="text"
            name="image"
            value={loginValue.image}
            onChange={onLoginHandler}
          />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(loginValue))}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login