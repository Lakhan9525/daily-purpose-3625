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
        <Box mt="4rem">
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

        <Box mt="1rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="3xl"
            textAlign="center"
            color="rgb(16,24,52)"
          >
            $6.3
          </Heading>
          <Box mt="1rem">
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
            mt="1.5rem"
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
            backgroundColor="rgb(37,207,96)"
            _hover={{ backgroundColor: "green.600" }}
          >
            <Text color="white" fontFamily="sans-serif" fontWeight="bold">
              start your free trial
            </Text>
          </Button>
        </Box>

        <Box mt="1rem">
          <List textAlign="left">
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Time rounding
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Custom report
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Hide time from users
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Management roles
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Team productivity tracking
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              XLS reports export
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Unlimited integrationss
            </ListItem>
            <ListItem color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
              <ListIcon as={BsCheck2} color="rgb(87,93,113)" />
              Billable time & budgeting
            </ListItem>
          </List>
        </Box>
      </List>
    </VStack>
    // </Stack>
  );
};

export default BasicPlan;
