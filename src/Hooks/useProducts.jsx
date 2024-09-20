import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosPublic.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [axiosPublic]);
  return [products];
};

export default useProducts;
