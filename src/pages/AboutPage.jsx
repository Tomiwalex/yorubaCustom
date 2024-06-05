import Header from "../Components/ui/general/Header";
import { motion } from "framer-motion";
import image1 from "../assets/images/two-people.png";
import Footer from "../Components/ui/general/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header current={"about"} />

      <section className="bg-[#FCB92D40] relative">
        <img
          src={image1}
          alt="two-people-facing-each-other"
          className="absolute h-full z-[-1] "
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-5 lg:px-8 max-w-[1200px] mx-auto py-16 lg:py-[120px] text-center"
        >
          <h1 className="mt-12 lg:mt-0 text-[36px] leading-[1.3] font-bold color-brown sm:text-4xl xl:text-5xl xl:leading-tight">
            About us
          </h1>

          <p className="headline mt-8 text-base font-medium leading-7 text-[#4b0102] lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
            Welcome to Ọmọ Oòduà Creations, where we celebrate and preserve the
            rich heritage of the Yoruba culture. Born out of a deep love and
            respect for Yoruba traditions, our company is dedicated to
            showcasing the beauty, wisdom, and vibrancy of Yoruba customs. We
            believe that in understanding our roots, we find strength, identity,
            and inspiration for the future.
          </p>
        </motion.div>
      </section>

      <section className="bg-gray-100">
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          className="px-5 lg:px-8 max-w-[1200px] mx-auto py-16 lg:py-[80px] "
        >
          <p className="headline mt-8 text-base font-medium leading-7 text-gray-600 lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
            Our journey began with a simple idea: to create a platform where the
            world can experience the essence of Yoruba culture. From the
            rhythmic beats of the talking drum to the intricate patterns of
            Adire fabric, every aspect of Yoruba tradition tells a story. At Ọmọ
            Oòduà Creations, we are passionate about sharing these stories and
            keeping our heritage alive for future generations. - **Community**:
            We believe in the power of community and the importance of
            supporting one another. We work closely with local artisans,
            storytellers, and cultural ambassadors to create opportunities and
            strengthen our cultural ties. - **Excellence**: Striving for
            excellence is embedded in our ethos. From the quality of our
            products to the experiences we curate, we are committed to
            delivering nothing but the best. #### Our Objectives Our objectives
            are centered around promoting, preserving, and celebrating Yoruba
            culture: 1. **Preservation**: To preserve the rich heritage of the
            Yoruba people by documenting and sharing traditional practices,
            stories, and art forms. 2. **Promotion**: To promote Yoruba culture
            globally, fostering appreciation and understanding across different
            cultures and communities. 3. **Education**: To educate both young
            and old about the significance and beauty of Yoruba traditions,
            ensuring that knowledge is passed down through generations. 4.
            **Empowerment**: To empower local artisans and cultural
            practitioners by providing a platform for their work, thereby
            sustaining traditional crafts and skills. #### Our Mission Our
            mission is to be the leading platform for the celebration and
            preservation of Yoruba culture. We aim to inspire pride in our
            heritage, foster a deep connection to our roots, and share the
            richness of Yoruba customs with the world. Through our products,
            events, and educational initiatives, we strive to create a vibrant
            community of culture enthusiasts and advocates. #### Our Vision Our
            vision is to see Yoruba culture thrive globally, embraced and
            celebrated by people of all backgrounds. We envision a world where
            the wisdom, artistry, and traditions of the Yoruba people are
            recognized and valued as integral to the global cultural tapestry.
            By nurturing a deeper understanding and appreciation of our
            heritage, we hope to inspire a more inclusive and culturally rich
            future. Thank you for joining us on this journey. Together, we can
            keep the spirit of Yoruba culture alive and thriving for generations
            to come.
          </p>

          <h2 className="mt-10 mb-2 color-brown text-xl lg:2xl font-bold lg:max-w-3xl mx-auto">
            {" "}
            Our Values
          </h2>
          <p className="headline  text-base font-medium leading-7 text-gray-600 lg:max-w-3xl mx-auto xl:pr-0 lg:pr-16 ">
            At the heart of Ọmọ Oòduà Creations are values that reflect our
            commitment to authenticity, community, and excellence: -
            **Authenticity**: We are dedicated to presenting Yoruba culture in
            its truest form. Every product, service, and event we offer is
            deeply rooted in genuine Yoruba traditions and craftsmanship.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
