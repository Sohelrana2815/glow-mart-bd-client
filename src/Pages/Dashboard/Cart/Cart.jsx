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
    <>
      <div className="dark:bg-black min-h-screen dark:text-white">
        {/* Cart Summary Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-5 py-5 md:py-10 space-y-4 md:space-y-0">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Total Cart Items: {cart.length}
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Total Price: ${totalPrice}
          </h2>
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Pay Now
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white py-2 px-6 rounded-lg shadow-lg cursor-not-allowed"
            >
              Pay Now
            </button>
          )}
        </div>

        {/* Cart Items Section */}
        <div className="px-5 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((product) => (
              <div
                key={product._id}
                className="bg-white dark:bg-gray-600 p-5 rounded-lg shadow-md shadow-pink-400 hover:shadow-pink-500 transition duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <img
                    className="w-24 h-24 object-cover rounded-lg mb-4 md:mb-0"
                    src={product.ProductImg}
                    alt={product.productName}
                  />
                  <div className="ml-4 flex-1 text-center md:text-left">
                    <h3 className="text-lg dark:text-white font-semibold text-gray-800 truncate">
                      {product.productName.length > 20
                        ? `${product.productName.slice(0, 20)}...`
                        : product.productName}
                    </h3>
                    <p className="text-gray-600 dark:text-white">
                      ${product.productPrice}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-600 hover:text-red-800 mt-2 md:mt-0"
                  >
                    <FaTrashCan className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
