import {applyMiddleware, combineReducers, createStore} from "redux"
import {profileReducer} from "./reducers/profile.reducer"
import {authReducer} from "./reducers/auth.reducer"

import thunkMiddleware from "redux-thunk";
import {postsReducer} from "./reducers/posts.reducer";
import {createSelectorHook} from "react-redux";
import {storiesReducer} from "./reducers/stories.reducer";
import {IAction} from "./actions";

interface IRootReducer {
    profile: any
    auth: any
    posts: any
    stories: any
}

const rootReducer = combineReducers<IRootReducer>({
    profile: profileReducer,
    auth: authReducer,
    posts: postsReducer,
    stories: storiesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector = createSelectorHook<RootState, IAction>();