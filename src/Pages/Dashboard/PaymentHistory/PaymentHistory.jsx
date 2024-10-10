import { LuClock2 } from "react-icons/lu";
import usePayment from "../../../Hooks/usePayment";
import { FaRegCheckCircle } from "react-icons/fa";

const PaymentHistory = () => {
  const [payments] = usePayment();

  return (
    <div>
      <h2 className="text-4xl">Total Payments : {payments.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    {payment.status === "pending" ? (
                      <>
                        <div className="flex items-center  space-x-4">
                          <span className="text-lg  text-red-600">Pending</span>

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
  );
};

export default PaymentHistory;
