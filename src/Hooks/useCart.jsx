// // api call , axios, axiosSecure , tanStack Query

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

// const useCart = () => {
//   const axiosSecure = useAxiosSecure();

//   const { user } = useAuth();

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["cart", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/carts?email=${user.email}`);
//       return res.data;
//     },
//   });
//   return [cart, refetch];
// };

const useCart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;

// export default useCart;
