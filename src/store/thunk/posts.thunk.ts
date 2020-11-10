import {getPosts} from "../../api/posts.api";
import {getPostsAC} from "../actions/posts.action";

export const getPostsThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await getPosts();
            return dispatch(getPostsAC(response.data))
        } catch (error) {
            throw error
        }
    }
};