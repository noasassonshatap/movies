import axios from "axios";

// Function to get the token, this can be modified to get the token from wherever it's stored
const getToken = () => {
  return import.meta.env.VITE_API_TOKEN;
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getToken(),
  },
});

// Add a delay of 1000 ms to the Axios instance - This can be used to simulate a slow network
axiosInstance.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(config);
    }, 1000);
  });
});

export default axiosInstance;
