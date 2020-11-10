import {GET_PROFILE_INFO} from "../actions/profile.action";

export interface IProfileState {
    fullName: string
    phone: string
    email: string
    avatar: any
    address: Array<any>
    karma: number
}

const initialState: IProfileState = {
    fullName: "",
    phone: "",
    email: "",
    avatar: null,
    address: [],
    karma: 0
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_PROFILE_INFO: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return action
    }
}