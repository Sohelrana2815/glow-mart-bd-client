import { FaTrashCan } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.productPrice, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-center md:text-xl my-4 lg:text-4xl">
          Total Cart Items : {cart.length}
        </h2>
        <h2 className="text-center md:text-xl my-4 lg:text-4xl">
          Total Price : {totalPrice}$
        </h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary btn-sm my-3 md:btn-md lg:btn-md">
              Pay
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn btn-sm btn-primary my-3   md:btn-md lg:btn-md"
          >
            Pay
          </button>
        )}
      </div>
      <div className="px-5 mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>#</th>
                <th className="text-xs md:text-base lg:text-lg">Image</th>
                <th className="text-xs md:text-base lg:text-lg">Name</th>
                <th className="text-xs md:text-base lg:text-lg">Price</th>
                <th className="text-xs md:text-base lg:text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((product, index) => (
                <tr key={product._id}>
                  <td className="text-base text-secondary font-bold md:text-lg">
                    {index + 1}
                  </td>
                  <td>
                    <img
                      className="md:max-w-16 lg:max-w-24 max-w-12 rounded-lg"
                      src={product.ProductImg}
                      alt=""
                    />
                  </td>
                  <th>
                    <p className="text-xs block md:hidden lg:hidden md:text-base lg:text-lg">
                      {product.productName.length > 7
                        ? `${product.productName.slice(0, 7)}...`
                        : product.productName}
                    </p>
                    <p className="text-xs hidden sm:hidden lg:block md:block md:text-base lg:text-lg">
                      {product.productName}
                    </p>
                  </th>
                  <th className="text-base">$ {product.productPrice}</th>
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
