import Header from "../Components/ui/general/Header";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";
import img from "../assets/images/podcast-image.png";
import useGetData from "../hooks/useGetData";

const PodcastPage = () => {
  const { data, loading, error } = useGetData("/podcast");

  return (
    <div className="">
      {/* <div className="sticky top-0 bg-white z-[6]"> */}
      <Header current={"podcast"} />
      {/* </div> */}

      <section className="p-5 lg:px-[50px] 2xl:px-[100px]">
        <div className="relative overflow-hidden max-w-[1700px] p-5 xl:p-20 mx-auto  mt-5 bg-[#4b101210] rounded flex justify-between items-center gap-y-10 flex-wrap">
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
          <h2 className="text-xl lg:text-2xl 2xl:text-4xl font-bold">
            Our Podcast
            <span className="material-symbols-outlined relative top-1 ml-2">
              podcasts
            </span>
          </h2>

          {/* the podcast */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10 gap-5">
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
                  <div
                    key={index}
                    className="h-[250px] relative overflow-hidden group rounded"
                  >
                    {/* image */}
                    {item.type === "audio" && (
                      <img
                        src={item.imageUrl}
                        alt="pod-image"
                        className="h-full w-full group-hover:scale-125 transition-all ease-in-out duration-300"
                      />
                    )}

                    {item.type === "video" && (
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.embedLink}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    )}

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/75 flex flex-col justify-between p-4">
                      <span className="material-symbols-outlined text-white text-2xl inline-block ml-auto">
                        {item.type === "audio" && "music_note"}
                      </span>

                      <h3 className="text-white font-bold text-2xl flex items-center">
                        {item.title}
                        <span className="material-symbols-outlined ml-2 tex-3xl font-semibold inline-block">
                          play_circle
                        </span>
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
