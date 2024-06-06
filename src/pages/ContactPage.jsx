import Header from "../Components/ui/general/Header";
import image from "../assets/images/drum.png";
import { motion } from "framer-motion";

const ContactPage = () => {
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
            Get in contact with us
          </h2>
          <p className="mt-5 text-base font-medium text-gray-600">
            At Ọmọ Oòduà Creations, we value every opportunity to connect with
            our community. Whether you have a question, feedback, or just want
            to share your thoughts, we are here to listen and assist. Your input
            helps us grow and continue to celebrate the richness of Yoruba
            culture with authenticity and passion.
          </p>

          {/* contact infos */}
          <div className=" mt-5 flex flex-wrap gap-3">
            {/* the mail */}
            <div className="p-4 rounded-2xl text-center bg-white group hover:bg-[#4b1012] transition-all durstion-300 ease-in-out">
              <span className="material-symbols-outlined group-hover:text-[#fff] color-brown text-2xl font-bold transition-all durstion-300 ease-in-out">
                mail
              </span>

              <p className="text-base text-gray-500 group-hover:text-[#fff] transition-all durstion-300 ease-in-out">
                ourMail@gmail.com
              </p>
            </div>

            {/* call */}
            <div className="p-4 rounded-2xl text-center bg-white group hover:bg-[#4b1012] transition-all durstion-300 ease-in-out">
              <span className="material-symbols-outlined group-hover:text-[#fff] color-brown text-2xl font-bold transition-all durstion-300 ease-in-out">
                call
              </span>

              <p className="text-base text-gray-500 group-hover:text-[#fff] transition-all durstion-300 ease-in-out">
                +xxx-xxx-xxx-xxxx
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 70 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          className="basis-full lg:basis-1/2 pt-10 lg:pt-20 mb-5"
        >
          <div className="lg:max-w-[400px] lg:ml-auto bg-white rounded-2xl p-4">
            <form>
              <div className="mb-6 cursor-pointer">
                <input
                  type="text"
                  required
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

              {/* The submit button */}
              <div>
                <button
                  type="submit"
                  className="
                        w-full
                        text-white
                        bg-brown
                        rounded-md
                        border border-primary
                        p-3
                        lg:p-4
                        transition-all ease-in-out duration-300
                        hover:bg-[#4b101290]
                        "
                >
                  Send Message
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
