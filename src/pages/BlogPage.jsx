/* eslint-disable no-unused-vars */
import Header from "../Components/ui/general/Header";
import Footer from "../Components/ui/general/Footer";
import BlogCard from "../Components/ui/blog/BlogCard";
import useGetData from "../hooks/useGetData";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";

const BlogPage = () => {
  const { data, loading, error } = useGetData("/blog");

  return (
    <div>
      <Header current={"blog"} />

      <section className="py-10 bg-[#4b101210] min-h-[100dvh] pb-20">
        <div className="px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-[1700px]">
          {/* <div className="blur-circle h-40 w-40 absolute blur-[70px] rounded-full z-[0]"></div> */}

          <div className="max-w-[1700px] mx-auto flex flex-wrap justify-between align-top">
            <div className="mb-5 relative">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative z-[1]">
                Read our blog
              </h2>

              <p className="mt-5 font-medium text-base lg:text-lg text-gray-800 max-w-[400px] relative z-[1]">
                With our blogs, you can gain insights into the Yoruba customs
                and traditions.
              </p>
            </div>
          </div>

          <hr className="my-10 h-[2px] bg-brown" />

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl mt-5 flex items-center">
            Latest blogs{" "}
            <span className="material-symbols-outlined ml-2">tab_recent</span>
          </h2>

          {error && (
            <div className="flex justify-center w-full mt-10">
              <ErrorPopup error={error + ", reload the page to refetch"} />
            </div>
          )}

          <div className="grid max-w-[1700px] grid-cols-1 mx-auto mt-3  sm:mt-5 sm:text-left sm:grid-cols-4 gap-3">
            {/* loading state */}
            {loading &&
              [1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <SkeletalLoading
                    backgroundColor={"white"}
                    key={index}
                    height={"400px"}
                    width={"100%"}
                  />
                );
              })}

            {data &&
              data?.data?.length &&
              !loading &&
              data?.data.map((item, index) => {
                if (index > data.data?.length - 5) {
                  return (
                    <BlogCard
                      item={item}
                      key={index}
                      index={index}
                      data={data?.data}
                    />
                  );
                }
              })}
          </div>

          {/* other blogs */}
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl  flex items-center mt-12 lg:mt-20">
            Other blogs
            <span className="material-symbols-outlined ml-2">tab_recent</span>
          </h2>

          <div className="grid max-w-[1700px] grid-cols-1 mx-auto mt-3  sm:mt-5 sm:text-left sm:grid-cols-4 gap-3">
            {/* loading state */}
            {loading &&
              [1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <SkeletalLoading
                    backgroundColor={"white"}
                    key={index}
                    height={"400px"}
                    width={"100%"}
                  />
                );
              })}

            {data &&
              data?.data?.length &&
              !loading &&
              data?.data.map((item, index) => {
                if (index < data.data?.length - 4) {
                  return (
                    <BlogCard
                      item={item}
                      key={index}
                      index={index}
                      data={data?.data}
                    />
                  );
                }
              })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
