import {login} from "../../api/authAPI";
import {authUser} from "../reducers/auth.reducer";

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