import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate } from "react-router-dom";
import useLoading from "../../Hooks/useLoading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const ProductsCard = ({ product }) => {
  const { name, retailPrice, image, _id } = product;
  const loading = useLoading();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        productId: _id,
        userEmail: user.email,
        productName: name,
        productPrice: retailPrice,
        ProductImg: image,
      };

      axiosPublic.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
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
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 lg:w-80 shadow-xl">
      <figure className="px-10 pt-10">
        {loading ? (
          <Skeleton height={200} width={200} />
        ) : (
          <img src={image} alt="product img" className="rounded-xl" />
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {loading ? <Skeleton width={150} /> : name}
        </h2>
        {loading ? (
          <Skeleton width={100} />
        ) : (
          <p className="card-title">${retailPrice}</p>
        )}
        <div className="card-actions">
          {loading ? (
            <Skeleton width={90} height={40} />
          ) : (
            <button
              className="btn bg-[#185519] text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
          {loading ? (
            <Skeleton width={50} height={40} />
          ) : (
            <Link to={`/productInfo/${_id}`}>
              <button className="btn bg-[#E8B86D] text-white">
                <FaEye className="text-lg" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
// Define propTypes
ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    retailPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductsCard;
