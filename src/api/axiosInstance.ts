import axios, { type AxiosError } from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fakestoreapi.com',
  timeout: 15000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
<<<<<<< HEAD
    const message =
      error.response?.data?.message || error.message || 'Request failed';
=======
    const message = error.response?.data?.message || error.message || 'Request failed';
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
    return Promise.reject(new Error(message));
  },
);
