/* eslint-disable react/prop-types */

const SuccessPopup = ({ data, type, setData }) => {
  return (
    <div
      style={{ position: type == 2 && "absolute" }}
      className="text-green-800 text-sm p-3 py-4 rounded-md my-2 bg-green-200 font-semibold  inline-flex items-center flex-wrap top-10 left-5"
    >
      <span
        onClick={() => setData(null)}
        className="basis-full mb-5  text-right material-symbols-outlined text-black inline-block top-3 cursor-pointer"
      >
        cancel
      </span>
      <span className="material-symbols-outlined mr-2">thumb_up</span>
      <p>{data}</p>
    </div>
  );
};

export default SuccessPopup;
