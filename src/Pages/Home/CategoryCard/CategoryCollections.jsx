import useCategories from "../../../Hooks/useCategories";
import CategoryCard from "./CategoryCard";

const CategoryCollections = () => {
  const [categories] = useCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
      {categories.map((category) => (
        <CategoryCard key={category.key} category={category} />
      ))}
    </div>
  );
};

export default CategoryCollections;
