import {IAction} from "./index";

export const GET_PROFILE_INFO = "GET_PROFILE_INFO"

export const getProfileInfoAC = (data: any): IAction => ({type: GET_PROFILE_INFO, data})
