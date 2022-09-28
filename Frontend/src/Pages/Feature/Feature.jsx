import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
    Input,
    HStack,
    SimpleGrid,
    Center,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { AiOutlineGoogle,AiOutlineArrowRight } from "react-icons/ai";
  
  
  export default function Feature() {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const handleOne = (e) => {
      console.log("one", one, "two", two, "three", three);
      setOne(true);
      setTwo(false);
      setThree(false);
    };
    const handleTwo = (e) => {
      console.log("one", one, "two", two, "three", three);
      setOne(false);
      setTwo(true);
      setThree(false);
    };
    const handleThree = (e) => {
      console.log("one", one, "two", two, "three", three);
      setOne(false);
      setTwo(false);
      setThree(true);
    };
    return (
      <>
        <Container maxW={"7xl"} my={10}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} fontSize={"5xl"}>
                  Time tracker your team will actually use
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Track time against your projects and create reports and timesheets
                in seconds.
              </Text>
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Input
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  fontSize={["sm", "md", "lg"]}
                  px={6}
                  bg={"white"}
                  placeholder={"Add your email"}
                  boxShadow={"lg"}
                />
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={60}
                  color={"white"}
                  bg={"#37c266"}
                  _hover={"#42f87f"}
                >
                  Start tracking time
                </Button>
              </Stack>
              <HStack spacing={8}>
                <Flex gap={2} w={"45%"}>
                  <Text color={"gray.500"} justifyContent={"center"}>
                    Or sign up with:
                  </Text>
                  <IconButton
                    icon={<AiOutlineGoogle />}
                    bg={"#37c266"}
                    color={"white"}
                    rounded={"full"}
                    w={4}
                    _hover={"#42f87f"}
                  />
                </Flex>
                <Text w={"55%"} fontSize={12} color={"gray.500"}>
                  By signing up you agree to our
                  <Text as={"span"} color="#37c266">
                    {" "}
                    Terms and Conditions{" "}
                  </Text>{" "}
                  and
                  <Text as={"span"} color="#37c266">
                    {" "}
                    Privacy Policy{" "}
                  </Text>
                  .
                </Text>
              </HStack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/features-time-tracking.svg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Stack bg={"#37c266"} m={0} p={4} spacing={8}>
          <Text
            fontWeight={"semibold"}
            fontSize={"lg"}
            color={"white"}
            textAlign={"center"}
          >
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
          <SimpleGrid
            px={[10, 20, 40]}
            justifyContent={"center"}
            columns={[2, 3, 3, 6]}
            spacing={6}
          >
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" />
          </SimpleGrid>
        </Stack>
        <Container maxW={"7xl"} my={8}>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
            mx={[20, 40, 60, 80]}
            mb={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
            mx={[200, 400, 600, 800]}
            mb={-2}
          />
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            bg={"gray.100"}
            p={10}
            rounded={10}
          >
            <Flex
              flexDirection={["column", "column", "row"]}
              justifyContent={"space-between"}
            >
              <Stack spacing={4} textAlign={"left"}>
                <Heading fontWeight={600} fontSize={["md", "lg", "xl"]}>
                  Schedule a demo and learn more about TimeCamp
                </Heading>
                <Text color={"gray.500"} fontSize={["sm", "md", "lg"]}>
                  Hop on a call with TimeCamp's top minds to get the best possible
                  introduction to our product.
                </Text>
              </Stack>
              <Stack align={"center"}>
                <Button
                  color={"white"}
                  bg={"#F7B801"}
                  rounded={"full"}
                  px={6}
                  height={[8, 12, 16]}
                  w={[40, 80, 160, 200]}
                  fontSize={[10, 20, 24]}
                  fontWeight={"semibold"}
                  _hover={"#ffbf00"}
                >
                  Book a Demo
                </Button>
              </Stack>
            </Flex>
          </Stack>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
            mx={[20, 40]}
            mt={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
            mx={[200, 400, 600, 800]}
            mt={-2}
          />
        </Container>
  
        <Center>
          <Heading fontSize={"4xl"}>One app. A multitude of benefits</Heading>
        </Center>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack
                onClick={handleOne}
                borderLeft={one ? "5px solid #37c266" : "none"}
                p={6}
                boxShadow={one ? "xl" : "none"}
                borderRadius={4}
                w={"90%"}
                spacing={2}
              >
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                >
                  <Text as={"span"} fontSize={"2xl"}>
                    Track a team's performance
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  See at a glance how your team is performing and how much time
                  they spend on a given project or task.
                </Text>
              </Stack>
  
              <Stack
                onClick={handleTwo}
                borderLeft={two ? "5px solid #37c266" : "none"}
                boxShadow={two ? "xl" : "none"}
                p={4}
                w={"90%"}
                borderRadius={4}
                spacing={2}
              >
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                >
                  <Text as={"span"} fontSize={"2xl"}>
                    Track project profitability
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Is your project still within its budget? What is the profit
                  margin across different projects? With TimeCamp, budgeting and
                  billing will become easy as pie.
                </Text>
              </Stack>
  
              <Stack
                onClick={handleThree}
                borderLeft={three ? "5px solid #37c266" : "none"}
                boxShadow={three ? "xl" : "none"}
                p={4}
                borderRadius={4}
                w={"90%"}
                spacing={2}
              >
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                >
                  <Text as={"span"} fontSize={"2xl"}>
                    Track your productivity
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Get your team’s proof of work. Measure their productivity and
                  the time spent on different apps and websites.
                </Text>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/performance.jpg"
                  }
                  display={one ? "block" : "none"}
                />
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/profitability.jpg"
                  }
                  display={two ? "block" : "none"}
                />
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/productivity.jpg"
                  }
                  display={three ? "block" : "none"}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Automatic time tracking app
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    More focus thanks to automatic time tracking
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  TimeCamp automatically scans the domain names of your apps and
                  groups them to pre-defined categories. Thanks to this, you can
                  focus on your work.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={60}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  More about automatic time tracking
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/automatic-time-tracking-header.svg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/productivity-tracking-header.svg"
                  }
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Productivity tracking
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    More insights with productivity tracking
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  If you're in need to track the usage of certain apps by your
                  team, try this! Stay on the same page with your team without any
                  micromanagement.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  Read more about productivity tracking
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Automatic time tracking app
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    Time tracking reports
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Do you need to measure the profitability of your projects? Or
                  maybe you need to keep track of your budget? TimeCamp does it
                  all. One app. Many features.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  Learn more about TimeCamp reports
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/insightful-reports-header.svg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/versatile-billing-header.svg"
                  }
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Custom billing rates
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    Keeping track of your billables
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  TimeCamp's billing feature allows you to mark your tracked time
                  as either billable or non-billable which significantly speeds up
                  your invoicing as well as resource management.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  Learn more about billing rates in TimeCamp
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Timesheet approvals
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    One-click approvals
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Tired of manually going through your team's timesheets at the
                  end of the month? This is what you need to work smarter, not
                  harder.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  Get to know more about timesheets approvals
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/smart-timesheets-header.svg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/attendance-tracking-header.svg"
                  }
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Attendance tracking
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    No more punch in/out cards
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  TimeCamp also works for attendance reporting. You can finally
                  scrap the dreaded punch in and out cards and use a simple tool.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  Read about easy attendance tracking
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Easy invoicing
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"3xl"}>
                    Effortless invoicing
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Turn precise data into precise invoices for your clients. No
                  more disputes over amounts. TimeCamp provides the proof of work.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  color={"white"}
                  bg={"gray.400"}
                  _hover={"grey"}
                >
                  Find out more about effortless invoicing
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/insightful-reports-header.svg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Center>
          <Heading>Customer Story</Heading>
        </Center>
        <Container
          maxW={"7xl"}
          my={10}
          border={"1px solid grey"}
          borderRadius={2}
        >
          <Flex direction={["column", "row"]} gap={4}>
            <Box>
              <Image src="https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg" />
            </Box>
            <Stack spacing={2} p={4} w={"90%"}>
              <Text fontWeight={"semibold"} fontSize={["lg", "md", "2xl", "4xl"]}>
                It’s very simple to use, especially fueling it with Trello, it’s
                key here, we wanted to maintain our workflow and not jump over to
                other pieces of software to capture the time data.
              </Text>
              <Text>
                <Text as={"span"} fontWeight={"semibold"}>
                  {" "}
                  Mike Spencer
                </Text>{" "}
                , M&C Saatchi
              </Text>
            </Stack>
          </Flex>
        </Container>
        <Center textAlign={"center"} mt={40}>
          <Text fontWeight={"light"}>
            Distribute the work on projects and tasks and
            <Text as={"span"} fontWeight={"semibold"}>
              {" "}
              track the progress{" "}
            </Text>{" "}
            performed by your team. Bill your time on any particular tasks and
            make sure you will
            <Text as={"span"} fontWeight={"semibold"}>
              {" "}
              never exceed your budget.
            </Text>
          </Text>
        </Center>
        <Container maxWidth={'9xl'} bgColor={"gray.100"} px={[4,8,16,32,64]}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                <Text as={"span"} color={"green.400"} fontSize={"sm"}>
                  Time tracking integrations
                </Text>
                <Heading
                  lineHeight={1}
                  fontWeight={500}
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  
                >
                  <Text as={"span"} fontSize={"2xl"}>
                    Easy and quick integration with more than 100 apps and work
                    tools
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  TimeCamp works great alongside with all of the most popular work
                  management tools. Now, you can also track time directly from
                  your go-to apps such as Trello or Asana thanks to our Chrome
                  extension.
                </Text>
                <Button h={16} rounded={20} as={'a'}bgColor={'#3c91e6'} color='white' _hover={'none'}><Image w={8} src="https://cdn-m.timecamp.com/img/integrations/chrome.png" m={2}/>Track time in chrome</Button>
                <Button h={16} rounded={20} as={'a'} bgColor={'#3c91e6'} color='white' _hover={'none'}> <Image  w={16} src="https://cdn-m.timecamp.com/img/integrations/edge.svg"/>Track time in edge</Button>
                
                <Text color={"gray.500"}>
                  Maintain your current workflow and connect TimeCamp, the best
                  time tracking software, with your currently used apps.
                </Text>
              </Stack>
  
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={80}
                  variant={"ghost"}
                  color={"green"}
                >
                  Check Integrations <AiOutlineArrowRight/>
                </Button>
              </Stack>
            </Stack>
  
            <SimpleGrid
              p={10}
              justifyContent={"center"}
              columns={[2, 3, 3]}
              spacing={[10,20]}
            >
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
              <Box
                bgColor={"white"}
                boxShadow={"lg"}
                w={"100px"}
                h={"100px"}
                border={"none"}
                p={2}
                borderRadius={24}
              >
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png"
                  }
                  w={"50px"}
                  m={4}
                />
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
        <Box bgColor={"gray.100"} my={10}  px={[4,8,16,32,64]}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>You might be interested in these blog posts</Heading>
            
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
              <Flex gap={8}  direction={{ base: 'column', md: 'row' }}>
  
           <Stack w={'60%'}>
            <Image w={'300px'} src='https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg'/>
            <Text color={'blue.400'}>M&C SAATCHI</Text>
            <Text fontWeight={'semibold'}>
  How to Blend in TimeCamp to an Already Established Workflow. Some
  Insights From M&C Saatchi</Text>
           </Stack>
           <Stack w={'60%'}>
            <Image w={'300px'} src='https://cdn-m.timecamp.com/img/customer-stories/tense/tensegroup.jpg'/>
            <Text color={'blue.400'}>Grupa TENSE</Text>
            <Text fontWeight={'semibold'}>
  
            How TimeCamp helped a thriving digital agency by automating its
  workflow.</Text>
           </Stack>
           <Stack w={'60%'}>
            <Image w={'300px'} src='https://cdn-m.timecamp.com/img/greenbranding/features/timeTracking.png'/>
            <Text color={'blue.400'}>Time tracking</Text>
            <Text fontWeight={'semibold'}>
            Why You Should Use Time Tracking for Your Business</Text>
           </Stack>
              </Flex>
          </Stack>
        </Container>
      </Box>
      <Container maxW={"7xl"} my={8} p={[4,8,16]}>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
            mx={[0,20, 40, 60, 80]}
            mb={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
            mx={[100,200, 400, 600, 800]}
            mb={-2}
          />
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            bg={"gray.100"}
            p={10}
            rounded={16}
          >
  
              <Stack spacing={4} textAlign={"center"} px={[2,4,8,16,32]}>
                <Heading fontWeight={[400,600,700]} fontSize={['2xl','4xl']}>
                One simple tool to measure everything your business needs.
                </Heading>
                <Text color={"gray.500"} fontSize={["sm", "md", "lg"]} >
                Remember, you can't improve something if you're not measuring it! If you're tired of the constant guessing, give TimeCamp a go!
                </Text>
              </Stack>
              <Flex justifyContent={"center"} direction={["column","row","row"]} my={2} gap={4}>
                <Button
                  color={"black"}
                  bg={"#F7B801"}
                  rounded={"full"}
                  px={6}
                  height={[8, 12]}
                  w={[40, 80, 160, 200,400]}
                  fontSize={[10, 16]}
                  fontWeight={"semibold"}
                  _hover={"#ffbf00"}
                >
                  Try Timecamp for free
                </Button>
                <Button
                  color={"black"}
                  borderColor={"#F7B801"}
                  rounded={"full"}
                  variant={'outline'}
                  px={6}
                  height={[8, 12]}
                  w={[40, 80, 160, 200,400]}
                  fontSize={[10, 16]}
                  fontWeight={"semibold"}
                  _hover={"#ffbf00"}
                >
                  Contact Sales
                </Button>
              </Flex>
          
          </Stack>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
            mx={[20, 40]}
            mt={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
            mx={[200, 400, 600, 800]}
            mt={-2}
          />
        </Container>
      </>
    );
  }
  