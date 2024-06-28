/* eslint-disable react/no-unescaped-entities */
import Header from "../Components/ui/general/Header";
import { motion } from "framer-motion";
import image1 from "../assets/images/two-people.png";
import image2 from "../assets/images/idol.png";
import Footer from "../Components/ui/general/Footer";
import FeatureSection from "../Components/ui/about/FeatureSection";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden ">
      <Header current={"about"} />

      <section className="bg-[#FCB92D40] relative">
        <img
          src={image1}
          alt="two-people-facing-each-other"
          className="absolute h-full z-[-1] "
        />

        <img
          src={image2}
          className="absolute h-full lg:h-auto z-[-2] right-[-50%] lg:right-[-14%] bottom-[-30%]"
        />

        {/* second underlay image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-5 lg:px-8 max-w-[1200px] mx-auto py-16 lg:py-[120px] lg:text-center"
        >
          <h1 className="mt-12 lg:mt-0 text-[36px] leading-[1.3] font-bold color-brown sm:text-4xl xl:text-5xl xl:leading-tight">
            Restoring our lost customs
          </h1>

          <p className="headline mt-8 text-base font-medium leading-7 text-[#4b0102] lg:max-w-3xl mx-auto  ">
            Over the years, we’ve seen our religion, beliefs, and the traditions
            of our ancestors gradually diminishing in our present society due to
            the impact of the western theology. These traditions are alien to
            the present generation, many know few or nothing about our heritage.
            “Yoruba Customs” was established with a renewed passion to restore
            the Yoruba culture and return it to her former glory. We
            passionately preach about the diversity and beauty of our heritage
            making sure the present generation can understand our beliefs,
            rituals, practices, and religion of the Yoruba people.
          </p>
        </motion.div>
      </section>

      {/* objectives */}
      <section className="bg-gray-100">
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          className="px-5 lg:px-8 max-w-[1200px] mx-auto py-16 lg:py-[80px] "
        >
          <div className="bg-[#ffffff] py-16 px-5 lg:px-10 rounded-md my-14">
            <h2 className="mt-10 mb-2 color-brown text-2xl lg:text-4xl font-bold lg:max-w-3xl mx-auto">
              {" "}
              Championing the revolution
            </h2>

            <p className="headline  text-base font-medium leading-7 text-gray-600 lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
              Our goal is simple: to shine a bright light on the beauty of the
              Yoruba Culture and Tradition. We're passionate about keeping alive
              the rich heritage of our ancestors by sharing our customs, values,
              history, and traditions in a fun and engaging way. Through
              education, celebrations, and preserving our unique heritage, we
              want everyone to feel empowered to embrace and cherish the
              authentic essence of Yoruba culture. Together, let's ensure that
              this vibrant legacy continues to inspire and delight for
              generations to come! At YorubaCustoms, we aspire to become your
              reliable partner for authentic Yoruba cultural experiences,
              products, and knowledge. We hope to inspire a global appreciation
              and recognition of Yoruba culture through our unwavering
              commitment to preserving, showcasing, and celebrating its diverse
              traditions.
            </p>
          </div>
        </motion.div>
      </section>

      <FeatureSection />

      <section className="py-14 lg:py-16 px-5">
        <div className="">
          <h2 className="mt-10 mb-2 color-brown text-2xl lg:text-4xl font-bold lg:max-w-3xl mx-auto">
            {" "}
            CORE VALUE
          </h2>
          <p className="headline  text-base font-medium leading-7 text-gray-600 lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
            Illuminating undiluted Yoruba Culture & Tradition, this embodies the
            brand's commitment to preserve, celebrate and promote the authentic
            heritage of Yoruba culture.
          </p>
        </div>
      </section>

      {/* Mission state ment */}
      <section className="py-14 lg:py-16 px-5">
        <div className="">
          <h2 className="mt-10 mb-2 color-brown text-2xl lg:text-4xl font-bold lg:max-w-3xl mx-auto">
            {" "}
            MISSION STATEMENT
          </h2>
          <p className="headline  text-base font-medium leading-7 text-gray-600 lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
            Our mission is to illuminate undiluted Yoruba Culture and Tradition.
            We are dedicated to preserving and promoting the rich heritage of
            the Yoruba people, fostering a deep understanding of our customs,
            values, history and tradition through education, celebration,
            promotion and preservation, we aim to empower individuals to embrace
            and appreciate the authentic essence of Yoruba culture locally and
            internationally, ensuring its legacy endures for generations to
            come.
          </p>
        </div>
      </section>

      {/* Mission state ment */}
      <section className="py-14 lg:py-16 px-5">
        <div className="">
          <h2 className="mt-10 mb-2 color-brown text-2xl lg:text-4xl font-bold lg:max-w-3xl mx-auto">
            {" "}
            VISION STATEMENT
          </h2>
          <p className="headline  text-base font-medium leading-7 text-gray-600 lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
            Our vision is to be the foremost brand that instantly springs to
            minds of the people when discussing the promotion of Yoruba culture.
            We aspire to become the go-to source for authentic Yoruba cultural
            experiences, products, and knowledge. We strive to be a trusted and
            respected brand, inspiring a global appreciation and recognition of
            Yoruba culture through our unwavering commitment to preserving,
            showcasing, and celebrating Yoruba diverse traditions
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
