import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Heading,
  ListItem,
  List,
  Button,
} from "@chakra-ui/react";
import Styles from "../HomePage/homepage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Faq from "../Faq/Faq";
import PricingPage from "../PricingPage/PricingPage";
import BlogHome from "../BlogHome/BlogHome";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Box className={Styles.background}>
        <Flex
          className={Styles.row}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        >
          <Box
            className={Styles.left}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "47%" }}
          >
            <Heading as="h1" size="sm">
              Free time tracking software
            </Heading>
            <Heading>Happy to see you again! Book TimeCamp set-up call</Heading>
            <List spacing={2}>
              <ListItem>✓ Showing how TimeCamp works in 15 minutes</ListItem>
              <ListItem>✓ Best practices from 5000+ implementations</ListItem>
              <ListItem>✓ Help with dedicated setup</ListItem>
            </List>
            <Box
              my="10"
              w="100%"
              px="4"
              py="2"
              bgColor="white"
              borderRadius="20px"
              boxShadow="md"
              bg="white"
            >
              <input
                type="email"
                placeholder="your e-mail address"
                className={Styles.input}
              />
            </Box>
            <Text my="10" fontSize="12px">
              By signing up you agree to our{" "}
              <b className={Styles.g}>Terms and Conditions</b> and{" "}
              <b className={Styles.g}>Privacy Policy.</b>.
            </Text>
            <Flex
              className={Styles.btndiv}
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Button className={Styles.btn1}>Book a Demo</Button>
              Or
              <Button className={Styles.btn1}>Go to App</Button>
            </Flex>
          </Box>

          <Flex
            className={Styles.right}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "47%" }}
            mt={{ base: "3rem", sm: "3rem", md: "3rem", lg: "20rem" }}
          >
            <Flex className={Styles.homo}>
              <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="" />
            </Flex>

            <Box className={Styles.homoheader}>
              Adam Wagner, Co-owner and Chief Strategy Officer
            </Box>

            <Box className={Styles.homopara}>
              „TimeCamp proved to be an essential management tool that gives us
              clear insight into a projects efficiency and helps to avoid an
              overblown workload for our team.”
            </Box>
            <Image
              className={Styles.logo}
              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt=""
            />
          </Flex>
        </Flex>
      </Box>

      <Box className={Styles.green}>
        <Box className={Styles.headdiv}>
          <h3>
            Trusted by 18,000 teams from all over the world (and still growing!)
          </h3>
        </Box>

        <Flex
          className={Styles.Row}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
        >
          <Box className={Styles.Imgdiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
              alt=""
            />
          </Box>

          <Box className={Styles.Imgdiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
              alt=""
            />
          </Box>

          <Box className={Styles.Imgdiv}>
            <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
          </Box>
          <Box className={Styles.Imgdiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
              alt=""
            />
          </Box>
          <Box className={Styles.Imgdiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
              alt=""
            />
          </Box>
          <Box className={Styles.Imgdiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
              alt=""
            />
          </Box>
        </Flex>
      </Box>
      <PricingPage />
      <Faq />
      <BlogHome />
      <Footer />
    </div>
  );
};

export default HomePage;
