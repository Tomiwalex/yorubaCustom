import Header from "../Components/ui/general/Header";

const StorePage = () => {
  return (
    <div>
      <Header current={"store"} />

      <section className="border-t-[1px]">
        <div className="flex max-w-[1200px] lg:mx-auto p-3 mx-5  bg-gray-200 rounded-md my-5 lg:my-10">
          {/* filter */}
          <div className="overflow-hidden max-w-[45%] bg-white  gap-x-5 p-2 lg:p-3 rounded-md flex items-center">
            <span className="material-symbols-outlined">tune</span>

            <select className="font-medium focus:outline-none mx-2">
              <option>Filter</option>
              <option>Painting</option>
              <option>Digital</option>
              <option>Photograph</option>
            </select>
          </div>

          {/* sort */}
          <div className="ml-5 max-w-[45%] bg-white p-2 rounded-md flex items-center">
            <span className="material-symbols-outlined">sort</span>

            <select className="font-medium focus:outline-none mx-2">
              <option>Sort</option>
              <option>Oldest</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;
