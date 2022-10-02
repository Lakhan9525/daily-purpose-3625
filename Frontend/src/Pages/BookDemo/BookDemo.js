import React from "react";
import DemoSection from "./DemoSection";
import ReactCalendar from "./ReactCalendar";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MidddleBackground from "./MidddleBackground";
import BottomSection from "./BottomSection";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const BookDemo = () => {
  return (
    <div className="">
      <Navbar />
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
      <div className="middleSection">
        <MidddleBackground />
      </div>
      <div className="bottom">
        <BottomSection />
      </div>
      <Footer />
    </div>
  );
};

export default BookDemo;
