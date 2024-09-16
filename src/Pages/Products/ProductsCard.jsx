import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
const ProductsCard = ({ product }) => {
  const { name, retailPrice, image } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="product img" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{retailPrice}</p>
        <div className="card-actions">
          <button className="btn bg-[#185519] text-white ">Add To Cart</button>
          <button className="btn bg-[#E8B86D]  text-white">
            <FaEye className="text-lg" />
          </button>
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
