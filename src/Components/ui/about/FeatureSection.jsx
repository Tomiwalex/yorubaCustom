/* eslint-disable react/no-unescaped-entities */
const FeatureSection = () => {
  return (
    <section className="py-20 bg-[#01350110]  sm:py-16 lg:py-[100px] cursor-pointer">
      <div className="px-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-2xl mb-3 font-bold text-gray-900 sm:text-4xl xl:text-4xl max-w-3xl mx-auto leading-[1.3]">
            OBJECTIVES
          </h2>
        </div>

        <div className="relative grid grid-cols-1 mt-10  sm:mt-16 sm:grid-cols-2 gap-4 md:grid-cols-4  xl:mt-24">
          <ul className="list-disc font-medium p-4 py-10 md:p-6 lg:p-8 relative rounded-md  bg-[#fff]  ">
            <li className="mt-5 text-base lg:text-lg text-gray-600">
              To put out the beauty of the Yoruba Culture and make people fall
              in love with it.
            </li>

            <li className="mt-5 text-base lg:text-lg text-gray-600">
              To correct people’s wrong impression about Yoruba tradition.
            </li>
          </ul>

          {/* second feature */}
          <ul className="list-disc font-medium p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative overflow-hidden rounded-md bg-[#fff] ">
            <li className="mt-5 text-base lg:text-lg text-gray-600">
              To project Yoruba Culture wide and beyond
            </li>
            <li className="mt-5 text-base lg:text-lg text-gray-600">
              To help people explore and learn about the mysteries and beauties
              of the Yoruba Heritage.
            </li>
          </ul>

          {/* third feature */}
          <ul className="list-disc font-medium p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative bg-[#fff] rounded-md  ">
            <li className="mt-5 text-base lg:text-lg text-gray-600 font-pj">
              To tell authentic and undiluted Yoruba stories.
            </li>
            <li className="mt-5 text-base lg:text-lg text-gray-600 font-pj">
              To connect Yoruba in diaspora to their root.
            </li>
          </ul>

          {/* fourth feature */}
          <ul className="list-disc font-medium p-4 py-10 md:p-6 lg:p-8 md:border-l md:border-gray-200 relative bg-[#fff] rounded-md  ">
            <li className="mt-5 text-base lg:text-lg text-gray-600 font-pj">
              To promote cultural exchange within the Yoruba in the diaspora.
            </li>
            <li className="mt-5 text-base lg:text-lg text-gray-600 font-pj">
              To connect with Yoruba origins and communities in other countries.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
