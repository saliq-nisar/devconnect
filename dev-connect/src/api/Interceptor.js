import axios from "axios";

class Interceptor {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeInterceptors();
  }

  initializeInterceptors() {
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token"); 
          window.location.href = "/";
        }
        return Promise.reject(error);
      }
    );
  }

  getInstance() {
    return this.api;
  }
}

export default new Interceptor().getInstance();
