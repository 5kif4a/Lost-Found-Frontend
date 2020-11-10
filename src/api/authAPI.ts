import {axiosInstance} from "./axiosInstance";

export const login = async (email: string, password: string) => {
    try {
        return await axiosInstance.post(`/login`, {
            email,
            password
        })
    } catch (error) {
        throw error;
    }
};