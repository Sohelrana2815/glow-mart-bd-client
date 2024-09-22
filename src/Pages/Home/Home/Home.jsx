import Banner from "../Banner/Banner";
import CategoryCollections from "../CategoryCard/CategoryCollections";
import Parallax from "../Parallax/Parallax";
import ProductCategory from "../ProductCategory/ProductCategory";
import ShopMap from "../ShopMap/ShopMap";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <Parallax />
      <CategoryCollections />
      <ShopMap />
    </div>
  );
};

export default Home;
