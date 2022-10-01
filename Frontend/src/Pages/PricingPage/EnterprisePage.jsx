import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";

import Footer from "./Footer/Footer";
import { BsStopFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EnterprisePage = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  const text = "plans";

  return (
    <Stack>
      <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 1,
        }}
      />

      <VStack>
        <Box display="flex">
          <Box ml="5rem" pt="3rem">
            <VStack>
              <List textAlign="left">
                {/* Mentimeter Enterprise */}
                <Box>
                  <Heading
                    as="h2"
                    size="2xl"
                    noOfLines={[2, 3, 4, 5, 6]}
                    fontFamily="body"
                    fontWeight="semibold"
                    color="rgb(16,24,52)"
                  >
                    <Text>Mentimeter Enterprise</Text>
                  </Heading>
                </Box>

                <Box
                  color="rgba(16, 24, 52, 0.75)"
                  fontWeight="semibold"
                  fontSize="20px"
                  mt="0.8rem"
                >
                  <Text>
                    Perfect for 10+ users. Get in touch and improve engagement
                    levels today.
                  </Text>
                </Box>

                <Box mt="2rem">
                  <List textAlign="left" spacing="1.5rem" fontSize="1.1rem">
                    <ListItem
                      color="rgba(16, 24, 52, 0.75)"
                      fontWeight="semibold"
                    >
                      <ListIcon as={BsStopFill} color="green" />
                      Increased enterprise-level security and control.
                    </ListItem>
                    <ListItem
                      color="rgba(16, 24, 52, 0.75)"
                      fontWeight="semibold"
                    >
                      <ListIcon as={BsStopFill} color="green" />
                      Premium support from dedicated Mentimeter experts.
                    </ListItem>
                    <ListItem
                      color="rgba(16, 24, 52, 0.75)"
                      fontWeight="semibold"
                    >
                      <ListIcon as={BsStopFill} color="green" />
                      Simple team management with oversights of Mentimeter
                      usage.
                    </ListItem>
                    <ListItem
                      color="rgba(16, 24, 52, 0.75)"
                      fontWeight="semibold"
                    >
                      <ListIcon as={BsStopFill} color="green" />
                      Consolidated billing and scaling discounts.
                    </ListItem>
                  </List>
                </Box>
              </List>
            </VStack>
          </Box>

          <Box ml="5rem" pt="2rem">
            <form>
              <FormControl isInvalid={isError}>
                <HStack>
                  <Box>
                    <FormLabel>First name</FormLabel>
                    <Input
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      width="11rem"
                      borderRadius="none"
                      height="2.3rem"
                    />
                    {!isError ? (
                      <FormHelperText>It is your First Name</FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Fill in your first name
                      </FormErrorMessage>
                    )}
                  </Box>

                  <Box>
                    <FormLabel>Last name</FormLabel>
                    <Input
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      width="11rem"
                      borderRadius="none"
                      height="2.3rem"
                    />
                    {!isError ? (
                      <FormHelperText>It is your Last Name</FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Fill in your last name
                      </FormErrorMessage>
                    )}
                  </Box>
                </HStack>
              </FormControl>

              <FormControl isInvalid={isError}>
                <FormLabel>
                  Number of users to include in the subscription
                </FormLabel>
                <Input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  width="22.5rem"
                  borderRadius="none"
                  height="2.3rem"
                />
                {!isError ? (
                  <FormHelperText>It is your licenses</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Fill in the number of licenses
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isError}>
                <FormLabel>Work email</FormLabel>
                <Input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="name@yourcompany.com"
                  width="22.5rem"
                  borderRadius="none"
                  height="2.3rem"
                />
                {!isError ? (
                  <FormHelperText>It is your email</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Fill in your work email address
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Phone number (optional)</FormLabel>
                <Input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="+0 (123) 456-7890"
                  borderColor="gray.600"
                  width="22.5rem"
                  borderRadius="none"
                  height="2.3rem"
                />
                <FormHelperText>
                  Please include country/region code
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Message (optional)</FormLabel>
                <Textarea
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="500"
                  borderColor="gray.600"
                  borderRadius="none"
                />
              </FormControl>

              <FormControl mt="1rem">
                <Button
                  width="22.5rem"
                  borderRadius="none"
                  height="3rem"
                  colorScheme="messenger"
                >
                  Send
                </Button>
              </FormControl>

              <Text
                width="22.5rem"
                fontSize="xs"
                mt="1rem"
                color="rgba(16, 24, 52, 0.75)"
                fontWeight="bold"
                display="flex"
                gap="0.2rem"
              >
                By sending this form, you accept our{" "}
                <Link to="#">
                  <Text color="blue" textDecoration="underline">
                    terms of use
                  </Text>
                </Link>{" "}
                and{" "}
                <Link to="#">
                  <Text color="blue" textDecoration="underline">
                    policies
                  </Text>
                </Link>
                .
              </Text>
            </form>
          </Box>
        </Box>
        <Footer />
      </VStack>
    </Stack>
  );
};

export default EnterprisePage;
