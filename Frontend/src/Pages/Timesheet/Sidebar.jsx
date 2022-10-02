import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import { TbChartPie } from "react-icons/tb";

import { BsFolder2Open } from "react-icons/bs";
import { BsTags } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsBagDash } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";
import Reports from "./Reports";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Box
      height={'42rem'}
      width={toggle ? "6%" : "15%"}
 
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      position={"sticky"}
      // position={'fixed'}

      // border={'1px solid red'}
    >
      <Box
        height={"auto"}
        borderBottom="1px solid grey"
        display={"flex"}
        alignItems="center"
        gap={toggle ? "13px" : "22px"}
      >
        {toggle ? (
          <Image
            ml="4"
            height={"30px"}
            width="45%"
            src="https://i.pinimg.com/474x/6a/a4/b1/6aa4b1bd5dcccf6e84495731b9f483db.jpg"
          />
        ) : (
          <Image
            height={"60px"}
            width="85%"
            src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg "
            data-theme-default="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg"
            data-theme-darkmode="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorIconWhiteLogo.svg"
          />
        )}
        <Box
          onClick={handleToggle}
          _hover={{ cursor: "pointer" }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          height="30px"
          width={"30px"}
          borderRadius="50%"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          position="relative"
          marginRight={"-40px"}
        >
          {toggle ? <AiOutlineRight /> : <AiOutlineLeft />}
        </Box>
      </Box>

      {/* Time sheet */}

      <Link to="/timesheet">
        <Box
          height={"auto"}
          width="100%"
          borderBottom={"1px solid grey"}
          alignContent="center"
          p="4"
        >
          <Text
         fontSize={toggle ? "11px" : "13px"}
            w={toggle ? null : "50%"}
            textAlign="center"
            fontWeight="semibold"
            color={"gray.400"}
          >
            TRACK
          </Text>
          <Flex
            width={"80%"}
            mt={toggle ? "2" : "4"}
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BiTimeFive size={"25px"} color={'#25cf60'} />
            {toggle ? null : (
              <Text fontSize={"15px"} fontWeight="semibold" color={'#25cf60'}>
                Timesheet
              </Text>
            )}
          </Flex>
        </Box>
      </Link>

      {/* Analyze */}

      <Box
        height={"auto"}
        width="100%"
        borderBottom={"1px solid grey"}
        alignContent="center"
        p="4"
      >
        <Text
         fontSize={toggle ? "11px" : "13px"}
         w={toggle ? null : "50%"}
         textAlign="center"
         fontWeight="semibold"
         color={"gray.400"}
        >
          ANALYZE
        </Text>

        <Flex
          width={"88%"}
          mt="2"
          justifyContent="center"
          height={"40px"}
          alignItems={"center"}
          gap={"1px"}
        >
          {/* <TbChartPie size={"25px"} color='grey' /> */}
          {toggle ? <TbChartPie size={"25px"} color='grey' /> : <Reports toggle={toggle} />}
          {toggle ? null : <AiOutlineRight />}
        </Flex>

      </Box>

      {/* Manage */}

      <Box
        height={"36"}
        width="100%"
        borderBottom={"1px solid grey"}
        alignContent="center"
        p="4"
      >
        <Text
          fontSize={toggle ? "11px" : "13px"}
          w={toggle ? null : "50%"}
          textAlign="center"
          fontWeight="semibold"
          color={"gray.400"}
        >
          MANAGE
        </Text>

        <Link to="/project">
          <Flex
            width={"70%"}
            mt="2"
            onClick={() => navigate("/project")}
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsFolder2Open size={"25px"} color='grey' />
            {toggle ? null : (
              <Text fontSize={"15px"} fontWeight="semibold" color='grey'>
                Projects
              </Text>
            )}
          </Flex>
        </Link>

        {/* <Link to="/tags"> */}
          <Flex
            width={"60%"}
            justifyContent="center"
            // onClick={() => navigate("/tags")}
            mt="2"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsTags size={"25px"} color='grey' />
            {toggle ? null : (
              <Text fontSize={"15px"} fontWeight="semibold" color='grey'>
                Tags
              </Text>
            )}
          </Flex>
        {/* </Link> */}
      </Box>

      {/* TEAM */}

      <Box height={"auto"} width="100%" alignContent="center" p="4"  borderBottom={"1px solid grey"}>
        <Text
          fontSize={toggle ? "11px" : "13px"}
          w={toggle ? null : "50%"}
          textAlign="center"
          fontWeight="semibold"
          color={"gray.400"}
        >
          TEAM
        </Text>
        {/* <Link to="/user"> */}
          <Flex
            width={"70%"}
            mt="2"
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <FiUsers size={"25px"} color='grey' />
            {toggle ? null : (
              <Text fontSize={"15px"} fontWeight="semibold" color='grey'>
                Users
              </Text>
            )}
          </Flex>
        {/* </Link> */}
      </Box>

       {/* Clients */}

       <Box
        height={"36"}
        width="100%"
        // borderBottom={"1px solid grey"}
        alignContent="center"
        p="4"
      >
        <Text
          fontSize={toggle ? "11px" : "13px"}
          w={toggle ? null : "50%"}
          textAlign="center"
          fontWeight="semibold"
          color={"gray.400"}
        >
        CLIENTS
        </Text>

        {/* <Link to="/client"> */}
          <Flex
            width={"70%"}
            mt="2"
            // onClick={() => navigate("/client")}
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsBagDash size={"25px"} color='grey' />
            {toggle ? null : (
              <Text fontSize={"15px"} fontWeight="semibold" color='grey'>
              Clients
              </Text>
            )}
          </Flex>
        {/* </Link> */}

        {/* <Link to="invoice"> */}
          <Flex
            width={"60%"}
            justifyContent="center"
            // onClick={() => navigate("/invoice")}
            mt="2"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"10px"}
          >
            <TbFileInvoice size={"25px"} color='grey' />
            {toggle ? null : (
              <Text fontSize={"15px"} fontWeight="semibold" color='grey'>
               Invoices
              </Text>
            )}
          </Flex>
        {/* </Link> */}
      </Box>

    </Box>
  );
};

export default Sidebar;
