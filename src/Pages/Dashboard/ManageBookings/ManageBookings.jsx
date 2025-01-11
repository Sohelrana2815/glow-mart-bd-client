import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuClock2 } from "react-icons/lu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["paymentStatus"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const handleDelivered = (payment) => {
    console.log(payment);
    Swal.fire({
      title: "Change status to delivered?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        const status = {
          status: "delivered",
        };
        axiosSecure.patch(`/payments/${payment._id}`, status).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Product successfully delivered!",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <SectionTitle heading="Manage bookings" subHeading="At a Glance!" />
      <div className="dark:bg-black dark:text-white min-h-screen py-10">
        {/* Table for Large Devices */}
        <div className="overflow-x-auto hidden md:block lg:block">
          <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">
                <th className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                  #
                </th>
                <th className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                  Email
                </th>
                <th className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                  Price
                </th>
                <th className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                  Transaction ID
                </th>
                <th className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                  Date
                </th>
                <th className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                  Status
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {payments.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{payment.email}</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    ${payment.price}
                  </td>
                  <td className="px-6 py-4">{payment.transactionId}</td>
                  <td className="px-6 py-4">{payment.date}</td>
                  <td className="px-6 py-4">
                    {payment.status === "pending" ? (
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-medium">
                          Pending
                        </span>
                        <button
                          className="btn btn-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200"
                          onClick={() => handleDelivered(payment)}
                        >
                          <LuClock2 className="text-lg" />
                          Mark as Delivered
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-green-500 font-medium">
                          Delivered
                        </span>
                        <FaRegCheckCircle className="text-green-500 text-xl" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for Small Devices */}
        <div className="space-y-4 p-4 md:hidden lg:hidden">
          {payments.map((payment, index) => (
            <div
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              key={payment._id}
            >
              <p className="font-bold text-lg text-center">
                Order #{index + 1}
              </p>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    Email:
                  </span>{" "}
                  {payment.email}
                </p>
                <p>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    Transaction ID:
                  </span>{" "}
                  {payment.transactionId}
                </p>
                <p>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    Date:
                  </span>{" "}
                  {payment.date}
                </p>
                <p className="flex items-center justify-between">
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    Status:
                  </span>
                  {payment.status === "pending" ? (
                    <button
                      onClick={() => handleDelivered(payment)}
                      className="btn btn-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200"
                    >
                      <LuClock2 className="text-lg" />
                      Mark as Delivered
                    </button>
                  ) : (
                    <span className="text-green-500 flex items-center gap-2">
                      Delivered <FaRegCheckCircle className="text-xl" />
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageBookings;
