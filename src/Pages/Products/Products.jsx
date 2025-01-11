import useProducts from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";
import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const { totalProducts } = useLoaderData();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const numberOfPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((num) => num + 1);

  const [products] = useProducts(
    category,
    search,
    currentPage,
    productsPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [cart] = useCart();

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleProductsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setProductsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Glow Mart BD || All Products Page</title>
      </Helmet>

      {/*  Dropdown for Category */}
      <div className="fixed top-1/4 left-0 z-10 p-3  bg-white shadow-md dark:bg-gray-900 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          {/* Category Dropdown */}
          <div className="flex items-center gap-4">
            <select
              onChange={handleCategory}
              value={category}
              className="select bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 mr-4 select-xs md:select-sm"
            >
              <option value="">All Category Products</option>
              <option value="fragrance">Fragrance</option>
              <option value="lotion">Lotion</option>
              <option value="shampoo">Shampoo</option>
              <option value="hairOil">Hair Oil</option>
              <option value="lipCare">Lip Care</option>
              <option value="soap">Soap</option>
              <option value="bodyWash">Body Wash</option>
            </select>
          </div>

          {/* Cart Link */}
          <Link to="/dashboard/cart" className="flex items-center gap-2">
            <FaShoppingCart className="text-pink-500 dark:text-pink-500 text-2xl hover:text-pink-300" />
            <span className="text-gray-800 dark:text-gray-300 font-medium">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Search input */}
      <SearchBar search={search} handleSearchChange={handleSearchChange} />
      {/* Show All Products using Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>

      <div className="text-center my-8">
        <p className="text-lg font-medium mb-4">
          Page
          <span className="text-pink-500 font-mono">
            {" "}
            {currentPage} <span className="text-white">of</span> {pages.length}
          </span>
        </p>
        <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
          {pages.map((page) => (
            <button
              key={page}
              className={`btn px-4 py-2 rounded-lg font-medium ${
                currentPage === page
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-gray-100 text-pink-600 hover:bg-pink-100"
              } transition-colors duration-300`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <label
            htmlFor="productsPerPage"
            className="text-gray-700 dark:text-gray-200 font-medium"
          >
            Products per page:
          </label>
          <select
            id="productsPerPage"
            className="select select-bordered select-sm px-3 py-3 rounded-lg bg-gray-100 text-pink-600 font-medium shadow-sm hover:bg-gray-200 transition-all duration-300"
            value={productsPerPage}
            onChange={handleProductsPerPage}
          >
            {[8, 16, 24, 32, 36, 40, 44, 48, 50].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Products;
