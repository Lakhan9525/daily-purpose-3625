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
import Icon8 from "./Icons/Integrations_Icons/Icon8";
import Icon9 from "./Icons/Integrations_Icons/Icon9";
import Icon10 from "./Icons/Integrations_Icons/Icon10";
import Icon11 from "./Icons/Integrations_Icons/Icon11";
import Icon12 from "./Icons/Integrations_Icons/Icon12";
import Icon13 from "./Icons/Integrations_Icons/Icon13";
import Icon14 from "./Icons/Integrations_Icons/Icon14";
import { Link } from "react-router-dom";

const Integrations = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Popover
        isOpen={isOpen}
        returnFocusOnClose={false}
        boundary={false}
        style={{ _focus: { outline: "none" } }}
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
              Integrations
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
                  icon={<Icon8 />}
                  borderRadius="6px"
                  maxH="50px"
                  pt="50px"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                >
                  Trello
                </MenuItem>

                <MenuItem
                  icon={<Icon9 />}
                  borderRadius="6px"
                  maxH="50px"
                  pt="50px"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                >
                  Google Calendar
                </MenuItem>

                <MenuItem
                  icon={<Icon10 />}
                  borderRadius="6px"
                  maxH="50px"
                  pt="50px"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                >
                  iCal
                </MenuItem>

                <MenuItem
                  icon={<Icon11 />}
                  borderRadius="6px"
                  maxH="50px"
                  pt="50px"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                >
                  Asana
                </MenuItem>

                <MenuItem
                  icon={<Icon12 />}
                  borderRadius="6px"
                  maxH="50px"
                  pt="50px"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                >
                  Monday.com
                </MenuItem>

                <MenuItem
                  icon={<Icon13 />}
                  borderRadius="6px"
                  maxH="50px"
                  pt="50px"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                >
                  Jira
                </MenuItem>

                <Link to="/integration">
                  <MenuItem
                    icon={<Icon14 />}
                    borderRadius="6px"
                    maxH="50px"
                    pt="50px"
                    _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                  >
                    All Integrations
                  </MenuItem>
                </Link>
              </Menu>
            </PopoverBody>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Integrations;
