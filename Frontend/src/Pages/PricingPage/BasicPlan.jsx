import React from "react";
import {
  Badge,
  Box,
  Button,
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
          <Heading as="h3" fontWeight="semibold" fontSize="2xl">
            Basic
          </Heading>
        </Box>

        <Box mt="0.6rem">
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            All the essentials for
          </Text>
          <Text color="rgba(16, 24, 52, 0.75)" fontWeight="semibold">
            interactive presentations.
          </Text>
        </Box>

        <Box mt="1.5rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="5xl"
            color="rgb(16,24,52)"
          >
            $11
            <Text as="sup" fontSize="1.8rem">
              99<Text as="sub">/month</Text>
            </Text>
          </Heading>
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="sm"
            fontWeight="semibold"
          >
            Billed Yearly{" "}
            <Badge
              variant="subtle"
              backgroundColor="rgb(229,247,241)"
              color="green"
              height="23px"
              textAlign="center"
              borderRadius="4px"
              width="4.5rem"
              padding="0.1rem"
            >
              SAVE33%
            </Badge>
            <Box display="flex" gap="0.2rem">
              <Text>Price per </Text>

              <Tooltip
                width="12rem"
                height="5rem"
                hasArrow
                placement="top"
                label="The creator and host of an interactive Mentimeter presentation"
                bg="blackAlpha.900"
                color="white"
                textAlign="match-parent"
                pt="0.5rem"
                pl="0.7rem"
              >
                <Text
                  textDecorationLine="underline"
                  cursor="help"
                  fontWeight="bold"
                >
                  presenter{" "}
                </Text>
              </Tooltip>

              <Text>, excl. tax.</Text>
            </Box>
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
