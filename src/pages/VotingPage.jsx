import { useSearchParams } from "react-router-dom";
import Header from "../Components/ui/general/Header";
import Footer from "../Components/ui/general/Footer";

const VotingPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phoneNumber = searchParams.get("phone+number");

  return (
    <div className="min-h-[100dvh] bg-[#4b101210]">
      <Header current="contest" />

      <section className="px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-[1700px] mt-10 mb-20">
        <h1 className="font-extrabold text-xl lg:text-3xl">Vote Name</h1>
        <p className="mt-2 text-gray-600 text-sm lg:text-base font-medium leading-[1.6] max-w-[600px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illum
          incidunt, quis, laboriosam id amet maxime praesentium ullam non
          repellat voluptatum modi ad perspiciatis numquam vitae omnis molestiae
          minima accusantium?
        </p>

        <h1 className="font-extrabold text-lg lg:text-2xl mt-14">
          Contestants
        </h1>

        <div className="flex gap-5 mt-5 flex-wrap">
          {[1, 1, 1].map((item, index) => {
            return (
              <div
                className="bg-white text-[#1f1f1f] p-5 rounded-tl-xl rounded-br-xl  min-w-[200px]"
                key={index}
              >
                <h1 className="font-extrabold text-lg lg:text-xl mb-5">Name</h1>

                <button className="p-3 font-bold text-base bg-[#280708] hover:bg-[#28070880] duration-300 ease-in-out transition-all rounded-xl text-white">
                  Vote
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VotingPage;
