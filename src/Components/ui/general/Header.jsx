import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo-brown-2.jpg";
import brownLogo from "../../../assets/icons/logo-brown.png";

// eslint-disable-next-line react/prop-types
const Header = ({ type, current }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: type == 1 ? "#ffffff99" : "#fff" }}
      className=" lg:pb-0  backdrop-blur-sm"
    >
      <div className=" lg:py-5 py-3 px-5 md:px-[50px] lg:px-[100px]">
        <nav className="flex items-center justify-between h-10 lg:h-12">
          <div className="flex-shrink-0 mr-3  lg:flex-1">
            <Link to="/" title="" className="flex">
              <img
                style={{
                  bottom:
                    current == "store" || current === "home" ? "5px" : "0px",
                }}
                className="relative w-[70px] lg:w-[90px] h-auto"
                src={current === "store" ? brownLogo : logo}
                alt="logo"
              />
            </Link>
          </div>

          {/* search bar for the store */}
          {current === "store" && (
            <div className="transition-all duration-300 ease-in-out hover:shadow-lg shadow-[#4b1012] overflow-hidden flex items-center border-[1px] border-[#000000] rounded-md lg:mx-5">
              <input
                type="text"
                placeholder="Search"
                className="w-full max-w-xs focus:outline-none px-2"
              />

              <span className=" material-symbols-outlined text-base lg:text-xl bg-black text-white lg:py-2 py-[6px] px-[10px] lg:px-3 cursor-pointer">
                search
              </span>
            </div>
          )}

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
            {current !== "home" && (
              <Link
                to="/"
                className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
              >
                {" "}
                Home{" "}
              </Link>
            )}

            {current !== "blog" && current !== "store" && (
              <Link
                to="/blog"
                className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
              >
                {" "}
                Blog{" "}
              </Link>
            )}

            {current !== "about" && current !== "store" && (
              <Link
                to="/about"
                className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
              >
                {" "}
                About
              </Link>
            )}

            {current !== "contact" && (
              <Link
                to="/contact"
                className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
              >
                {" "}
                Contact
              </Link>
            )}

            <a
              href="#"
              title=""
              className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
            >
              {" "}
              Contest{" "}
            </a>

            {current !== "podcast" && current !== "store" && (
              <Link
                to="/podcast"
                className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
              >
                {" "}
                Podcast
              </Link>
            )}

            {current !== "gallery" && (
              <Link
                to="/gallery"
                className="text-base nav-link font-semibold text-[#4b1019] transition-all duration-200 "
              >
                {" "}
                Gallery
              </Link>
            )}
          </div>

          {current !== "store" && (
            <Link
              to="/store"
              title=""
              className=" items-center justify-center hidden px-4 py-3 ml-10 text-base  font-semibold text-white transition-all ease-in-out duration-300 bg-brown border border-transparent rounded-md lg:inline-flex hover:bg-[#4b010290] focus:bg-gradient from-[#4b010250] to-[#320303]"
              role="button"
            >
              {" "}
              Visit Store{" "}
            </Link>
          )}
        </nav>

        {/* for small device */}
        <nav
          className={`${
            navOpen ? "fadeIn" : "fadeOut"
          } py-7 mt-3 bg-white border border-gray-200 rounded-2xl shadow-md lg:hidden`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              {current !== "home" && (
                <Link
                  to="/"
                  title=""
                  className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  Home{" "}
                </Link>
              )}

              {current !== "about" && (
                <Link
                  to="/about"
                  title=""
                  className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  About{" "}
                </Link>
              )}

              {current !== "blog" && (
                <Link
                  to="/blog"
                  title=""
                  className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  Blog{" "}
                </Link>
              )}

              {current !== "contact" && (
                <Link
                  to="/contact"
                  title=""
                  className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  Contact{" "}
                </Link>
              )}
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                Contest{" "}
              </a>

              {current !== "gallery" && (
                <Link
                  to="gallery"
                  title=""
                  className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
                >
                  {" "}
                  Gallery{" "}
                </Link>
              )}

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-semibold text-[#4b1019] transition-all duration-200 hover:text-[#4b1012] focus:text-[#4b1012]"
              >
                {" "}
                Podcast{" "}
              </a>
            </div>
          </div>

          {current !== "store" && (
            <div className="px-6 mt-6">
              <Link
                to="/store"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-brown border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Visit Store{" "}
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
