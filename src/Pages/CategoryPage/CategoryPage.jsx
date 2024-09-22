import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import CategoryPageCard from "./CategoryPageCard";

const CategoryPage = () => {
  const { category } = useParams();

  const [products] = useProducts();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
      {filteredProducts.map((product) => (
        <CategoryPageCard key={product} product={product} />
      ))}
    </div>
  );
};

export default CategoryPage;
