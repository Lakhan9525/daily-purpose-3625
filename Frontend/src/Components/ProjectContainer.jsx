import { Box,Button,Flex,Popover,PopoverBody,PopoverContent,PopoverTrigger,Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { TbChartPie } from 'react-icons/tb';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux/es/exports";
import { ProjectTodo } from "./ProjectTodo"
import { AlertDialogExample } from './AlertDialogExample';
import { getTask } from '../store/task/action';

const ProjectContainer = ({setInputBox,projectData,setProjectId}) => {
  
    const [projectDes, setProjectDes] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();

    const tasks =  useSelector( state => state.task.tasks)
    

    const handleProject = (e) => {
      e.stopPropagation()
        setProjectDes(!projectDes);
        setInputBox("Project");
        setProjectId(projectData._id);
        dispatch(getTask(projectData._id)) 
    }

    const handleProjectInput = (e) => {
      e.stopPropagation()
      setInputBox("Task");
    }

    const mouseEnter = () => {
      onOpen();
    }

    const mouseLeave = () => {
      onClose();
    }

    useEffect(() => {
      dispatch(getTask(projectData._id))
    },[])

    const navigate = useNavigate();

  return (
    <Box width={"100%"} height="max-content" isOpen={() => isOpen()} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
     <Box onClick={ (e) => handleProject(e)}  _hover={{backgroundColor:"#fafafa", borderLeft:"2px solid #25cf60",cursor:"pointer"}} width="100%" height="16" p="2"  display={"flex"} justifyContent="space-between" >
        <Box display={"flex"} gap="5px">
            <Box mt="1">{ projectDes ? <MdKeyboardArrowDown/> :  <MdKeyboardArrowRight/>}</Box>
            <Box mt={"2"} backgroundColor="yellow.800" height={"10px"} width="10px" borderRadius={"50%"}></Box>
            <Box>
              <Text fontWeight={"medium"}>{projectData.name}</Text>
               <Text fontSize={"12px"} color="gray.400">{projectData.email}</Text>
            </Box>
        </Box>
        { isOpen ? <Flex  gap="15px" >
            <Button onClick={(e) => handleProjectInput(e)} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Add Task</Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"}><TbChartPie size={"20px"} color="gray"/></Button>
            
            <Popover placement="bottom-start">
              <PopoverTrigger>
                <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600"><BsThreeDots/></Button>
              </PopoverTrigger>
              <PopoverContent width="220px">
                <PopoverBody p="2"  >
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Change Color</Text>
                    <Box height={"20px"} width="20px" borderRadius={"50%"} backgroundColor="yellow" border="1px solid gray" ></Box>
                  </Box>
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <AlertDialogExample projectId={projectData._id}/>
                  </Box>
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Move</Text>
                  </Box>
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Archive</Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>


            <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}><BsFillPlayFill size={"20px"} color='#fff'/></Button>
        </Flex>
        : null
        }
     </Box>

     {
        projectDes ? 
        <>
        {
          tasks?.length > 0 && tasks.map((item) => {
            return <ProjectTodo proejctId={projectData._id} taskItem = {item} key={item._id}/>
          })
        }
        </>
         : null
     } 
    </Box>
  )
}

export default ProjectContainer;