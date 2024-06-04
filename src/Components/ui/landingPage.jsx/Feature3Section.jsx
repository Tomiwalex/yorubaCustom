/* eslint-disable react/no-unescaped-entities */
const Feature3Section = () => {
  return (
    <section className="py-14 bg-[#01350110] shadow-sm shadow-black sm:py-16 lg:py-20 cursor-pointer">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-4xl max-w-3xl mx-auto leading-[1.6]">
            Why we are your “go to” guy for Yoruba culture and heritage
          </h2>
        </div>

        <div className="relative grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-8 gap-y-8 md:grid-cols-4 md:gap-0 xl:mt-24">
          <div className="p-4 py-10 md:p-6 lg:p-8 relative rounded-3xl  bg-[#fff] lg:mx-3 ">
            {/* bg image*/}
            <span className="material-symbols-outlined text-[45px] font-medium text-[#4b1012]">
              analytics
            </span>

            <h3 className=" text-xl lg:text-3xl font-bold text-[#4b1012] font-pj">
              Accurate data and fact
            </h3>

            <p className="mt-5 text-base text-gray-600">
              Our platform is designed to enrich your understanding of Yoruba
              traditions, making research an enjoyable experience. With a wealth
              of perfect material tailored for each user, we ensure that
              everyone can delve into the depths of Yoruba cultural heritage
            </p>
          </div>

          {/* second feature */}
          <div className="p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative overflow-hidden rounded-3xl bg-[#fff] lg:mx-3">
            <span className="material-symbols-outlined text-[45px] font-medium text-[#4b2601]">
              video_library
            </span>
            <h3 className="text-xl lg:text-3xl font-bold text-[#4b2601]">
              Videos
            </h3>

            <p className="mt-5 text-base text-gray-600">
              We bring you periodic cultural events amongst the Yoruba people.
              Enjoy the fun wherever you’re in the world
            </p>
          </div>

          {/* third feature */}
          <div className="p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative bg-[#fff] rounded-3xl lg:mx-3 ">
            <span className="material-symbols-outlined text-[45px] font-medium text-[#013501]">
              auto_stories
            </span>

            <h3 className="text-xl lg:text-3xl font-bold text-[#013501]">
              Traditional Stories
            </h3>

            <p className="mt-5 text-base text-gray-600 font-pj">
              We’re fascinated by our history and can’t wait to share these
              fascinating narratives with you. Join our community as we explore
              the depths of Yoruba heritage and the treasures of our ancestral
              inheritance.
            </p>
          </div>

          {/* fourth feature */}
          <div className="p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative bg-[#fff] rounded-3xl lg:mx-3 ">
            <span className="material-symbols-outlined text-[45px] font-medium text-[#FCB92D]">
              category
            </span>
            <h3 className="text-xl lg:text-3xl font-bold text-[#FCB92D]">
              Merchandize
            </h3>

            <p className="mt-5 text-base text-gray-600 font-pj">
              We're not just storytellers of our culture; we bring the essence
              of Yoruba traditions right to your doorstep. Our online store
              grants you the convenience to acquire traditional Yoruba items,
              including revered Yoruba religious symbols and totems, at
              competitive prices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3Section;
