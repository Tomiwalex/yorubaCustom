import { Link } from "react-router-dom";
import BlogCard from "../blog/BlogCard";

const BlogSection = () => {
  return (
    <section className="py-20 bg-white lg:py-20 min-h-[100dvh] flex flex-col">
      <div className="mx-auto max-w-[1700px] px-5 h-full md:px-[50px] lg:px-[100px] ">
        <div className=" mx-auto flex flex-wrap justify-between align-top mb-7">
          <div className="mb-5">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
              Read our blog
            </h2>
            <p className="mt-2 font-normal text-gray-600 max-w-[300px]">
              With our blogs, you can gain insights into the Yoruba customs and
              traditions.
            </p>
          </div>

          <Link
            to="/blog"
            className=" font-bold color-brown inline-block p-3 lg:p-4 bg-[#4b101210] hover:bg-[#4b1012] transition-all duration-300 ease-in-out hover:text-white rounded-md max-h-[53px]"
          >
            Read more
          </Link>
        </div>

        <div className="h-full grid max-w-[1700px] grid-cols-1  mt-14  sm:mt-16 sm:text-left sm:grid-cols-3 gap-y-14 gap-x-5 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
