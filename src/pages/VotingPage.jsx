/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../Components/ui/general/Header";
import Footer from "../Components/ui/general/Footer";
import { useState } from "react";
import useGetData from "../hooks/useGetData";
import Loading from "../Components/ui/general/Loading";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import usePostData from "../hooks/usePostData";
import SuccessPopup from "../Components/ui/general/SuccessPopup";
import BarChart from "../Components/ui/general/BarChart";

const VotingPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phoneNumber = searchParams.get("phone");
  const { id } = useParams();
  const { data, loading, error } = useGetData(`/contest/${id}`);
  const {
    loading: postLoading,
    postData,
    setData,
    data: voteData,
    error: voteError,
  } = usePostData(`/contest/vote/${id}`);

  const handleVote = (contestant) => {
    const confirmed = window.confirm(
      `Are you sure you want to vote for ${contestant}?`
    );
    if (confirmed) {
      runVote(contestant);
    }
  };

  const runVote = (contestant) => {
    postData({
      name,
      email,
      phoneNumber,
      contestantName: contestant,
    });
  };

  return (
    <div className="min-h-[100dvh] bg-[#4b101210]">
      <Header current="contest" />
      {loading || (postLoading && <Loading />)}
      {error && (
        <div className="flex justify-center w-full mt-20">
          <ErrorPopup error={error + "reload the page"} />
        </div>
      )}
      {voteError && (
        <div className="flex justify-center w-full mt-20">
          <ErrorPopup error={voteError} />
        </div>
      )}

      {voteData && (
        <div className="w-max mx-auto my-20">
          <SuccessPopup data={voteData} setData={setData} />
        </div>
      )}

      {data && (
        <section className="px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-[1700px] mt-10 mb-20">
          <h1 className="font-extrabold text-xl lg:text-3xl flex items-center ">
            {data?.data.name}{" "}
            {data.data.ended && (
              <span className="text-red-700 ml-2 text-base p-2 rounded-2xl bg-red-100 font-bold lg:ml-4">
                Ended
              </span>
            )}
            {!data.data?.ended && (
              <span className="text-green-700 ml lg:ml-4 text-base p-2 rounded-2xl bg-green-100 font-bold">
                Active
              </span>
            )}
          </h1>
          <p className="mt-2 text-gray-600 text-sm lg:text-base font-medium leading-[1.6] max-w-[600px]">
            {data?.data.description}
          </p>

          {data?.data.ended && (
            <BarChart contestants={data?.data.contestants} />
          )}

          <h1 className="font-extrabold text-lg lg:text-2xl mt-14">
            Contestants
          </h1>

          <div className="flex gap-5 mt-5 flex-wrap">
            {data?.data.contestants?.map((item, index) => {
              return (
                <div
                  className="bg-white text-[#1f1f1f] p-5 rounded-tl-xl rounded-br-xl  min-w-[200px]"
                  key={index}
                >
                  <h1 className="font-extrabold text-lg lg:text-xl mb-5">
                    {item?.name}
                  </h1>

                  {!data.data.ended && (
                    <button
                      onClick={() => {
                        handleVote(item?.name);
                      }}
                      className="p-3 font-bold text-base bg-[#280708] hover:bg-[#28070880] duration-300 ease-in-out transition-all rounded-xl text-white"
                    >
                      Vote
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default VotingPage;
