import {IAction} from "./index";

export const GET_STORIES = "GET_STORIES";

export const getStoriesAC = (data: any): IAction => ({type: GET_STORIES, data})