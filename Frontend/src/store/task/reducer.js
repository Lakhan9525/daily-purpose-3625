import * as types from "./actionType"
const initState = {
    tasks:[],
    getTask:{
        isLoading:false,
        isError:false
    },
    addTask:{
        isLoading:false,
        isError:false
    },
    deleteTask:{
        isLoading:false,
        isError:false
    },
    updateTask:{
        isLoading:false,
        isError:false
    }
}

const reducer = (state=initState,{type,payload}) => {

    switch(type){
        case types.GET_TASK_REQUEST:{
            return {
                ...state,
                getTask :{
                    isLoading:true,
                    isError:false,
                }
            }
        }

        case types.GET_TASK_SUCCESS:{
            return {
                ...state,
                tasks:payload,
                getTask :{
                    isLoading:false,
                    isError:false,
                }
            }
        }

        case types.GET_TASK_SUCCESS:{
            return {
                ...state,
                getTask :{
                    isLoading:false,
                    isError:true,
                }
            }
        }
        
        case types.ADD_TASK_REQUEST:{
            return{
                ...state,
                addTask:{
                    isLoading:true,
                    isError:false
                }
            }
        }

        case types.ADD_TASK_FAILURE:{
            return{
                ...state,
                addTask:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.ADD_TASK_SUCCESS:{
            return{
                ...state,
                addTask:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.UPDATE_TASK_REQUEST:{
            return{
                ...state,
                updateTask:{
                    isLoading:true,
                    isError:false
                }
            }
        }

        case types.UPDATE_TASK_SUCCESS:{
            return{
                ...state,
                updateTask:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.UPDATE_TASK_FAILURE:{
            return{
                ...state,
                updateTask:{
                    isLoading:false,
                    isError:true
                }
            }
        }

        case types.DELETE_TASK_REQUEST:{
            return{
                ...state,
                deleteTask:{
                    isLoading:true,
                    isError:false
                }
            }
        }

        case types.DELETE_TASK_SUCCESS:{
            return{
                ...state,
                deleteTask:{
                    isLoading:false,
                    isError:false
                }
            }
        }

        case types.DELETE_TASK_FAILURE:{
            return{
                ...state,
                deleteTask:{
                    isLoading:false,
                    isError:true
                }
            }
        }


        default :{
            return state
        }
    }
}

export {reducer};