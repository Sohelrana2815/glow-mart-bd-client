import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import shopImg from "../../../assets/Parallax/shop.jpg";
const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="dark:bg-black min-h-screen flex items-center justify-center relative">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${shopImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-10 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-xl shadow-lg">
        {/* User Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="w-24 h-24 rounded-full shadow-lg border-4 border-white dark:border-gray-700 object-cover"
            src={user?.photoURL}
            alt="User Avatar"
          />
        </div>

        {/* Welcome Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
          Welcome,{" "}
          <span className="font-serif text-green-600 dark:text-green-400">
            {user?.displayName || "Guest"}
          </span>
        </h1>

        {/* Welcome Message */}
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Thank you for visiting <strong>Glow Mart BD</strong>! Your go-to place
          for beauty and skincare products. Browse through our collections and
          discover the best products that suit your style and needs. We’re here
          to make your shopping experience unforgettable.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/products">
            <button className="btn btn-lg bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all">
              Explore Products
            </button>
          </Link>
          <Link to="/profileUpdate">
            <button className="btn btn-lg bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
