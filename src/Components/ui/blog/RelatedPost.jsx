import { Link, useParams } from "react-router-dom";
import useGetData from "../../../hooks/useGetData";
import SkeletalLoading from "../general/SkeletalLoading";

const RelatedPost = () => {
  const { data: otherData, loading } = useGetData("/blog");
  const { id } = useParams();

  return (
    <section className="mb-20 mt-5 w-full">
      <div className=" mx-auto px-4 lg:px-0">
        <h2 className="text-lg font-bold lg:text-xl mb-4 lg:text-right">
          Other Blogs
        </h2>

        <div className="grid grid-cols-1  mt-5 gap-y-5">
          {loading && (
            <SkeletalLoading
              width={"100%"}
              height={"150px"}
              backgroundColor={"gray"}
            />
          )}

          {otherData &&
            otherData?.data.map((item, index) => {
              if (index < 4 && item?.id !== id) {
                return (
                  <Link
                    to={`/blog/${item?.id}`}
                    key={index}
                    className="hover:scale-95 transition-all duration-300 ease-in-out flex bg-gray-50 rounded-xl p-2 lg:p-3 gap-x-4 shasow-sm"
                  >
                    <img
                      src={item.imageUrl}
                      className="h-[100px] w-[100px] rounded-xl"
                    />

                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-bold">
                        {item?.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium">
                        {new Date(item?.date).toDateString()}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default RelatedPost;
