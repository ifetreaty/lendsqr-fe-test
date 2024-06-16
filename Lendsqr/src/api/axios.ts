import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { clearStorage } from "../helpers/storage";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_LENDSQR_API_BASE_URL,
});

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),

    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),

    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config),

    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),

    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),
  };
};

const shouldExcludeFromInterceptor = (url: string) => {
  const excludedRoutes = [
    "/auth/login",
    "/auth/logout",
    "/register",
    "/auth/refreshToken",
  ];
  return excludedRoutes.some((route) => url.includes(route));
};

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!shouldExcludeFromInterceptor(error.config.url)) {
      if (error.response && error.response.status === 401) {
        clearStorage();

        window.location.reload();
      }
    }

    return Promise.reject(error);
  }
);

export default api(instance);
