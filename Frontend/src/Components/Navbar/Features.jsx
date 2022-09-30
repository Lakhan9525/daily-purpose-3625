import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  List,
  ListItem,
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
            width="7rem"
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
        <PopoverContent width="230px">
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverBody
              textAlign="left"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <List>
                <ListItem
                  // _hover={{
                  //   bgColor: "rgb(37,207,96)",
                  //   color: "white",
                  //   cursor: "pointer",
                  // }}
                  width="15rem"
                  _hover={{ bgColor: "rgb(37,207,96)", color: "white" }}
                  display="-webkit-flex"
                >
                  {/* <ButtonGroup
                    isAttached
                    variant="ghost"
                    width="15rem"
                    borderRadius={5}
                  > */}
                  <Box>
                    <Icon1 />
                  </Box>
                  <Box

                  //width="7rem"
                  // borderRadius={5}
                  // _hover={{ bgColor: "rgb(37,207,96)", color: "blue" }}
                  // color="gray.45"
                  >
                    Automatic time tracking
                  </Box>
                  {/* </ButtonGroup> */}
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
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
                  </Text>
                </ListItem>
              </List>
            </PopoverBody>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Features;
