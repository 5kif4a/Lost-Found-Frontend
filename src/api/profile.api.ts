import {axiosInstance} from "./axiosInstance";

export const getProfileInfo = async () => {
    try {
        await axiosInstance.get("/me");
    } catch (error) {
        throw error;
    }
};

