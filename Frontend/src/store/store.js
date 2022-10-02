import {legacy_createStore, applyMiddleware, compose,combineReducers } from "redux"
import thunk from "redux-thunk"
import {reducer as projectReducer} from "./project/reducer";
import {reducer as taskReducer} from "./task/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    project:projectReducer,
    task:taskReducer
})

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))