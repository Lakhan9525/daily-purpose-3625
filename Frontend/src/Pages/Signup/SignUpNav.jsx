import { Box, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Navbar/Logo";
import Signin from "../../Components/Navbar/Signin";

const SignUpNav = () => {
  return (
    <Stack
      h="80px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 6px"
      display={{ base: "none", sm: "none", md: "center" }}
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      width="100%"
      height="86px"
    >
      <HStack w="100%" justifyContent="space-between">
        <Link to="/">
          <Logo ml="4rem" mt="0.3rem" />
        </Link>

        <Signin name="Log In" mt="0.3rem" mr="3rem" />
      </HStack>
    </Stack>
  );
};

export default SignUpNav;
