import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiVisa, SiMastercard, SiGooglepay, SiApplepay } from "react-icons/si";
const Footer = () => {
  const handlePrevent = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <footer className="bg-base-200 dark:bg-gray-700 dark:text-white text-base-content py-10 px-6 md:px-10 rounded-lg">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {/* Column 1: Links */}
            <div>
              <h2 className="font-bold text-lg mb-4">Quick Links</h2>
              <nav className="grid grid-flow-row gap-2">
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press Kit</a>
              </nav>
            </div>

            {/* Column 2: Newsletter */}
            <div>
              <h2 className="font-bold text-lg mb-4">
                Subscribe to our Newsletter
              </h2>
              <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input py-4 md:py-0 input-bordered w-full input-xs md:input-md flex-1"
                />
                <button
                  onClick={handlePrevent}
                  className="btn bg-pink-500 border-none text-white w-full sm:w-auto px-6 "
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h2 className="font-bold text-lg mb-4">Follow Us</h2>
              <div className="flex flex-wrap gap-4 text-2xl">
                <a
                  href="https://github.com/Sohelrana2815"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/sha.dat.5036"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter className="hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="hover:text-pink-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-600 my-6"></div>

          {/* Payment Options and Copy */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Payment Options */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-3xl dark:bg-white  px-4 rounded">
              <SiVisa className="text-blue-600 " />
              <SiMastercard className="text-red-600" />
              <SiGooglepay className="text-gray-800" />
              <SiApplepay className="text-black" />
            </div>

            {/* Copy */}
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} - All rights reserved by SOHEL
              Industries Ltd
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
