import {axiosInstance} from "./axiosInstance";

export const getPosts = async () => {
    try {
        const response = await axiosInstance.get("/posts");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const publishPost = async (data: any) => {
    try {
        const response = await axiosInstance.post("/me/posts", data, {headers: {"Content-Type": "multipart/form-data"},});
        return response.data;
    } catch (error) {
        throw error;
    }
};


