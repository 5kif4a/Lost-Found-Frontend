const HANDLE__AUTH__INPUTS = "HANDLE__AUTH__INPUTS"
const USER_AUTH = "USER_AUTH"

const initialState: any = {
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
                success: action.data
            }
        }
        default:
            return state
    }
}

export const handleAuthInputs = (inputName: string, value: string) => ({type: HANDLE__AUTH__INPUTS, inputName, value})
export const authUser = (data: any) => ({type: USER_AUTH, data})