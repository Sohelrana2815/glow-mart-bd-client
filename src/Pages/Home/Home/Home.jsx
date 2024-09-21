import Banner from "../Banner/Banner";
import CollectionCard from "../CollectionCard/CollectionCard";
import Parallax from "../Parallax/Parallax";
import ProductCategory from "../ProductCategory/ProductCategory";
import ShopMap from "../ShopMap/ShopMap";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <Parallax />
      <CollectionCard />
      <ShopMap />
    </div>
  );
};

export default Home;
