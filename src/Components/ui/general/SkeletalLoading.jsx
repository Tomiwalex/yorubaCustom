/* eslint-disable react/prop-types */

const SkeletalLoading = ({ height, width, backgroundColor }) => {
  return (
    <div
      style={{ height, width, backgroundColor }}
      className="bg-gray-100 rounded-md animate-pulse my-4"
    ></div>
  );
};

export default SkeletalLoading;
