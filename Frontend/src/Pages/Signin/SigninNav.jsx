import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Navbar/Logo";

const SigninNav = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      h="80px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 6px"
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      width="100%"
      height="86px"
    >
      <Link to="/">
        <Logo ml="4rem" />
      </Link>
    </Box>
  );
};

export default SigninNav;
