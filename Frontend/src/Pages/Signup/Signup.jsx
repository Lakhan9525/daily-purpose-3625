import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import styles from "./Signup.module.css";
import SignUpNav from "./SignUpNav";
import GoogleAndFacebookBtn from "../Signin/GoogleAndFacebookBtn";

const Signup = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const phoneref = useRef();
  const [flag, setFlag] = useState("");
  const [signupflag, setSignupflag] = useState(true);
  const [emailflag, setEmailflag] = useState(true);
  const [passwordflag, setPasswordflag] = useState(true);
  const [emptyflag, setEmptyflag] = useState(true);
  const navigate = useNavigate();
  const validator = async () => {
    let end = "";
    for (
      let i = emailref.current.value.length - 10;
      i < emailref.current.value.length;
      i++
    ) {
      end = end + emailref.current.value[i];
    }
    if (end === "@gmail.com") {
      setEmailflag(true);
    } else {
      setEmailflag(false);
    }
    let password = passwordref.current.value;
    let length = password.length;
    let isnumber = false;
    for (let i = 0; i < length; i++) {
      if (
        password[i] === 0 ||
        password[i] === 1 ||
        password[i] === 2 ||
        password[i] === 3 ||
        password[i] === 4 ||
        password[i] === 5 ||
        password[i] === 6 ||
        password[i] === 7 ||
        password[i] === 8 ||
        password[i] === 9
      ) {
        isnumber = true;
        break;
      }
    }
    let specialcharacter = false;
    if (
      password.includes("@") ||
      password.includes("#") ||
      password.includes("$") ||
      password.includes("%") ||
      password.includes("&") ||
      password.includes("*")
    ) {
      specialcharacter = true;
    }
    if (isnumber && length > 8 && specialcharacter) {
      setPasswordflag(true);
    } else {
      setPasswordflag(false);
    }
    if (
      emailref.current.value.length > 0 &&
      passwordref.current.value.length > 0
    ) {
      setEmptyflag(true);
      await handlesubmit();
    } else {
      setEmptyflag(false);
    }
  };
  const handlesubmit = async () => {
    let usercreds = {
      email: emailref.current.value,
      password: passwordref.current.value,
      phone: phoneref.current.value,
    };
    let result;
    await axios({
      method: "post",
      url: "https://pure-fjord-44762.herokuapp.com/user/register",
      data: usercreds,
    }).then((res) => (setFlag(res.data), (result = res.data)));
    if (result !== "Signup Successfull") {
      setSignupflag(false);
    }
  };
  useEffect(() => {
    if (flag === "Signup Successfull") {
      navigate("/loginpage", { replace: true });
    }
  }, [flag]);

  const handleGoogleAuth = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const handleFacebookAuth = () => {
    window.open("http://localhost:8080/auth/facebook", "_self");
  };

  return (
    <div style={{ paddingBottom: "20px", marginTop: "8rem" }}>
      <SignUpNav />
      <Box className={styles.signupdiv}>
        <Text className={styles.heading}>Start tracking time</Text>
        <Text className={styles.subheading}>
          Create an account and start with a free 14-day trial
        </Text>
        <Text className={styles.subsubheading}>
          All features. No credit card required
        </Text>
        <GoogleAndFacebookBtn
          handleGoogleAuth={handleGoogleAuth}
          handleFacebookAuth={handleFacebookAuth}
        />
        <Text marginTop="20px" fontSize="14px">
          Or
        </Text>
        <Box
          hidden={
            emailflag && passwordflag && signupflag && emptyflag === true
              ? true
              : false
          }
          backgroundColor="#f2dede"
          border="1px solid #f2dede"
          color="brown"
          margin="auto"
          marginTop="15px"
          borderRadius="10px"
          width="75%"
          height="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="14px"
        >
          <Text width="90%" textAlign="justify">
            {flag === "User Already Exists"
              ? "This e-mail is already in use."
              : !emptyflag
              ? "Please provide all fields"
              : !emailflag
              ? "Invalid Email"
              : !passwordflag
              ? "Password must have greater than 8 characters, contain special character and a number."
              : ""}
          </Text>
        </Box>
        <Box className={styles.inputdiv}>
          <Input
            ref={emailref}
            focusBorderColor="#25cf60"
            placeholder="Email"
            type="email"
            fontWeight="lighter"
            fontSize="14px"
          />
          <Input
            ref={passwordref}
            focusBorderColor="#25cf60"
            placeholder="Password"
            type="password"
            marginTop="15px"
            fontWeight="lighter"
            fontSize="14px"
          />
          <Input
            ref={phoneref}
            focusBorderColor="#25cf60"
            placeholder="Phone (optional)"
            type="phone"
            maxLength="10"
            marginTop="15px"
            fontWeight="lighter"
            fontSize="14px"
          />
        </Box>
        <Button
          backgroundColor="#25cf60"
          marginTop="40px"
          padding="25px 35px 25px 35px"
          borderRadius="25px"
          fontSize="15px"
          color="white"
          fontWeight="700"
          _hover={{ backgroundColor: "#25cf60" }}
          onClick={() => validator()}
        >
          Sign up for free
        </Button>
        <Text className={styles.note}>
          By signing up you agree to our{" "}
          <a href="https://www.timecamp.com/terms-conditions/">
            <span style={{ color: "#25cf60" }}>Terms of Service</span>{" "}
          </a>{" "}
          and{" "}
          <a href="https://www.timecamp.com/privacy-policy/">
            <span style={{ color: "#25cf60" }}>Privacy Policy</span>
          </a>
        </Text>
      </Box>
    </div>
  );
};

export default Signup;
