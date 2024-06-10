/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Header from "../general/Header";
import festivalImage from "../../../assets/images/festival.png";
import slide3Image from "../../../assets/images/slide-3-image.png";
import slide4Image from "../../../assets/images/slide-4-image.png";
import slide5Image from "../../../assets/images/slide-5-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className=" lg:min-h-[100dvh]  2xl:min-h-[95dvh] 2xlmin-h- flex flex-col bg-[#2b090a]">
      <div className="sticky top-0 z-[10]">
        <Header current="home" />
      </div>

      <div className="relative pb-12 lg:py-20 lg:pt-10 xl:pb-20 h-full flex-1 bg-[#2b090a] ">
        <div className="absolute inset-0  hidden lg:block">
          {/* yellow circle underlay */}
          <div className="absolute z-[1]  w-[45dvw] h-[45dvw]  left-[52dvw] bottom-[-5dvw] rounded-full bg-[#fcb92d90]"></div>

          {/*slider Image for large screen */}

          <Swiper
            className="w-[50%] ml-[50%] h-full"
            // effect={"fade"}
            modules={[EffectFade, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                className="object-left object-cover w-full h-full"
                src={festivalImage}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="object-cover object-right-bottom w-full h-full "
                src={slide3Image}
                alt="image 4"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="object-cover object-right w-full ml-auto h-full"
                src={slide5Image}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="object-cover object-left-bottom w-full ml-auto h-full"
                src={slide4Image}
                alt="image 5"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* text section */}
        <motion.div
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          className=" relative px-5 md:px-[50px] lg:px-[100px] z-[4] my-auto"
        >
          <div className="max-w-xl mx-auto text-center lg:justify-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0 lg:h-full xl:mt-[10%]  my-auto">
            <div className="blur-circle h-40 w-40 absolute blur-[70px] rounded-full z-[-1]"></div>

            <h1 className="mt-12 lg:mt-0 text-[36px] leading-[1.3] font-bold text-white lg:text-[65px] xl:leading-tight">
              Preserving Our Custom
            </h1>
            <p className="headline mt-8 text-base font-normal leading-7 text-[white] lg:max-w-md xl:pr-0 lg:pr-16">
              Yoruba customs provide a rich foundation for individuals to learn,
              unlearn, and relearn about the vibrant Yoruba traditions and
              Culture. By highlighting the splendor of Yoruba heritage, we're
              bringing the beauty of our ancestral legacy closer to you.
            </p>

            <Link
              to=""
              className="p-4 hover:shadow-[#fcb92d30] hover:shadow-lg transition-all duration-300 ease-in-out px-10 font-bold rounded-full text-white bg-[#FCB92D] mt-7 inline-block"
            >
              Explore
            </Link>
          </div>
        </motion.div>

        {/* hero image for small screen */}
        <div className="lg:hidden">
          <img
            className="object-cover w-full relative top-[43px] min-h-[340px]"
            src={festivalImage}
            alt="festival"
          />
        </div>

        {/* svg shape divider*/}
        <div className="custom-shape-divider-bottom-1717415849">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
