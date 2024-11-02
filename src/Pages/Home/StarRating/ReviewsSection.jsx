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
      <h2 className="text-2xl font-semibold mb-4 text-center my-20">
        Customer Reviews
      </h2>
      <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviewsData.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </section>
    </>
  );
};

export default ReviewsSection;
