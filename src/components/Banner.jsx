import banner from "../assets/banner-pic.jpg";

const Banner = () => {
  return (
    <>
      <div className="w-[100%] h-auto ">
        <img src={banner} className="w-full h-full object-contain "></img>
      </div>
    </>
  );
};
export default Banner;
