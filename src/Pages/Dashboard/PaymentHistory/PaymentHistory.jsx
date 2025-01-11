import { LuClock2 } from "react-icons/lu";
import usePayment from "../../../Hooks/usePayment";
import { FaRegCheckCircle } from "react-icons/fa";

const PaymentHistory = () => {
  const [payments] = usePayment();

  // console.log(paymentStatus);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-10">
        {/* Large and Medium Devices */}
        <div className="hidden md:block lg:block">
          <h2 className="text-2xl font-semibold mb-6 text-center text-pink-600 dark:text-pink-400">
            Payment History
          </h2>
          <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <table className="w-full text-left table-auto border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-pink-100 dark:bg-pink-600 text-gray-800 dark:text-white">
                  <th className="py-4 px-6">#</th>
                  <th className="py-4 px-6">Email</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Transaction ID</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {payments.map((payment, index) => (
                  <tr
                    key={payment._id}
                    className={`hover:bg-pink-50 dark:hover:bg-pink-700  ${
                      index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-700"
                        : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">{payment.email}</td>
                    <td className="py-4 px-6">${payment.price}</td>
                    <td className="py-4 px-6">{payment.transactionId}</td>
                    <td className="py-4 px-6 flex items-center">
                      {payment.status === "pending" ? (
                        <span className="text-red-600 dark:text-white flex items-center space-x-2">
                          <LuClock2 className="text-xl" />
                          <span className="mb-1">
                            Pending{" "}
                            <span className="loading loading-ball loading-md"></span>
                          </span>
                        </span>
                      ) : (
                        <span className="text-green-600 flex items-center space-x-2">
                          <FaRegCheckCircle className="text-xl" />
                          <span>Delivered</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small Devices */}
        <div className="block md:hidden lg:hidden space-y-6 mt-8">
          <h2 className="text-xl font-semibold text-center text-pink-600 dark:text-pink-400">
            Payment History
          </h2>
          {payments.map((payment, index) => (
            <div
              key={payment._id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg space-y-3"
            >
              <p className="text-pink-600 dark:text-pink-400 font-bold">
                Payment #{index + 1}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span> {payment.email}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Transaction ID:</span>{" "}
                {payment.transactionId}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Price:</span> ${payment.price}
              </p>
              <p className="text-sm flex items-center">
                <span className="font-semibold">Status:</span>{" "}
                {payment.status === "pending" ? (
                  <span className="ml-2 text-red-600 flex items-center space-x-2">
                    <LuClock2 className="text-lg" />
                    <span>Pending</span>
                  </span>
                ) : (
                  <span className="ml-2 text-green-600 flex items-center space-x-2">
                    <FaRegCheckCircle className="text-lg" />
                    <span>Delivered</span>
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
