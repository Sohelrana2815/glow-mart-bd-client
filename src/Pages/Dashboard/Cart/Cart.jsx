import { FaTrashCan } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.productPrice, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Cart item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-center text-4xl">Total Orders : {cart.length}</h2>
        <h2 className="text-center text-4xl">Total Price : {totalPrice}$</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="px-5 mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="lg:w-24 rounded-lg"
                      src={product.ProductImg}
                      alt=""
                    />
                  </td>
                  <th>
                    <p>{product.productName}</p>
                  </th>
                  <th className="text-base">$ {product.productPrice}</th>
                  <th className="text-lg">
                    <p>{product.email}</p>
                  </th>
                  <th>
                    <button onClick={() => handleDelete(product._id)}>
                      <FaTrashCan className=" text-red-600 text-lg" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
