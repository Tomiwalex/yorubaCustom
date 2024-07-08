import Header from "../Components/ui/general/Header";
import image from "../assets/images/slide-3-image.jpg";

const ContestPage = () => {
  return (
    <div className="min-h-[100dvh] bg-[#4b101220]">
      <Header current="contest" />

      <section className="px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-[1700px] mt-10">
        <div className="border-b-[1px]  rounded-xl overflow-hidden">
          <div className=" flex rounded-sm overflow-hidden relative z-[1] group bg-cover items-end min-h-[330px] lg:min-h-[60dvh] text-white group">
            {/* bg image */}
            <div className="z-[0] overflow-hidden absolute rounded-lg top-0 bottom-0 w-full">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 "
                src={image}
                alt="blog-image"
              />
            </div>

            {/* overlay 2 */}
            <div className="bg-gradient-to-b from-[#00000040] to-[#000] absolute z-[1] top-0 bottom-0 w-full"></div>

            <div className="relative z-[1] p-5 mb-4 group-hover:mb-7 transition-all duration-300 ease-in-out">
              <p className="text-2xl lg:text-3xl font-extrabold">
                Vote for Your Favorite Contestant
              </p>
              <p className="mt-2 text-sm lg:text-base max-w-[500px] leading-[1.6] font-medium">
                Help us choose the winner by voting in our exciting contest. The
                contestant with the most votes will receive an amazing grand
                prize, and all participants will be entered into a drawing for
                additional prizes.
              </p>
            </div>
          </div>
        </div>

        <h1 className="mt-10 text-xl lg:text-2xl font-bold">
          Ongoing contests
        </h1>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
          <div className="p-3 bg-[#F8F8F8] rounded-[32px] flex justify-between gap-2 flex-wrap">
            <div className="w-full lg:w-[220px] rounded-[32px] overflow-hidden h-[150px] lg:h-[190px] bg-white block">
              <img
                src="https://png.pngtree.com/png-clipart/20200501/ourmid/pngtree-contest-watercolor-splash-short-sentence-copywriting-png-image_2196894.jpg"
                alt="product-image"
                className="w-full h-full hover:scale-110 object-cover transition-all ease-in-out duration-300"
              />
            </div>

            {/* details */}
            <div className="flex flex-col flex-1 lg:ml-2 lg:py-5 px-2 max-w-screen-sm:basis-full ">
              <h1 className="text-lg lg:text-xl font-bold">Demo contest</h1>
              <p className="mt-1 text-ellipsis text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>

              <button className="mt-3 text-white font-semibold text-base lg:text-lg px-5 bg-[#4b1012] rounded-[20px] p-3 w-full lg:w-max hover:bg-[#4b101280] duration-300 ease-in-out transition-all">
                Vote now
              </button>
            </div>

            <div className="basis-full px-2 mb-4">
              <h3 className="font-semibold text-lg lg:text-xl mt-4 mb-2">
                Contestants(2)
              </h3>

              {[1, 1, 1].map((item, index) => {
                return (
                  <p
                    key={index}
                    className="mt-3 border-gray-300 border-[1px] shasow-sm  p-4 rounded-[20px] text-sm lg:text-base font-semibold"
                  >
                    Contestant name
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContestPage;
