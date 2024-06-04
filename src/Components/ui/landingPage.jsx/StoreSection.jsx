// import artifactImg from "../../../assets/images/artifact-image.jpg";

const StoreSection = () => {
  return (
    <div
      style={{
        backgroundPosition: "bottom",
      }}
      className="bg-[] py-16 relative bgimg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#4b0102] from-50% to-[#4b101299] z-[0]"></div>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 relative index-[1]">
        <h2 className="text-3xl text-white font-bold">Shop Yoruba Culture</h2>
        <p className="text-white text-base mt-2 md:max-w-[350px] lg:max-w-[550px]">
          Each item is crafted with care and carries the essence of our rich
          heritage. Explore our collection and find the perfect piece to connect
          with Yoruba culture.
        </p>

        <a
          href="#"
          className="inline-block p-4 bg-white rounded-md my-5 font-medium"
        >
          Visit Store
        </a>
      </div>
    </div>
  );
};

export default StoreSection;
