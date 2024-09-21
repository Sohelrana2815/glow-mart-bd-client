import { Link } from "react-router-dom";
import useCategories from "../../../Hooks/useCategories";

const CollectionCard = () => {
  const [categories] = useCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 cursor-pointer">
      {categories.map((category) => (
        <Link to={`productCategory/${category.key}`} key={category.key}>
          <div key={category.key} className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={category.img}
                alt="Product img"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionCard;
