const CategoryCard = ({ singleCategory }) => {
  const { name, category, image } = singleCategory;

  return (
    <>
      <div className="card bg-base-100 shadow-xl dark:bg-gray-800 ">
        <figure className="h-96 px-10 pt-16">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{category.toUpperCase()}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
