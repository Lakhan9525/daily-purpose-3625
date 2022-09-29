import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Divider, HStack, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
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
    <Stack
      display={{ base: "none", sm: "none", md: "center" }}
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      width="100%"
      height="84px"
      //border="1px solid red"
    >
      <Stack width="100%">
        <HStack>
          {/* Logo */}
          <Link to="/">
            <Logo mt="1.1rem" ml="5rem" />
          </Link>

          {/* Sections */}
          <Box>
            <Box style={{ display: "flex", gap: "4px" }} mt="1rem" ml="5rem">
              <Box>
                <Features />
              </Box>
              <Spacer />
              <Box>
                <NavLink
                  to="/pricing"
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "gray.30",
                  })}
                >
                  <Pricing />
                </NavLink>
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
          </Box>

          {/* Login */}

          <Box>
            <Box style={{ display: "flex", gap: "3px" }} mt="1rem" ml="15rem">
              <Box>
                <Bookademo />
              </Box>
              <Spacer />
              <Box>
                <Signin />
              </Box>
              <Spacer />
              <Box>
                <Signup width="5.5rem" fontSize="md" />
              </Box>
            </Box>
          </Box>
        </HStack>

        <Divider pt="1.2rem" />
      </Stack>
    </Stack>
  );
};

export default DesktopNav;
