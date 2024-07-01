/* eslint-disable no-unused-vars */
import Header from "../Components/ui/general/Header";
import { motion } from "framer-motion";
import useGetData from "../hooks/useGetData";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import { useState } from "react";
import Footer from "../Components/ui/general/Footer";

const GalleryPage = () => {
  const { data, loading, error } = useGetData("/gallery");
  const [type, setType] = useState("All");
  const [activeImage, setActiveImage] = useState("");

  return (
    <div>
      <Header current="gallery" />

      <div className="border-b-[1px]">
        <div className="text-white p-4  md:px-[50px] lg:px-[100px] max-w-[1700px] mx-auto bg-[#4b1012] border-b-[#260506] flex item-center">
          {["All", "Images", "Video"].map((item, index) => {
            return (
              <p
                onClick={() => setType(item)}
                key={index}
                className={`font-medium px-3 nav-link-wide ${
                  item == type && "active-type"
                } cursor-pointer`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      {/* <div className="font-julee text-[#fcb92d] py-20 px-5 lg:p-[120px] bg-[#2b090a99]  lg:text-center relative overflow-hidden min-h-[50dvh]">
        <img
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/yoruba-hausa-ibo-musicians-2-paul-gbolade-omidiran.jpg"
          alt="image"
          className="absolute w-full inset-0 z-[-1] object-cover h-full"
        />

        <h1 className="text-3xl lg:text-7xl font-extrabold">
          Explore the Richness of Yoruba Culture
        </h1>
        <p className="font-semibold text-base lg:text-xl mt-3 leading-[1.6]">
          Welcome to the Yoruba Custom Gallery, a visual journey through the
          vibrant and diverse world of Yoruba culture. Here, we showcase the
          artistry, craftsmanship, and traditions that define our heritage. Each
          piece in our gallery tells a story, reflecting the beauty, wisdom, and
          spirit of the Yoruba people.
        </p>
      </div> */}

      <section className="bg-[#4b101210] py-16 lg:py-20">
        <div className="max-w-[1700px] mx-auto px-5 md:px-[50px] lg:px-[100px]">
          <h1 className="text-2xl lg:text-3xl font-bold color-brown flex items-center">
            {type}
            <span className="material-symbols-outlined ml-2">ssid_chart</span>
          </h1>

          {error && (
            <div className="flex justify-center w-full mt-10">
              <ErrorPopup error={error + ", reload the page to refetch"} />
            </div>
          )}

          {/* image expand */}
          {activeImage && (
            <div className="bg-black/80 z-[10] backdrop-blur-md fixed top-0 left-0 right-0 h-[100dvh] cursor-pointer">
              <div className="text-white flex justify-between items-center p-5 bg-black text-base lg:text-2xl font-semibold">
                <h1 className="text-white">{activeImage?.title}</h1>
                <span
                  onClick={() => setActiveImage("")}
                  className="material-symbols-outlined "
                >
                  close
                </span>
              </div>

              <img
                src={activeImage?.imageUrl}
                className="h-full object-contain mx-auto"
                alt=""
              />
            </div>
          )}

          {/* the art grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-2 gap-y-5 mt-12 ">
            {loading &&
              [1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <SkeletalLoading
                    backgroundColor={"white"}
                    key={index}
                    height={"300px"}
                    width={"100%"}
                  />
                );
              })}

            {data &&
              data?.data?.length &&
              !loading &&
              data.data.map((item, index) => {
                return (
                  <motion.div
                    onClick={() => item.type == "image" && setActiveImage(item)}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    key={index}
                    className="bg-white rounded shadow-sm overflow-hidden cursor-pointer"
                  >
                    {/* image */}
                    <div className="relative lg:h-[290px] group overflow-hidden aspect-w-9 aspect-h-16 h-[270px]">
                      <img
                        className="h-full object-cover w-full  transition-all duration-300 transform group-hover:scale-125"
                        src={item.imageUrl}
                        alt={`${item.title} image`}
                      />

                      {item.type == "image" && (
                        <span className="material-symbols-outlined absolute top-2 right-3 text-white text-3xl font-bold z-[1]">
                          image
                        </span>
                      )}
                      {item.type == "video" && (
                        <a href={item?.externalLink} target="_blank">
                          <span className="material-symbols-outlined absolute top-[calc(50%-30px)] right-[calc(50%-30px)] text-white text-6xl font-semibold z-[1]">
                            play_arrow
                          </span>
                        </a>
                      )}
                    </div>

                    {/* title */}
                    <p className="mt-3 text-lg font-bold text-gray-900 px-4">
                      {item.title}
                    </p>

                    {/* description */}
                    <p className="text-sm font-normal text-gray-500 p-4 pt-1">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
