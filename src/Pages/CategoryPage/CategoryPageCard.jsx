const CategoryPageCard = ({ product }) => {
  const { name, image } = product;
  return (
    <div className="card card-compact bg-base-100 w-3/4 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageCard;
