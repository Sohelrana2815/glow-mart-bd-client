import { useLoaderData, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useLoading from "../../Hooks/useLoading";
const ProductsDetails = () => {
  const products = useLoaderData();
  const { name, description, image, retailPrice, category, subCategory } =
    products;
  const id = useParams();
  const loading = useLoading();
  console.log(products, id);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col  md:flex-row w-full justify-evenly ">
        {loading ? (
          <Skeleton height={350} width={400} />
        ) : (
          <img
            src={image}
            className="max-w-sm rounded-lg  shadow-2xl w-1/2 border-8 border-gray-300"
          />
        )}

        <div className="w-1/2">
          {loading ? (
            <Skeleton width={500} height={60} />
          ) : (
            <h1 className=" md:text-2xl text-base  font-normal">
              <span className="font-bold"> Name :</span> {name}
            </h1>
          )}
          {loading ? (
            <Skeleton width={500} height={60} />
          ) : (
            <p className="py-6 md:text-2xl text-base font-normal">
              <span className="font-bold "> Description :</span> {description}
            </p>
          )}
          {loading ? (
            <Skeleton width={500} height={60} />
          ) : (
            <p className=" md:text-2xl text-base font-normal">
              <span className="font-bold "> Category :</span>{" "}
              {subCategory ? subCategory : category}
            </p>
          )}
          {loading ? (
            <Skeleton width={50} height={50} />
          ) : (
            <p className="py-6 font-medium text-orange-600  md:font-normal text-lg  md:text-4xl">
              $ {retailPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
