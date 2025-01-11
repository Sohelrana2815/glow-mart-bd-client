/* eslint-disable react/no-unescaped-entities */
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="h-20 bg-gray-300 flex items-center justify-center gap-x-6">
        <p className="flex items-center gap-x-2">
          <FaHome />
          <Link to="/">
            <span className="link">Home</span>
          </Link>
          <span className="border w-10 ml-3 border-black"></span>
        </p>
        <h2>Page Not Found</h2>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen space-y-8 w-3/4 mx-auto text-center">
        <h2 className="text-5xl font-semibold">Page Not Found</h2>
        <p className="text-[200px]">404</p>
        <p className="text-4xl">Oops! That page can't be found.</p>
        <p className="text-xl">
          Sorry, but the page you are looking for is not found. Please, make
          sure you have typed the current URL.
        </p>
        <Link to="/">
          <button className="px-14 py-3 bg-black text-white rounded">
            Go To Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
