import { Link } from "react-router-dom";
import whiteLogo from "../../../assets/icons/logo-white.png";

import NewsForm from "../general/NewsForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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

              <Link
                to="/contest"
                className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
              >
                Vote now
              </Link>
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

          <div className="flex items-center gap-5">
            <a href="mailto:yorubacustoms@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
            </a>

            <a href="https://www.tiktok.com/@yorubacustoms?_t=8ngWB4MBqSc&_r=1">
              <FontAwesomeIcon icon={faTiktok} size="2x" color="white" />
            </a>

            <a href="http://youtube.com/@yorubacustoms">
              <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
            </a>

            <a href="https://www.instagram.com/yorubacustoms?utm_source=qr&igsh=MW1pYWhqMXY0bTc2Mg==">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
