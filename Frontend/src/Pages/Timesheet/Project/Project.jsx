import { Box, Button, Input, Image, Popover, PopoverBody, Text, PopoverContent, PopoverTrigger, Select, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineArrowsAlt } from 'react-icons/ai';
// import { BiFilterAlt } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProjectContainer from '../../../Components/ProjectContainer';
import AddProject from '../../../Components/AddProject';
import Addtask from '../../../Components/Addtask';
import { useEffect } from 'react';
import { getProject } from '../../../store/project/action';
import { createProject } from '../../../store/project/action';

const Project = () => {
    const [newProject, setNewProject] = useState("")
    const [addProject, setAddProject] = useState(false);
    const [inputBox, setInputBox] = useState("");
    const [projectId, setProjectId] = useState("");



    console.log(inputBox);
    const location = useLocation();
    const dispatch = useDispatch();

    const project = useSelector(state => state.project.project);
    const { isLoading, isError } = useSelector(state => state.project.getProject);
  

    const handleCreateProject = () => {
        const payload = {
            name: newProject
        }
        dispatch(createProject(payload))
            .then((r) => {
                console.log(r);
                if (r.type == "ADD_PROJECT_SUCCESS") {
                    dispatch(getProject());
                }
            })
    }


    useEffect(() => {
        dispatch(getProject())
    }, [])


    const handleAddProject = () => {
        setAddProject(true)
    }


    {
        return (
            isLoading ? <Box width={"100%"} display={"flex"} justifyContent="center"><Image src="https://app.timecamp.com/res/css/images/loader.gif" /></Box> : isError ? <Box><Heading>Something Went Wrong...</Heading></Box> :
                <>
                    <Box height={"24"} p="6" width="100%" zIndex={-1}  >
                        <Box display={"flex"} gap="15px" alignItems={"center"} >
                            <Input focusBorderColor='#25cf60' border={"0.2px solid gray"} placeholder='Search' width={addProject ? "280px" : "200px"} />
                            {!addProject ? <Button onClick={handleAddProject} color={"aliceblue"} bgColor="#25cf60" _hover={{ opacity: "0.7" }} >Add Project</Button> : null}
                            <Select fontWeight={"semibold"} focusBorderColor="#25cf60" _hover={{ bgColor: "#f8f8f8", cursor: "pointer" }} colorScheme={"#25cf60"} size="md" width={"130px"} placeholder='Filter'>
                                <option value='option1'>All Task</option>
                                <option value='option2'>My Task</option>
                            </Select>
                            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600">
                                <AiOutlineArrowsAlt size={"20px"} />
                            </Button>
                            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600">Archived</Button>

                            <Popover placement="bottom-start" isLazy>
                                <PopoverTrigger>
                                    <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600"><BsThreeDots /></Button>
                                </PopoverTrigger>
                                <PopoverContent width="200px">
                                    <PopoverBody p="2"  >
                                        <Text fontWeight={"semibold"} color={"blackAlpha.900"} _hover={{ bgColor: "#25cf60", cursor: "pointer", borderRadius: "5px", color: "aliceblue" }} p="2">Import From CSV</Text>
                                        <Box _hover={{ bgColor: "#25cf60", cursor: "pointer", borderRadius: "5px", color: "aliceblue" }} p="2">
                                            <Text _hover={{ color: "aliceblue" }} fontWeight={"semibold"} color={"blackAlpha.900"}>Import From add-ons</Text>
                                            <Text fontSize={"10px"} color="gray.600">Trello,Basecamp,Asana,Insightly,jira,podio and more...</Text>
                                        </Box>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>
                    </Box>

                    {/* Project */}
                    <Box height={"86%"} p="4" width="100%" display={"flex"}>

                        {/* create new  Project  box */}

                        <Box height={"100%"} width="60%" >
                            {addProject ? <Box width={"95%"} m="auto" height="20" display="flex" justifyContent="space-between" >
                                <Input type="text" onChange={(e) => setNewProject(e.target.value)} fontSize={"15px"} focusBorderColor='#25cf60' border={"0.2px solid gray"} fontWeight="semibold" placeholder='Enter the name for new project or task...' width={"380px"} />
                                <Button onClick={handleCreateProject} color={"aliceblue"} bgColor="#25cf60" _hover={{ opacity: "0.7" }}>Create new project</Button>
                                <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} onClick={() => setAddProject(false)} color="gray.600">Cancel</Button>
                            </Box>
                                : null
                            }

                            <Box height={"max-content"} width="95%" m="auto" borderRadius={"5px"} border={"0.5px solid gray"}>

                                {/* Todo Mapping of projects */}
                                {
                                    project?.length > 0 && project.map((item) => {
                                        return <ProjectContainer key={item._id} projectData={item} setProjectId={setProjectId} setInputBox={setInputBox} />
                                    })
                                }

                            </Box>
                        </Box>

                        {/* task Addition Box */}
                        {/* <Outlet/> */}
                        <Box height={"100%"} width="40%">
                            {inputBox == "Project" ? <AddProject projectId={projectId} setInputBox={() => setInputBox()} /> : inputBox == "Task" ? <Addtask projectId={projectId} setInputBox={() => setInputBox()} /> : <Box height={"32"} borderRadius="5px" width="100%" border={"0.5px solid gray"} display="flex" alignItems={"center"} justifyContent="center" >
                                <Text fontSize={"18px"} fontWeight="semibold" color={"gray.400"} >Choose project or task to edit</Text>
                            </Box>
                            }
                        </Box>
                    </Box>
                </>
        )
    }
}

export default Project