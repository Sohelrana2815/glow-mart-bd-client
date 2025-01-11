import {
  FaBook,
  FaHistory,
  FaHome,
  FaList,
  FaMoon,
  FaShoppingCart,
  FaSun,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useTheme from "../../Hooks/useTheme";
const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const { isDarkMode, toggleDarkMode } = useTheme();

  const navLinks = (
    <>
      {isAdmin ? (
        <>
          <li className="lg:text-base">
            <NavLink to="/dashboard/adminHome">
              <FaHome />
              Admin Home
            </NavLink>
          </li>
          <li className="lg:text-base">
            <NavLink to="/dashboard/addItems">
              <IoBagAdd />
              Add Items
            </NavLink>
          </li>
          <li className="lg:text-base">
            <NavLink to="/dashboard/manageItems">
              <FaList />
              Manage Items
            </NavLink>
          </li>
          <li className="lg:text-base">
            <NavLink to="/dashboard/manageBookings">
              <FaBook />
              Manage Bookings
            </NavLink>
          </li>
          <li className="lg:text-base">
            <NavLink to="/dashboard/allUsers">
              <FaUsers />
              All Users
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <div className="divider dark:divider-primary"></div>

      <div className="border border-primary hidden lg:block mr-2"></div>
      {isAdmin ? null : (
        <>
          <li className="lg:text-base">
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li className="lg:text-base">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li className="pr-2 lg:text-base">
            <NavLink to="/dashboard/paymentHistory">
              <FaHistory /> Payment History
            </NavLink>
          </li>
        </>
      )}
      {/* Shared navLinks */}
      <div className="divider dark:divider-primary"></div>
      <div className="border border-primary hidden lg:block"></div>
      <li className="pl-2 lg:text-base">
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="lg:text-base">
        <NavLink to="/products">
          <AiFillProduct /> All Products
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer min-h-screen">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className="navbar bg-base-300 dark:bg-gray-900 dark:text-white shadow-lg">
            {/* Mobile Menu Toggle */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="Open Sidebar"
                className="btn btn-square btn-ghost"
              >
                <IoMenuSharp className="text-3xl" />
              </label>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="mx-2 flex-1 px-2 btn btn-ghost text-xl font-bold"
            >
              Glow Mart BD
            </Link>

            {/* Dark Mode Toggle */}
            <label className="relative inline-flex items-center cursor-pointer ml-2">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div
                className={`w-14 h-8 flex items-center rounded-full p-1 ${
                  isDarkMode ? "bg-gray-600" : "bg-yellow-400"
                }`}
              >
                <FaSun
                  className={`text-white text-lg ${
                    isDarkMode ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-300 absolute left-8`}
                />
                <FaMoon
                  className={`text-blue-400 text-lg ${
                    isDarkMode ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300 absolute`}
                />
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                    isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </label>

            {/* Desktop Menu */}
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal space-x-4 text-lg font-medium">
                {navLinks}
              </ul>
            </div>
          </nav>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800">
            <Outlet />
          </main>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="Close Sidebar"
            className="drawer-overlay"
          ></label>
          <aside className="menu bg-base-200 dark:bg-gray-900 dark:text-white w-80 p-6 space-y-4">
            <h2 className="text-xl font-bold">Dashboard Menu</h2>
            <ul className="space-y-3">{navLinks}</ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
