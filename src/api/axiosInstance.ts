import axios, {AxiosRequestConfig} from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
});


// автодобавление токена в заголовок запроса
const autoAddToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const accessToken: string | null = localStorage.getItem('accessToken');
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return {...config}
};

axiosInstance.interceptors.request.use(autoAddToken);