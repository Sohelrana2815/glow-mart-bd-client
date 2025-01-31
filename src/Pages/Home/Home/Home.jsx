import Banner from "../Banner/Banner";
import ShopMap from "../ShopMap/ShopMap";
import AboutUs from "../AboutUs/AboutUs";
import ReviewsSection from "../StarRating/ReviewsSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ProductsCategory from "../ProductsCategory/ProductsCategory";
import FAQSection from "../FAQSection/FAQSection";
import BarIndicator from "../../../Components/BarIndicator/BarIndicator";
import NewProducts from "../NewProducts/NewProducts";
import Services from "../Services/Services";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      {/* title helmet */}

      <Helmet>
        <title>Glow Mart BD || Home</title>
      </Helmet>
      <BarIndicator />
      <Banner />
      <ProductsCategory />
      <NewProducts />
      <Services />
      <FeaturedProducts />
      <AboutUs />
      <ReviewsSection />
      <FAQSection />
      <ShopMap />
    </div>
  );
};

export default Home;
