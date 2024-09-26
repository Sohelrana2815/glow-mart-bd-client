import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl">Total Users : {user.length}</h2>
      <div className="px-5 mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user.map((user, index) => (
                <tr key={user._id}>
                  <th className="text-lg">{index + 1}</th>
                  <th className="text-lg">
                    <p>{user.name}</p>
                  </th>
                  <th className="text-lg">{user.email}</th>
                  <th>
                    <button className="btn bg-[#d1a054] ">
                      <FaUsers className="text-white text-lg" />
                    </button>
                  </th>
                  <th>
                    <button className="btn bg-red-600 ">
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
  );
};

export default AllUsers;
