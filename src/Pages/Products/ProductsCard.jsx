import PropTypes from "prop-types";
const ProductsCard = ({ product }) => {
  const { name, retailPrice, image } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{retailPrice}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add To Cart</button>
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
