import { FaHome, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="lg:w-72 min-h-screen bg-orange-500 rounded-xl px-2 py-3">
        <ul className="menu space-y-3">
          {/* TODO: Only Admin can access this */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUser /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
            </>
          )}

          {/* Shared NavLinks */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <FaProductHunt />
              All Products
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-grow  mt-20 px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
