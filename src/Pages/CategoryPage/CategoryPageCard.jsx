import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useLoading from "../../Hooks/useLoading";
import Skeleton from "react-loading-skeleton";

const CategoryPageCard = ({ product }) => {
  const { name, image, _id, retailPrice } = product;
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { loading } = useLoading();
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        productId: _id,
        email: user.email,
        productName: name,
        productPrice: retailPrice,
        ProductImg: image,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          refetch();
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
    <>
      <div className="card card-compact bg-base-100 w-3/4 mx-auto shadow-xl">
        <figure>
          {loading ? (
            <Skeleton height={200} width={200} />
          ) : (
            <img src={image} alt="Shoes" />
          )}
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">
            {loading ? <Skeleton width={150} /> : name}
          </h2>
          <div className="card-actions justify-center ">
            {loading ? (
              <Skeleton width={90} height={40} />
            ) : (
              <button
                className="btn btn-md btn-primary"
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
    </>
  );
};

CategoryPageCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    retailPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CategoryPageCard;
