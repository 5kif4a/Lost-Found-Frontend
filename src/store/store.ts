import { combineReducers, createStore, applyMiddleware } from "redux"
import { profileReducer } from "./reducers/profileReducer"
import { authReducer } from "./reducers/authReducers"

import thunkMiddleware from "redux-thunk";


let rootReducers: any = combineReducers({
    profileReducer,
    authReducer
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.__store__ = store;

export default store