const FeaturesSection = () => {
  return (
    <section className="py-12 bg-[#4b010210] sm:py-16 lg:py-20 cursor-pointer">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight color-brown sm:text-4xl xl:text-5xl max-w-3xl mx-auto ">
            Ṣíṣe Àfihàn Ogún Àṣà Wa
          </h2>

          <h3 className="text-[#013501] text-xl font-bold mt-3">
            (Showcasing our cultural inheritance)
          </h3>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 max-w-4xl mx-auto">
            Ìran àwọn ọ̀dọ́lè pàdánù òtítọ́àwon àṣà wa. Ní “Àṣà Yorùbá”, a ti yà
            ara wá sọ́tọ̀fún ìgbéga, títọ́jú, àti ṣíṣe ayẹyẹ ogún àṣà ìbílẹ̀ wa àti
            rírí i dájú pé ògo àwọn àṣà wa wà ní àrọ́wọ́tó àti ìyàlẹ́nu gbogbo
            ènìyàn
          </p>
        </div>

        <div className="relative grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="p-6 py-10 md:p-8 lg:p-14 relative rounded-3xl  bg-[#4b1012] lg:mx-3 ">
            {/* bg image*/}
            <h3 className=" text-xl lg:text-3xl font-bold text-white font-pj">
              Educative
            </h3>

            <p className="mt-5 text-base text-white">
              Our platform is designed to enrich your understanding of Yoruba
              traditions, making research an enjoyable experience. With a wealth
              of perfect material tailored for each user, we ensure that
              everyone can delve into the depths of Yoruba cultural heritage
            </p>
          </div>

          {/* second feature */}
          <div className="p-6 py-10 md:p-8 lg:p-14 md:border-l md:border-gray-200 relative overflow-hidden rounded-3xl bg-[#4b2601] lg:mx-3">
            <h3 className="text-xl lg:text-3xl font-bold text-white ">
              Entertaining
            </h3>

            <p className="mt-5 text-base text-white font-pj">
              We bring you periodic cultural events amongst the Yoruba people.
              Enjoy the fun wherever you’re in the world
            </p>
          </div>

          {/* third feature */}
          <div className="p-6 py-10 md:p-8 lg:p-14 md:border-l md:border-gray-200 relative bg-[#013501] rounded-3xl lg:mx-3 ">
            <h3 className="text-xl lg:text-3xl font-bold text-white">
              Dynamic
            </h3>

            <p className="mt-5 text-base text-white font-pj">
              Our offerings extend beyond imparting theoretical knowledge of our
              culture; we provide the unique opportunity to own a piece of the
              Yoruba traditional religion by purchasing authentic Yoruba totems
              and symbols directly from our website. .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
