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
import useAdmin from "../../Hooks/useAdmin";
const ProductsCard = ({ product }) => {
  const { isAdmin } = useAdmin();
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
      <div className="card bg-white w-72 mx-auto md:w-80 shadow-lg rounded-lg overflow-hidden dark:bg-gray-900 dark:shadow-pink-500">
        <figure className="px-6 pt-6">
          {loading ? (
            <Skeleton height={200} width={200} />
          ) : (
            <img
              src={image}
              alt="product img"
              className="rounded-xl transition-transform duration-300 hover:scale-105"
            />
          )}
        </figure>
        <div className="card-body text-center">
          <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            {loading ? <Skeleton width={150} /> : name}
          </h2>
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <p className="text-xl font-semibold text-pink-500 mt-2">
              $ {price}
            </p>
          )}
          <div className="card-actions flex justify-center gap-2 mt-4">
            {loading ? (
              <Skeleton width={90} height={40} />
            ) : (
              <button
                disabled={isAdmin}
                className="btn py-2 px-6 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all duration-300 dark:bg-pink-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
            {loading ? (
              <Skeleton width={50} height={40} />
            ) : (
              <Link to={`/productInfo/${_id}`}>
                <button className="btn py-2 px-4 rounded-full bg-gray-100 hover:bg-pink-200 text-pink-600 transition-all duration-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-pink-700">
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
