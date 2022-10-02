import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDashboard, AiOutlineRight } from "react-icons/ai";
import { BiCustomize } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import { FaRegCalendarAlt, FaSearchPlus } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbChartPie } from "react-icons/tb";

const Reports = ({ toggle }) => {
  return (
    <>
      <Box>
        <Popover trigger={"hover"} placement={"right"}>
          <PopoverTrigger>
            {/* <Link color={"gray.500"} _hover={{color:"#25cf60" }}>
                        <Text>Reports</Text>
                      </Link> */}
            <Box
              m={"auto"}
              width={"275px"}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#f8f8f8",
                borderRadius: "7px",
              }}
              height="100%"
              display={"flex"}
              gap="20px"
              p={"2"}
              justifyContent="center"
              alignItems="center"
            >
              <TbChartPie size={"25px"} color="gray" />
              <Text color={"gray"} fontWeight="semibold">
                Reports
              </Text>
              {toggle ? null : <AiOutlineRight />}
            </Box>
          </PopoverTrigger>
          <PopoverContent
            fontSize="14px"
            width="300px"
            p="4"
            border="1px solid green"
          >
            <Stack p={"4"}>
              <Text fontSize={"13px"} fontWeight="semibold" color={"gray.400"}>
                TIME REPORTS
              </Text>
              <VStack borderBottom={"1px solid gray"} height={"170px"}>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <GoGraph size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    Summary
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <FaSearchPlus size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    Detailed
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <FaRegCalendarAlt size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    By days
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <BiCustomize size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    Custom
                  </Text>
                </Flex>
              </VStack>

              <Text fontSize={"13px"} fontWeight="semibold" color={"gray.400"}>
                PEOPLE REPORTS
              </Text>
              <VStack borderBottom={"1px solid gray"} height={"180px"}>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <FiUsers size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    People by task
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <FiUsers size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    People by days and task
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <FiUsers size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    People by days
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  alignItems="center"
                  h={"8"}
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <FiUsers size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    People by projects
                  </Text>
                </Flex>
              </VStack>

              <Text fontSize={"13px"} fontWeight="semibold" color={"gray.400"}>
                BUDGETING REPORTS
              </Text>
              <VStack borderBottom={"1px solid gray"} height={"auto"}>
                <Flex
                  width="100%"
                  h={"8"}
                  gap={"15px"}
                  alignItems="center"
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <CgBox size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    Billable,unbillable,invoiced
                  </Text>
                </Flex>
                <Flex
                  width="100%"
                  gap={"15px"}
                  h={"8"}
                  alignItems="center"
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <IoReorderThreeOutline size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    Estimates
                  </Text>
                </Flex>
              </VStack>
              <Text fontSize={"13px"} fontWeight="semibold" color={"gray.400"}>
                BUDGETING REPORTS
              </Text>
              <VStack>
                <Flex
                  width="100%"
                  h={"8"}
                  gap={"15px"}
                  alignItems="center"
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "7px",
                  }}
                >
                  <AiFillDashboard size={"22px"} color="gray" />
                  <Text fontSize={"16px"} color="gray.900">
                    Real-time dashboard
                  </Text>
                </Flex>
              </VStack>
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default Reports;
