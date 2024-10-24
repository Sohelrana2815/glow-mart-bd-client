import {
  FaBook,
  FaHistory,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";
import useCart from "../../Hooks/useCart";
// import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();
  // const [isAdmin] = useAdmin();

  const navLinks = (
    <>
      {/* {isAdmin ? (
     
      ) : (
      )} */}
      <>
        <li>
          <NavLink to="/dashboard/adminHome">
            <FaHome />
            Admin Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addItems">
            <IoBagAdd />
            Add Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/manageItems">
            <FaList />
            Manage Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/manageBookings">
            <FaBook />
            Manage Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/allUsers">
            <FaUsers />
            All Users
          </NavLink>
        </li>
      </>
      <div className="divider"></div>
      <div className="border border-primary hidden lg:block mr-2"></div>
      <>
        <li>
          <NavLink to="/dashboard/userHome">
            <FaHome /> User Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/cart">
            <FaShoppingCart /> My Cart ({cart.length})
          </NavLink>
        </li>
        <li className="pr-2">
          <NavLink to="/dashboard/paymentHistory">
            <FaHistory /> Payment History
          </NavLink>
        </li>
      </>
      {/* Shared navLinks */}
      <div className="divider"></div>
      <div className="border border-primary hidden lg:block"></div>
      <li className="pl-2">
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products">
          <AiFillProduct /> All Products
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <IoMenuSharp className="text-3xl" />
              </label>
            </div>
            <Link to="/">
              <div className="mx-2 flex-1 px-2 btn btn-ghost">Glow Mart BD</div>
            </Link>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navLinks}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {navLinks}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
