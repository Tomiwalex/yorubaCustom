/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Header from "../Components/ui/general/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import useGetData from "../hooks/useGetData";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";

const StorePage = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error } = useGetData("/store");

  const handleSearch = (e) => {
    e.preventDefault();
    if (data) {
      const newData = data?.data.filter(
        (item) => item?.name.includes(search) || item?.category.includes(search)
      );
      setFilteredData(() => newData);
    } else {
      console.log("no data");
    }
  };

  return (
    <motion.div
      initial={{ translateX: 70 }}
      whileInView={{ translateX: 0 }}
      className="bg-gray-50"
    >
      <Header
        setSearch={setSearch}
        search={search}
        current={"store"}
        handleSearch={handleSearch}
      />

      <section className="border-t-[1px] lg:px-[100px]">
        <div className="flex max-w-[1700px] lg:mx-auto p-3 mx-5   bg-gray-200 rounded my-5 lg:my-10">
          {/* filter */}
          <div className="overflow-hidden max-w-[45%] bg-white  gap-x-5 p-2 lg:p-3 rounded flex items-center">
            <span className="material-symbols-outlined">tune</span>

            <select className="font-medium focus:outline-none mx-2 bg-white">
              <option>Filter</option>
              <option>Painting</option>
              <option>Digital</option>
              <option>Photograph</option>
            </select>
          </div>

          {/* sort */}
          <div className="ml-5 max-w-[45%] bg-white p-2 rounded flex items-center">
            <span className="material-symbols-outlined">sort</span>

            <select className="font-medium focus:outline-none mx-2 bg-white">
              <option>Sort</option>
              <option>Oldest</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </section>

      {search !== "" && (
        <section className="py-12 ">
          <div className="px-4 mx-auto sm:px-6 lg:px-[100px] max-w-[1700px]">
            <div className="max-w-[1700px] mx-auto ">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl flex items-center">
                Search Result for {`"${search}"`}
                <span className="ml-1 material-symbols-outlined">
                  trending_flat
                </span>
              </h2>
            </div>

            {search !== "" && filteredData.length < 1 && (
              <div className="text-center mt-12">
                <span className="material-symbols-outlined text-3xl font-bold flex justify-center items-center mx-auto rounded-full bg-red-100 text-red-600 w-20 h-20">
                  search
                </span>

                <p className="text-lg font-semibold mt-6">Item not found</p>
                <p className="text-base mt-2 font-medium max-w-[300px] mx-auto  text-gray-600">
                  Your search "{search}"" did not match any item name or
                  category, Please try again.
                </p>
              </div>
            )}

            {filteredData && (
              <div className="grid grid-cols-2 gap-y-6 gap-x-3 mt-5 lg:mt-10 lg:gap-4 lg:gap-y-8 lg:grid-cols-4 2xl:grid-cols-5">
                {filteredData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group shadow-sm rounded overflow-hidden bg-white"
                    >
                      {/* Image */}
                      <div className="overflow-hidden aspect-w-1 aspect-h-2 ">
                        <img
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 min-h-[200px] max-h-[280px] lg:h-[280px]"
                          src={item?.images[0]}
                          alt={item?.name + "image"}
                        />
                      </div>

                      {/* sale tag */}
                      {item.category && (
                        <div className="absolute left-3 top-3">
                          <p
                            style={{
                              color:
                                item.category === "hot-sale"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                item.category === "hot-sale"
                                  ? "#4b1012"
                                  : "white",
                            }}
                            className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide rounded-full flex items-center"
                          >
                            {item.category}
                            {item.category === "hot-sale" && (
                              <span className="material-symbols-outlined ml-1 text-xs lg:text-sm">
                                local_fire_department
                              </span>
                            )}
                          </p>
                        </div>
                      )}

                      <div className="flex items-start justify-between mt-2 space-x-4 p-4">
                        <div>
                          {/* item name */}
                          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <Link to={`/store/${item.id}`}>
                              {item.name}
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                            </Link>
                          </h3>

                          {/* item star rating */}
                          <div className="flex items-center mt-2.5 space-x-px">
                            <svg
                              style={{
                                color: item.rating >= 1 ? "gold" : "gray",
                              }}
                              className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              style={{
                                color: item.rating >= 2 ? "gold" : "gray",
                              }}
                              className="w-3 h-3  sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              style={{
                                color: item.rating >= 3 ? "gold" : "gray",
                              }}
                              className="w-3 h-3  sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              style={{
                                color: item.rating >= 4 ? "gold" : "gray",
                              }}
                              className="w-3 h-3  sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              style={{
                                color: item.rating >= 5 ? "gold" : "gray",
                              }}
                              className="w-3 h-3 0 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>

                        {/* item current and discounted price */}
                        <div className="text-right">
                          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            ₦{item.price}
                          </p>

                          {item.discount && (
                            <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                              {" "}
                              {item.discount}
                            </del>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-[100px] max-w-[1700px]">
          <div className="max-w-[1700px] mx-auto ">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl flex items-center">
              Our featured items{" "}
              <span className="ml-1 material-symbols-outlined">category</span>
            </h2>
          </div>

          {error && (
            <div className="flex justify-center w-full mt-10">
              <ErrorPopup error={error + ", reload the page to refetch"} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-y-6 gap-x-3 mt-5 lg:mt-10 lg:gap-4 lg:gap-y-8 lg:grid-cols-4 2xl:grid-cols-5">
            {/* loading state */}
            {loading &&
              [1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <SkeletalLoading
                    backgroundColor={"white"}
                    key={index}
                    height={"300px"}
                    width={"100%"}
                  />
                );
              })}

            {data &&
              data?.data?.length &&
              !loading &&
              data?.data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative group shadow-sm rounded overflow-hidden bg-white"
                  >
                    {/* Image */}
                    <div className="overflow-hidden aspect-w-1 aspect-h-2 ">
                      <img
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 min-h-[200px] max-h-[280px] lg:h-[280px]"
                        src={item?.images[0]}
                        alt={item?.name + "image"}
                      />
                    </div>

                    {/* sale tag */}
                    {item.category && (
                      <div className="absolute left-3 top-3">
                        <p
                          style={{
                            color:
                              item.category === "hot-sale" ? "white" : "black",
                            backgroundColor:
                              item.category === "hot-sale"
                                ? "#4b1012"
                                : "white",
                          }}
                          className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide rounded-full flex items-center"
                        >
                          {item.category}
                          {item.category === "hot-sale" && (
                            <span className="material-symbols-outlined ml-1 text-xs lg:text-sm">
                              local_fire_department
                            </span>
                          )}
                        </p>
                      </div>
                    )}

                    <div className="flex items-start justify-between mt-2 space-x-4 p-4">
                      <div>
                        {/* item name */}
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          <Link to={`/store/${item.id}`}>
                            {item.name}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            ></span>
                          </Link>
                        </h3>

                        {/* item star rating */}
                        <div className="flex items-center mt-2.5 space-x-px">
                          <svg
                            style={{
                              color: item.rating >= 1 ? "gold" : "gray",
                            }}
                            className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            style={{
                              color: item.rating >= 2 ? "gold" : "gray",
                            }}
                            className="w-3 h-3  sm:w-4 sm:h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            style={{
                              color: item.rating >= 3 ? "gold" : "gray",
                            }}
                            className="w-3 h-3  sm:w-4 sm:h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            style={{
                              color: item.rating >= 4 ? "gold" : "gray",
                            }}
                            className="w-3 h-3  sm:w-4 sm:h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            style={{
                              color: item.rating >= 5 ? "gold" : "gray",
                            }}
                            className="w-3 h-3 0 sm:w-4 sm:h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>

                      {/* item current and discounted price */}
                      <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          ₦{item.price}
                        </p>

                        {item.discount && (
                          <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                            {" "}
                            {item.discount}
                          </del>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default StorePage;
