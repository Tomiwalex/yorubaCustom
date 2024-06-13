/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Footer from "../Components/ui/general/Footer";
import Header from "../Components/ui/general/Header";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   EmailShareButton,
//   WhatsappShareButton,
// } from "react-share";

const BlogDetails = () => {
  //   const url = window.location.href;
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="sticky top-0 z-[2]">
        <Header current={"blog"} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 my-10">
        {/* <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"> */}
        <img
          className="object-cover w-full max-w-[550px] h-auto transition-all duration-300 transform hover:scale-x-95 mb-5 rounded-md lg:float-start float-left lg:mr-[50px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gelede_masquerade%2C_Benin%2C_Nigeria.jpg/1200px-Gelede_masquerade%2C_Benin%2C_Nigeria.jpg"
          alt=""
        />
        {/* </div> */}

        {/* blog topic */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative z-[1]">
          The Significance of the Gelede Festival
        </h2>

        {/* post date */}
        <p className="mt-4 text-sm font-bold text-gray-500 ">
          November 22, 2021
        </p>

        {/* Action Buttons */}
        <div className="mt-4 cursor-pointer">
          <b className="inline-flex items-center p-4 bg-[#4b1012] rounded-lg text-white hover:bg-white hover:text-[#4b1012] ring-2 ring-[#4b1012] transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined mr-2">share</span>
            Share Post
          </b>

          <b className="color-brown inline-flex items-center p-4 rounded-lg ml-3 border-[2px] border-[#4b101290] hover:bg-[#4b1012] hover:text-white transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">content_copy</span>
          </b>
        </div>
        {/* 
        <div className="bg-[#4b1012] p-4 inline-block mx-3 rounded-md">
          <FacebookShareButton url={url}></FacebookShareButton>
        </div>

        <div className="inline-block bg-gray-300">
          <WhatsappShareButton url={url}>
            <img
              className="w-10 p-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9TWgsn28H_SNNlDT-E0NeSt8tRr_jlhS7qp4r-ViAGrlNWbHBg-7lpNB34_UWO16zlI&usqp=CAU"
              alt=""
            />
          </WhatsappShareButton>
        </div>

        <TwitterShareButton url={url}>Share on Twitter</TwitterShareButton>

        <EmailShareButton url={url}>Share via Email</EmailShareButton> */}

        {/* post content */}
        <p className="mt-10 text-sm lg:text-base leading-[1.6] font-normal text-gray-500  cursor-pointer">
          Inscribed in 2008 (3.COM) on the Representative List of the Intangible
          Cultural Heritage of Humanity (originally proclaimed in 2001) The
          Gelede is performed by the Yoruba-Nago community that is spread over
          Benin, Nigeria and Togo. For more than a century, this ceremony has
          been performed to pay tribute to the primordial mother Iyà Nlà and to
          the role women play in the process of social organization and
          development of Yoruba society. The Gelede takes place every year after
          the harvests, at important events and during drought or epidemics and
          is characterized by carved masks, dances and chants, sung in the
          Yoruba language and retracing the history and myths of the Yoruba-Nago
          people. The ceremony usually takes place at night on a public square
          and the dancers prepare in a nearby house. The singers and the
          drummers are the first to appear. They are accompanied by an orchestra
          and followed by the masked dancers wearing splendid costumes. There is
          a great deal of preparatory craftwork involved, especially mask
          carving and costume making. The performances convey an oral heritage
          that blends epic and lyric verses, which employ a good deal of irony
          and mockery, supported by satirical masks. Figures of animals are
          often used, such as the serpent, a symbol of power, or the bird, the
          messenger of the “mothers”. The community is divided into groups of
          men and women led by a male and a female head. It is the only known
          masked society, which is also governed by women. Although the Gelede
          has nowadays adapted to a more patriarchal society, the oral heritage
          and dances can be considered as a testimony of the former matriarchal
          order. Technical development is resulting in a gradual loss of
          traditional know-how, and tourism is jeopardizing the Gelede by
          turning it into a folklore product. Nevertheless, the Gelede community
          shows great awareness of the value of their intangible heritage, which
          is reflected in the efforts put into the preparation work and in the
          growing number of participants.
        </p>

        <hr className="my-12 lg:my-16" />

        {/* others || comment  */}
        <div className="">
          <div className="">
            <div className="flex items-center gap-x-5 cursor-pointer">
              <h3
                onClick={() => setShowForm(false)}
                className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center"
              >
                Comments(10)
                <span className="material-symbols-outlined ml-1">reviews</span>
              </h3>

              <h3
                onClick={() => setShowForm(true)}
                className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center"
              >
                Make a comment
                <span className="material-symbols-outlined ml-1">edit</span>
              </h3>
            </div>

            {/* comments */}
            {!showForm && (
              <div className="my-7 flex gap-5 flex-wrap">
                {[1, 5, 3].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded bg-gray-100 p-4 md:basis-[45%] lg:basis-[32%] cursor-pointer"
                    >
                      {/* name */}
                      <h3 className="text-base lg:text:2xl text-gray-800 font-semibold flex items-center mt-2">
                        reviewer's name
                      </h3>

                      <p className="mt-1 text-sm lg:text-base text-gray-500 font-medium leading-[1.6]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam accusantium, excepturi maxime iste quos nisi illum
                        quo laboriosam aperiam nostrum vitae expedita? Labore
                        non animi neque consequuntur accusamus maxime minus?
                      </p>

                      <p className="text-xs lg:text-sm text-gray-600 font-medium leading-[1.6] mt-2">
                        {" "}
                        10/10/2024
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* comment form */}
          {showForm && (
            <form action="" className="my-4 max-w-[350px] mt-5">
              <h2 className="text-lg lg:text:xl font-semibold text-gray-800  mt-8 mb-1 basis-full md:basis-auto">
                Make a Comment
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                className="border-[2px] border-[#4b101270] ring-offset-2 focus:outline-none hover:ring-[2px] ring-[#4b1012] p-3 rounded-md my-3 transition-all ease-in-out duration-300 w-full"
                required
              />

              {/* email address */}
              <input
                type="email"
                placeholder="enter your email"
                className="border-[2px] border-[#4b101270] ring-offset-2 focus:outline-none hover:ring-[2px] ring-[#4b1012] p-3 rounded-md my-3 transition-all ease-in-out duration-300 block w-full"
                required
              />

              {/* textarea */}
              <textarea
                required
                maxLength={60}
                className="border-[2px] border-[#4b101270] ring-offset-2 focus:outline-none hover:ring-[2px] ring-[#4b1012] p-3 rounded-md my-3 transition-all ease-in-out duration-300 block mt-6 w-full"
                placeholder="Enter your comment"
              />

              {/* submit button */}
              <input
                type="submit"
                value="Comment"
                className="w-full bg-brown hover:bg-[#4b101220] text-white hover:text-[#4b1012] p-3 rounded-md my-3 cursor-pointer transition-all ease-in-out duration-300 font-bold"
              />
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
