import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
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

  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen py-10">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 px-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              Total Users: <span className="text-blue-500">{users.length}</span>
            </h2>
          </div>

          {/* Table for Desktop */}
          <div className="hidden md:block lg:block">
            <div className="overflow-x-auto shadow-lg rounded-lg bg-white dark:bg-gray-900">
              <table className="table-auto w-full text-left border-collapse">
                {/* Table Header */}
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                  <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
                    >
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-gray-800 dark:text-gray-100 font-medium">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        {user.role === "admin" ? (
                          <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 rounded-full">
                            Admin
                          </span>
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-sm border-none bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg flex items-center gap-2"
                          >
                            <FaUsers className="text-white" />
                            Make Admin
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards for Small Devices */}
          <div className="block md:hidden lg:hidden px-4 space-y-6">
            {users.map((user, index) => (
              <div
                key={user._id}
                className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 space-y-4"
              >
                <p className="text-gray-800 dark:text-gray-100 font-bold">
                  User #{index + 1}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Name:</span> {user.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <span className="font-medium">Role:</span>
                  {user.role === "admin" ? (
                    <span className="text-green-500 font-medium">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <FaUsers className="text-white" />
                      Make Admin
                    </button>
                  )}
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
