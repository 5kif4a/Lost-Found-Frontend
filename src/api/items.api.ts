import {axiosInstance} from "./axiosInstance";

export const getItems = async () => {
    try {
        const response = await axiosInstance.get("/me/items");
        return response.data
    } catch (error) {
        throw error;
    }
};

export const addItem = async (data: any) => {
    try {
        await axiosInstance.post("/me/items", data);
    } catch (error) {
        throw error;
    }
};

