import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://glow-mart-bd-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

// "//glow-mart-bd-server.vercel.app",
