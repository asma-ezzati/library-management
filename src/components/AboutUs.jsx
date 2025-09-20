import AboutUspic from "../assets/aboutus-pic.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="bg-pink2  min-h-screen flex items-ceneter place-content-center">
        <div className="w-[90%] py-5 ">
          <h1
            id="aboutUs"
            className="  font-Vazir font-extrabold text-green3 text-center text-2xl  py-5 "
          >
            درباره ما
          </h1>
          <div className=" w-1/2 float-start  m-3 shadow-xl  ">
            <img src={AboutUspic} className="rounded-xl"></img>
          </div>
          <div>
            <p className=" font-Vazir text-green3 font-semibold m-3 text-center my-20 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
