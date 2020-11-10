import {getProfileInfo} from "../../api/profile.api";
import {getProfileInfoAC} from "../actions/profile.action";

export const getProfileInfoThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await getProfileInfo();
            return dispatch(getProfileInfoAC(response.data))
        } catch (error) {
            throw error
        }
    }
};