import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#4b0102] from-80% to-[#4b0102]">
      <div className="container max-w-[1200px] px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white  xl:text-2xltext-white">
              Subscribe our newsletter to get update.
            </h1>

            <form className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2  rounded-md bg-white text-gray-700 border-gray-600  focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
                required
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Home
              </a>
              <Link
                to="/blog"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Blog
              </Link>

              <a
                href="#"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                About
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Company</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Store
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Gallery
              </a>
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
          <a href="#">
            <img
              className="w-[110px] h-auto"
              src="/public/icons/logo-white.png"
              alt=""
            />
          </a>

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
