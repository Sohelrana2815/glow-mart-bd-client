import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/Banner/img1.jpg";
import bannerImg2 from "../../../assets/Banner/img2.jpg";
import bannerImg3 from "../../../assets/Banner/img3.jpg";

const CustomCarousel = () => {
  const arrowStyles =
    "absolute top-1/2 transform -translate-y-1/2 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300 z-50";

  return (
    <div className="mt-20 relative">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`${arrowStyles} left-10`}
            aria-label="Previous"
          >
            ❮
          </button>
        )}
        renderArrowNext={(onClickHandler) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`${arrowStyles} right-10`}
            aria-label="Next"
          >
            ❯
          </button>
        )}
      >
        <div className="relative">
          <img
            src={bannerImg1}
            className="rounded-xl object-cover w-full h-[500px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 md:pl-20 lg:pl-40 text-white bg-gradient-to-r from-black/70 to-transparent">
            <p className="text-sm uppercase tracking-wider">Essential items</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 text-start">
              Beauty Inspired by Real Life
            </h1>
            <p className="text-md md:text-lg mt-4 text-start max-w-md">
              Made using clean, non-toxic ingredients, our products are designed
              for everyone.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={bannerImg2}
            className="rounded-xl object-cover w-full h-[500px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 md:pl-20 lg:pl-40 text-white bg-gradient-to-r from-black/70 to-transparent">
            <p className="text-sm uppercase tracking-wider">Luxury Skincare</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 text-start">
              Glow Naturally, Every Day
            </h1>
            <p className="text-md md:text-lg mt-4 text-start max-w-md">
              Experience luxury skincare crafted with organic and sustainable
              ingredients.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300">
              Explore Products
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={bannerImg3}
            className="rounded-xl object-cover w-full h-[500px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 md:pl-20 lg:pl-40 text-white bg-gradient-to-r from-black/70 to-transparent">
            <p className="text-sm uppercase tracking-wider">
              Self-Care Essentials
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 text-start">
              Feel Confident in Your Skin
            </h1>
            <p className="text-md md:text-lg mt-4 text-start max-w-md">
              Discover self-care products that nurture your skin and elevate
              your confidence.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
