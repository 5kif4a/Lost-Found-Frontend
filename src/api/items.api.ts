import {axiosInstance} from "./axiosInstance";

export const getItems = async () => {
    try {
        await axiosInstance.get("/me/items");
    } catch (error) {
        throw error;
    }
};

