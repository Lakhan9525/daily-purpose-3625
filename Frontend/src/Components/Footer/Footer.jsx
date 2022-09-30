import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    Flex,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'700'} fontSize={'19'} mb={2}>
            {children}
        </Text>
    );
};
const List = ({ children }) => {
    return (
        <Text color={'grey'} textDecoration={'none'}
            _hover={{color: "#f7b801"}}>
            {children}
        </Text>
    );
};


export default function Footer() {
    return (
        <Box>
            <Container as={Stack} maxW={'6xl'} py={6} mt={'5rem'}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 6 }} spacing={5}>

                    <Stack align={'center'} py={5}>
                        <ListHeader>Product</ListHeader>

                        <Link color='white' href={'/feature'}><List>Features</List></Link>
                        <Link color='white' href={'#'}><List>Integrations</List></Link>
                        <Link color='white' href={'#'}><List>Applications</List></Link>
                        <Link color='white' href={'#'}><List>Product updates</List></Link>
                        <Link color='white' href={'#'}><List>Customer Stories</List></Link>
                        <Link color='white' href={'#'}><List>Self-hosting</List></Link>

                    </Stack>

                    <Stack align={'center'} py={5}>
                        <ListHeader>Support</ListHeader>
                        <Link color='white' href={'#'}><List>Support</List></Link>
                        <Link color='white' href={'#'}><List>Knowledge base</List></Link>
                        <Link color='white' href={'#'}><List>Developers API</List></Link>
                        <Link color='white' href={'#'}><List>Server Status</List></Link>
                    </Stack>

                    <Stack align={'center'} py={5}>
                        <ListHeader>Integrations</ListHeader>
                        <Link color='white' href={'#'}><List>Trello</List></Link>
                        <Link color='white' href={'#'}><List>Monday.com</List></Link>
                        <Link color='white' href={'#'}><List>Google Calender</List></Link>
                        <Link color='white' href={'#'}><List>Asana</List></Link>
                        <Link color='white' href={'#'}><List>Jira</List></Link>
                        <Link color='white' href={'#'}><List>All integrations</List></Link>
                    </Stack>

                    <Stack align={'center'} py={5}>
                        <ListHeader>Resources</ListHeader>
                        <Link color='white' href={'#'}><List>Contact</List></Link>
                        <Link color='white' href={'#'}><List>HeySpace</List></Link>
                        <Link color='white' href={'#'}><List>About us</List></Link>
                        <Link color='white' href={'#'}><List>Press</List></Link>
                        <Link color='white' href={'#'}><List>Become a Partner</List></Link>
                    </Stack>

                    <Stack align={'center'} py={5}>
                        <ListHeader>Calculators</ListHeader>
                        <Link color='white' href={'#'}><List>Profit Margin Calculator</List></Link>
                        <Link color='white' href={'#'}><List>Online Timer</List></Link>
                        <Link color='white' href={'#'}><List>Overtime Calculator</List></Link>
                        <Link color='white' href={'#'}><List>ROI Calculator</List></Link>
                        <Link color='white' href={'#'}><List>Time Card Calculator</List></Link>
                    </Stack>

                    <Stack align={'center'} py={5}>
                        <ListHeader>Legal</ListHeader>
                        <Link color='white' href={'#'}><List>Terms</List></Link>
                        <Link color='white' href={'#'}><List>Privacy</List></Link>
                        <Link color='white' href={'#'}><List>Security</List></Link>
                    </Stack>

                </SimpleGrid>
            </Container>

            {/* social icons Part */}

            <Box textAlign='center' color='grey' mb='20'>

                <Flex gap='5' w={{ base: '30%', md: '20%', lg: '10%' }} m='auto' justifyContent='space-between' >

                    <Link href='https://www.facebook.com/timecamp/' isExternal >
                        <FaFacebookF />
                    </Link>

                    <Link href='https://www.linkedin.com/company/timecamp/' isExternal>
                        <FaLinkedinIn />
                    </Link>

                    <Link href='https://twitter.com/timecamp/' isExternal>
                        <AiOutlineTwitter />
                    </Link>

                </Flex>

                <Text mt='5'>Copyright © 2022 TimeCamp. Inc.</Text>
                <Flex justifyContent='center' ><Text fontSize='10' fontWeight='100'>We use cookies.</Text> <Text fontSize='10'> Click here to learn more</Text></Flex>
            </Box>


        </Box>
    );
}