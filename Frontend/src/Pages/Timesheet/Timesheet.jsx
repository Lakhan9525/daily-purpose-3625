import { Box } from "@chakra-ui/react";
import React from "react";
// import AddTask from "../../Components/TimesheetComps/AddTask";
// import MainContent from "../../Components/TimesheetComps/MainContent";
import Sidebar from "./Sidebar";

const Timesheet = () => {
  return (
    <Box style={{ width: "100vw", display: "flex" }}>
      <Sidebar />
      {/* <MainContent /> */}
    </Box>
  );
};

export default Timesheet;
