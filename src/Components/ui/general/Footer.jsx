import { Link } from "react-router-dom";
import whiteLogo from "../../../assets/icons/logo-white.png";

import NewsForm from "../general/NewsForm.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#2b090a]">
      <div className="container max-w-[1700px] px-5 md:px-[50px] lg:px-[100px] py-12 pt-16 mx-auto">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight mb-2 text-white  xl:text-2xltext-white">
              Join The Yoruba Custom Community
            </h1>

            <NewsForm />
          </div>

          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="/"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Home
              </Link>

              <Link
                to="/blog"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Blog
              </Link>

              <Link
                to="/about"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Company</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="/store"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Store
              </Link>

              <Link
                to="/gallery"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Gallery
              </Link>

              <a
                href="#"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Contest
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 " />

        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="w-[110px] h-auto"
              src={whiteLogo}
              alt="white-logo"
            />
          </Link>

          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500 "
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
