import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Reducer } from "./Reducer";



const rootReducer = combineReducers({ Reducer })


export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))