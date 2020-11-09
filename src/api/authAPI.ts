import { instance } from "./axiosInstance";

const authAPI = {
  auth: async (email: string, password: string) => {
    try {
      return await instance.post(`/login`, {
        email,
        password
      });
    } catch (error) {
      throw error;
    }
  },
};

export { authAPI }