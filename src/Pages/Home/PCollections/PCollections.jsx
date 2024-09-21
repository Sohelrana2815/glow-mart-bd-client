import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

const PCollections = () => {
  const { category } = useParams();
  const [products] = useProducts();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={product.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

export default PCollections;
