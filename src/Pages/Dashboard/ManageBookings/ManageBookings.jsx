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
      <div className="dark:bg-black dark:text-white min-h-screen">
        <SectionTitle heading="Manage bookings" subHeading="At a Glance!" />
        <div className="overflow-x-auto    hidden lg:block md:block mt-20">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr className="dark:text-white">
                <th>#</th>
                <th>Email</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id} className="dark:text-white">
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.date}</td>
                  <td>
                    {payment.status === "pending" ? (
                      <>
                        <div className="flex items-center  space-x-4 dark:text-white">
                          <span className="lg:text-lg md:text-sm  text-red-600">
                            Pending
                          </span>
                          <button
                            className="lg:text-lg  btn btn-sm bg-red-600 text-white"
                            onClick={() => handleDelivered(payment)}
                          >
                            <LuClock2 className="md:text-xs lg:text-lg" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className=" flex items-center 
                       space-x-2"
                        >
                          <span className="text-green-500 lg:text-lg md:text-xs  ">
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
        {/* For small devices */}
        <div className="p-2 space-y-4 dark:bg-black block md:hidden lg:hidden ">
          {payments.map((payment, index) => (
            <div
              className="border-2 p-2 rounded-lg border-success space-y-3 dark:text-white"
              key={payment._id}
            >
              <p className="text-center">{index + 1}</p>
              <p> Email : {payment.email}</p>
              <p> TransactionId : {payment.transactionId}</p>
              <p> Data : {payment.date}</p>
              <p>
                {payment.status === "pending" ? (
                  <>
                    <p className="flex items-center gap-2">
                      Status
                      <button
                        onClick={() => handleDelivered(payment)}
                        className="flex btn btn-sm flex-col items-center text-white bg-red-600 "
                      >
                        <LuClock2 />
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-green-500 flex items-center gap-2 text-lg ">
                      Delivered
                      <FaRegCheckCircle />
                    </p>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageBookings;
