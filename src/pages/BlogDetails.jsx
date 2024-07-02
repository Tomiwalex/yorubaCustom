/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Footer from "../Components/ui/general/Footer";
import Header from "../Components/ui/general/Header";
import useGetData from "../hooks/useGetData";
import { Link, useParams } from "react-router-dom";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import usePostData from "../hooks/usePostData";
import SuccessPopup from "../Components/ui/general/SuccessPopup";

const BlogDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const { data, loading, error, fetchData } = useGetData(`/blog/${id}`);
  const { data: otherData } = useGetData("/blog");
  const url = window.location.href;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const {
    data: postMeg,
    error: postError,
    loading: postLoading,
    postData,
    setData,
  } = usePostData(`/blog/comment/${id}`);

  const handleShare = async () => {
    try {
      await navigator.share({
        url,
        title: data?.data.title,
        text: "Check out this blog on Yoruba customs and traditions",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData(formData);
    setFormData({
      name: "",
      email: "",
      comment: "",
    });

    fetchData();
  };

  // console.log(data?.description);

  return (
    <div>
      <div className="sticky top-0 z-[2] shadow-sm">
        <Header current={"blog"} />
      </div>

      {loading && (
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 my-10">
          <SkeletalLoading
            width={"100%"}
            height={"60dvh"}
            backgroundColor={"#d6d6d6"}
          />
          <SkeletalLoading
            width={"100%"}
            height={"40px"}
            backgroundColor={"#d6d6d6"}
          />
          <SkeletalLoading
            width={"100%"}
            height={"40px"}
            backgroundColor={"#d6d6d6"}
          />
          <SkeletalLoading
            width={"100%"}
            height={"40px"}
            backgroundColor={"#d6d6d6"}
          />
          <SkeletalLoading
            width={"100%"}
            height={"40px"}
            backgroundColor={"#d6d6d6"}
          />
        </div>
      )}

      {data && (
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 my-10">
          <hr className="my-10 h-1 bg-brown" />
          {/* <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"> */}
          <img
            className="max-h-[60dvh] object-cover w-full max-w-[550px] h-auto transition-all duration-300 transform hover:scale-95 mb-5 rounded lg:float-start float-left lg:mr-[50px]"
            src={data?.data?.imageUrl}
            alt=""
          />
          {/* </div> */}

          {/* blog topic */}
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl relative z-[1]">
            {data?.data.title}
          </h2>

          {/* post date */}
          <p className="mt-4 text-sm font-bold text-gray-500 ">
            {new Date(data?.data.date).toDateString()}
          </p>

          {/* Action Buttons */}
          <div className="mt-4 cursor-pointer">
            <b
              onClick={handleShare}
              className="inline-flex text-sm lg:text-xl font-medium items-center p-4 bg-[#4b1012]  text-white hover:bg-white hover:text-[#4b1012] ring-2 ring-[#4b1012] transition-all duration-300 ease-in-out"
            >
              <span className="material-symbols-outlined mr-2">share</span>
              Share Post
            </b>
          </div>

          {/* post content */}
          <div className="quill-div cursor-pointer mt-10 lg:mt-12">
            <div dangerouslySetInnerHTML={{ __html: data.data.description }} />
          </div>

          <hr className="my-12 lg:my-16" />

          {/* others || comment  */}
          <div className="">
            <div className="">
              <div className="flex items-center gap-x-5 cursor-pointer">
                <h3
                  onClick={() => setShowForm(false)}
                  className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center"
                >
                  Comments({data?.data?.comments?.length})
                  <span className="material-symbols-outlined ml-1">
                    reviews
                  </span>
                </h3>

                <h3
                  onClick={() => setShowForm(true)}
                  className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center"
                >
                  Make a comment
                  <span className="material-symbols-outlined ml-1">edit</span>
                </h3>
              </div>

              {/* comments */}
              {!showForm && (
                <div className="my-7 flex gap-5 flex-wrap">
                  {data?.data?.comments?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="rounded bg-gray-100 p-4 md:basis-[45%] lg:basis-[32%] cursor-pointer"
                      >
                        {/* name */}
                        <h3 className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center mt-2">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm lg:text-base text-gray-500 font-medium leading-[1.6]">
                          {item.comment}
                        </p>

                        <p className="text-xs lg:text-sm text-gray-600 font-medium leading-[1.6] mt-2">
                          {" "}
                          {new Date(item.createdAt).toDateString()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* comment form */}
            {showForm && (
              <form
                action=""
                className="my-4 max-w-[350px] mt-5"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h2 className="text-lg lg:text:xl font-semibold text-gray-800  mt-8 mb-1 basis-full md:basis-auto">
                  Make a Comment
                </h2>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-[2px] border-[#4b101270] ring-offset-2 focus:outline-none hover:ring-[2px] ring-[#4b1012] p-3 rounded-md my-3 transition-all ease-in-out duration-300 w-full"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                {/* email address */}
                <input
                  type="email"
                  placeholder="enter your email"
                  className="border-[2px] border-[#4b101270] ring-offset-2 focus:outline-none hover:ring-[2px] ring-[#4b1012] p-3 rounded-md my-3 transition-all ease-in-out duration-300 block w-full"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                {/* textarea */}
                <textarea
                  required
                  maxLength={100}
                  className="border-[2px] border-[#4b101270] ring-offset-2 focus:outline-none hover:ring-[2px] ring-[#4b1012] p-3 rounded-md my-3 transition-all ease-in-out duration-300 block mt-6 w-full"
                  placeholder="Enter your comment"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                />

                {/* error and success messages */}
                {postMeg && <SuccessPopup data={postMeg} setData={setData} />}
                {postError && <ErrorPopup error={postError} />}

                {/* submit button */}
                <input
                  type="submit"
                  value={postLoading ? "Posting..." : "Post Comment"}
                  disabled={postLoading ? true : false}
                  className={`w-full bg-brown hover:bg-[#4b101220] text-white hover:text-[#4b1012] p-3 rounded-md my-3 cursor-pointer transition-all ease-in-out duration-300 font-bold ${
                    postLoading && "animate-pulse"
                  }`}
                />
              </form>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="flex justify-center w-full my-10">
          <ErrorPopup error={error} />
        </div>
      )}

      <hr className="my-12 lg:my-16" />

      <section className="mb-20">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <h2 className="text-lg font-semibold lg:text-2xl">Other Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {otherData &&
              otherData?.data.map((item, index) => {
                if (index < 4 && item?.id !== id) {
                  return (
                    <Link
                      to={`/blog/${item?.id}`}
                      key={index}
                      className="h-[250px] hover:scale-95 transition-all duration-300 ease-in-out"
                    >
                      <img src={item.imageUrl} className="h-[150px] w-full" />

                      <h3 className="text-base lg:text-lg font-semibold mt-3">
                        {item?.title}
                      </h3>
                      <p className="mt-4 text-sm font-normalfont-pj">
                        {new Date(item?.date).toDateString()}
                      </p>
                    </Link>
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

export default BlogDetails;
