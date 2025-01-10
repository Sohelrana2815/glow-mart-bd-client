import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ShopMap from "../ShopMap/ShopMap";
import AboutUs from "../AboutUs/AboutUs";
import ReviewsSection from "../StarRating/ReviewsSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ProductsCategory from "../ProductsCategory/ProductsCategory";
import FAQSection from "../FAQSection/FAQSection";
import BarIndicator from "../../../Components/BarIndicator/BarIndicator";
import NewProducts from "../NewProducts/NewProducts";

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
      <BarIndicator />
      <Banner />
      <ProductsCategory />
      <NewProducts />
      <FeaturedProducts />
      <AboutUs />
      <ReviewsSection />
      <FAQSection />
      <ShopMap />
    </div>
  );
};

export default Home;
