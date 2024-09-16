import useProducts from "../../Hooks/useProducts";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products] = useProducts();

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">{products.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductsCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
