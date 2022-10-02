import { Box,Button,Flex,Text } from '@chakra-ui/react';
import React from 'react';

import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from "react-redux/es/exports";
import { deleteTask, getTask } from '../store/task/action';

const ProjectTodo = ({setInputBox,taskItem,projectId}) => {
    
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskItem._id))
    .then((r) => {
      if(r.type == "DELETE_TASK_SUCCESS"){
        console.log("r",r);
        dispatch(getTask(projectId))
      }
    })
  }
  return (
    <Box  _hover={{backgroundColor:"#fafafa", borderLeft:"2px solid #25cf60",cursor:"pointer"}} width="100%" m="auto" height="16" p="2"  display={"flex"} justifyContent="space-between" >
       
        <Box display={"flex"} gap="5px" ml={"6"}>
            <Box mt={"2"} backgroundColor="darkseagreen" height={"10px"} width="10px" borderRadius={"50%"}></Box>
            <Box>
              <Text fontWeight={"medium"}>{taskItem.title}</Text>
            </Box>
        </Box>
        <Flex  gap="15px" alignItems={"center"} >
            <Button onClick={() => setInputBox("Task")} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Edit Task</Button>
            <Button onClick={handleDelete} variant={"outline"} fontWeight="normal" bgColor={"#fff"}><AiTwotoneDelete size={"20px"} color="red"/></Button>
            
        </Flex>
    </Box>
  )
}


export {ProjectTodo}