import useProducts from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";
import { Helmet } from "react-helmet";
import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const { totalProducts } = useLoaderData();
  // console.log(totalProducts);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const numberOfPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((num) => num + 1);

  const [products] = useProducts(category, currentPage, productsPerPage);
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
        <title>All Products Page</title>
      </Helmet>

      {/*  Dropdown for Category */}
      <div className="fixed  z-10 py-5">
        <div className="flex gap-2">
          <span className="font-bold hidden dark:text-[#00FF9C] md:block lg:block text-xl">
            Filter by Category :{" "}
          </span>

          <select
            onChange={handleCategory}
            value={category}
            className="select bg-[#1A1A19] dark:bg-white  text-white dark:text-black select-sm"
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
        <Link to="/dashboard/cart">
          <div className="flex items-center gap-2 py-5 fixed text-xl">
            <FaShoppingCart className="text-[#091057] dark:text-[#00FF9C] text-2xl" />
            {cart.length}
          </div>
        </Link>
      </div>

      {/* Show All Products using Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-40">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>

      <div className="text-center my-8 space-x-8 space-y-8">
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
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="30">30</option>
        </select>
      </div>
    </>
  );
};

export default Products;
