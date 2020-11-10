import {getStories} from "../../api/stories.api";
import {getStoriesAC} from "../actions/stories.action";

export const getStoriesThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await getStories();
            return dispatch(getStoriesAC(response.data))
        } catch (error) {
            throw error
        }
    }
};