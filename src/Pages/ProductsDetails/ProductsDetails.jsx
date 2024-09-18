import { useLoaderData, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const products = useLoaderData();
  const { name, description, image, retailPrice } = products;
  const id = useParams();
  console.log(products, id);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full justify-evenly ">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl w-1/2 border-8 border-gray-300"
        />

        <div className="w-1/2">
          <h1 className=" text-2xl font-normal">
            {" "}
            <span className="font-bold"> Name :</span> {name}
          </h1>
          <p className="py-6 text-2xl font-normal">
            <span className="font-bold "> Description :</span> {description}
          </p>
          <p className="py-6 font-normal  text-4xl">$ {retailPrice}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
