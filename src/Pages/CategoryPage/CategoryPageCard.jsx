import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CategoryPageCard = ({ product }) => {
  const { name, image, _id, retailPrice } = product;
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
    <div className="card card-compact bg-base-100 w-3/4 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center ">
          <button className="btn btn-md btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to={`/productInfo/${_id}`}>
            <button className="btn bg-[#E8B86D] text-white">
              <FaEye className="text-lg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageCard;
