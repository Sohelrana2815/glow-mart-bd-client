import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineProduct } from "react-icons/ai";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaUsers } from "react-icons/fa";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

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

  // Custom Shape For The BarCart

  return (
    <>
      <div className="min-h-screen dark:bg-black">
        {/* states */}
        <div className="stats stats-vertical lg:stats-horizontal shadow ">
          <div className="stat">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-title">All Users</div>
            <div className="stat-value flex items-center gap-2">
              <FaUsers />
              {stats.users}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Products</div>
            <div className="stat-value flex items-center gap-2">
              <AiOutlineProduct />
              {stats.products}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="flex flex-col lg:flex-row md:flex-row mt-10 gap-6 ">
          {/* Triangle Bar Chart */}
          <div className="md:w-full">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar
                  dataKey="quantity"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
