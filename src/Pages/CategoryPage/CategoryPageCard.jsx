import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryPageCard = ({ product }) => {
  const { name, image, _id } = product;
  return (
    <div className="card card-compact bg-base-100 w-3/4 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center ">
          <button className="btn btn-md btn-primary">Add to Cart</button>
          <Link to={`/productInfo/${_id}`}>
            <button className="btn bg-[#E8B86D] text-white">
              <FaEye className="text-lg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageCard;
