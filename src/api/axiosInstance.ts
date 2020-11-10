import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://lostandfound.movily.app/api/v1",
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
});
