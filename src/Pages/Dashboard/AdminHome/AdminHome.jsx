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
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
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
      <AnimatedComponent
        animation="zoom-in"
        delay={0}
        duration={1500}
        offset={100}
      >
        <div className="min-h-screen dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-6">
          {/* State section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Revenue */}
            <div className="p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Revenue</h3>
              <p className="text-3xl font-bold">${stats.revenue}</p>
            </div>

            {/* Users */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center gap-4">
              <FaUsers className="text-4xl text-white" />
              <div>
                <h3 className="text-xl font-semibold mb-2">All Users</h3>
                <p className="text-3xl font-bold">{stats.users}</p>
              </div>
            </div>
            {/* Products */}
            <div className="p-6 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-lg shadow-lg flex items-center gap-4">
              <AiOutlineProduct className="text-4xl text-white" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Products</h3>
                <p className="text-3xl font-bold">{stats.products}</p>
              </div>
            </div>
          </div>
          {/* Chart Section */}

          <div className="mt-12">
            <h2 className="text-2xl font-bold m-6 text-center">
              Products Statistics
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
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
      </AnimatedComponent>
    </>
  );
};

export default AdminHome;
