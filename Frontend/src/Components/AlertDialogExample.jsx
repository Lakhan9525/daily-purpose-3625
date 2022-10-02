import { Box,Button,Text, useDisclosure } from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react';
  import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux/es/exports";
import { deleteProject, getProject } from '../store/project/action';
import { ProjectTodo } from "./ProjectTodo"


function AlertDialogExample({projectId}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef();
    const [singleProject, setSingleProject] = useState({});

    const dispatch = useDispatch();

    const getSingleProject = () => {
      axios.get(`https://pure-fjord-44762.herokuapp.com/project/${projectId}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` //the token is a variable which holds the token
       }
      })
      .then((r) => {
        setSingleProject(r.data)
      })
    }

    const handleDelete = () => {
      onClose();
      dispatch(deleteProject(projectId))
      .then((r) => {
        if(r.type == "DELETE_PROJECT_SUCCESS"){
          dispatch(getProject());
        }
      })
    }

    useEffect(() => {
      getSingleProject();
    },[projectId])
  
    return (
      <>
        <Box onClick={() => onOpen()} >
         <Text fontSize={"15px"} fontWeight="semibold" color={"gray.900"}>Delete</Text>
        </Box>
  
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold' color={"cyan.500"}>
              Are you sure you want delete Project ?
              </AlertDialogHeader>
  
              <AlertDialogBody>
                <Text>This action is permament and cannot be undone. <b>All time tracked to this project will be gone.</b></Text>
                <Text color={"red.400"} fontWeight="medium">Title : {singleProject.name}</Text>
                <Text color={"red.400"} fontWeight="medium">Id : {singleProject._id}</Text>
                <Text>If you simply want to hide the project, we recommend archiving it instead.</Text>
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => onClose()}>
                  Cancel
                </Button>
                <Button  colorScheme='red' onClick={() => handleDelete()} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

export  {AlertDialogExample};