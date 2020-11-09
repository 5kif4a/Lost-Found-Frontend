
import { authAPI } from "../../api/authAPI"

const HANDLE__AUTH__INPUTS = "./authReducers/HANDLE__AUTH__INPUTS"


const initialState = {
  email: "",
  password: ""
}


const authReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case HANDLE__AUTH__INPUTS: {
      return {
        ...state,
        [action.inputName]: action.value
      }
    }

    default:
      return state
  }
}

export const handelAuthInputs = (inputName: string, value: string) => ({ type: HANDLE__AUTH__INPUTS, inputName, value })



export const authUser = (email: string, password: string) => {
  return async () => {
    try {
      let response = await authAPI.auth(email, password);
      console.log(response)

    } catch (error) {
      console.error(error)
    }
  }
}

//AUTH__USER

export { authReducer } 