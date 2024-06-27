import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const PodcastExpand = ({ item, setVideoUrl, setExpanded }) => {
  const audioRef = useRef(null);
  const [isAudioPlaying, setAudioPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setAudioPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setAudioPlaying(false);
  };
  return (
    <div
      style={{ position: item.type == "audio" && "relative" }}
      className={`  border-gray-700 border-[1px] h-[320px] overflow-hidden group rounded bg-gray-100`}
    >
      {item.type === "audio" && (
        <span className="w-10 h-10 rounded-full flex items-center absolute bg-black/50 backdrop-filter-md top-4 right-4 z-[10] material-symbols-outlined text-white text-2xl justify-center ml-auto">
          music_note
        </span>
      )}

      {/* image */}
      {item.type === "audio" && (
        <img
          src={item.imageUrl}
          alt="pod-image"
          className="h-[320px] w-full transition-all ease-in-out duration-300"
        />
      )}

      {/* playing animation */}
      {item.type === "audio" && isAudioPlaying && (
        <img
          src={
            "https://i.pinimg.com/originals/a5/5a/68/a55a685b8375807667122027d72de120.gif"
          }
          alt="pod-image"
          className="w-16 absolute z-[3] mx-auto top-[90px] right-[calc(50%-32px)] rounded-full"
        />
      )}

      {item.type === "video" && (
        <div className={`h-[250px] bg-gray-200 `}>
          <iframe
            width="100%"
            height="100%"
            src={item.embedLink}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {/* overlay */}
      <div
        style={{ bottom: item.type == "audio" ? "70px" : 0 }}
        className={`relative  flex flex-col justify-between p-4 pt-2 ${
          item.type == "audio" ? "bg-black/70" : "bg-black"
        } ${item.type == "audio" && "backdrop-blur-md"}`}
      >
        <h3 className="text-white font-bold text-lg lg:text-xl flex items-center justify-between">
          {item.title}
          {item.type == "audio" && (
            <span
              onClick={isAudioPlaying ? handlePause : handlePlay}
              className="cursor-pointer material-symbols-outlined text-white text-3xl"
            >
              {!isAudioPlaying ? "play_arrow" : "pause"}
            </span>
          )}
          {/* {item.audioUrl} */}

          {item.type == "audio" && <audio ref={audioRef} src={item.audioUrl} />}

          {item.type == "video" && (
            <span
              title="expand"
              onClick={() => {
                setExpanded(true);
                setVideoUrl(item);
              }}
              className="cursor-pointer material-symbols-outlined ml-2 tex-4xl hover:bg-gray-200 hover:text-black duration-300 ease-in-out p-2 rounded-full font-semibold inline-block"
            >
              open_in_full
            </span>
          )}
        </h3>
        <span className="font-normal text-xs mb-2 text-white">
          {new Date(item?.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default PodcastExpand;
