import { useForm } from "react-hook-form";
import loginImg from "../../assets/login/login.svg";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { loginUser, googleSignIn, updateUserProfile } = useAuth();

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
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //  google Login event

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:ml-20">
          <h1 className="text-4xl p-4 mt-4 font-bold text-center">
            Login now!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <span className="text-red-600">Password field is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
            <p className="text-center">-----OR------</p>
            <button className="btn btn-outline" onClick={handleGoogleLogin}>
              <FcGoogle className="text-lg " /> Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
