import { FaPen } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useProducts from "../../../Hooks/useProducts";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import useLoading from "../../../Hooks/useLoading";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBar from "../../Products/SearchBar";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const { totalProducts } = useLoaderData();
  const loading = useLoading();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const numberOfPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((num) => num + 1);
  const [products, refetch] = useProducts(
    category,
    search,
    currentPage,
    productsPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleProductsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setProductsPerPage(value);
    setCurrentPage(1);
  };

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
    <div className="min-h-screen bg-gray-100 dark:bg-black py-10 px-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Category Dropdown */}
        <select
          onChange={handleCategory}
          value={category}
          className="select select-bordered bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md w-full sm:w-auto"
        >
          <option value="">All Categories</option>
          <option value="fragrance">Fragrance</option>
          <option value="lotion">Lotion</option>
          <option value="shampoo">Shampoo</option>
          <option value="hairOil">Hair Oil</option>
          <option value="lipCare">Lip Care</option>
          <option value="soap">Soap</option>
          <option value="bodyWash">Body Wash</option>
        </select>

        {/* Search Bar */}
        <SearchBar search={search} handleSearchChange={handleSearchChange} />
      </div>

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition duration-300 rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <figure className="px-6 pt-6 flex justify-center">
                {loading ? (
                  <Skeleton height={200} width={200} />
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg w-48 h-48 object-cover"
                  />
                )}
              </figure>

              {/* Product Info */}
              <div className="card-body p-6">
                <h2 className="card-title text-lg font-bold dark:text-white">
                  {loading ? <Skeleton width={150} /> : product.name}
                </h2>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {loading ? <Skeleton width={100} /> : `$${product.price}`}
                </p>

                {/* Actions */}
                <div className="card-actions flex justify-between mt-4">
                  <Link to={`/dashboard/updateProducts/${product._id}`}>
                    {loading ? (
                      <Skeleton width={90} height={40} />
                    ) : (
                      <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <FaPen />
                        Edit
                      </button>
                    )}
                  </Link>
                  {loading ? (
                    <Skeleton width={90} height={40} />
                  ) : (
                    <button
                      onClick={() => handleDeleteProduct(product)}
                      className="btn bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
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
      </div>

      {/* Pagination */}
      <div className="mt-8 text-center">
        <p className="mb-4 text-lg font-medium dark:text-white">
          Current Page: {currentPage}
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {pages.map((page) => (
            <button
              key={page}
              className={`btn px-4 py-2 rounded-lg ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="font-medium text-gray-700 dark:text-white">
            Items Per Page:
          </span>
          <select
            className="select select-bordered bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
            value={productsPerPage}
            onChange={handleProductsPerPage}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
