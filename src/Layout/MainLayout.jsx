import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white transition-colors duration-300 ">
        <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col px-4">
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
