import {login} from "../../api/auth.api";
import {authUser} from "../actions/auth.action";

export const authUserThunk = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const response = await login(email, password);
            localStorage.setItem("accessToken", response.data.data.accessToken)
            dispatch(authUser(response.data.success))
        } catch (error) {
            throw error
        }
    }
}