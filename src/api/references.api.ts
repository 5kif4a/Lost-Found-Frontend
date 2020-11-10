import {axiosInstance} from "./axiosInstance";

export const getCategories = async () => {
    try {
        const response = await axiosInstance.get("/categories");
        return response.data
    } catch (error) {
        throw error;
    }
};


export const getStatuses = async () => {
    try {
        const response = await axiosInstance.get("/statuses");
        return response.data
    } catch (error) {
        throw error;
    }
};

