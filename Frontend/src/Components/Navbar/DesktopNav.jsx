import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, HStack, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Logo from "./Logo";
import Projects from "./Projects";
import Skills from "./Skills";
import TechStacks from "./TechStacks";

const DesktopNav = () => {
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleDesktopNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
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
      height="64px"
      //border="1px solid red"
    >
      <Stack width="100%">
        <HStack>
          <Box ml={14}>
            <Logo />
          </Box>
          <Spacer />
          <Box fontFamily="body">
            <HStack spacing={8}>
              <Box>
                <a href="#home" onClick={() => toggleDesktopNavList("#home")}>
                  <Home />
                </a>
              </Box>
              <Box>
                <a href="#about" onClick={() => toggleDesktopNavList("#about")}>
                  <AboutMe />
                </a>
              </Box>
              <Box>
                <a
                  href="#projects"
                  onClick={() => toggleDesktopNavList("#projects")}
                >
                  <Projects />
                </a>
              </Box>
              <Box>
                <a
                  href="#techstacks"
                  onClick={() => toggleDesktopNavList("#skills")}
                >
                  <TechStacks />
                </a>
              </Box>
              <Box>
                <a
                  href="#skills"
                  onClick={() => toggleDesktopNavList("#skills")}
                >
                  <Skills />
                </a>
              </Box>
              <Box>
                <a
                  href="#contact"
                  onClick={() => toggleDesktopNavList("#contact")}
                >
                  <ContactMe />
                </a>
              </Box>
            </HStack>
          </Box>
          <Spacer />
          <Box
            display={{ base: "none", sm: "none", md: "flex" }}
            //border="1px solid red"
            ml={80}
          >
            <a href={require("../pdf/Suman_Khan_Resume.pdf")} download>
              <Button
                fontSize={"md"}
                fontWeight={600}
                fontFamily="body"
                color={"white"}
                colorScheme="messenger"
                variant="solid"
                borderRadius={4}
                _hover={{
                  backgroundColor: "messenger.600",
                }}
                // ml={250}
                mr={8}
              >
                Resume
                <span>
                  <DownloadIcon w={5} h={6} color="yellow" boxSize={6} />
                </span>
              </Button>
            </a>
          </Box>
        </HStack>

        <Divider />
      </Stack>
    </Stack>
  );
};

export default DesktopNav;
