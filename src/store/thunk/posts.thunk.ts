import {getPosts, publishPost} from "../../api/posts.api";
import {getPostsAC, publishPostAC} from "../actions/posts.action";

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

export const publishPostThunk = (data: any) => {
    return async (dispatch: any) => {
        try {
            const response = await publishPost(data);
            return dispatch(publishPostAC(response.data))
        } catch (error) {
            throw error
        }
    }
};