import axios, { InternalAxiosRequestConfig } from 'axios';

export const inLocalhost = () => {
  if (typeof window !== 'undefined') {
    return location.hostname === 'localhost';
  } else {
    return null;
  }
};

export const axiosInstance = axios.create({
  baseURL: `https://audit-api.doctor-code.net`,
});

if (!inLocalhost()) {
  axiosInstance.defaults.withCredentials = true;
  axiosInstance.defaults.withXSRFToken = true;
}

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  config.headers.Locale = localStorage.getItem('locale') || 'en';
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.data?.message == 'You are not authenticated') {
      window.location.replace('/');
      window.localStorage.clear();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
