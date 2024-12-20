import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Make ${user.name} new admin!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Updated!",
              text: `${user.name} is new admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    // console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been deleted!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen">
        <div className="hidden md:block lg:block dark:bg-black">
          <h2 className="text-4xl">Total Users : {users.length}</h2>
          <div className="px-5 mt-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base dark:text-white">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th className="text-lg">{index + 1}</th>
                      <th className="text-lg">
                        <p>{user.name}</p>
                      </th>
                      <th className="text-lg">{user.email}</th>
                      <th>
                        {user.role === "admin" ? (
                          <span className="text-green-500 font-medium text-base">
                            Admin
                          </span>
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn bg-[#d1a054] "
                          >
                            <FaUsers className="text-white text-lg" />
                          </button>
                        )}
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeleteUser(user)}
                          className="btn border-none bg-red-600 "
                        >
                          <FaTrashCan className="text-white text-lg" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* for small devices */}
        <div className="px-2 block md:hidden dark:bg-black lg:hidden">
          <p className="py-4 font-medium text-lg">
            Total Users : {users.length}
          </p>
          <div className="my-4">
            {users.map((user) => (
              <div
                className="p-3 space-y-5 border-2 my-4 rounded-lg "
                key={user._id}
              >
                <p>Username : {user.name}</p>
                <p>Email : {user.email}</p>

                <p className="flex items-center gap-2">
                  <p className="text-primary font-medium">Role : </p>
                  {user.role === "admin" ? (
                    <span className="text-green-500 font-medium">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm dark:border-none bg-[#d1a054] "
                    >
                      <FaUsers className="text-white" />
                    </button>
                  )}
                </p>
                <p className="flex items-center gap-2">
                  <p className="font-medium">Delete User : </p>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-sm border-none  bg-red-600 "
                  >
                    <FaTrashCan className="text-white" />
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
