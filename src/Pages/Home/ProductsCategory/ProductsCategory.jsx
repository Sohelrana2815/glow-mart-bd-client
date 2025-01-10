// steps : 1. load data on database
// steps : 2. Create get api to get all data by category
// steps : 3. fetch data
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ProductsCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch productsCategory using Axios

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/productsCategory");
        setCategories(res.data);
      } catch (error) {
        setError("Failed to fetch categories");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  if (loading) {
    return (
      <span className="loading loading-ring loading-lg text-blue-600"></span>
    );
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <>
      <div>
        <SectionTitle subHeading="" heading="Product Categories" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-2xl mx-auto">
        {/* {categories.length} */}
        {categories.map((singleCategory) => (
          <CategoryCard
            key={singleCategory._id}
            singleCategory={singleCategory}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsCategory;
