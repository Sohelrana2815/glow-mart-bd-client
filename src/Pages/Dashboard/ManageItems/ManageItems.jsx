import { FaPen } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useProducts from "../../../Hooks/useProducts";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import useLoading from "../../../Hooks/useLoading";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ManageItems = () => {
  const { totalProducts } = useLoaderData();
  const loading = useLoading();
  // console.log(totalProducts);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const numberOfPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((num) => num + 1);
  const [products, refetch] = useProducts(
    category,
    currentPage,
    productsPerPage
  );

  console.log(products);
  const handleCategory = (e) => {
    refetch();
    // console.log(e.target.value);
    setCategory(e.target.value);
    setCurrentPage(1);
  };
  const handleProductsPerPage = (e) => {
    refetch();
    const value = parseInt(e.target.value);
    setProductsPerPage(value);
    setCurrentPage(1);
  };

  const axiosSecure = useAxiosSecure();
  const handleDeleteProduct = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/products/${product._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <>
      <div className="dark:bg-black">
        <div className="fixed z-10 mt-40 px-20">
          <span className="font-semibold dark:text-green-500">Filter by Category : </span>

          <select
            onChange={handleCategory}
            value={category}
            className="select bg-[#1A1A19] text-white select-sm"
          >
            <option value="">All</option>
            <option value="fragrance">Fragrance</option>
            <option value="lotion">Lotion</option>
            <option value="shampoo">Shampoo</option>
            <option value="hairOil">Hair Oil</option>
            <option value="lipCare">Lip Care</option>
            <option value="soap">Soap</option>
            <option value="bodyWash">Body Wash</option>
          </select>
        </div>
        <div className="max-w-screen-xl mx-auto dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product._id}
                className="card bg-base-100 shadow-xl dark:bg-black dark:shadow-blue-600 dark:text-white"
              >
                <figure className="px-10 pt-10">
                  {loading ? (
                    <Skeleton height={200} width={200} />
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-xl"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {loading ? <Skeleton width={150} /> : product.name}
                  </h2>
                  {loading ? (
                    <Skeleton width={100} />
                  ) : (
                    <p className="text-lg font-bold text-center">
                      ${product.price}
                    </p>
                  )}
                  <div className="card-actions justify-between">
                    <Link to={`/dashboard/updateProducts/${product._id}`}>
                      {loading ? (
                        <Skeleton width={90} height={40} />
                      ) : (
                        <button className="btn bg-gradient-to-r from-[#0d6efd]  to-black text-white">
                          <FaPen />
                          Edit
                        </button>
                      )}
                    </Link>
                    {loading ? (
                      <Skeleton width={50} height={40} />
                    ) : (
                      <button
                        onClick={() => handleDeleteProduct(product)}
                        className="btn bg-gradient-to-r from-[#C62E2E] to-black text-white"
                      >
                        <FaPen />
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p>Current Page : {currentPage}</p>
            {pages.map((page) => (
              <button
                key={page}
                className={
                  currentPage === page
                    ? "btn mx-2 bg-[#091057] text-white"
                    : "btn mx-2"
                }
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <select
              className="select text-[#091057] select-bordered bg-[#EEEEEE] select-sm"
              value={productsPerPage}
              onChange={handleProductsPerPage}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
