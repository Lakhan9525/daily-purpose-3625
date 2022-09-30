import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import FocusLock from "react-focus-lock";
import Icon1 from "./Icons/Features_Icons/Icon1";
import Icon2 from "./Icons/Features_Icons/Icon2";
import Icon3 from "./Icons/Features_Icons/Icon3";
import Icon4 from "./Icons/Features_Icons/Icon4";
import Icon5 from "./Icons/Features_Icons/Icon5";
import Icon6 from "./Icons/Features_Icons/Icon6";
import Icon7 from "./Icons/Features_Icons/Icon7";

const Features = () => {
  return (
    // <div>
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
        _hover={{ bgColor: "none", color: "rgb(37,207,96)" }}
        _expanded={{ bg: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        Features
      </MenuButton>
      {/* <Menu> */}
      <MenuList>
        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon1 />}
        >
          Automatic time tracking
        </MenuItem>

        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon2 />}
        >
          Reporting
        </MenuItem>

        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon3 />}
        >
          Productivity tracking
        </MenuItem>

        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon4 />}
        >
          Timesheet approvals
        </MenuItem>

        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon5 />}
        >
          Invoicing
        </MenuItem>

        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon6 />}
        >
          Billing rates & budgeting
        </MenuItem>

        <MenuItem
          borderRadius="6px"
          _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
          icon={<Icon7 />}
        >
          Time off & attendance
        </MenuItem>

        {/* <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                <Icon2 />
                <Text as="b" fontSize="md" color="gray.45">
                  Reporting
                </Text>
              </ListItem>
              <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                <Icon3 />
                <Text as="b" fontSize="md" color="gray.45">
                  Productivity tracking
                </Text>
              </ListItem>
              <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                <Icon4 />
                <Text as="b" fontSize="md" color="gray.45">
                  Timesheet approvals
                </Text>
              </ListItem>
              <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                <Icon5 />
                <Text as="b" fontSize="md" color="gray.45">
                  {" "}
                  Invoicing
                </Text>
              </ListItem>
              <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                <Icon6 />
                <Text as="b" fontSize="md" color="gray.45">
                  Billing rates & budgeting
                </Text>
              </ListItem>
              <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                <Icon7 />
                <Text as="b" fontSize="md" color="gray.45">
                  Time off & attendance
                </Text> */}

        {/* </Menu> */}
        {/* </PopoverBody> */}
      </MenuList>
    </Menu>
    // </div>
  );
};

export default Features;
