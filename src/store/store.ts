import {applyMiddleware, combineReducers, createStore} from "redux"
import {IProfileState, profileReducer} from "./reducers/profile.reducer"
import {authReducer, IAuthState} from "./reducers/auth.reducer"

import thunkMiddleware from "redux-thunk";
import {IPostsState, postsReducer} from "./reducers/posts.reducer";
import {createSelectorHook} from "react-redux";
import {IStoriesState, storiesReducer} from "./reducers/stories.reducer";
import {IAction} from "./actions";
import {IReferencesState, referencesReducer} from "./reducers/references.reducer";
import {IItemsState, itemsReducer} from "./reducers/items.reducer";

interface IRootReducer {
    profile: IProfileState
    auth: IAuthState
    posts: IPostsState
    stories: IStoriesState
    references: IReferencesState
    items: IItemsState
}

const rootReducer = combineReducers<IRootReducer>({
    profile: profileReducer,
    auth: authReducer,
    posts: postsReducer,
    stories: storiesReducer,
    references: referencesReducer,
    items: itemsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector = createSelectorHook<RootState, IAction>();