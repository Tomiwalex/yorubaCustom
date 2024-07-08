/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Header from "../Components/ui/general/Header";
import image from "../assets/images/drum.png";
import { motion } from "framer-motion";
import usePostData from "../hooks/usePostData";
import SuccessPopup from "../Components/ui/general/SuccessPopup";
import ErrorPopup from "../Components/ui/general/ErrorPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { data, error, loading, postData, setData } = usePostData(`/contact`);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" bg-[#fcb92d70] min-h-[100dvh] overflow-x-hidden relative">
      <img
        src={image}
        alt="contact"
        className="absolute w-auto h-[40%] right-[-20%] lg:w-[50%] lg:right-[-10%] bottom-0 z-[-1]"
      />

      <Header current="contact" />

      <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap justify-between gap-y-5">
        <motion.div
          initial={{ opacity: 0, translateX: -70 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          className="basis-full lg:basis-1/2 pt-10 lg:pt-20 lg:w-[80%]"
        >
          <h2 className="text-2xl mb-3 font-bold text-gray-900 sm:text-4xl xl:text-4xl max-w-3xl mx-auto leading-[1.3]">
            Got any question?
          </h2>
          <p className="mt-5 text-base font-medium text-gray-600">
            You’ve got personal question you want to ask about Yoruba Customs?
            We're eager to engage with you. Feel free to reach out to us on
          </p>

          {/* contact infos */}
          <div className=" mt-5 flex flex-wrap gap-3">
            {/* the mail */}
            <a
              href="mailto:info@yorubacustoms.com"
              className="p-4 rounded-2xl text-center bg-white group hover:bg-[#4b1012] transition-all durstion-300 ease-in-out inline-block"
            >
              <span className="material-symbols-outlined group-hover:text-[#fff] color-brown text-2xl font-bold transition-all durstion-300 ease-in-out">
                mail
              </span>

              <p className="text-base text-gray-500 group-hover:text-[#fff] transition-all durstion-300 ease-in-out">
                info@yorubacustoms.com
              </p>
            </a>

            {/* call */}
            <div className="p-4 rounded-2xl text-center bg-white group hover:bg-[#4b1012] transition-all durstion-300 ease-in-out">
              <span className="material-symbols-outlined group-hover:text-[#fff] color-brown text-2xl font-bold transition-all durstion-300 ease-in-out">
                call
              </span>

              <p className="text-base text-gray-500 group-hover:text-[#fff] transition-all durstion-300 ease-in-out">
                +xxx-xxx-xxx-xxxx
              </p>
            </div>

            <div className="flex items-center gap-7 bg-white rounded-2xl p-4 py-7">
              <a href="mailto:yorubacustoms@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#4b1012" />
              </a>

              <a href="https://www.tiktok.com/@yorubacustoms?_t=8ngWB4MBqSc&_r=1">
                <FontAwesomeIcon icon={faTiktok} size="2x" color="#4b1012" />
              </a>

              <a href="http://youtube.com/@yorubacustoms">
                <FontAwesomeIcon icon={faYoutube} size="2x" color="#4b1012" />
              </a>

              <a href="https://www.instagram.com/yorubacustoms?utm_source=qr&igsh=MW1pYWhqMXY0bTc2Mg==">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#4b1012" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 70 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          className="basis-full lg:basis-1/2 pt-10 lg:pt-20 mb-5"
        >
          <div className="lg:max-w-[400px] lg:ml-auto bg-white rounded-2xl p-4">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-6 cursor-pointer">
                <input
                  type="text"
                  required
                  min={5}
                  defaultValue={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>

              {/* user's mail */}
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  min={5}
                  defaultValue={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>

              {/* your message */}
              <div className="mb-6">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  defaultValue={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                ></textarea>
              </div>

              {/* error and success messages */}
              {data && <SuccessPopup data={data} setData={setData} />}
              {error && <ErrorPopup error={error} />}

              {/* The submit button */}
              <div>
                <button
                  type="submit"
                  className={`

                        w-full
                        text-white
                        bg-brown
                        rounded-md
                        border border-primary
                        p-3
                        lg:p-4
                        cursor-pointer
                        transition-all ease-in-out duration-300
                        hover:bg-[#4b101290]
                        ${loading && "animate-pulse"}
                        ${loading && "cursor-not-allowed"}
                        `}
                >
                  {loading ? "Submitting" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
