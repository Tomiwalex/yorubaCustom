import Header from "../Components/ui/general/Header";
import { motion } from "framer-motion";

const GalleryPage = () => {
  // dummy data
  const data = [
    {
      title: "Yoruba",
      imageUrl:
        "https://images.saatchiart.com/saatchi/1467899/art/10491205/9553697-WMNDDRXS-7.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://images.saatchiart.com/saatchi/62723/art/7498381/6567309-HSC00001-7.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://www.grainsofafrica.com/wp-content/uploads/2013/08/Owambe-large.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://art635.gallery/wp-content/uploads/2016/10/2.-Umeh-Bede-2013-34x48%EF%80%A0_-1193x620.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://s.abcnews.com/images/Entertainment/HT_body_paint_01_as_160426_16x9_992.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://art635.gallery/wp-content/uploads/2016/10/2.-Umeh-Bede-2013-34x48%EF%80%A0_-1193x620.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://images.saatchiart.com/saatchi/62723/art/5501129/4570941-YAWZUEKI-6.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
    {
      title: "Yoruba",
      imageUrl:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/yoruba-drumming-culture-from-nigeria-chioma-kanu.jpg",
      description: "Art drawn buy the best graduating stud...",
    },
  ];

  return (
    <div>
      <Header current="gallery" />

      <div className="font-julee text-[#fcb92d] py-20 px-5 lg:p-[120px] bg-[#2b090a99]  lg:text-center relative overflow-hidden">
        <img
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/yoruba-hausa-ibo-musicians-2-paul-gbolade-omidiran.jpg"
          alt="image"
          className="absolute w-full inset-0 z-[-1] object-cover h-full"
        />

        <h1 className="text-3xl lg:text-5xl font-bold">
          Explore the Richness of Yoruba Culture
        </h1>
        <p className="font-semmibold text-base lg:text-xl mt-3 leading-[1.6]">
          Welcome to the Ọmọ Oòduà Creations Gallery, a visual journey through
          the vibrant and diverse world of Yoruba culture. Here, we showcase the
          artistry, craftsmanship, and traditions that define our heritage. Each
          piece in our gallery tells a story, reflecting the beauty, wisdom, and
          spirit of the Yoruba people.
        </p>
      </div>

      <section className="bg-[#4b101210] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-2xl lg:text-3xl font-bold color-brown">
            Art and Craftsmanship
          </h1>

          {/* the art grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 gap-y-12 lg:gap-y-16">
            {data.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, translateY: 70 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  key={index}
                  className="bg-white rounded-md shadow-sm overflow-hidden cursor-pointer"
                >
                  {/* image */}
                  <div className=" lg:h-[290px] group overflow-hidden aspect-w-9 aspect-h-16 h-[270px]">
                    <img
                      className="h-full object-cover w-full  transition-all duration-300 transform group-hover:scale-125"
                      src={item.imageUrl}
                      alt={`${item.title} image`}
                    />
                  </div>

                  {/* title */}
                  <p className="mt-3 text-lg font-bold text-gray-900 px-4">
                    {item.title}
                  </p>

                  {/* description */}
                  <p className="text-sm font-normal text-gray-500 p-4 pt-2">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
