import { combineReducers, createStore, applyMiddleware } from "redux"
import { profileReducer } from "./reducers/profileReducer"
import thunkMiddleware from "redux-thunk";


let rootReducers: any = combineReducers({
    profileReducer,
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


export { store }