import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300  ">
        <div className="min-h-screen flex flex-col px-4">
          <Navbar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
