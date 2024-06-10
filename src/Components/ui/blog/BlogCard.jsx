import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link
      to="/blog/1"
      className=" flex rounded-xl overflow-hidden relative z-[1] group bg-cover items-end min-h-[330px] lg:min-h-[60dvh] text-white group"
    >
      {/* category */}
      <div className="absolute z-[2] top-4 right-4 p-3 text-sm font-semibold rounded bg-[#fcb92d]">
        Category
      </div>

      {/* bg image */}
      <div className="z-[0] overflow-hidden absolute rounded-lg top-0 bottom-0">
        <img
          className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gelede_masquerade%2C_Benin%2C_Nigeria.jpg/1200px-Gelede_masquerade%2C_Benin%2C_Nigeria.jpg"
          alt=""
        />
      </div>

      {/* overlay 2 */}
      <div className="bg-gradient-to-b from-[#00000030] to-[#000] absolute z-[1] top-0 bottom-0 w-full"></div>

      <div className="relative z-[1] px-4 mb-4 group-hover:mb-7 transition-all duration-300 ease-in-out">
        <p className="mt-4 text-sm font-normalfont-pj">November 22, 2021</p>
        <p className="mt-2 text-xl font-bold  font-pj">
          The Significance of the Gelede Festival
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
