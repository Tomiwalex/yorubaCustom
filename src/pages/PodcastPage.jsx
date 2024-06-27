import { useState } from "react";
import PodcastExpand from "../Components/ui/blog/podcastCard";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import Header from "../Components/ui/general/Header";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";
import img from "../assets/images/podcast-image.png";
import useGetData from "../hooks/useGetData";

const PodcastPage = () => {
  const { data, loading, error } = useGetData("/podcast");
  const [videoUrl, setVideoUrl] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#1a0607]">
      {/* <div className="sticky top-0 bg-white z-[6]"> */}
      <Header current={"podcast"} />
      {/* </div> */}

      {/* video play */}
      {isExpanded && (
        <div className="fixed top-0 z-[10] backdrop-blur-md inset-0 left-0 right-0 h-[100dvh] bg-black/80">
          <div className=" cursor-pointer bg-black p-4 flex justify-between items-center max-w-[100dvw]">
            <h2 className="text-white text-base lg:text-3xl font-semibold">
              Yorubacustom / {videoUrl.title}
            </h2>
            <span
              onClick={() => {
                setExpanded(false);
                setVideoUrl("");
              }}
              className="cursor-pointer material-symbols-outlined ml-2 tex-4xl text-white hover:bg-gray-200 hover:text-black duration-300 ease-in-out p-2 rounded-full font-semibold inline-block"
            >
              {" "}
              close_fullscreen
            </span>
          </div>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl.embedLink}
            title={videoUrl.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}

      <section className="p-5 lg:px-[50px] 2xl:px-[100px]">
        <div className="relative overflow-hidden max-w-[1700px] p-5 xl:p-20 mx-auto  mt-5 bg-gray-100 rounded flex justify-between items-center gap-y-10 flex-wrap">
          {/* underlay */}
          <span className="block w-[70dvw] h-[70dvw] max-w-[400px] max-h-[400px] border-[8px] border-white rounded-full z-[2] absolute top-[-10%] left-[-10%]"></span>

          <div className="md:basis-[48%] relative z-[2] max-w-[510px]">
            <h1 className="text-[#2b090a] font-bold text-4xl lg:text-[60px] relative z-[1] leading-[1.1] min-[1800px]:text-[80px]">
              Ọmọ Oòduà Creations Podcast
            </h1>

            <p className="font-medium mt-2 lg:mt-3 lg:text-xl  leading-[1.6] relative z-[1] min-[1800px]:text-2xl">
              Immerse yourself in the rich tapestry of Yoruba culture with the
              Yoruba Custom Creations Podcast.
            </p>
          </div>

          <div className="md:basis-[48%] basis-1/2 ">
            <span className="block bg-white w-[77dvw] max-w-full h-[77dvw] lg:leading-[1.1] lg:w-[350px] lg:h-[350px] xl:h-[500px] xl:w-[500px] lg:ml-[auto] 2xl:w-[600px] 2xl:h-[600px] rounded-full mx-auto"></span>
            <img
              src={img}
              alt="podcast-img"
              className="absolute  bottom-[0px] lg:bottom-0 w-[100%] left-[5%] lg:left-[auto] max-w-[100%] lg:w-[55%] lg:right-[-49px]"
            />
          </div>
        </div>
      </section>

      {/* podcast section */}
      <section className="p-5 lg:px-[50px] 2xl:px-[100px]">
        <div className="max-w-[1700px] mx-auto  mt-5">
          <h2 className="text-white text-xl lg:text-2xl 2xl:text-4xl font-bold">
            Our Podcast
            <span className="material-symbols-outlined relative top-1 ml-2">
              podcasts
            </span>
          </h2>

          {error && (
            <div className="flex justify-center w-full mt-10">
              <ErrorPopup error={error + ", reload the page to refetch"} />
            </div>
          )}

          {/* the podcast */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {/* loading state */}
            {loading &&
              [1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <SkeletalLoading
                    backgroundColor={"#e7e7e7"}
                    key={index}
                    height={"300px"}
                    width={"100%"}
                  />
                );
              })}

            {data &&
              data?.data?.length &&
              !loading &&
              data?.data.map((item, index) => {
                return (
                  <PodcastExpand
                    setVideoUrl={setVideoUrl}
                    setExpanded={setExpanded}
                    item={item}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
