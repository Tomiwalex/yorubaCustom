/* eslint-disable react/prop-types */
const PaymentPopUp = ({ setFormShown }) => {
  return (
    <div className="absolute z-10 bg-[#00000090] backdrop-blur-sm inset-0 p-5 md:p-[50px] lg:p-[100px]">
      <div className="rounded w-[100%] cursor-pointer max-w-[350px] bg-white p-4 ml-auto">
        {/* cancel button */}
        <span
          onClick={() => setFormShown(false)}
          className="material-symbols-outlined ml-auto inline-block hover:bg-red-100 p-2 rounded"
        >
          close
        </span>

        <h3 className="text-xl mt-4 lg:text:3xl text-gray-800 font-semibold">
          Payment form
        </h3>

        <p className="text-sm lg:text-base text-gray-400 font-medium leading-[1.6] mt-1 max-w-[500px]">
          Fill in your required details accurately.
        </p>

        <form action="" className="mt-7">
          <input
            type="text"
            className="w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
            placeholder="Your name"
            required
            name="name"
            id="name"
          />
          <input
            type="email"
            className="my-5 w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
            placeholder="Your mail"
            required
            name="email"
          />

          <input
            type="tel"
            className="w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
            placeholder="Phone number"
            required
            name="phone number"
          />

          <textarea
            className="mt-5 w-full px-3 py-[10px] rounded border-[2px] border-gray-300"
            name="address"
            id=""
            placeholder="Enter a precise description of your address"
            required
          />

          <input
            className="cursor-pointer w-full bg-gray-800 text-white p-3 rounded text-base font-semibold mt-6"
            type="submit"
            value="Continue"
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentPopUp;
