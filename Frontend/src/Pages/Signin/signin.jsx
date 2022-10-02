import React, { useEffect, useRef, useState } from "react";
import { Box, Image, Button, Input, Text } from "@chakra-ui/react";
import styles from "./signin.module.css";
import { FiChrome } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();
  const [flag, setFlag] = useState("Login Successful");
  const [routeflag, setRouteflag] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 990;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const handleGoogleAuth = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const handleFacebookAuth = () => {
    window.open("http://localhost:8080/auth/facebook", "_self");
  };
  return (
    <Box>
      {/* Navbar section */}
      <Box
        display="flex"
        alignItems="center"
        h="80px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 6px"
      >
        <Image
          w="140px"
          h="40px"
          marginLeft="8%"
          src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661423136.svg"
          alt="timecamp-logo"
        />
      </Box>
      <Box display="flex" m="3rem" gap="2rem">
        {/* Left-Div */}
        <Box className={styles.leftdiv}>
          {/* Heading */}
          <Text className={styles.leftheading}>
            TimeCamp Plugin for Google Chrome
          </Text>
          {/* Subheading */}
          <Text className={styles.leftsubheading}>
            Track time without leaving Chrome in 70+ online apps.
          </Text>
          {/* Button with Chrome Logo */}
          <Box
            className={styles.chromebutton}
            _hover={{ backgroundColor: "#25cf60", cursor: "pointer" }}
            backgroundColor="#25cf60"
            color="white"
          >
            <FiChrome className={styles.chromelogo} />
            <Text className={styles.buttontext}>Add TimeCamp for Chrome</Text>
          </Box>
          <Box
            hidden={width > breakpoint ? false : true}
            className={styles.companies}
          >
            <Image
              w="94px"
              h="50px"
              src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661509647.png"
              alt="logo"
            />
            <Image
              w="94px"
              h="50px"
              src="https://cdn.timecamp.com/res/css/images/capterra-icon.1661509647.png"
              alt="logo"
            />
            <Image
              w="94px"
              h="50px"
              src="https://cdn.timecamp.com/res/css/images/crowd-icon.1661509647.png"
              alt="logo"
            />
            <Image
              w="94px"
              h="50px"
              src="https://cdn.timecamp.com/res/css/images/get-app-icon.1661509647.png"
              alt="logo"
            />
          </Box>
        </Box>
        {/* Right Div */}
        <Box className={styles.rightdiv}>
          {/* Form heading */}
          <Text className={styles.loginheading}>Log in to TimeCamp</Text>
          {/* Facebook login button */}
          <Box
            className={styles.facebookbutton}
            color="#fff"
            backgroundColor="#172b4d"
            onClick={handleFacebookAuth}
          >
            <SiFacebook fontSize="25px" />
            <Text fontSize="14px" fontWeight="700">
              Log in with Facebook
            </Text>
          </Box>
          {/* Google login button */}
          <Box
            className={styles.googlebutton}
            _hover={{ backgroundColor: "gray.100" }}
            onClick={handleGoogleAuth}
          >
            <FcGoogle fontSize="25px" />
            <Text fontSize="14px" fontWeight="700" color="#8f7e77">
              Log in with Google
            </Text>
          </Box>
          <Text marginTop="1rem" fontSize="14px">
            Or
          </Text>
          <Box margin="auto" width="75%" marginTop="20px">
            <Input
              ref={emailref}
              focusBorderColor="#25cf60"
              placeholder="Email"
              type="email"
            />
            <Input
              ref={passwordref}
              focusBorderColor="#25cf60"
              placeholder="Password"
              type="password"
              marginTop="15px"
            />
          </Box>
          {/* Hidden popup incase user puts in wrong credentials */}
          <Box
            hidden={flag === "Login Successful" ? true : false}
            backgroundColor="#f2dede"
            border="1px solid #f2dede"
            color="brown"
            margin="auto"
            marginTop="15px"
            borderRadius="10px"
            width="75%"
            height="50px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
          >
            <Text>Wrong e-mail or password.</Text>
          </Box>
          {/* Forgotten Password Link */}
          <Link to="/forgotten_password">
            <Text
              color="#25cf60"
              marginTop="15px"
              fontSize="14px"
              cursor="pointer"
            >
              Forgotten Password?
            </Text>
          </Link>
          <Box
            className={styles.loginbutton}
            backgroundColor="#25cf60"
            cursor="pointer"
            _hover={{ backgroundColor: "#25cf60" }}
          >
            Log in
          </Box>
          <Text
            color="gray"
            fontSize="14px"
            width="65%"
            margin="auto"
            marginTop="20px"
            textAlign="center"
          >
            <Link to="/auth/register">
              <span style={{ color: "#25cf60", cursor: "pointer" }}>
                No account? Sign up
              </span>
            </Link>{" "}
            or
            <span style={{ color: "#25cf60", cursor: "pointer" }}>
              {" "}
              Log in with SSO
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
