import React from 'react'
import {
    Box,
    SimpleGrid,
    Button,
    Flex,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Tag,
    Text,
} from "@chakra-ui/react";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiRefreshCcw, FiEdit } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';


const Timesheetcalender = () => {
    return (
        <>
            <Flex display={'flex'} justifyContent={'space-between'} mt={'3rem'}>


                <Flex ml={'2rem'}>
                    <Box>
                        <Box display={'flex'} border={'1px solid grey'} w={'fit-content'} borderRadius={'5px'} >
                            <Box borderRight={'1px solid grey'} padding={'8px'}>
                                <GrFormPrevious padding={'10px'} size={'20px'} color={'grey'} />
                            </Box>
                            <Box borderRight={'1px solid grey'} display={'flex'} padding={'8px'}>
                                <BiCalendar padding={'10px'} size={'20px'} color={'grey'} />
                                <AiOutlineDown padding={'10px'} size={'18px'} color={'grey'} />
                            </Box>
                            <Box padding={'8px'}>
                                <GrFormNext padding={'10px'} size={'20px'} color={'grey'} />
                            </Box>
                        </Box>
                    </Box>

                    <Box display={'flex'} gap={'1rem'} w={'fit-content'} ml={'25px'} borderRadius={'5px'}>
                        <Text >Day</Text>
                        <Text >Date</Text>
                    </Box>
                </Flex>

                <Flex mr={'2rem'} gap={'1rem'} >
                    <Button bg={'white'} display={'flex'} w={'fit-content'} h={'fit-content'} borderRadius={'5px'} border={"1px solid #25cf60"} >
                        <Text fontSize={'15px'} borderRight={'1px solid #25cf60'} padding={'10px'} >Day</Text>
                        <Text fontSize={'15px'} padding={'10px'}>Calender</Text>
                    </Button>

                    <Button bg={'white'} border={'1px solid grey'} w={'fit-content'} h={'fit-content'} color={'grey'} padding={'10px'} borderRadius={'5px'}  > <FiRefreshCcw size={'18px'} /></Button>
                    <Button bg={'white'} display={'flex'} border={'1px solid grey'} w={'fit-content'} h={'fit-content'} color={'grey'} borderRadius={'5px'} padding={'10px'}> <FaRegUser size={'18px'} /> <AiOutlineDown size={'20px'} color={'grey'} /></Button>
                    <Button bg={'white'} display={'flex'} border={'1px solid grey'} w={'fit-content'} h={'fit-content'} color={'grey'} borderRadius={'5px'} padding={'10px'}> <FiEdit size={'18px'} /><Text fontSize={'15px'}>Bulk edit</Text></Button>
                    <Button bg={'white'} border={'1px solid grey'} w={'fit-content'} h={'fit-content'} color={'grey'} padding={'10px'} borderRadius={'5px'} > <BsThreeDotsVertical size={'18px'} /></Button>

                </Flex>



            </Flex>

        </>
    )
}

export default Timesheetcalender