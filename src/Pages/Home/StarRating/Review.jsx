import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import StarRating from "./StarRating";

const Review = ({ review }) => {
  return (
    <>
      <AnimatedComponent animation="fade-right" duration={2000} offset={100}>
        <div className="border rounded-lg p-4 mb-4 shadow-md">
          <AnimatedComponent animation="fade-down" duration={2000} offset={100}>
            <StarRating rating={review.rating} />
          </AnimatedComponent>
          <p className="dark:text-white m-2">{review.text}</p>
          <p className="dark:text-white text-sm">{review.author}</p>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default Review;
