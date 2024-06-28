/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import logo from "../assets/icons/logo-brown-2.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import StarRating from "../Components/ui/product/StarRating";
import Footer from "../Components/ui/general/Footer";
import PaymentPopUp from "../Components/ui/product/PaymentPopUp";
import useGetData from "../hooks/useGetData";
import SkeletalLoading from "../Components/ui/general/SkeletalLoading";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetData(`/store/${id}`);
  const [activeImg, setActiveImg] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isFormShown, setFormShown] = useState(false);

  return (
    <motion.div
      initial={{ translateX: 70 }}
      whileInView={{ translateX: 0 }}
      className=""
      style={{
        overflowX: isFormShown ? "hidden" : "auto",
        height: isFormShown ? "100dvh" : "unset",
      }}
    >
      {loading && (
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 my-10 flex flex-wrap gap-4">
          <SkeletalLoading
            width={"100%"}
            height={"60dvh"}
            backgroundColor={"#d6d6d6"}
          />

          <div className="flex flex-col gap-4">
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
              height={"100px"}
              backgroundColor={"#d6d6d6"}
            />
          </div>
        </div>
      )}

      {data && (
        <section className="px-5 md:px-[50px] lg:px-[100px] mb-20">
          <div className="max-w-[1700px] mx-auto">
            <img src={logo} className="w-[70px] h-auto mt-3 lg:mt-8" alt="" />
            {/* Navigation */}
            <div className="flex gap-x-2 text-gray-500 text-sm md:text-base  font-medium mt-6 cursor-pointer">
              <Link
                className="hover:text-[#4b1012] transition-all duration-300 ease-in-out"
                to="home"
              >
                Home
              </Link>
              /
              <Link
                className="hover:text-[#4b1012] transition-all duration-300 ease-in-out"
                to="/store"
              >
                Store
              </Link>
              / {data.data?.productName}
            </div>

            {/* details */}
            <div className="flex justify-between flex-wrap my-10 gap-y-8">
              {/* images */}
              <div className="  gap-y-3 lg:basis-1/2 flex flex-wrap justify-between lg:max-h-[500px]">
                <div className="gap-2 relative order-2 lg:order-1 basis-full h-[70px] lg:h-[unset] lg:basis-[25%] flex /lg:justify-between lg:flex-wrap max-h-[500px]">
                  {data.data.imgUrls.map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={item}
                        alt="product-thumbnail"
                        className={`max-w-full object-cover bg-gray-100 rounded object-center w-[24%] h-full lg:h-auto lg:w-full border-black transition-all duration-300 ease-in-out`}
                        style={{ borderWidth: index === activeImg ? "2px" : 0 }}
                        onClick={() => setActiveImg(item)}
                      />
                    );
                  })}
                </div>

                {/* main Image */}
                <div className="order-1 lg:order-2 basis-full lg:basis-[73%] rounded bg-gray-100 overflow-hidden group max-h-[380px] min-h-[350px] lg:max-h-[unset] lg:h-[500px]">
                  <img
                    src={activeImg ? activeImg : data.data.imgUrls[0]}
                    alt="product-image"
                    className="w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-center h-full"
                  />
                </div>
              </div>

              {/* text */}
              <div className="lg:basis-1/2 lg:pl-10">
                <h1 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                  {data.data?.productName}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-x-2">
                  <StarRating rating={data?.data.rating} />

                  <span className="text-gray-400 text-sm relative top-[5px]">
                    {data?.data.reviews?.length}Reviews
                  </span>
                </div>

                {/* price */}
                <div className="flex gap-x-4 my-3 mt-7">
                  <h1 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                    ₦{data?.data.price}
                  </h1>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h3 className="text-base lg:text:xl text-gray-800 font-semibold">
                    Description
                  </h3>

                  <p className="text-sm lg:text-base text-gray-400 font-medium leading-[1.6] mt-1 max-w-[500px]">
                    {data?.data.description}
                  </p>
                </div>

                {/* quantity */}
                <div className="flex gap-x-3 items-center lg:text-lg text-sm font-semibold mt-5 cursor-pointer">
                  <span
                    onClick={() => {
                      if (quantity >= 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className="material-symbols-outlined p-3 rounded bg-gray-200  hover:bg-black/70 hover:text-white duration-300 ease-in-out transition-all"
                  >
                    remove
                  </span>
                  <span className="">{quantity}</span>
                  <span
                    onClick={() => setQuantity(quantity + 1)}
                    className="material-symbols-outlined p-3 rounded bg-gray-200  hover:bg-black/70 hover:text-white duration-300 ease-in-out transition-all"
                  >
                    add
                  </span>
                </div>

                {quantity > 1 && (
                  <p className="items-center text-base font-semibold bg-gray-100 p-4 rounded my-3 mr-4 inline-flex">
                    Total
                    <span className="material-symbols-outlined">functions</span>
                    : ₦{data?.data.price * quantity}
                  </p>
                )}

                {/* Add to cart */}
                <span
                  onClick={() => setFormShown(!isFormShown)}
                  className="inline-block px-10 py-3 font-semibold text-sm lg:text-base cursor-pointer mt-5 lg:mt-10 rounded bg-gray-800 text-white hover:scale-95 duration-300 ease-in-out transition-all"
                >
                  Purchase
                </span>
              </div>
            </div>

            {/* reviews */}
            <div className="mb-10">
              <h3 className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center">
                Reviews({data?.data.reviews?.length})
                <span className="material-symbols-outlined ml-1">reviews</span>
              </h3>

              <div className="my-7 flex gap-5 flex-wrap">
                {data.data.reviews.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded bg-gray-100 p-4 md:basis-[45%] lg:basis-[32%]"
                    >
                      <StarRating rating={item} />

                      {/* name */}
                      <h3 className="text-base lg:text:xl text-gray-800 font-semibold flex items-center mt-2">
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
            </div>
          </div>
        </section>
      )}

      {/* form pop up */}
      {isFormShown && <PaymentPopUp setFormShown={setFormShown} />}

      {/* footer section */}
      <Footer />
    </motion.div>
  );
};

export default ProductDetails;
