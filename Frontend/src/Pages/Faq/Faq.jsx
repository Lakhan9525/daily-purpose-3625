import React from 'react'
import {  AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
    Accordion, 
    Box, 
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text
} from '@chakra-ui/react'


const Faq = () => {

    return (
        <Box w='89%' margin='auto' mb='20'>
            <Heading textAlign='center' mt='24' mb='10'>FAQ</Heading>

            <Accordion allowToggle>

                {/* AccordinationItem Part */}

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box display="flex" alignItems='center' gap='5'>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' color='grey' />
                                        ) : (
                                            <AddIcon fontSize='12px' color='grey' />
                                        )}
                                        <Text py='3' fontWeight='bold' fontSize='20'>What is time tracker?</Text>

                                    </Box>

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='left'>
                                <Text>A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.</Text>
                                <Text>You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.</Text>
                                <Text>Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box display="flex" alignItems='center' gap='5'>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' color='grey' />
                                        ) : (
                                            <AddIcon fontSize='12px' color='grey' />
                                        )}
                                        <Text py='3' fontWeight='bold' fontSize='20'>Why use time tracker?</Text>

                                    </Box>

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='left'>
                                <Text>There are many reasons to use time tracking software. Here are the main use cases for a time tracker:</Text>
                                <Box ml='10'>
                                    <ol type='1'>
                                        <li><b>Tracking billable hours: </b>helps freelancers and employees who are paid on an hourly basis measure time spent on work with accuracy up to every second.</li>
                                        <li><b>Improving productivity: </b>employees who struggle with poor time management and distractions can work on their efficiency, understand how they work, and what takes most of their time.</li>
                                        <li><b>Timesheet management: </b>one of the most common features of time tracker is a timesheet – a digital version of a paper timesheet. With a time tracker, your team can have it filled out automatically.</li>
                                        <li><b>Work automation: </b>time tracker helps to save time on administrative and repetitive tasks, better allocate resources, cut costs, and smoothen teams’ workflow.</li>
                                    </ol>
                                </Box>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box display="flex" alignItems='center' gap='5'>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' color='grey' />
                                        ) : (
                                            <AddIcon fontSize='12px' color='grey' />
                                        )}
                                        <Text py='3' fontWeight='bold' fontSize='20'>What are the benefits of time tracking?</Text>

                                    </Box>

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='left'>
                                <Text>Here are all the benefits of using time tracking software in a nutshell.</Text>
                                <Box ml='10'>
                                    <ul type='disc'>
                                        <li>Increased productivity</li>
                                        <li>Accurate timesheets</li>
                                        <li>Real-time updates on projects status</li>
                                        <li>Easy attendance management</li>
                                        <li>Workflow automation</li>
                                    </ul>
                                </Box>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box display="flex" alignItems='center' gap='5'>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' color='grey' />
                                        ) : (
                                            <AddIcon fontSize='12px' color='grey' />
                                        )}
                                        <Text py='3' fontWeight='bold' fontSize='20'>How to bill clients on hourly work?</Text>

                                    </Box>

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='left'>
                                <Text>With TimeCamp, you can set up billing rates for your team members, projects, and clients.</Text>
                                <Text>Have the time tracker record billable time and easily turn timesheet data into invoices, adjust the tax rates for your country and profession. And then, simply export the document or send it straight to your clients.</Text>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box display="flex" alignItems='center' gap='5'>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' color='grey' />
                                        ) : (
                                            <AddIcon fontSize='12px' color='grey' />
                                        )}
                                        <Text py='3' fontWeight='bold' fontSize='20'>How to save time on timesheets?</Text>

                                    </Box>

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='left'>
                                <Text>There is nothing better than having your timesheet filled out automatically!</Text>
                                <Text>TimeCamp’s non-intrusive desktop app works in the background so you and your team can focus on what really matters, while the time tracker collects all the data for timesheets.</Text>
                                <Text>Edit your time logs any time or add time manually for even more accuracy. Approve your team’s daily or weekly timesheets with one click without effort.</Text>
                                <Text>Quick, easy, and painless timesheet management!</Text>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>


            </Accordion>
        </Box>
    )
}

export default Faq