import React from "react";
import {
  Button,
  Heading,
  Menu,
  MenuItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Popover
        isOpen={isOpen}
        _focus={{ outline: "none" }}
        returnFocusOnClose={false}
      >
        <PopoverTrigger>
          <Button
            variant="ghost"
            width="6rem"
            borderRadius={5}
            _hover={{ bg: "none", color: "rgb(37,207,96)" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Heading fontSize="md" color="gray.30">
              Features
            </Heading>{" "}
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </PopoverTrigger>
        <PopoverContent width="260px">
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverBody
              textAlign="left"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <Menu>
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
              </Menu>
            </PopoverBody>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Features;
