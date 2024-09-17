import { FaList } from "react-icons/fa";
import useProducts from "../../Hooks/useProducts";
import ProductsCard from "./ProductsCard";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

const Products = () => {
  const [products] = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const handleLipCare = () => {
    setSelectedSubCategory("lipCare");
  };
  const handleLotion = () => {
    setSelectedSubCategory("lotion");
  };
  const handleShampoo = () => {
    setSelectedSubCategory("shampoo");
  };
  const handleHairOil = () => {
    setSelectedSubCategory("hairOil");
  };

  const handleSoap = () => {
    setSelectedSubCategory("soap");
  };

  const handleBodyWash = () => {
    setSelectedSubCategory("bodyWash");
  };

  const handleFragrance = () => {
    setSelectedCategory("fragrance");
    setSelectedSubCategory("");
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedSubCategory("");
  };

  const filteredProducts = products.filter((product) => {
    if (selectedSubCategory === "lipCare") {
      return product.subCategory === "lipCare";
    }
    if (selectedSubCategory === "lotion") {
      return product.subCategory === "lotion";
    }
    if (selectedSubCategory === "shampoo") {
      return product.subCategory === "shampoo";
    }
    if (selectedSubCategory === "hairOil") {
      return product.subCategory === "hairOil";
    }

    if (selectedSubCategory === "soap") {
      return product.subCategory === "soap";
    }

    if (selectedSubCategory === "bodyWash") {
      return product.subCategory === "bodyWash";
    }
    if (selectedCategory === "fragrance") {
      return product.category === "fragrance";
    } else {
      return true;
    }
  });

  return (
    <>
      <div className=" fixed z-10  lg:-ml-56 mt-20">
        <details className="dropdown">
          <summary className="btn  m-1 bg-primary text-white lg:text-xl">
            <FaList /> Category ({filteredProducts.length})
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-5">
            <li>
              <details>
                <summary>Skin Care</summary>
                <ul className="menu bg-base-100 rounded-box p-2  ml-8 shadow ">
                  <li>
                    <a onClick={handleLipCare}>Lip Care</a>
                  </li>
                  <li>
                    <a onClick={handleLotion}>Lotion</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Hair Care</summary>
                <ul className="menu bg-base-100 rounded-box p-2  ml-8 shadow">
                  <li>
                    <a onClick={handleShampoo}>Shampoo</a>
                  </li>
                  <li>
                    <a onClick={handleHairOil}>Hair Oil</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Daily Essentials</summary>
                <ul className="menu bg-base-100 rounded-box p-2  ml-8 shadow">
                  <li>
                    <a onClick={handleSoap}>Soap</a>
                  </li>
                  <li>
                    <a onClick={handleBodyWash}>Body Wash</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a onClick={handleFragrance}>Fragrance</a>
            </li>
          </ul>
        </details>
        <div>
          <button
            onClick={handleReset}
            className="btn hidden lg:block w-full mt-8 btn-outline"
          >
            <p className="font-semibold text-base">Show All Products</p>
          </button>
          {/* small button */}
          <button
            onClick={handleReset}
            className="btn block md:hidden  mt-8 bg-red-600"
          >
            <FaTrashCan className="font-semibold text-white" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {filteredProducts.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
