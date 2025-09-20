import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const PannelAdmin = () => {
  return (
    <>
      <div className=" bg-pink2 min-h-screen  ">
        <h1 className="font-Vazir font-extrabold text-green3 text-2xl text-center py-5 ">
          پنل مدیریتی
        </h1>
        <hr className="border-t-2 border-green3 w-1/2 mx-auto"></hr>
        <div className="flex flex-row">
          <Sidebar />

          <div className="w-[90%]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default PannelAdmin;
