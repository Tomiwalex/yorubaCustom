import Header from "../Components/ui/general/Header";
import Footer from "../Components/ui/general/Footer";
import BlogCard from "../Components/ui/blog/BlogCard";

const BlogPage = () => {
  return (
    <div>
      <Header current={"blog"} />

      <section className="py-10 bg-[#4b101210] min-h-[100dvh]">
        <div className="px-5 md:px-[50px] lg:-[100px] mx-auto max-w-[1700px]">
          {/* <div className="blur-circle h-40 w-40 absolute blur-[70px] rounded-full z-[0]"></div> */}

          <div className="max-w-[1700px] mx-auto flex flex-wrap justify-between align-top">
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

          <div className="grid max-w-[1700px] grid-cols-1 mx-auto mt-3  sm:mt-5 sm:text-left sm:grid-cols-4 gap-y-8 gap-x-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
