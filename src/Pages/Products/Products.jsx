import { FaList, FaShoppingCart } from "react-icons/fa";
import useProducts from "../../Hooks/useProducts";
import ProductsCard from "./ProductsCard";
import { useState } from "react";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Products = () => {
  const [products] = useProducts();
  const [cart] = useCart();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(6);

  // Select Products by Subcategory and reset the Fragrance category
  const handleSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedCategory("");
  };

  // Select Products by only Fragrance Category and reset the Subcategory

  const handleFragrance = () => {
    setSelectedCategory("fragrance");
    setSelectedSubCategory("");
  };

  // Reset or Show All products event handler

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedSubCategory("");
  };

  // Logic for filter products by category and subcategory
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "fragrance") {
      return product.category === "fragrance";
    }

    if (selectedSubCategory) {
      return product.subCategory === selectedSubCategory;
    } else {
      // show all products if any filter is not applied
      return true;
    }
  });
  const productsToShow = filteredProducts.slice(0, visibleProducts);
  // Function to handle "Show More" click
  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 6); // Show 9 more products each time
  };
  return (
    <>
      <Helmet>
        <title>All Products Page</title>
      </Helmet>
      <div className="fixed z-10 lg:-ml-56 mt-20">
        <details className="dropdown">
          <summary className="btn m-1 bg-primary text-white lg:text-xl mt-28">
            <FaList /> Category
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-5">
            <li>
              <details>
                <summary>Skin Care</summary>
                <ul className="menu bg-base-100 rounded-box p-2 ml-8 shadow">
                  <li>
                    <a onClick={() => handleSubCategory("lipCare")}>Lip Care</a>
                  </li>
                  <li>
                    <a onClick={() => handleSubCategory("lotion")}>Lotion</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Hair Care</summary>
                <ul className="menu bg-base-100 rounded-box p-2 ml-8 shadow">
                  <li>
                    <a onClick={() => handleSubCategory("shampoo")}>Shampoo</a>
                  </li>
                  <li>
                    <a onClick={() => handleSubCategory("hairOil")}>Hair Oil</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Daily Essentials</summary>
                <ul className="menu bg-base-100 rounded-box p-2 ml-8 shadow">
                  <li>
                    <a onClick={() => handleSubCategory("soap")}>Soap</a>
                  </li>
                  <li>
                    <a onClick={() => handleSubCategory("bodyWash")}>
                      Body Wash
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a onClick={() => handleFragrance("fragrance")}>Fragrance</a>
            </li>
          </ul>
        </details>

        <div>
          <button
            onClick={handleReset}
            className="btn hidden lg:block w-full mt-8 btn-outline"
          >
            <p className="font-semibold text-base">Show All Products</p>
          </button>
          <Link to="/dashboard/cart">
            <button className="btn fixed btn-secondary my-4 text-lg text-white">
              <FaShoppingCart /> ({cart.length})
            </button>
          </Link>
        </div>
      </div>

      {/* Display filtered products using card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-6 mt-20 my-8">
        {productsToShow.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-8">
          <button
            className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded my-4"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default Products;
