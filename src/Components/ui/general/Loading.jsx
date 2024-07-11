const Loading = () => {
  return (
    <div className="fade-in h-[100dvh] bg-black/90 w-[100dvw] fixed top-0 flex items-center justify-center z-[999]">
      <span className="loading-animation h-10 w-10 border-white border-l-[2px] border-t-2  rounded-full "></span>
    </div>
  );
};

export default Loading;
