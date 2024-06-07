import { Link } from "react-router-dom";
import Header from "../Components/ui/general/Header";
import Footer from "../Components/ui/general/Footer";

const BlogPage = () => {
  return (
    <div>
      <Header current={"blog"} />

      <section className="py-10 bg-[#4b101210] min-h-[100dvh]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <div className="blur-circle h-40 w-40 absolute blur-[70px] rounded-full z-[0]"></div> */}

          <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between align-top">
            <div className="mb-5 relative">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative z-[1]">
                Read our blog
              </h2>

              <p className="mt-5 font-normal text-base lg:textxl text-gray-800 max-w-[300px] relative z-[1]">
                With our blogs, you can gain insights into the Yoruba customs
                and traditions.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl mt-5">
            Recent blogs
          </h2>

          <div className="grid max-w-[1200px] grid-cols-1 mx-auto mt-3  sm:mt-5 sm:text-left sm:grid-cols-4 gap-y-8 gap-x-8 lg:gap-x-20">
            <Link to="/blog/1" className="relative group">
              <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-[120px] transition-all duration-300 transform group-hover:scale-125 lg:h-[180px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gelede_masquerade%2C_Benin%2C_Nigeria.jpg/1200px-Gelede_masquerade%2C_Benin%2C_Nigeria.jpg"
                  alt=""
                />
              </div>
              <p className="mt-6 text-sm font-normal text-gray-600 ">
                November 22, 2021
              </p>

              {/* title */}
              <p className="mt-2 text-lg font-bold text-gray-900">
                The Significance of the Gelede Festival
              </p>
              <a href="#" title="">
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </Link>

            <Link to="/blog/1" className="relative group">
              <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img
                  className="object-cover h-[120px] w-full lg:h-[180px] transition-all duration-300 transform group-hover:scale-125"
                  src="https://allnigerianfoods.com/wp-content/uploads/yoruba-foods1.jpg"
                  alt=""
                />
              </div>
              <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
                November 16, 2021
              </p>
              <p className="mt-2 text-lg font-bold text-gray-900 ">
                A Journey Through Yoruba Cuisine: Top Dishes to Try
              </p>
              <a href="#" title="">
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
