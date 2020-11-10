import {axiosInstance} from "./axiosInstance";

export const getStories = async () => {
    try {
        const response = await axiosInstance.get("/stories");
        return response.data;
    } catch (error) {
        throw error;
    }
};