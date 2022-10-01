import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  CalendarIcon,
  EditIcon,
  ExternalLinkIcon,
  QuestionOutlineIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import './BookDemo.css';

const DemoSection = () => {
  return (
    <div className="demo">
      <Box mt='15' alignItems='left'>
        <Heading as="h1" size="2xl" noOfLines={2} >
          Book a 1:1 TimeCamp presentation
          {/* <Image
            src="https://cdn-m.timecamp.com/img/landing-page/arrow-tc.svg"
            alt=""
          /> */}
        </Heading>
      </Box>
      <Heading as="h4" size="lg">
        Demo Agenda
      </Heading>
      <Box>
        <Text fontSize="xl">
          <CalendarIcon color='#25CF60' mr='10px'/> Product presentation
        </Text>
        <Text fontSize="xl">
          <ExternalLinkIcon color='#25CF60' mr='10px' /> Free training
        </Text>
        <Text fontSize="xl">
          <SettingsIcon color='#25CF60' mr='10px' /> Help with set-up
        </Text>
        <Text fontSize="xl">
          <EditIcon color='#25CF60' mr='10px' /> Pricing/plans comparison
        </Text>
        <Text fontSize="xl" mb='30'>
          <QuestionOutlineIcon color='#25CF60' mr='10px' /> Q&A
        </Text >
        <div className="schedule">
          <Text fontSize="l" mb='5'>
            Schedule a demo on the Calendar or
          </Text>
          <Button borderRadius='full' colorScheme='whatsapp'>Schedule here</Button>
        </div>       
      </Box>
    </div>
  );
};

export default DemoSection;
