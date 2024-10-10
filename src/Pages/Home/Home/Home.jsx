import Banner from "../Banner/Banner";
import CategoryCollections from "../CategoryCard/CategoryCollections";
import ProductCategory from "../ProductCategory/ProductCategory";
import ShopMap from "../ShopMap/ShopMap";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <CategoryCollections />
      <ShopMap />
    </div>
  );
};

export default Home;
