import {IAction} from "../actions";
import {GET_POSTS, PUBLISH_POST} from "../actions/posts.action";
import {ICategory, IUser} from "./interfaces";

export interface IPost {
    id: string
    location: string | null
    title: string
    description: string
    imageIndex: string
    category: ICategory
    user: IUser
    createdAt: string
}

export interface IPostsState {
    posts: IPost[]
}

const initialState: IPostsState = {
    posts: []
}

export const postsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                posts: action.data
            }
        }
        case PUBLISH_POST: {
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}