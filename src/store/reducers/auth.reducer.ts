import {HANDLE__AUTH__INPUTS, LOGOUT, USER_AUTH} from "../actions/auth.action";

export interface IAuthState {
    isAuthenticated: boolean
    email: string
    password: string
    success: boolean
}

const initialState: IAuthState = {
    isAuthenticated: !!localStorage.getItem("accessToken"),
    email: "",
    password: "",
    success: false
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HANDLE__AUTH__INPUTS: {
            return {
                ...state,
                [action.inputName]: action.value
            }
        }
        case USER_AUTH: {
            return {
                ...state,
                isAuthenticated: true,
                success: action.data
            }
        }
        case LOGOUT: {
            return {
                ...state,
                email: "",
                password: "",
                success: false,
                isAuthenticated: false,
            }
        }
        default:
            return state
    }
}

