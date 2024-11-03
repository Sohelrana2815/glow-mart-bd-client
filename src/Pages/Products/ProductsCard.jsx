import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLoading from "../../Hooks/useLoading";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
const ProductsCard = ({ product }) => {
  const { name, price, image, _id } = product;
  const loading = useLoading();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        productId: _id,
        email: user.email,
        productName: name,
        productPrice: price,
        ProductImg: image,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login to Add To Cart Products",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-72 mx-auto md:w-80 shadow-xl dark:bg-gray-900 dark:shadow-blue-600">
        <figure className="px-10 pt-10">
          {loading ? (
            <Skeleton height={200} width={200} />
          ) : (
            <img src={image} alt="product img" className="rounded-xl" />
          )}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="md:card-title font-medium">
            {loading ? <Skeleton width={150} /> : name}
          </h2>
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <p className="lg:card-title text-lg font-medium text-info">
              $ {price}
            </p>
          )}
          <div className="card-actions">
            {loading ? (
              <Skeleton width={90} height={40} />
            ) : (
              <button
                className="btn md:btn-md btn-sm py-2 px-4 lg:btn-md dark:border-none bg-[#185519] md:py-0  text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
            {loading ? (
              <Skeleton width={50} height={40} />
            ) : (
              <Link to={`/productInfo/${_id}`}>
                <button className="btn md:btn-md btn-sm lg:btn-md bg-[#E8B86D] text-white dark:border-none">
                  <FaEye className="text-lg" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
// Define propTypes
ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductsCard;
