import signUpImg from "../../assets/login/login.svg";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminAccess from "../AdminAccessModal/AdminAccess";
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
    const { email, password, name } = data;
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name).then(() => {
          const userInfo = {
            name: name,
            email: email,
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
        <title>Sign Up Page</title>
      </Helmet>
      <AdminAccess />
      <div className="hero bg-base-200 min-h-screen dark:bg-gray-900 py-20">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center lg:text-left">
            <img src={signUpImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:ml-20">
            <h1 className="text-4xl p-4 mt-4 font-bold text-center dark:text-black">
              Sign Up now!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body dark:text-black"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
              <p className="text-center">-----OR------</p>
              <SocialLogin />
              <p className="text-center font-medium">
                Already have an account ?
                <Link to="/login">
                  <span className="text-primary">Login</span>
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
