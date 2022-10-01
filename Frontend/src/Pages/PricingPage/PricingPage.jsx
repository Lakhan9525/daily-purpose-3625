import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import FreePlan from "./FreePlan";
import BasicPlan from "./BasicPlan";
import ProPlan from "./ProPlan";
import EnterprisePlan from "./EnterprisePlan";

const PricingPage = () => {
  const text = "plans";

  return (
    <div>
      {/* <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255",
          zIndex: 1,
        }}
      /> */}

      <Stack mt="4rem">
        <VStack>
          {/* Give Everyone A Voice */}
          <Heading
            as="h2"
            size="xl"
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="rgb(16,24,52)"
            textAlign="center"
          >
            <Text>Your time costs more</Text>
          </Heading>

          <Box
            color="rgba(16, 24, 52, 0.75)"
            fontWeight="semibold"
            fontSize="22px"
          >
            <Text display="flex" gap="0.3rem">
              Use free forever plan or subscribe to a paid plan to get more
              features!
            </Text>
          </Box>
        </VStack>
      </Stack>

      <Stack alignItems="center">
        <HStack mt="2rem" gap="1.5rem">
          <Box>
            <FreePlan display={text} />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="24rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <BasicPlan />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="24rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <ProPlan />
          </Box>
          <Box>
            <Divider
              orientation="vertical"
              height="24rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="rgb(16,24,52)"
              borderWidth="1px"
            />
          </Box>
          <Box>
            <EnterprisePlan />
          </Box>
        </HStack>
      </Stack>
    </div>
  );
};

export default PricingPage;
