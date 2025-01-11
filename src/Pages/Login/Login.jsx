/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import loginImg from "../../assets/login/login.svg";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useState } from "react";
import AdminAccess from "../AdminAccessModal/AdminAccess";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then((result) => {
        updateUserProfile();
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setError("Email or Password invalid please try again");
        console.error(error);
      });
  };

  //  google Login event

  return (
    <>
      <AdminAccess />
      <Helmet>
        <title>Glow Mart BD || Login Page</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-gray-200 to-blue-300 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden max-w-5xl w-full mx-4 px-8">
          {/* Left Section (Image) */}
          <div className="lg:w-1/2 w-full relative hidden lg:block">
            <img
              src={loginImg}
              alt="Login Visual"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:w-1/2 w-full flex flex-col items-center px-8 py-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Welcome Back!
            </h1>
            <p className="text-center text-sm md:text-base mb-6">
              Login to access your account and continue exploring.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-4"
            >
              {/* Email Field */}
              <div className="form-control">
                <label className="label font-medium">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full dark:text-black"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label font-medium">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="input input-bordered w-full dark:text-black"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password is required
                  </span>
                )}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-2 text-lg font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition duration-200"
                >
                  Login
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center space-x-2 mt-4">
                <span className="h-px w-1/4 bg-gray-300 dark:bg-gray-600"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  OR
                </span>
                <span className="h-px w-1/4 bg-gray-300 dark:bg-gray-600"></span>
              </div>

              {/* Signup Link */}
              <p className="text-center text-sm mt-6">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
            {/* Social Login */}
            <div className="mt-4">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
