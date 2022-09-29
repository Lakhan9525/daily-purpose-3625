import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  HStack,
  IconButton,
  Spacer,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Logo from "./Logo";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import TechStacks from "./TechStacks";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleMobNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  return (
    <Stack
      display={{ base: "flex", sm: "flex", md: "none" }}
      style={{
        position: "fixed",
        top: -9,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      //border="1px solid red"
      width="100%"
      height="95px"
    >
      <Stack>
        <HStack>
          <Box ml={3} mt={3}>
            <Logo />
          </Box>
          <Spacer />
          <Box>
            <IconButton
              aria-label="hamburger"
              icon={<HamburgerIcon />}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
              variant={"ghost"}
              w={8}
              h={8}
              fontSize={55}
              mr={3}
              mt={3}
            />

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="md"
            >
              {/* <DrawerOverlay /> */}
              <DrawerContent
                style={{
                  backgroundColor: "rgb(14,36,49)",
                  marginTop: "88px",
                }}
                maxHeight="-moz-fit-content"
              >
                <DrawerCloseButton color="white" />

                <DrawerBody>
                  <VStack
                    style={{
                      width: "100px",
                      height: "auto",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    <Box>
                      <Box pb="1rem">
                        <a
                          href="#home"
                          onClick={() => toggleMobNavList("#home")}
                        >
                          <Home />
                        </a>
                      </Box>
                      <Box mt="1rem" pb="1rem">
                        <a
                          href="#about"
                          onClick={() => toggleMobNavList("#about")}
                        >
                          <AboutMe />
                        </a>
                      </Box>
                      <Box mt="1rem" pb="1rem">
                        <a
                          href="#projects"
                          onClick={() => toggleMobNavList("#projects")}
                        >
                          <Projects />
                        </a>
                      </Box>
                      <Box mt="1rem" pb="1rem">
                        <a
                          href="#techstacks"
                          onClick={() => toggleMobNavList("#skills")}
                        >
                          <TechStacks />
                        </a>
                      </Box>
                      <Box mt="1rem" pb="1rem">
                        <a
                          href="#skills"
                          onClick={() => toggleMobNavList("#skills")}
                        >
                          <Skills />
                        </a>
                      </Box>
                      <Box mt="1rem" pb="1rem">
                        <a
                          href={require("../pdf/Suman_Khan_Resume.pdf")}
                          download
                        >
                          <Resume width="5rem" colorScheme="facebook" />
                        </a>
                      </Box>
                      <Box mt="1rem" pb="1rem">
                        <a
                          href="#contact"
                          onClick={() => toggleMobNavList("#contact")}
                        >
                          <ContactMe />
                        </a>
                      </Box>
                    </Box>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
      </Stack>
      <Divider pt={3} />
    </Stack>
  );
};

export default MobileNav;
