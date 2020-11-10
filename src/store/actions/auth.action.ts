export const HANDLE__AUTH__INPUTS = "HANDLE__AUTH__INPUTS"
export const USER_AUTH = "USER_AUTH"
export const LOGOUT = "LOGOUT"

export const handleAuthInputs = (inputName: string, value: string) => ({type: HANDLE__AUTH__INPUTS, inputName, value})
export const authUser = (data: any) => ({type: USER_AUTH, data})
export const logout = () => ({type: LOGOUT})
