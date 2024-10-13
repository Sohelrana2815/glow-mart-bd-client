import { FaPen, FaTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useProducts from "../../../Hooks/useProducts";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [products, refetch] = useProducts();
  const axiosSecure = useAxiosSecure();
  const handleDeleteProduct = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/products/${product._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  px-5">
      {products.map((product) => (
        <div
          key={product._id}
          className="border-2 max-w-xs lg:max-w-lg md:max-w-md mx-auto p-4 rounded-lg border-primary my-6"
        >
          <img src={product.image} className="lg:w-3/4 mx-auto" alt="" />
          <p>Product Name : {product.name} </p>
          <p>Product Retail Price : {product.retailPrice} </p>
          <p>Profit : {product.profit} </p>
          <div className="flex justify-evenly">
            <Link to={`/dashboard/updateProducts/${product._id}`}>
              <button className="btn btn-success text-white ">
                <FaPen />
                Edit
              </button>
            </Link>
            <button
              onClick={() => {
                handleDeleteProduct(product);
              }}
              className="btn bg-red-600 text-white "
            >
              <FaTrashCan />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageItems;
