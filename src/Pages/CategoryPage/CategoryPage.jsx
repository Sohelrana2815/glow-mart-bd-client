import { Link, useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import CategoryPageCard from "./CategoryPageCard";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const CategoryPage = () => {
  const { category } = useParams();

  const [products] = useProducts();
  const [cart] = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <div className=" fixed">
        <Link to="/dashboard/cart">
          <button className="btn btn-primary lg:-ml-56 text-lg text-white">
            <FaShoppingCart /> ({cart.length})
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
        {filteredProducts.map((product) => (
          <CategoryPageCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
