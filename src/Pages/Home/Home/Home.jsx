import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CategoryCollections from "../CategoryCard/CategoryCollections";
import ProductCategory from "../ProductCategory/ProductCategory";
import ShopMap from "../ShopMap/ShopMap";

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
      <ProductCategory />
      <CategoryCollections />
      <ShopMap />
    </div>
  );
};

export default Home;
