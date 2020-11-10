import {axiosInstance} from "./axiosInstance";

const login = {
    auth: async (email: string, password: string) => {
        try {
            return await axiosInstance.post(`/login`, {
                email,
                password
            });
        } catch (error) {
            throw error;
        }
    },
};