import React from 'react';
import DemoSection from './DemoSection';
import ReactCalendar  from "./ReactCalendar";
import { SimpleGrid, Box } from '@chakra-ui/react';

const BookDemo = () => {
  return (
    <div className='bookdemo' >
        <SimpleGrid columns={[1, null , 2]} spacing={10}>
          <Box>
            <DemoSection />
          </Box>
          <Box>
            <ReactCalendar />
          </Box>
        </SimpleGrid>
      
       
    </div>
  )
}

export default BookDemo;
