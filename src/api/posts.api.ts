import {axiosInstance} from "./axiosInstance";

export const getPosts = async () => {
    try {
        await axiosInstance.get("/posts");
    } catch (error) {
        throw error;
    }
};

