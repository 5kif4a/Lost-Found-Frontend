import {axiosInstance} from "./axiosInstance";

export const getProfileInfo = async () => {
    try {
        const response = await axiosInstance.get("/me");
        return response.data
    } catch (error) {
        throw error;
    }
};

