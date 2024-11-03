import StarRating from "./StarRating";

const Review = ({ review }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <StarRating rating={review.rating} />
      <p className="dark:text-white m-2">{review.text}</p>
      <p className="dark:text-white text-sm">{review.author}</p>
    </div>
  );
};

export default Review;
