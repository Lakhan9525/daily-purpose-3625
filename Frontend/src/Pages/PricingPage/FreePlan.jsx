import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FreePlan = ({ display }) => {
  const navigate = useNavigate();

  return (
    <VStack>
      <List textAlign="left">
        <Box mt="-2rem">
          <Heading
            color="rgb(37,207,96)"
            as="h3"
            fontWeight="semibold"
            fontSize="5xl"
            textAlign="center"
          >
            Free
          </Heading>
        </Box>

        <Box mt="0.3rem">
          <Text
            textAlign="center"
            color="rgba(16, 24, 52, 0.75)"
            fontWeight="semibold"
          >
            Free forever plan
          </Text>
        </Box>

        <Box bgColor="rgb(37,207,96)" mt="1rem">
          <Divider />
        </Box>

        <Box mt="1.4rem">
          <Text
            color="rgba(16, 24, 52, 0.75)"
            fontSize="sm"
            fontWeight="semibold"
          >
            <Text>Measure on which activities you</Text>
            <Text>spend time while working</Text>
          </Text>
        </Box>

        <Box>
          <Button
            mt="1.3rem"
            width="13rem"
            height="3rem"
            backgroundColor="rgb(37,207,96)"
            _hover={{ backgroundColor: "green.600" }}
            onClick={() => {
              navigate(`/auth/register/free`);
            }}
          >
            <Text color="white" fontFamily="sans-serif" fontWeight="bold">
              Join for free
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Unlimited users
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Unlimited Projects & tasks
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Desktop & Mobile app
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
  );
};

export default FreePlan;
