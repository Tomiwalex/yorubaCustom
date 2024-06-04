/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Header from "../general/Header";
import festivalImage from "../../../assets/images/festival.png";
const HeroSection = () => {
  return (
    <section className="bg-[#4b010205] lg:max-h-dvh">
      <div className="relative pb-12 lg:py-20 lg:pt-10 xl:pb-20">
        <div className="sticky top-0 lg:top-[20px] z-[3] max-w-[1200px] md:mx-10 lg:mx-20 xl:mx-auto lg-mx-10 lg:rounded-xl mb-20">
          <Header type={1} current="home" />
        </div>

        <div className="absolute inset-0  hidden lg:block">
          <div className="absolute z-[2] w-[45%] h-full bg-white clip-path"></div>
          <div className="absolute z-[1] w-full h-full bg-[#4b010260]"></div>

          <img
            className="object-cover object-right-bottom w-100% ml-auto h-full"
            src={festivalImage}
            alt=""
          />
        </div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:z-[2] h-full">
          <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            <div className="blur-circle h-40 w-40 absolute blur-[70px] rounded-full z-[-1]"></div>
            <h1 className="text-[36px] leading-[1.3] font-bold color-brown sm:text-4xl xl:text-5xl xl:leading-tight">
              Preserving Our Cultural Heritage
            </h1>
            <p className="mt-8 text-base font-normal leading-7 text-[#4b0102] lg:max-w-md xl:pr-0 lg:pr-16">
              Yoruba customs provide a rich foundation for individuals to learn,
              unlearn, and relearn about the vibrant Yoruba traditions and
              Culture. By highlighting the splendor of Yoruba heritage, we're
              bringing the beauty of our ancestral legacy closer to you.
            </p>

            <h2 className="color-brown font-bold xl:mt-16 mt-8 my-2 text-xl">
              Subscribe to our news letter
            </h2>
            <div className="flex-wrap flex items-center justify-center  space-x-5  lg:justify-start">
              <form className="border-[2px] border-[#4b0102] flex justify-between items-center rounded-lg  text-sm mb-3">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                  className="focus:outline-none ml-2 inline-block bg-transparent"
                  required
                  autoComplete="off"
                />

                <input
                  type="submit"
                  value="Subscribe"
                  className=" hover:text-[#4b0102] font-bold focus:text-[#4b0102] focus:outline-none bg-brown p-3 lg:p-4 text-white transition-all duration-300 ease-in-out rounded-md hover:bg-white focus:bg-white hover:ring-[1px] hover:ring-[#4b1012]"
                />
              </form>

              {/* Watch video */}
              {/* <a
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-4
                            text-base
                            font-bold
                            leading-7
                            color-brown
                            mb-3
                           
                            bg-white
                            border-[2px] border-[#4b0102]
                            rounded-md
                            sm:px-4
                            
                            ] 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#4b0102] focus:ring-white
                            hover:bg-[#4b1012] hover:text-white focus:text-white transition-all duration-300 ease-in-out
                        "
                role="button"
              >
                Watch Video
              </a> */}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <img
            className="object-cover w-full relative top-[43px] min-h-[340px]"
            src={festivalImage}
            alt="festival"
          />
        </div>

        {/* svg */}
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
