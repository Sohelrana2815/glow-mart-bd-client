import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CategoryCard = ({ category }) => {
  const { name, img, key } = category;

  return (
    <Link to={`categoryPage/${key}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
