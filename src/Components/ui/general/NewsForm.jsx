/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import usePostData from "../../../hooks/usePostData";
import SuccessPopup from "./SuccessPopup";
import ErrorPopup from "./ErrorPopup";

const NewsForm = ({ type }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { data, error, loading, postData, setData } = usePostData(
    "/newsletter/subscribe"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        style={{ borderColor: type == 2 ? "#4b1012" : "#fff" }}
        className="overflow-hidden max-w-[280px] lg:max-w-[310px] ml-5 mt-3 border-[1px] flex justify-between items-center rounded-full  text-sm mb-3"
      >
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
          style={{ color: type == 2 ? "#4b1012" : "#fff" }}
          className="max-w-[150px] lg:max-w-[unset]  ml-3 focus:outline-none inline-block bg-transparent"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          autoComplete="off"
        />

        <input
          type="submit"
          value="Subscribe"
          style={{
            backgroundColor: type == 2 ? "#4b1012" : "#fff",
            color: type != 2 ? "#4b1012" : "#fff",
          }}
          className=" hover:text-[#4b0102] font-bold focus:text-[#4b0102] focus:outline-none  p-3 lg:p-4 color-brown transition-all duration-300 ease-in-out rounded-full hover:bg-white focus:bg-white hover:ring-[1px] hover:ring-[#4b1012]"
        />
      </form>

      {loading && (
        <p className="text-gray-400 text-sm p-3 rounded my-2">loading...</p>
      )}

      {error && <ErrorPopup error={error} type={type} />}

      {data && <SuccessPopup data={data} type={type} setData={setData} />}
    </div>
  );
};

export default NewsForm;
