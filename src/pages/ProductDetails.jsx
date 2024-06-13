/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo-brown-2.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import StarRating from "../Components/ui/product/StarRating";
import Footer from "../Components/ui/general/Footer";
import PaymentPopUp from "../Components/ui/product/PaymentPopUp";

const ProductDetails = () => {
  const [activeImg, setActiveImg] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [isFormShown, setFormShown] = useState(false);

  const data = [
    "https://images.saatchiart.com/saatchi/1467899/art/10491205/9553697-WMNDDRXS-7.jpg",

    "https://images.saatchiart.com/saatchi/62723/art/5501129/4570941-YAWZUEKI-6.jpg",

    "https://www.grainsofafrica.com/wp-content/uploads/2013/08/Owambe-large.jpg",

    "https://images.saatchiart.com/saatchi/62723/art/7498381/6567309-HSC00001-7.jpg",
  ];

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
            / product name
          </div>

          {/* details */}
          <div className="flex justify-between flex-wrap my-10 gap-y-8">
            {/* images */}
            <div className="  gap-y-3 lg:basis-1/2 flex flex-wrap justify-between lg:max-h-[500px]">
              <div className="order-2 lg:order-1 basis-full lg:basis-[25%] flex justify-between flex-wrap max-h-[500px]">
                {data.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt="product-thumbnail"
                      className="max-w-full object-cover bg-gray-100 rounded object-center w-[24%] h-full lg:h-[24%] lg:w-full border-black transition-all duration-300 ease-in-out"
                      style={{ borderWidth: index === activeImg ? "2px" : 0 }}
                      onClick={() => setActiveImg(index)}
                    />
                  );
                })}
              </div>

              {/* main Image */}
              <div className="order-1 lg:order-2 basis-full lg:basis-[73%] rounded bg-gray-100 overflow-hidden group max-h-[380px] min-h-[350px] lg:max-h-[unset] lg:h-[500px]">
                <img
                  src={data[activeImg]}
                  alt="product-image"
                  className="w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-center h-full"
                />
              </div>
            </div>

            {/* text */}
            <div className="lg:basis-1/2 lg:pl-10">
              <h1 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                Demo Product
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-x-2">
                <StarRating rating={4} />

                <span className="text-gray-400 text-sm relative top-[5px]">
                  10Reviews
                </span>
              </div>

              {/* price */}
              <div className="flex gap-x-4 my-3 mt-7">
                <h1 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                  ₦10,000
                </h1>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-base lg:text:xl text-gray-800 font-semibold">
                  Description
                </h3>

                <p className="text-sm lg:text-base text-gray-400 font-medium leading-[1.6] mt-1 max-w-[500px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  ea, soluta facere ab saepe magnam hic perspiciatis ratione
                  praesentium eos, accusantium quo iusto ut delectus quis
                  temporibus? Quia, perferendis consectetur.
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
              Reviews(10)
              <span className="material-symbols-outlined ml-1">reviews</span>
            </h3>

            <div className="my-7 flex gap-5 flex-wrap">
              {[1, 5, 3].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="rounded bg-gray-100 p-4 md:basis-[45%] lg:basis-[32%]"
                  >
                    <StarRating rating={item} />

                    {/* name */}
                    <h3 className="text-base lg:text:xl text-gray-800 font-semibold flex items-center mt-2">
                      reviewer's name
                    </h3>

                    <p className="mt-1 text-sm lg:text-base text-gray-500 font-medium leading-[1.6]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam accusantium, excepturi maxime iste quos nisi illum
                      quo laboriosam aperiam nostrum vitae expedita? Labore non
                      animi neque consequuntur accusamus maxime minus?
                    </p>

                    <p className="text-xs lg:text-sm text-gray-600 font-medium leading-[1.6] mt-2">
                      {" "}
                      10/10/2024
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* form pop up */}
      {isFormShown && <PaymentPopUp setFormShown={setFormShown} />}

      {/* footer section */}
      <Footer />
    </motion.div>
  );
};

export default ProductDetails;
