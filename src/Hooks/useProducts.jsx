import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (category, currentPage, productsPerPage) => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["product", category, currentPage, productsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?category=${category}&currentPage=${
          currentPage - 1
        }&productsPerPage=${productsPerPage}`
      );
      return res.data;
    },
  });
  return [products, refetch];
};

export default useProducts;
