import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo-brown-2.jpg";

// eslint-disable-next-line react/prop-types
const Header = ({ type, current }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: type == 1 ? "#ffffff99" : "#fff" }}
      className=" lg:pb-0 rounded-xl backdrop-blur-sm"
    >
      <div className=" mx-auto container max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex">
              <img
                className="w-[100px] lg:w-[120px] h-auto"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          <button
            onClick={() => setNavOpen(!navOpen)}
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {current !== "blog" && (
              <Link
                to="/blog"
                className="text-base nav-link font-medium text-black transition-all duration-200 "
              >
                {" "}
                Blog{" "}
              </Link>
            )}

            {current !== "home" && (
              <Link
                to="/"
                className="text-base nav-link font-medium text-black transition-all duration-200 "
              >
                {" "}
                Home{" "}
              </Link>
            )}

            <a
              href="#"
              title=""
              className="text-base nav-link font-medium text-black transition-all duration-200 "
            >
              {" "}
              About{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base nav-link font-medium text-black transition-all duration-200 "
            >
              {" "}
              Contact{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base nav-link font-medium text-black transition-all duration-200 "
            >
              {" "}
              Contest{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base nav-link font-medium text-black transition-all duration-200 "
            >
              {" "}
              Gallery{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base nav-link font-medium text-black transition-all duration-200 "
            >
              {" "}
              Podcast{" "}
            </a>
          </div>

          <a
            href="#"
            title=""
            className=" items-center justify-center hidden px-4 py-3 ml-10 text-base  font-semibold text-white transition-all ease-in-out duration-300 bg-brown border border-transparent rounded-md lg:inline-flex hover:bg-[#4b010290] focus:bg-[#4b010290]"
            role="button"
          >
            {" "}
            Visit Store{" "}
          </a>
        </nav>

        {/* for small device */}
        <nav
          className={`${
            navOpen ? "fadeIn" : "fadeOut"
          } py-7 mt-3 bg-white border border-gray-200 rounded-2xl shadow-md lg:hidden`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                About{" "}
              </a>

              {current !== "blog" && (
                <Link
                  to="/blog"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  Blog{" "}
                </Link>
              )}

              {current !== "home" && (
                <Link
                  to="/"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  Home{" "}
                </Link>
              )}

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                Contact{" "}
              </a>
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                Contest{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                Gallery{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                Podcast{" "}
              </a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="#"
              title=""
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-brown border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Visit Store{" "}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
