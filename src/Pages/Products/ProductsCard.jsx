import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductsCard = ({ product }) => {
  const { name, retailPrice, image } = product;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        {loading ? (
          <Skeleton height={200} width={200} />
        ) : (
          <img src={image} alt="product img" className="rounded-xl" />
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {loading ? <Skeleton width={150} /> : name}
        </h2>
        <p>{loading ? <Skeleton width={100} /> : retailPrice}</p>
        <div className="card-actions">
          {loading ? (
            <Skeleton width={90} height={40} />
          ) : (
            <button className="btn bg-[#185519] text-white">Add to Cart</button>
          )}
          {loading ? (
            <Skeleton width={50} height={40} />
          ) : (
            <button className="btn bg-[#E8B86D] text-white">
              <FaEye className="text-lg" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
// Define propTypes
ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    retailPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductsCard;
