import StarRating from "./StarRating";

const Review = ({ review }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <StarRating rating={review.rating} />
      <p className="text-gray-700 m-2">{review.text}</p>
      <p className="text-gray-500 text-sm">{review.author}</p>
    </div>
  );
};

export default Review;
