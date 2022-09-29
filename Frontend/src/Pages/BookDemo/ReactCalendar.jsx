import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box } from '@chakra-ui/react';
import ReactTimeZone  from "./ReactTimeZone";
import './BookDemo.css';

const ReactCalendar = () => {
  const [date, onChange] = useState(new Date());

  return (
    <div className="calendar_div">
        <div className="head">
          Select A Day
        </div>
        <Box mb='2'>
           <Calendar onChange={onChange} value={date} />
        </Box>
        {console.log(date)}
        <Box mb='1'>
           {date.toString()}
        </Box>
        <Box mb='2'>
           <ReactTimeZone />
        </Box>     
    </div>
  );
};

export default ReactCalendar;
