import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { name, retailPrice, image, _id } = product;
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
        {loading ? (
          <Skeleton width={100} />
        ) : (
          <p className="card-title">${retailPrice}</p>
        )}
        <div className="card-actions">
          {loading ? (
            <Skeleton width={90} height={40} />
          ) : (
            <button className="btn bg-[#185519] text-white">Add to Cart</button>
          )}
          {loading ? (
            <Skeleton width={50} height={40} />
          ) : (
            <Link to={`/productInfo/${_id}`}>
              <button className="btn bg-[#E8B86D] text-white">
                <FaEye className="text-lg" />
              </button>
            </Link>
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
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductsCard;
