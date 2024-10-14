import useAuth from "../../../Hooks/useAuth";
import shopImg from "../../../assets/Parallax/shop.jpg";
const UserHome = () => {
  const { user } = useAuth();

  return (
    <div>
      {/* Overlay */}
      <div
        className="hero min-h-screen  bg-fixed"
        style={{
          backgroundImage: `url(${shopImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="flex justify-center my-5">
              <img className="rounded-full" src={user?.photoURL ? user.photoURL : ""} alt="" />
            </div>
            <h1 className="mb-5 text-5xl font-bold">
              Welcome,
              <span className="font-serif ">
                {user?.displayName ? user.displayName : "Back"}
              </span>
            </h1>

            <p className="mb-5 text-2xl">
              We’re grateful for your visit to Glow Mart BD! Thank you for
              choosing us as your go-to place for beauty and skincare products.
              We aim to make every shopping experience smooth and enjoyable, so
              feel free to browse and discover all that we have to offer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
