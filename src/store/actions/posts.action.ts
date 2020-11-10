import {IAction} from "./index";

export const GET_POSTS = "GET_POSTS";

export const getPostsAC = (data: any): IAction => ({type: GET_POSTS, data})