import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
// import useAdmin from "../../Hooks/useAdmin";
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [cart] = useCart();
  // const [isAdmin] = useAdmin();
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
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">All Products</NavLink>
      </li>
      {/* {user && isAdmin ? (
        <li>
          <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
        </li>
      ) : (
        ""
      )}
      {user && !isAdmin ? (
        <li>
          <NavLink to="/dashboard/userHome">User Home</NavLink>
        </li>
      ) : (
        ""
      )} */}

      <li>
        <NavLink to="/dashboard/userHome">User Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
      </li>

      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-sm">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenuSharp className="text-lg md:text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <p className="btn btn-ghost text-sm sm:text-xl md:text-2xl xs:text-xs">
            Glow Mart BD
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
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
                    <span>{user.displayName.charAt(0).toUpperCase()}</span>
                  </div>
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn lg:btn-md btn-outline  btn-sm ">
                Login
              </button>
            </Link>
            <Link to="/signUp">
              <button className="btn lg:btn-md btn-outline  btn-sm ml-4">
                Sign UP
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
