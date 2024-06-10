const NewsForm = () => {
  return (
    <form className="overflow-hidden max-w-[330px] mt-3 border-[1px] border-[#fff] flex justify-between items-center rounded-full  text-sm mb-3">
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter your email"
        className="max-w-[150px] lg:max-w-[unset] text-white ml-3 focus:outline-none inline-block bg-transparent"
        required
        autoComplete="off"
      />

      <input
        type="submit"
        value="Subscribe"
        className=" hover:text-[#4b0102] font-bold focus:text-[#4b0102] focus:outline-none bg-white p-3 lg:p-4 color-brown transition-all duration-300 ease-in-out rounded-full hover:bg-white focus:bg-white hover:ring-[1px] hover:ring-[#4b1012]"
      />
    </form>
  );
};

export default NewsForm;
