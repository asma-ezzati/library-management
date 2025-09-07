import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-pink2 w-[100%] h-auto flex flex-row font-Vazir">
        {/* icon& title */}
        <div className="flex justify-around">
          <GiBookshelf size={70} className="text-green3 mr-5 pb-2" />
          <h1 className="py-6 px-3 font-bold text-xl text-green3 tracking-widest ">
            کتابخونه من
          </h1>
        </div>

        {/*  خانه */}
        <div className="text-green3 text-lg font-bold py-6 mx-60  flex">
          <a href="#" className="mx-2 font-Vazir">
            خانه
          </a>

          {/* کتاب ها */}

          <a href="#books" className="mx-2 font-Vazir">
            کتاب ها
          </a>

          {/* دسته بندی */}
          <a href="#category" className="mx-2 font-Vazir">
            دسته بندی
          </a>
          {/* درباره ما */}
          <a href="#aboutUs" className="mx-2 font-Vazir">
            درباره ما
          </a>
          {/* ثبت نام */}
          <div className="">
            <Link to={"/signup"} className="mx-2 font-Vazir float-end col-12">
              ثبت نام
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
