import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Review from "./Review";

const reviewsData = [
  { rating: 5, text: "Absolutely love this product!", author: "Iron man" },
  { rating: 4, text: "Great quality, will buy again.", author: "Spider man" },
  { rating: 3, text: "It’s okay, nothing special.", author: "Captain America" },
  { rating: 5, text: "Quality Products i love it.", author: "Captain America" },
];

const ReviewsSection = () => {
  return (
    <>
      <SectionTitle
        heading="What Our Customers Say"
        subHeading="Real feedback from happy customers who love our products and services."
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
        {reviewsData.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </section>
    </>
  );
};

export default ReviewsSection;
