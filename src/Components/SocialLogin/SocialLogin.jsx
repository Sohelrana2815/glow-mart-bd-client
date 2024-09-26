import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const { googleSignIn } = useAuth();
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
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
            navigate(from, { replace: true });
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
