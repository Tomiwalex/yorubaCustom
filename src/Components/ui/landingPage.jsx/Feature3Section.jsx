/* eslint-disable react/no-unescaped-entities */
const Feature3Section = () => {
  const data = [
    {
      title: "Accurate data and fact",
      icon: "analytics",
      text: "Are you a student? Or you’re just curious about the Yoruba culture? Look no further!! Yoruba Customs delivers the most accurate insights into the Yoruba history, culture, and religion. Get yourself comfortable as we embark on a beautiful journey with you.",
    },
    {
      title: "Videos",
      icon: "video_library",
      text: "Our website is full of content on Yoruba culture, featuring podcasts, interviews, event coverage, and much more. Stay connected with us for a deep dive into the past and continuous updates on current Yoruba events and traditions.",
    },
    {
      title: "Traditional Stories",
      icon: "auto_stories",
      text: "We’re fascinated by our history and can’t wait to share these fascinating narratives with you. Join our community as we explore the depths of Yoruba heritage and the treasures of our ancestral inheritance.",
    },
    {
      title: "Merchandize",
      icon: "category",
      text: "We're not just storytellers of our culture; we bring the essence of Yoruba traditions right to your doorstep. Our online store grants you the convenience to acquire traditional Yoruba items, including revered Yoruba religious symbols and totems, at competitive prices ",
    },
  ];
  return (
    <section
      style={{
        background:
          "url('https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/yoruba-hausa-ibo-musicians-2-paul-gbolade-omidiran.jpg')",
      }}
      className="py-20  sm:py-16 lg:py-[100px] cursor-pointer bg-cover bg-center relative backdrop-blur-lg "
    >
      {/* overlay */}
      <div className="absolute w-full inset-0 z-[1] object-cover h-full bg-[#2b090a] backdrop-blur-[30px] "></div>
      <div className="px-5 md:px-[50px] lg:px-[100px] relative z-[2] max-w-[1700px] 2xl:mx-auto">
        <div className="text-center ">
          <h2 className="text-2xl mb-3 font-bold text-white sm:text-4xl xl:text-4xl max-w-3xl mx-auto lg:leading-[1.6]">
            Àṣà Wa, Ìse Wa (Our Culture, Our Lifestyle)
          </h2>
          <p className="mt-4 text-base xl:text-lg leading-7 text-white sm:mt-8 max-w-4xl mx-auto">
            A n ṣe àtúnṣe àwọn èrò àti igbega oye agbaye nipa àwon àṣà Yoruba. A
            ní ìgbéraga ńlá nínú ṣíṣe àfihàn ẹwà òtítọ́àti ọrọ̀ogún àṣà wa sí
            àgbáyé.
          </p>
        </div>

        <h2 className="text-lg lg:mt-20 lg:text-center text-left mt-10 font-bold text-white  xl:text-2xl lg:leading-[1.6]">
          Why we are your “go to” guy for Yoruba culture and heritage
        </h2>
        <div className="relative grid grid-cols-1 mt-5  sm:mt-16 sm:grid-cols-2  gap-y-10 md:grid-cols-4 lg:gap-x-4 md:gap-2 xl:mt-10">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:bg-[white] hover:text-[#4b1012] transition-all duration-300 ease-in-out p-4 py-10 md:p-6 lg:py-8 lg:px-5 relative rounded-md  bg-[#fff] text-[#4b1012] backdrop-blur-sm group "
              >
                {/* bg image*/}
                <span className="bg-[#4b101220] p-4 rounded-full material-symbols-outlined text-[36px] mb-3 font-medium group-hover:bg-[#4b1012] group-hover:text-white transition-all duration-300 ease-in-out">
                  {item.icon}
                </span>

                <h3 className=" text-xl lg:text-3xl font-semibold  font-pj">
                  {item.title}
                </h3>

                <p className="mt-5 text-base font-medium leading-[1.6]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature3Section;
