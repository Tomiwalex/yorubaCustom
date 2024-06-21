/* eslint-disable react/prop-types */
const ErrorPopup = ({ error, type }) => {
  return (
    <div style={{ position: type == 2 && "absolute" }} className="top-3 left-4">
      <p className="text-red-500 text-sm p-3 py-4 rounded-md my-2 bg-red-200 font-semibold  inline-flex items-center">
        <span className="material-symbols-outlined mr-2">error</span>
        {error}
      </p>
    </div>
  );
};

export default ErrorPopup;
