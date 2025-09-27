import AboutUspic from "../assets/aboutus-pic.jpg";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
            <h1 className=" font-Vazir text-green3 font-semibold m-2 text-center my-20 ">
              برای ارتباط با من میتونی از طریق سوشال مدیا بهم دسترسی داشته باشی
              کافیه روی یکی از لینک های زیر کلیک کنی 😁
            </h1>
            <div className="flex items-center justify-center">
              <Link
                to={"https://web.telegram.org/k/"}
                target="_blank"
                className="text-green3  mx-5 border-2 p-2 rounded-full hover:text-green2 transition duration-100 hover:transition hover:duration-100 
                 "
              >
                <FaTelegram size={30} />
              </Link>
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                className="text-green3  mx-5 border-2 p-2 rounded-full hover:text-green2 transition duration-100 hover:transition hover:duration-100 "
              >
                <RiInstagramLine size={30} />
              </Link>
              <Link
                to={"https://web.whatsapp.com/"}
                target="_blank"
                className="text-green3  mx-5 border-2 p-2 rounded-full hover:text-green2 transition duration-100 hover:transition hover:duration-100 "
              >
                <FaWhatsapp size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
