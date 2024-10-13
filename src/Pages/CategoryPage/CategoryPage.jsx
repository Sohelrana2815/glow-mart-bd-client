import { Link, useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import CategoryPageCard from "./CategoryPageCard";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import { useState } from "react";
import { Helmet } from "react-helmet";

const CategoryPage = () => {
  const { category } = useParams(); // Extract the category from the URL
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [products] = useProducts();
  const [cart] = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const productsToShow = filteredProducts.slice(0, visibleProducts);
  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 5);
  };
  const pageTitle =
    category
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/^./, (str) => str.toUpperCase()) + " Page";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className=" fixed z-10">
        <Link to="/dashboard/cart">
          <button className="btn btn-primary lg:-ml-56 text-lg text-white">
            <FaShoppingCart /> ({cart.length})
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {productsToShow.map((product) => (
          <CategoryPageCard key={product._id} product={product} />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-8">
          <button
            className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded my-8"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
