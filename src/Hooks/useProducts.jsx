// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
  // const axiosPublic = useAxiosPublic();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axiosPublic.get("/products").then((res) => {
  //     setProducts(res.data);
  //   });
  // }, [axiosPublic]);
  // return [products];
  const axiosPublic = useAxiosPublic();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  return [products, refetch];
};

export default useProducts;
