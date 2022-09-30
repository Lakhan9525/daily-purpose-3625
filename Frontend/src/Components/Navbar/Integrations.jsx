import React from "react";
import {
  Button,
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
import Icon8 from "./Icons/Integrations_Icons/Icon8";
import Icon9 from "./Icons/Integrations_Icons/Icon9";
import Icon10 from "./Icons/Integrations_Icons/Icon10";
import Icon11 from "./Icons/Integrations_Icons/Icon11";
import Icon12 from "./Icons/Integrations_Icons/Icon12";
import Icon13 from "./Icons/Integrations_Icons/Icon13";
import Icon14 from "./Icons/Integrations_Icons/Icon14";

const Integrations = () => {
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
              Integrations
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
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon8 />
                  <Text as="b" fontSize="md" color="gray.45">
                    Trello
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon9 />
                  <Text as="b" fontSize="md" color="gray.45">
                    Google Calendar
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon10 />
                  <Text as="b" fontSize="md" color="gray.45">
                    iCal
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon11 />
                  <Text as="b" fontSize="md" color="gray.45">
                    Asana
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon12 />
                  <Text as="b" fontSize="md" color="gray.45">
                    {" "}
                    Monday.com
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon13 />
                  <Text as="b" fontSize="md" color="gray.45">
                    Jira
                  </Text>
                </ListItem>
                <ListItem _hover={{ color: "blue", cursor: "pointer" }}>
                  <Icon14 />
                  <Text as="b" fontSize="md" color="gray.45">
                    All Integrations
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

export default Integrations;
