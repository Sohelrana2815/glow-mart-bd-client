import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import Swal from "sweetalert2";
import logoOne from "../../assets/website logo/logo_one.png";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [cart] = useCart() || []; // Safely destructure the cart
  const [isAdmin] = useAdmin();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: "true",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Log Out", "You have successfully logged out.", "success");
      }
    });
  };

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: isAdmin ? "Admin Home" : "User Home",
      path: isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome",
    },
    {
      label: "Cart",
      path: "/dashboard/cart",
    },
  ];

  return (
    <div className="mb-20">
      <div className="navbar fixed bg-[#3D5300] dark:bg-[#10375C] text-white shadow-lg pl-4 py-3 pr-10 rounded-lg z-10">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open Menu"
            >
              <IoMenuSharp className="text-2xl" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 bg-base-100 dark:bg-gray-800 rounded-box shadow-lg w-52"
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className="hover:text-yellow-400">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-1">
            <img src={logoOne} alt="Logo" className="w-8 h-8" />
            <span className="md:text-xl font-semibold text-sm">
              Glow Mart BD
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          <Link to="/dashboard/cart" className="hidden md:flex">
            <button className="btn btn-sm">
              <FaShoppingCart />
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
          </Link>

          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                aria-label="User Menu"
              >
                <img
                  src={user.photoURL || logoOne}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 bg-base-100 dark:bg-gray-800 text-black dark:text-white rounded-box shadow-lg w-40"
              >
                <li>
                  <button
                    className="hover:text-red-500 transition-colors duration-300"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm bg-[#3D5300] dark:bg-[#10375C] text-white hover:bg-green-700 dark:hover:bg-blue-700 border-none">
                  Login
                </button>
              </Link>
              <Link to="/signUp">
                <button className="btn btn-sm bg-yellow-500 dark:bg-pink-500 text-black dark:text-white hover:bg-yellow-600 dark:hover:bg-pink-600 border-none hidden md:inline-block">
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {/* Dark Mode Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                isDarkMode ? "bg-yellow-500" : "bg-blue-600"
              }`}
            >
              <FaSun
                className={`text-yellow-400 ${
                  isDarkMode ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              />
              <FaMoon
                className={`text-blue-400 mr-5 ${
                  isDarkMode ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              />
              <div
                className={`absolute w-5 h-5 bg-white rounded-full transform transition-transform ${
                  isDarkMode ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
