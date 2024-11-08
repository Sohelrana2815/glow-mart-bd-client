import { FaFacebook, FaGithub } from "react-icons/fa";
import logo_two from "../../assets/website logo/logo_tow.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-base-200 dark:bg-gray-700 dark:text-white text-base-content py-10  p-10 rounded-lg">
        <div className="relative">
          <img
            src={logo_two}
            className="md:w-24 w-12 md:left-0 md:top-0 -left-6  -top-3 absolute"
            alt=""
          />
        </div>
        <div className="footer footer-center  max-w-screen-xl mx-auto">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://github.com/Sohelrana2815" target="_blank">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/sha.dat.5036" target="_blank">
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              SOHEL Industries Ltd
            </p>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default Footer;
