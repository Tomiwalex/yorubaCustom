// import artifactImg from "../../../assets/images/artifact-image.jpg";

import NewsForm from "../general/NewsForm";

const StoreSection = () => {
  return (
    <div
      style={{
        backgroundPosition: "bottom",
      }}
      className="bg-[] py-16 relative bgimg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#4b0102] from-50% to-[#4b101299] z-[0]"></div>
      <div className="max-w-[1700px] mx-auto px-5 md:px-[50px] lg:px-[100px] relative index-[1]">
        <div className="bg-[#2b090a40] rounded-xl border-[#2b090a] border-[2px] backdrop-blur-lg px-5 md:px-[50px] lg:px-[100px] py-10 lg:py-16 ">
          <h2 className="text-2xl lg:text-3xl text-white font-bold">
            Join The Yoruba Custom Community
          </h2>
          <p className="text-white text-base mt-2 md:max-w-[350px] lg:max-w-[550px] mb-5">
            Catch all the gist about upcoming events, offers, products, and the
            things we are up to at Ile Adulawo sent directly to your inbox.
          </p>

          <NewsForm />
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
