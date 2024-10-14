import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content rounded p-10">
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
            Copyright © {new Date().getFullYear()} - All right reserved by SOHEL
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
