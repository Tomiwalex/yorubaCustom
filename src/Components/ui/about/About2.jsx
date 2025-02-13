/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <section className="py-10 px-1 bg-[#4b010210]cursor-pointer">
      <div className="px-4 mx-auto max-w-[1700px] md:px-[50px] lg:px-[100px]">
        <motion.div className="relative grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 gap-5 gap-y-8 md:grid-cols-3  xl:my-16">
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="p-6 py-10 md:p-8 lg:p-5 relative rounded-3xl  bg-[#4b1012] lg:mx-3 "
          >
            <span className="material-symbols-outlined text-7xl text-white font-medium">
              school
            </span>
            <h3 className=" text-xl lg:text-3xl font-bold text-white font-pj">
              MISSION STATEMENT
            </h3>

            <p className="mt-5 text-base text-white">
              Our mission is to illuminate undiluted Yoruba Culture and
              Tradition. We are dedicated to preserving and promoting the rich
              heritage of the Yoruba people, fostering a deep understanding of
              our customs, values, history and tradition through education,
              celebration, promotion and preservation, we aim to empower
              individuals to embrace and appreciate the authentic essence of
              Yoruba culture locally and internationally, ensuring its legacy
              endures for generations to come.
            </p>
          </motion.div>

          {/* second feature */}
          <motion.div
            initial={{ translateY: 70, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="p-6 py-10 md:p-8 lg:p-5 md:border-l md:border-gray-200 relative overflow-hidden rounded-3xl bg-[#4b2601] lg:mx-3"
          >
            <span className="material-symbols-outlined text-7xl text-white font-medium">
              join_left
            </span>
            <h3 className="text-xl lg:text-3xl font-bold text-white ">
              CORE VALUE
            </h3>

            <p className="mt-5 text-base text-white font-pj">
              Illuminating undiluted Yoruba Culture & Tradition, this embodies
              the brand's commitment to preserve, celebrate and promote the
              authentic heritage of Yoruba culture.
            </p>
          </motion.div>

          {/* third feature */}
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="p-6 py-10 md:p-8 lg:p-5 md:border-l md:border-gray-200 relative bg-[#FCB92D] rounded-3xl lg:mx-3 "
          >
            <span className="material-symbols-outlined text-7xl text-white font-medium">
              eyeglasses
            </span>
            <h3 className="text-xl lg:text-3xl font-bold text-white">
              VISION STATEMENT
            </h3>

            <p className="mt-5 text-base text-white font-pj">
              Our vision is to be the foremost brand that instantly springs to
              minds of the people when discussing the promotion of Yoruba
              culture. We aspire to become the go-to source for authentic Yoruba
              cultural experiences, products, and knowledge. We strive to be a
              trusted and respected brand, inspiring a global appreciation and
              recognition of Yoruba culture through our unwavering commitment to
              preserving, showcasing, and celebrating Yoruba diverse traditions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About2;
