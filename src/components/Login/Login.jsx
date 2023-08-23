import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import "./login.css";
import "./utils";
import { login } from "../../features/Slices/authSlice";
import { useDispatch } from "react-redux";
import {
  hasLowercase,
  hasNumber,
  hasSpecialCharacter,
  hasUppercase,
} from "./utils";
import CharacterCondition from "./characterCondition";
const Login = () => {
  const intitalState = {
    name: "",
    password: "",
  };

  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState(intitalState);
  const [warningString,setWarningString] = useState("Enter Combination of Small Letter, Capital Letter, Number and special character")
  // Login Handler
  const onLoginHandler = (e) => {
    // const { name, value } = e.target;
    // console.log("onloginhandler..",e.target)
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
    // console.log("valuevalue",loginValue)
  };

  const [strength, setStrength] = useState(0);
  const [progressBarStyles, setProgressBarStyles] = useState({
    width: "0%",
    backgroundColor: "transparent",
  });

  useEffect(() => {
    const updatedProgressBarStyle = {
      backgroundColor: "red",
    };
    let totalStrength = 0;
    if (loginValue.password.length > 3) {
      const strengthByLength = Math.min(
        6,
        Math.floor(loginValue.password.length / 3)
      );
      let strengthByCharachaterType = 0;
      if (hasNumber.test(loginValue.password)) {
        strengthByCharachaterType += 1;
        setWarningString("Enter Combination of Small Letter, Capital Letter, and special character")
      }
      if (hasUppercase.test(loginValue.password)) {
        strengthByCharachaterType += 1;
        setWarningString("Enter Combination of Small Letter, Capital Letter, and special character")
      }
      if (hasLowercase.test(loginValue.password)) {
        strengthByCharachaterType += 1;
      }
      if (hasSpecialCharacter.test(loginValue.password)) {
        strengthByCharachaterType += 1;
      }
      totalStrength = strengthByLength + strengthByCharachaterType;
    } else {
      totalStrength = 0;
    }

    updatedProgressBarStyle.width = `${totalStrength * 10}%`;
    if (totalStrength >= 8) {
      updatedProgressBarStyle.backgroundColor = "green";
    } else if (totalStrength >= 6) {
      updatedProgressBarStyle.backgroundColor = "orange";
    }

    setStrength(totalStrength);
    setProgressBarStyles(updatedProgressBarStyle);
  }, [loginValue.password]);

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-80 md:w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-20 md:h-28 place-items-center"
        >
          <Typography className="text-xl md:text-2xl font-bold" color="white">
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
          {/* for progress bar */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ ...progressBarStyles }}
            ></div>
            {/* <p>strength of your password {strength}</p> */}
         
          </div>
          {/* Progress bar ends */}
          <div className="text-red-600 text-xs mt-0 w-[80%] self-center text-center">
            <CharacterCondition totalStrength = {strength} password = {loginValue.password}/>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(loginValue))}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default React.memo(Login);
