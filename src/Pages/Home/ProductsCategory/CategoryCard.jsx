import "aos/dist/aos.css";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
const CategoryCard = ({ singleCategory }) => {
  const { name, category, image } = singleCategory;

  return (
    <>
      <AnimatedComponent animation="zoom-in-up">
        <div className="card md:w-80  lg:w-96 bg-base-100 shadow-xl dark:bg-gray-800">
          <figure className="lg:h-96 md:h-80 px-10 pt-16">
            <img src={image} alt={name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{category.toUpperCase()}</p>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default CategoryCard;
