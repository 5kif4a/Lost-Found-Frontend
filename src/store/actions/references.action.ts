import {IAction} from "./index";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_STATUSES = "GET_STATUSES";

export const getCategoriesAC = (data: any): IAction => ({type: GET_CATEGORIES, data})
export const getStatusesAC = (data: any): IAction => ({type: GET_STATUSES, data})