/* eslint-disable react/no-unescaped-entities */
const FeatureSection = () => {
  return (
    <section className="py-20 bg-[#01350110]  sm:py-16 lg:py-[100px] cursor-pointer">
      <div className="px-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-2xl mb-3 font-bold text-gray-900 sm:text-4xl xl:text-4xl max-w-3xl mx-auto leading-[1.3]">
            Our Objectives
          </h2>
        </div>

        <div className="relative grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-8 gap-y-10 md:grid-cols-4 md:gap-2 xl:mt-24">
          <div className="p-4 py-10 md:p-6 lg:p-8 relative rounded-md  bg-[#fff] lg:mx-3 ">
            {/* bg image*/}
            <span className="material-symbols-outlined text-[45px] font-medium text-[#4b1012]">
              analytics
            </span>

            <h3 className=" text-xl lg:text-3xl font-bold text-[#4b1012] font-pj">
              Preservation{" "}
            </h3>

            <p className="mt-5 text-base text-gray-600">
              To preserve the rich heritage of the Yoruba people by documenting
              and sharing traditional practices, stories, and art forms.
            </p>
          </div>

          {/* second feature */}
          <div className="p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative overflow-hidden rounded-md bg-[#fff] lg:mx-3">
            <span className="material-symbols-outlined text-[45px] font-medium text-[#4b2601]">
              video_library
            </span>
            <h3 className="text-xl lg:text-3xl font-bold text-[#4b2601]">
              Promotion
            </h3>

            <p className="mt-5 text-base text-gray-600">
              To promote Yoruba culture globally, fostering appreciation and
              understanding across different cultures and communities.
            </p>
          </div>

          {/* third feature */}
          <div className="p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative bg-[#fff] rounded-md lg:mx-3 ">
            <span className="material-symbols-outlined text-[45px] font-medium text-[#013501]">
              auto_stories
            </span>

            <h3 className="text-xl lg:text-3xl font-bold text-[#013501]">
              Education
            </h3>

            <p className="mt-5 text-base text-gray-600 font-pj">
              To educate both young and old about the significance and beauty of
              Yoruba traditions, ensuring that knowledge is passed down through
              generations.
            </p>
          </div>

          {/* fourth feature */}
          <div className="p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative bg-[#fff] rounded-md lg:mx-3 ">
            <span className="material-symbols-outlined text-[45px] font-medium text-[#FCB92D]">
              category
            </span>
            <h3 className="text-xl lg:text-3xl font-bold text-[#FCB92D]">
              Empowerment
            </h3>

            <p className="mt-5 text-base text-gray-600 font-pj">
              To empower local artisans and cultural practitioners by providing
              a platform for their work, thereby sustaining traditional crafts
              and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
