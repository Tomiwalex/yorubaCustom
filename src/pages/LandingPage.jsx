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
import NewsForm from "../Components/ui/general/NewsForm";

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
          <div className="overflow-hidden  min-h-[250px] flex flex-wrap justify-between w-full max-w-[700px] mx-auto  my-auto bg-white rounded-2xl">
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
                Join The Yoruba Custom Community
              </h2>

              <p className="px-5 text-sm lg:text-base mb-5  font-medium mt-1 text-gray-600">
                Catch all the gist about upcoming events, offers, products, and
                the things we are up to at Yoruba Custom sent directly to your
                inbox.
              </p>

              <NewsForm type={2} />
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
