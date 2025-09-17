import banner from "../assets/banner-pic.jpg";

const Banner = () => {
  return (
    <>
      <div className="w-[100%] h-auto relative ">
        <img
          src={banner}
          className="w-full h-full object-contain blur-[2px] "
        ></img>
        <div className="absolute inset-0 flex items-center justify-center ">
          <form className="my-2  ">
            <input
              placeholder="جستجو"
              className="w-[550px] h-[55px] bg-pink2 text-green3 font-Vazir  px-5 py-2 border-2 border-pink1 rounded-full 
              transition-transform duration-1000
              focus:outline-none focus:border-2 focus:border-pink1 focus:transition-transform  focus:duration-1000  
              focus:scale-x-125  focus:-translate-y-5"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
export default Banner;
