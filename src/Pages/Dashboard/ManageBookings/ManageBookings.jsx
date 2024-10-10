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
      title: "Are you sure?",
      text: `Make  new admin!`,
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
              title: "Updated!",
              text: ` is new admin`,
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
              <tr key={payment._id} className="hover">
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>
                  {payment.status === "pending" ? (
                    <>
                      <div className="flex items-center  space-x-4">
                        <span className="text-lg  text-red-600">Pending</span>
                        <button
                          className="text-lg btn btn-sm bg-red-600 text-white"
                          onClick={() => handleDelivered(payment)}
                        >
                          <LuClock2 />
                        </button>
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
    </>
  );
};

export default ManageBookings;
