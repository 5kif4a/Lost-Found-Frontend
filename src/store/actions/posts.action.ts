import {IAction} from "./index";

export const GET_POSTS = "GET_POSTS";
export const PUBLISH_POST = "PUBLISH_POST";

export const getPostsAC = (data: any): IAction => ({type: GET_POSTS, data})
export const publishPostAC = (data: any): IAction => ({type: PUBLISH_POST, data})