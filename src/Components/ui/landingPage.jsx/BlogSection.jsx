import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="py-14 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between align-top">
          <div className="mb-5">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
              Read our blog
            </h2>
            <p className="mt-5 font-normal text-gray-600 max-w-[300px]">
              With our blogs, you can gain insights into the Yoruba customs and
              traditions.
            </p>
          </div>

          <Link
            to="/blog"
            className=" font-bold color-brown inline-block p-4 bg-[#4b101210] hover:bg-[#4b1012] transition-all duration-300 ease-in-out hover:text-white rounded-md max-h-[53px]"
          >
            Read more
          </Link>
        </div>

        <div className="grid max-w-[1200px] grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-4 gap-y-8 gap-x-8 lg:gap-x-20">
          <Link to="/blog/1" className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 lg:h-[180px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gelede_masquerade%2C_Benin%2C_Nigeria.jpg/1200px-Gelede_masquerade%2C_Benin%2C_Nigeria.jpg"
                alt=""
              />
            </div>
            <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
              November 22, 2021
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
              The Significance of the Gelede Festival
            </p>
            <a href="#" title="">
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </Link>

          <Link to="/blog/1" className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full lg:h-[180px] transition-all duration-300 transform group-hover:scale-125"
                src="https://allnigerianfoods.com/wp-content/uploads/yoruba-foods1.jpg"
                alt=""
              />
            </div>
            <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
              November 16, 2021
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
              A Journey Through Yoruba Cuisine: Top Dishes to Try
            </p>
            <a href="#" title="">
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
