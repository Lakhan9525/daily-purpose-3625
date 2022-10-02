import { Box,Button,Flex,Input,Select,Stack,Text, Textarea } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch,useSelector } from "react-redux/es/exports";
import { getProject, updateProject } from '../store/project/action';


const AddProject = ({setInputBox,projectId}) => {
    const [project, setProject] = useState({});   //to get intial project that to be edit
    const [description, setDescription] = useState(false);  //to open description box
    const [updatedproject, setUpdatedProject] = useState("");  //for updated project
    const [des, setDes] = useState("")  //for description

    const dispatch = useDispatch()
    
// Add Deployed backend URL : TODO

    const getSingleProject = () => {
      axios.get(`https://pure-fjord-44762.herokuapp.com/project/${projectId}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` //the token is a variable which holds the token
       }
      })
      .then((r) => {
        setProject(r.data)
        setUpdatedProject(r.data.name)
      })
    }

    const handleUpdateProject = () => {
      const payload = {
        name:updatedproject
      }
      dispatch(updateProject(payload,projectId))
      .then((r) => {
        if(r.type == "UPDATE_PROJECT_SUCCESS"){
          dispatch(getProject())
        }
      })
    }

    const throttleFunc = ((func, delay) => {
      let timerid;

      if(timerid){
        return;
      }
      timerid = setTimeout(() => {
        func();
        timerid = undefined;
      },delay)
    })

    useEffect(() => {
        getSingleProject();
        // (throttleFunc(getSingleProject,3000))
        console.log(projectId);
    },[projectId])

  return (
    <Box width={"100%"} height="100%" borderRadius={"7px"} border={"1px solid grey"} p="4" >
        <Stack gap={"10px"} fontFamily={"sans-serif"}>
           <Flex justifyContent={"space-between"} alignItems="center">
             <Text fontWeight="semibold" >Edit Project</Text>
             <Button onClick={() => setInputBox("")} size={"xs"} variant={"outline"} fontWeight="normal" bgColor={"#fff"} >X</Button>
           </Flex>
           <Input type={"text"} focusBorderColor='#25cf60' onChange={(e) => setUpdatedProject(e.target.value)} value={updatedproject} border={"0.2px solid gray"} placeholder='Search' width={"100%"} />
            <hr/>
        </Stack>
        <Stack mt="2" gap="14px" overflowY={"scroll"} height="65%" borderBottom={"1px solid gray"} >
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
                <Flex alignItems={"center"} gap="5px" fontFamily={"sans-serif"}>
                  <Text>People</Text>
                  <FiEdit/>
                </Flex>
                <Box display={"flex"} gap="15px" fontFamily={"sans-serif"}>
                  <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Assign group</Button>
                  <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Assign people</Button>
                </Box>
            </Box>

            <Box display={"flex"} alignItems="center" fontFamily={"sans-serif"} >
                <FaUserCircle color='gray' size={"20px"}/>
                <Text color={"gray.400"}>{project.email}</Text>
                <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Regular user</Button>
                <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"}><RiDeleteBinLine/></Button>
            </Box>

            <hr/>

            <Text fontFamily={"sans-serif"} fontWeight={"semibold"}>Description</Text>

            <Button fontFamily={"sans-serif"} onClick={() => setDescription(true)}>Click edit description</Button>
            {
                description ? <Box>
                    <Textarea value={des} onChange={(e) => setDescription(e.target.value)} fontFamily={"sans-serif"} placeholder='Click to edit description' />
                    <Flex gap="15px" fontFamily={"sans-serif"}>
                      <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save</Button>
                      <Button onClick={() => setDescription(false)} variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Cancel</Button>
                    </Flex>
                </Box> : null
            }

            <hr />
            <Flex alignItems={"center"} gap="5px"><Text>Budget</Text><AiFillSetting/></Flex>

            <Flex fontFamily={"sans-serif"}>
                <Select placeholder='Estimated Fee'>
                    <option value="">Estimated hours</option>
                    <option value="">Estimated Fee</option>
                </Select>
                <Input/>
            </Flex>

            <Flex alignItems={"center"} gap='5px' fontFamily={"sans-serif"}>
              <input type={"checkbox"}/>
              <label>Time from this task is billable by default</label>
            </Flex>

            <hr />

            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} fontFamily={"sans-serif"}>Enable Keyword</Button>

        </Stack>
        <Box mt="4" display={"flex"} p="4" gap="10px" fontFamily={"sans-serif"}>
            <Button onClick={handleUpdateProject} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save</Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Cancel</Button>
        </Box>
    </Box>
  )
}

export default AddProject