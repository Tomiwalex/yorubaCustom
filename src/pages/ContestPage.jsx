import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../Components/ui/general/Footer";
import Header from "../Components/ui/general/Header";
import image from "../assets/images/slide-3-image.jpg";

const ContestPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phonenumber: "",
  });
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

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 mb-20">
          <div className="p-3 bg-[#F8F8F8] rounded-2xl flex justify-between gap-2 flex-wrap">
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

              <button
                onClick={() => setShowForm(true)}
                className="mt-3 text-white font-semibold text-base lg:text-lg px-5 bg-[#4b1012] rounded-[20px] p-3 w-full lg:w-max hover:bg-[#4b101280] duration-300 ease-in-out transition-all"
              >
                Vote now
              </button>
            </div>

            <div className="basis-full px-2 mb-4">
              <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">
                Contestants(2)
              </h3>

              {[1, 1, 1].map((item, index) => {
                return (
                  <div key={index} className="flex gap-3 my-2 items-center">
                    <span className="bg-gray-200 h-10 w-10 rounded-xl text-base font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-sm lg:text-base font-semibold">
                      Contestant name
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* form to vote */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed z-10 bg-[#00000090] backdrop-blur-sm inset-0 p-5 md:p-[50px] lg:p-[100px]"
          >
            <div className="rounded w-[100%] cursor-pointer md:max-w-[350px] bg-white p-4 ml-auto">
              {/* cancel button */}
              <span
                onClick={() => setShowForm(false)}
                className="material-symbols-outlined ml-auto inline-block hover:bg-red-100 p-2 rounded"
              >
                close
              </span>

              <h3 className="text-xl mt-4 lg:text:3xl text-gray-800 font-semibold">
                Vote
              </h3>

              <p className="text-sm lg:text-base text-gray-400 font-medium leading-[1.6] mt-1 max-w-[500px]">
                Fill in the form accurately to vote.
              </p>

              <form action="/vote/1" className="mt-7">
                <input
                  type="text"
                  className="w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  name="name"
                  id="name"
                />
                <input
                  type="email"
                  className="my-5 w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
                  value={formData.mail}
                  onChange={(e) =>
                    setFormData({ ...formData, mail: e.target.value })
                  }
                  placeholder="Your mail"
                  required
                  name="email"
                />

                <input
                  type="tel"
                  min="9"
                  max="12"
                  className="w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
                  value={formData.phonenumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phonenumber: e.target.value })
                  }
                  placeholder="Phone number"
                  required
                  name="phone number"
                />

                <input
                  className="cursor-pointer w-full bg-gray-800 text-white p-3 rounded text-base font-semibold mt-6"
                  type="submit"
                  value="Continue"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ContestPage;
