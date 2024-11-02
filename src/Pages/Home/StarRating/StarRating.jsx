import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const starts = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className="text-yellow-500 text-xl">
        {index < rating ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  return <div className="flex">{starts}</div>;
};

export default StarRating;
