import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
// http://glow-mart-bd-server.vercel.app