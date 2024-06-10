/* eslint-disable react/no-unescaped-entities */
import BlogSection from "../Components/ui/landingPage.jsx/BlogSection";
import FeaturesSection from "../Components/ui/landingPage.jsx/FeaturesSection";
import HeroSection from "../Components/ui/landingPage.jsx/HeroSection";
import Feature2 from "../Components/ui/landingPage.jsx/Feature2";
import Feature3Section from "../Components/ui/landingPage.jsx/Feature3Section";
import StoreSection from "../Components/ui/landingPage.jsx/StoreSection";
import Footer from "../Components/ui/general/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        overflowY: open ? "hidden" : "hidden",
        height: open ? "100dvh" : "auto",
      }}
      className={`relative overflow-x-hidden
        `}
    >
      {/* newsletter popup */}

      {open && (
        <motion.div
          animate={{ opacity: 1 }}
          className="p-5 absolute z-[999]  w-[100dvw] h-[100dvh] top-0 bottom-0 flex items-center bg-[#FCB92D10] backdrop-blur-sm opacity-0"
        >
          <div className="overflow-hidden lg:max-h-[270px] min-h-[200px] flex flex-wrap justify-between w-full max-w-[700px] mx-auto  my-auto bg-white rounded-2xl">
            <div className="basis-[100%] md:basis-[50%] overflow-hidden">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-kwanzaa-pattern-design_23-2149175630.jpg?t=st=1717591577~exp=1717595177~hmac=c7348f9e6b7e39f21bc07c8045e61e5896544787df5a8bbe5c85a84913f00ccd&w=740"
                className="object-cover  md:scale-150 object-center w-full h-[200px] md:h-full"
                alt="yellow pattern"
              />
            </div>

            <div className="relative cursor-pointer py-5 text-left basis-[100%] md:basis-[50%] bg-red">
              <span
                onClick={() => setOpen(false)}
                className="mx-5 ml-auto block hover:bg-red-400 transition-all duration-300 ease-in-out hover:text-white  bg-gray-200 rounded-md p-2 py-1 mb-4 w-9 material-symbols-outlined text-xl "
              >
                close
              </span>

              <h2 className="font-bold color-brown text-2xl lg:3xl px-4">
                Let's keep in touch
              </h2>

              <p className="px-5 text-sm lg:text-base max-w-[70%]  font-medium mt-1 text-gray-600">
                Subscribe to our news letter to get exciting offers and updates
              </p>

              <form className="relative  border-[1px] overflow-hidden w-[calc(100%-40px)] mx-auto lg:max-w-[300px]  mt-5 border-[#4b0102] flex justify-between items-center rounded-lg text-sm mb-3">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                  className="ml-2 focus:outline-none max-w-[70%] inline bg-transparent"
                  required
                  autoComplete="off"
                />

                <input
                  type="submit"
                  value="Subscribe"
                  className=" hover:text-[#4b0102] font-bold focus:text-[#4b0102] focus:outline-none bg-brown p-3 px-1 py-3 lg:p-4 text-white transition-all duration-300 ease-in-out rounded-md hover:bg-[#4b010210] focus:bg-[#4b010210] hover:ring-[1px] hover:ring-[#4b101290]"
                />
              </form>
            </div>
          </div>
        </motion.div>
      )}

      <div>
        <HeroSection />
        <FeaturesSection />
        <Feature3Section />
        <Feature2 />
        <StoreSection />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
