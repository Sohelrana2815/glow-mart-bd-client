import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ShopMap from "../ShopMap/ShopMap";
import AboutUs from "../AboutUs/AboutUs";
import ReviewsSection from "../StarRating/ReviewsSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ProductsCategory from "../ProductsCategory/ProductsCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>
      <Banner />
      <ProductsCategory />
      <FeaturedProducts />
      <AboutUs />
      <ReviewsSection />
      <ShopMap />
    </div>
  );
};

export default Home;
