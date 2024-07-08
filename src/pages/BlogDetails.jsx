// /* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Footer from "../Components/ui/general/Footer";
import Header from "../Components/ui/general/Header";
import useGetData from "../hooks/useGetData";
import { useParams } from "react-router-dom";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import usePostData from "../hooks/usePostData";
import SuccessPopup from "../Components/ui/general/SuccessPopup";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import RelatedPost from "../Components/ui/blog/RelatedPost";

const BlogDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const { data, loading, error, fetchData } = useGetData(`/blog/${id}`);
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
          {/* post date and author */}
          <p className="my-2 text-base lg:text-lg font-semibold text-gray-500 flex items-center">
            <span className="font-bold text-gray-900 mr-1">
              {data?.data?.author} •
            </span>
            {new Date(data?.data.date).toDateString()}
          </p>

          {/* post image and title */}
          <div className="max-h-[60dvh] overflow-hidden relative group">
            <img
              className="object-cover w-full h-full object-left-top transition-all duration-300 transform group-hover:scale-105 rounded"
              src={data?.data?.imageUrl}
              alt=""
            />

            {/* blog topic */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <h2 className="text-2xl font-extrabold text-white lg:text-5xl relative z-[1]">
                {data?.data.title}
              </h2>
            </div>
          </div>

          <div className="lg:flex justify-between  mt-5 lg:mt-8 gap-5 ">
            {/* Action Buttons */}
            <div className="mb-5">
              <div className="mt-4 lg:mt-0 cursor-pointer border-y-[1px] border-y-gray-300 h-16 flex items-center w-full lg:max-w-[300px] px-5">
                <div
                  title="comments"
                  className="hover:bg-gray-200 bg-gray-100 p-2 rounded font-medium flex items-center"
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-gray-700 font-medium text-xl"
                  />
                  ({data?.data?.comments?.length})
                </div>
                <button
                  onClick={handleShare}
                  className="hover:bg-gray-200 bg-gray-100 p-2 mx-2 text-sm text-gray-700 lg:text-base rounded font-medium flex items-center transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    className="text-gray-700  font-medium text-xl mr-2"
                    title="Share post"
                  />
                  Share
                </button>
              </div>

              <div className="hidden lg:block w-full lg:max-w-[90%]">
                <RelatedPost />
              </div>
            </div>

            {/* post content */}
            <div className="quill-div cursor-pointer  lg:max-w-[680px] lg:max-h-full overflow-x-auto">
              <div
                dangerouslySetInnerHTML={{ __html: data.data.description }}
              />
            </div>
          </div>

          <hr className="my-12 " />

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

      <div className="lg:hidden">
        {" "}
        <RelatedPost />
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
