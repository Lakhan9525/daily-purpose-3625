import React from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { BsCheck2 } from "react-icons/bs";

const BasicPlan = () => {
  return (
    // <Stack>
    <VStack>
      <List textAlign="left">
        <Box>
          <Heading
            color="rgb(37,207,96)"
            as="h3"
            fontWeight="semibold"
            fontSize="xl"
            textAlign="center"
          >
            BASIC
          </Heading>
        </Box>

        <Box mt="0.1rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="3xl"
            textAlign="center"
            color="rgb(16,24,52)"
          >
            $6.3
          </Heading>
          <Box mt="0.6rem">
            <Text
              textAlign="center"
              color="rgba(16, 24, 52, 0.75)"
              fontWeight="semibold"
            >
              user/mo
            </Text>
          </Box>
          <Box bgColor="rgb(37,207,96)" mt="1rem">
            <Divider />
          </Box>
          <Text
            mt="1.2rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="sm"
            fontWeight="semibold"
          >
            <Text>Be more transparent and gain</Text>
            <Text>customers' trust</Text>
          </Text>
        </Box>

        <Box>
          <Button
            mt="1rem"
            width="13rem"
            height="3rem"
            backgroundColor="rgb(219,220,225)"
            _hover={{ backgroundColor: "gray" }}
          >
            <Text fontFamily="sans-serif" fontWeight="bold">
              Buy Basic
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgb(16,24,52)" fontWeight="semibold">
              All Free features, plus
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Unlimited questions
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Import presentations
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Export results to Excel
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
    // </Stack>
  );
};

export default BasicPlan;
