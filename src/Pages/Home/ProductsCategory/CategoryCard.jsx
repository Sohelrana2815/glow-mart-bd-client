import "aos/dist/aos.css";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import { Link } from "react-router-dom";
const CategoryCard = ({ singleCategory }) => {
  const { name, category, image } = singleCategory;

  return (
    <>
      <AnimatedComponent animation="zoom-in-up">
        <Link to="/products">
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 shadow-pink-500">
            {/* Image Section */}
            <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="object-cover mx-auto h-full transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 opacity-80 transition-opacity duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-4 text-gray-800">
              <h3 className="text-lg md:text-xl font-semibold group-hover:text-indigo-600 transition-colors duration-300 dark:text-black">
                {name}
              </h3>
            </div>

            {/* Action Button */}
            <div className="absolute bottom-4 right-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300">
                Explore
              </button>
            </div>
          </div>
        </Link>
      </AnimatedComponent>
    </>
  );
};

export default CategoryCard;
