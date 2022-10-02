import { Box, Divider, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import Bookademo from "./Bookademo";
import Features from "./Features";
import Integrations from "./Integrations";
import Logo from "./Logo";
import Pricing from "./Pricing";
import Signin from "./Signin";
import Signup from "./Signup";

const DesktopNav = () => {
  return (
    <Box
      display={{ base: "none", sm: "none", md: "center" }}
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      width="100%"
      height="86px"
      //border="1px solid red"
      pt="1rem"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box width="100%">
        <HStack spacing={10}>
          {/* Logo */}
          <Box px="2rem">
            <Link to="/">
              <Logo
                // mt="1.1rem"
                ml="4rem"
              />
            </Link>
          </Box>

          {/* Sections */}

          <Box
            style={{ display: "flex", gap: "10px" }}
            ml="5rem"
            // border="1px solid red"
          >
            <Box>
              <Features />
            </Box>
            <Spacer />

            <Box>
              <Link to="/pricing">
                <Pricing />
              </Link>
            </Box>

            <Spacer />
            <Box>
              <Integrations />
            </Box>
            <Spacer />
            <Box>
              <Blog />
            </Box>
            <Spacer />
          </Box>

          {/* Login */}

          <Box>
            <Box
              style={{ display: "flex", gap: "12px" }}
              ml="2rem"
              pl="2rem"
              px="2rem"
              //border="1px solid red"
              width="30rem"
            >
              <Box mt="0.4rem">
                <Bookademo />
              </Box>
              <Spacer />
              <br />
              <br />
              <Box bgColor="rgb(37,207,96)" height="3.3rem">
                <Divider orientation="vertical" />
              </Box>
              <Box mt="0.4rem">
                <Signin name="Sign in" />
              </Box>
              <Spacer />
              <Box>
                <Signup width="14rem" fontSize="md" height="3.3rem" />
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default DesktopNav;
