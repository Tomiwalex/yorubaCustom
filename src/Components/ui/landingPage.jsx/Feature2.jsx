import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Feature2 = () => {
  return (
    <section className="py-20 bg-[#00000010]">
      <div className="px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-[1700px]">
        <div className="max-w-[1700px] mx-auto flex flex-wrap justify-between align-top">
          <div className="mb-5 text-left ">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-4xl font-pj">
              Àwọn àṣà kookan ni ilẹ̀ Yorùbá tó gbàjùmọ́
            </h2>
            <h3 className="color-brown text-base lg:text-xl font-medium mt-3">
              (Some popular Yoruba cultural events)
            </h3>
          </div>
        </div>

        <div className="grid max-w-[1700px] grid-cols-1 mx-auto mt-12 text-left sm:mt-16 sm:grid-cols-4 gap-y-14 gap-x-3">
          {/* first */}
          <div className="relative group bg-[#fff] rounded-md overflow-hidden">
            <div className="overflow-hidden  aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 lg:h-[200px]"
                src="https://www.nigeriagalleria.com/Nigeria/States_Nigeria/Osun/Images/osun-osogbo.jpg"
                alt=""
              />
            </div>

            <div className="p-4">
              <p className="text-xl font-bold text-gray-900 font-pj">
                Osun-Osogbo Festival
              </p>

              <p className="mt-2 text-truncated text-sm lg:text-base leading-[1.6] font-normal text-gray-600">
                The Osun-Osogbo Festival is an annual celebration in Osogbo,
                Nigeria, to honor Osun, the Yoruba goddess of fertility and
                water. The festival lasts two weeks and includes traditional
                cleansing, lighting of the 500-year-old sixteen-point lamp
                called “Iná Olójúmẹ́ríndínlógún” (16 face lamp). The Festival
                culminates in a procession to the shrine in the sacred
                Osun-Osogbo grove where a large crowd builds up. This event is
                led by the sitting “Atáòjà” of Osogbo along with a ritualized
                performer called the “Arugbá” (calabash carrier) and a committee
                of priestesses.
              </p>

              <Link
                to="/blog/667f1bfc00cb8a7fde4f3ec2"
                className="color-brown hover:text-white hover:bg-[#4b1012] duration-300 ease-in-out transition-all text-base lg:text-lg border-[#4b1012] border-[2px] p-3 mt-7 font-semibold items-center inline-flex cursor-pointer"
              >
                Read more
                <span className="material-symbols-outlined ml-2">
                  read_more
                </span>
              </Link>
            </div>
          </div>

          {/* second */}
          <div className="relative group bg-[#fff] rounded-md overflow-hidden">
            <div className="overflow-hidden  aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 lg:h-[200px]"
                src="https://guardian.ng/wp-content/uploads/2023/09/Ojude-Oba-festival-.jpg"
                alt=""
              />
            </div>

            <div className="p-4">
              <p className=" text-xl font-bold text-gray-900 font-pj">
                Ojude Oba Festival
              </p>

              <p className="mt-2 text-truncated text-sm lg:text-base leading-[1.6] font-normal text-gray-600">
                The Ojude Oba Festival is a vibrant and colorful cultural
                celebration held annually in Ijebu-Ode, a historic town in Ogun
                State, Nigeria. The festival, which translates to "The King's
                Court" in English, is a unique display of the rich cultural
                heritage and traditions of the Ijebu people, one of the
                prominent subgroups of the Yoruba ethnic group. During the
                festival, thousands of people from Ijebu-Ode and surrounding
                communities gather at the palace of the Awujale of Ijebuland,
                the paramount ruler of the Ijebu kingdom, to pay homage to the
                king and celebrate the town's cultural heritage. One of the
                highlights of the Ojude Oba Festival is the procession of the
                various age groups, each accompanied by drummers, dancers, and
                praise singers. The different groups showcase their unique
                cultural performances, including traditional music, dance
                routines, and acrobatic displays, adding to the festive
                atmosphere.
              </p>

              <Link
                to="/blog/667f277500cb8a7fde4f3f28"
                className="color-brown hover:text-white hover:bg-[#4b1012] duration-300 ease-in-out transition-all text-base lg:text-lg border-[#4b1012] border-[2px] p-3 mt-7 font-semibold items-center inline-flex cursor-pointer"
              >
                Read more
                <span className="material-symbols-outlined ml-2">
                  read_more
                </span>
              </Link>
            </div>
          </div>

          {/* Third */}
          <div className="relative group bg-[#fff] rounded-md overflow-hidden">
            <div className="overflow-hidden  aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 lg:h-[200px]"
                src="https://ocdn.eu/images/pulscms/OGI7MDA_/dd83bb1558b6578189437c49f7e010b0.jpeg"
                alt=""
              />
            </div>

            <div className="p-4">
              <p className="text-xl font-bold text-gray-900 font-pj">
                Eyo Festival
              </p>

              <p className="mt-2 text-truncated text-sm lg:text-base leading-[1.6] font-normal text-gray-600">
                The Eyo Festival, also known as the Adamu Orisha Play, is a
                colorful masquerade procession that takes place in Lagos,
                Nigeria. The festival is held to commemorate the life of a
                deceased Oba (king) or prominent individual and to usher in a
                new era of prosperity and blessings. It is considered one of the
                oldest masquerade tradition in Nigeria and is deeply rooted in
                Yoruba cultural beliefs and practices.
              </p>

              <Link
                to="/blog/667f1d0e00cb8a7fde4f3ed0"
                className="mt-7 color-brown hover:text-white hover:bg-[#4b1012] duration-300 ease-in-out transition-all text-base lg:text-lg border-[#4b1012] border-[2px] p-3  font-semibold items-center inline-flex cursor-pointer"
              >
                Read more
                <span className="material-symbols-outlined ml-2">
                  read_more
                </span>
              </Link>
            </div>
          </div>

          {/* fourth */}
          <div className="relative group bg-[#fff] rounded-md overflow-hidden">
            <div className="overflow-hidden  aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 lg:h-[200px]"
                src="https://www.akweyatv.com/wp-content/uploads/2023/12/Sango-Festival-1536x1023.webp"
                alt=""
              />
            </div>

            <div className="p-4">
              <p className="text-xl font-bold text-gray-900 font-pj">
                Sango Festival
              </p>

              <p className="mt-2 text-truncated text-sm lg:text-base leading-[1.6] font-normal text-gray-600">
                The Sango Festival is a traditional celebration held in Oyo, a
                historic city in Oyo State, Nigeria, to honor Sango, the Yoruba
                deity of thunder and lightning. This festival is deeply rooted
                in Yoruba mythology and cultural heritage, reflecting the
                reverence and significance of Sango in Yoruba religious beliefs.
                During the Sango Festival, which typically takes place annually,
                devotees and participants gather to pay homage to Sango through
                various rituals, ceremonies, and performances. The festival
                serves as a vibrant expression of Yoruba spirituality, unity,
                and cultural identity
              </p>

              <Link
                to="blog/667f1d6e00cb8a7fde4f3ed2"
                className="color-brown hover:text-white hover:bg-[#4b1012] duration-300 ease-in-out transition-all text-base lg:text-lg border-[#4b1012] border-[2px] p-3 mt-7 font-semibold items-center inline-flex cursor-pointer"
              >
                Read more
                <span className="material-symbols-outlined ml-2">
                  read_more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
