import React from 'react'
import {
    Box,
    Text,
    Flex,
    Link,
    Heading,
    Wrap,
    WrapItem,
    Image,
    Button
} from '@chakra-ui/react';
import Blog_project_time from '../../Images/Blog-project-time-image.jpg';
import Blog_remote_work from '../../Images/Blog-remote-work-image.jpg';
import Blog_time_recording from '../../Images/Blog-time-recording-image.jpg';

const WrapHeading = ({ children }) => {
    return (
        <Text fontWeight='bold' fontSize='25' ml='5'>{children}</Text>
    )
}
// const Read = ({ children }) => {
//     return (
//         <Text fontWeight='bold' fontSize='15' ml='5' color='#25cf60'>{children}</Text>

//     )
// }

const BlogHome = () => {
    return (
        <Box py='10' bgColor='#f3f3f3'>
            <Box w='85%' margin='auto'>
                <Flex direction='column' >
                    <Text textAlign={{ base: 'center', sm: 'center', md: 'center', lg: "start" }} fontWeight='bold' color='#25cf60' my='2'>BLOG</Text>

                    <Flex direction={{ base: "column", md: "column", lg: 'row' }} justify={{ base: 'center', md: 'center', lg: 'space-between' }}>
                        <Heading fontSize='45' textAlign={{ base: 'center', sm: 'center', md: 'center', lg: "start" }} mt='6'>Check the latest blog updates</Heading>
                        <Button h='50px' w='230px' py='4' borderRadius='30' alignSelf='center' textAlign='center' my='5' bgColor='#25cf60' color='white' _hover={{ bgColor: '#74eaa4' }}>Check all articles</Button>
                    </Flex>

                    <Wrap spacing='30px' justify={{ base: 'center', md: 'center', lg: 'space-between' }} my='2' >
                        <WrapItem >
                            <Flex direction='column' maxW='350px' mt='10'>
                                <Box><Image h={'200px'} src={Blog_remote_work} cursor={'pointer'} /></Box>

                                <WrapHeading>What Is An Automation For Remote Workers?</WrapHeading>
                                <Link as={'b'} color={'#25cf60'}>Read more</Link>
                            </Flex>
                        </WrapItem>
                        <WrapItem>
                            <Flex direction='column' maxW='350px' mt='10'>
                                <Box><Image h={'200px'} src={Blog_project_time} cursor={'pointer'} /></Box>

                                <WrapHeading>13 Best Tools for Project Time Tracking</WrapHeading>
                                <Link as={'b'} color={'#25cf60'}>Read more</Link>
                            </Flex>
                        </WrapItem>
                        <WrapItem>
                            <Flex direction='column' maxW='350px' mt='10'>
                                <Box><Image h={'200px'} src={Blog_time_recording} cursor={'pointer'} /></Box>

                                <WrapHeading>15 Best Time Recording Apps</WrapHeading>
                                <Link as={'b'} color={'#25cf60'}>Read more</Link>
                            </Flex>
                        </WrapItem>

                    </Wrap>



                </Flex>
            </Box>
        </Box>
    )
}

export default BlogHome