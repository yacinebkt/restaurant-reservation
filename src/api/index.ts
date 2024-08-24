import axios from "axios";
import { API } from "@/config/global-config";
import { getStoredTokens } from "@/modules/Auth/libs";

// Function to get the latest token from local storage
const getToken = () => {
  const { token } = getStoredTokens();
  return token;
};

const apiService = axios.create({
  baseURL: `https://${API}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`, // Set initial token
  },
});

// Add a request interceptor to update the token before each request
apiService.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;

    // Determine the content type based on the request data
    if (config.data instanceof FormData) {
      // If the data is FormData, set Content-Type to multipart/form-data
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      // Otherwise, default to application/json
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
