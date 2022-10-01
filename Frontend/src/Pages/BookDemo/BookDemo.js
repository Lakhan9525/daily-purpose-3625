import React from "react";
import DemoSection from "./DemoSection";
import ReactCalendar from "./ReactCalendar";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MidddleBackground from "./MidddleBackground";
import BottomSection from "./BottomSection";

const BookDemo = () => {
  return (
    <div className="">
      <div className="bookdemo">
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box>
            <DemoSection />
          </Box>
          <Box>
            <ReactCalendar />
          </Box>
        </SimpleGrid>
      </div>
      <Box className="middle">
        <MidddleBackground />
      </Box>
      <Box className="bottom">
        <BottomSection />
      </Box>
    </div>
  );
};

export default BookDemo;
