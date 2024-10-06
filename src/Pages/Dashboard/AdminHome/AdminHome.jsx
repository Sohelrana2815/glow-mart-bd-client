import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  }); 

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaDollarSign className="text-2xl" />
        </div>
        <div className="stat-title">Revenue</div>
        <div className="stat-value">${stats.revenue}</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaUsers className="text-2xl" />
        </div>
        <div className="stat-title">Users</div>
        <div className="stat-value">{stats.users}</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaBasketShopping className="text-2xl" />
        </div>
        <div className="stat-title">Products</div>
        <div className="stat-value">{stats.products}</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <BiSolidPurchaseTag className="text-2xl" />
        </div>
        <div className="stat-title">Orders</div>
        <div className="stat-value">{stats.orders}</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default AdminHome;
