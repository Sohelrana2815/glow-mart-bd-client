import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
        // console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          role: "admin",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Logged in Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <button className="btn btn-outline" onClick={handleGoogleLogin}>
      <FcGoogle className="text-lg " /> Sign in with Google
    </button>
  );
};

export default SocialLogin;
