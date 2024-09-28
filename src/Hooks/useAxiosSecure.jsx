import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Add authorization headers for every secure call using interceptors
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("Request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Response interceptor

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          await logout();
          navigate("/login");
        }
        console.log("Response Status code error ", status);
      } else {
        console.log("Network error");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
