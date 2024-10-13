import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-xl my-4 p-4 text-center md:text-2xl lg:text-3xl">
        Welcome,
        <span className="font-serif ">
          {" "}
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
    </div>
  );
};

export default UserHome;
