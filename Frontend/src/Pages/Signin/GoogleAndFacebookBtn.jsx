import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import styles from "./signin.module.css";

const GoogleAndFacebookBtn = ({ handleFacebookAuth, handleGoogleAuth }) => {
  return (
    <div>
      {/* Facebook login button */}
      <Box
        className={styles.facebookbutton}
        color="#fff"
        backgroundColor="#172b4d"
        onClick={() => handleFacebookAuth()}
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
        onClick={() => handleGoogleAuth()}
      >
        <FcGoogle fontSize="25px" />
        <Text fontSize="14px" fontWeight="700" color="#8f7e77">
          Log in with Google
        </Text>
      </Box>
    </div>
  );
};

export default GoogleAndFacebookBtn;
