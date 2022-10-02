import * as types from "./actionType";
import axios from "axios";

const getTask = (id) => (dispatch) => {
    dispatch({type:types.GET_TASK_REQUEST})
    axios.get(`http://localhost:8080/task/${id}`)
    .then((r) => {
        // console.log("get",r.data);
        dispatch({type:types.GET_TASK_SUCCESS,payload:r.data})
    })
    .catch((err) => {
        dispatch({type:types.GET_TASK_FAILURE})
    })
}

const createTask = (payload,id) => (dispatch) => {
    dispatch({type:types.ADD_TASK_REQUEST})

    return axios.post(`http://localhost:8080/task/${id}/create`,{...payload})
    .then((r) => {
       return dispatch({type:types.ADD_TASK_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.ADD_TASK_FAILURE})
    })
}

const updateTask = (payload,id) => (dispatch) => {
    dispatch({type:types.UPDATE_TASK_REQUEST})

    return axios.patch(`http://localhost:8080/task/update/${id}`,{...payload})
    .then((r) => {
        return dispatch({type:types.UPDATE_TASK_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.UPDATE_TASK_FAILURE})
    })
}


const deleteTask = (id) => (dispatch) => {
    dispatch({type:types.DELETE_TASK_REQUEST})

   return axios.delete(`http://localhost:8080/task/delete/${id}`)
    .then((r) => {
       return dispatch({type:types.DELETE_TASK_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.DELETE_TASK_FAILURE})
    })
}


export {getTask,createTask,updateTask,deleteTask};