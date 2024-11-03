import { LuClock2 } from "react-icons/lu";
import usePayment from "../../../Hooks/usePayment";
import { FaRegCheckCircle } from "react-icons/fa";

const PaymentHistory = () => {
  const [payments] = usePayment();

  // console.log(paymentStatus);

  return (
    <>
      <div className="dark:bg-black min-h-screen dark:text-white">
        {/* This Code is for md and large devices */}
        <div className="hidden md:block lg:block">
          <h2 className="text-lg p-4 font-medium">
            Total Payments : {payments.length}
          </h2>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="dark:text-white">
                    <th>#</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Transaction Id</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={payment._id}>
                      <th>{index + 1}</th>
                      <td className="text-base">{payment.email}</td>
                      <td className="text-base">${payment.price}</td>
                      <td>{payment.transactionId}</td>
                      <td>
                        {payment.status === "pending" ? (
                          <>
                            <div className="flex items-center  space-x-4">
                              <span className="text-lg  text-red-600">
                                Pending
                              </span>

                              <LuClock2 />
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className=" flex items-center 
                       space-x-2"
                            >
                              <span className="text-green-500 text-lg">
                                Delivered
                              </span>
                              <FaRegCheckCircle className="text-green-500 text-lg" />
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* This Code is for small devices */}
        <div className="block md:hidden lg:hidden py-5">
          {payments.map((payment) => (
            <div
              key={payment._id}
              className="p-3 space-y-5 border-2 border-primary max-w-sm rounded-lg mx-auto"
            >
              <p>Email : {payment.email}</p>
              <p>
                Transaction Id :{" "}
                <span className="text-sm">{payment.transactionId}</span>
              </p>
              <p>Price : ${payment.price}</p>
              <p className="flex items-center">
                Price : {payment.status}{" "}
                <LuClock2 className="ml-3 text-red-600 text-xl" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
