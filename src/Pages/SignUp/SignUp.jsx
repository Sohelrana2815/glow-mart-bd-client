import signUpImg from "../../assets/sign up/sign up.webp";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminAccess from "../AdminAccessModal/AdminAccess";
import { Helmet } from "react-helmet-async";
const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photoURL).then(() => {
          const userInfo = {
            name: name,
            email: email,
            photoURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "NEW USER CREATED SUCCESSFULLY!",
                text: "Welcome back!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
        });
      })
      .then(() => {
        console.log("UpdateProfile successfully");
        alert("UpdateProfile successfully");
      });
  };

  return (
    <>
      <Helmet>
        <title>Glow Mart BD || Sign Up Page</title>
      </Helmet>
      <AdminAccess />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-gray-200 to-green-300 dark:from-gray-800 dark:via-gray-900 dark:to-black py-10">
        <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden max-w-5xl w-full mx-4 px-8">
          {/* Left Section (Image) */}
          <div className="lg:w-1/2 w-full relative hidden lg:block">
            <img
              src={signUpImg}
              alt="Sign Up Visual"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:w-1/2 w-full flex flex-col items-center px-8 py-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Create Your Account
            </h1>
            <p className="text-center text-sm md:text-base mb-6">
              Join us and start your journey today!
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-4"
            >
              {/* Name Field */}
              <div className="form-control">
                <label className="label font-medium">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full dark:text-black"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>

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

              {/* Photo URL */}
              <div className="form-control">
                <label className="label font-medium">
                  <span className="label-text dark:text-white">PhotoURL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered w-full dark:text-black"
                  placeholder="Enter your photoURL"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    PhotoURL is required
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
              </div>

              {/* Sign Up Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-2 text-lg font-medium bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition duration-200"
                >
                  Sign Up
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

              {/* Social Sign-Up */}
              <div className="mt-4">
                <SocialLogin />
              </div>

              {/* Login Link */}
              <p className="text-center text-sm mt-6">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
