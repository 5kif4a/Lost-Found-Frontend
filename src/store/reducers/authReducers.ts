import {login} from "../../api/authAPI";

const HANDLE__AUTH__INPUTS = "./authReducers/HANDLE__AUTH__INPUTS"
const AUTH__LOGIN__API__STATUS = "./authReducers/AUTH__LOGIN__API__STATUS"

const initialState = {
    email: "",
    password: "",
    apiStatus: ""
}


const authReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case HANDLE__AUTH__INPUTS: {
            return {
                ...state,
                [action.inputName]: action.value
            }
        }

        case AUTH__LOGIN__API__STATUS: {
            console.log(action.apiStatus)
            return {
                ...state,
                apiStatus: action.apiStatus
            }
        }

        default:
            return state
    }
}

export const handelAuthInputs = (inputName: string, value: string) => ({type: HANDLE__AUTH__INPUTS, inputName, value})
export const authLoginApiStatus = (apiStatus: number) => ({type: AUTH__LOGIN__API__STATUS, apiStatus})


export const authUser = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            let response = await login(email, password);
            dispatch(authLoginApiStatus(response.status))
            console.log(response.status)

        } catch (error) {
            console.error(error)
        }
    }
}

export {authReducer}