import {IAction} from "./index";

export const GET_ITEMS = "GET_ITEMS"
export const ADD_ITEM = "ADD_ITEM"


export const getItemsAC = (data: any): IAction => ({type: GET_ITEMS, data})
