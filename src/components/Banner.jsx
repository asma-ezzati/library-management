import banner from "../assets/banner-pic.jpg";
import BookSearch from "./BookSearch";

const Banner = () => {
  return (
    <>
      <div className="w-[100%] h-auto relative ">
        <img
          src={banner}
          className="w-full h-full object-contain blur-[2px] "
        ></img>
        <div className="text-center absolute inset-0 p-32">
          <BookSearch />
        </div>
      </div>
    </>
  );
};
export default Banner;
