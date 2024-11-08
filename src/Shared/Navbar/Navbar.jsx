import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import { IoMenuSharp } from "react-icons/io5";
import useTheme from "../../Hooks/useTheme";
import logo_one from "../../assets/website logo/logo_one.png";
const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const { user, logout, loading } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: `${user.displayName} Logged out!`,
          icon: "success",
        });
      }
    });
  };

  const navLinks = (
    <>
      <div
        className="lg:flex gap-2  
       lg:bg-[#3D5300] md:bg-[#3D5300] xs:bg-[#3D5300] dark:lg:bg-[#10375C] dark:md:bg-[#10375C] dark:xs:bg-[#10375C]  text-lg font-serif "
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">All Products</NavLink>
        </li>
        {isAdmin ? null : (
          <li>
            <NavLink to="/dashboard/userHome">User Home</NavLink>
          </li>
        )}
        {isAdmin ? (
          <li>
            <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
          </li>
        ) : (
          ""
        )}

        <li>
          <Link to="/dashboard/cart">
            <button className="btn btn-sm">
              <FaShoppingCart />
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link>
        </li>
      </div>
    </>
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="navbar px-5  bg-[#3D5300] text-white  dark:bg-[#10375C] rounded-lg mt-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenuSharp className="text-2xl md:text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center gap-2">
            <p className="md:text-2xl text-base">Glow Mart BD</p>
            <img src={logo_one} className="md:w-8 w-7 " alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {user.photoURL ? (
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} />
                </div>
              ) : (
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                    <span>{user.displayName.slice(0, 1).toUpperCase()}</span>
                  </div>
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  text-black"
            >
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn text-white lg:btn-md btn-outline  btn-sm ">
                Login
              </button>
            </Link>
            <Link to="/signUp">
              <button className="btn hidden md:block text-white lg:btn-md btn-outline  btn-sm ml-4">
                Sign UP
              </button>
            </Link>
          </>
        )}

        {/* Synthwave Toggle Button */}
        <label className="relative inline-flex items-center cursor-pointer ml-2">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only"
          />
          <div
            className={`w-14 h-8  rounded-full p-1 flex items-center justify-between neon-border ${
              isDarkMode ? "bg-[#FF6500]" : "bg-green-500"
            }`}
          >
            <FaSun
              className={`text-yellow-400 text-xl ${
                isDarkMode ? "opacity-0" : "opacity-100"
              }`}
            />
            <FaMoon
              className={`text-blue-400 text-xl ${
                isDarkMode ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              } transition-transform duration-300 shadow-neon`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
