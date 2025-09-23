import { Link, NavLink } from "react-router-dom";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className=" w-[80px] h-[300px] bg-white m-5 rounded-xl flex flex-wrap flex-col p-5  ">
        <NavLink
          to={"/admin/edititem"}
          className={({ isActive }) =>
            `my-4 mx-auto ${isActive ? "text-pink1" : "text-green2"} `
          }
        >
          <FaEdit size={30} />
        </NavLink>
        <NavLink
          to={"/admin/additem"}
          className={({ isActive }) =>
            `my-4 mx-auto ${isActive ? "text-pink1" : "text-green2"} `
          }
        >
          <FaPlus size={30} />
        </NavLink>
        <NavLink
          to={"/admin/deleteitem"}
          className={({ isActive }) =>
            `my-4 mx-auto ${isActive ? "text-pink1" : "text-green2"} `
          }
        >
          <FaTrashAlt size={30} />
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `my-4 mx-auto ${isActive ? "text-pink1" : "text-green2"} `
          }
        >
          <IoMdExit size={38} />
        </NavLink>
      </div>
    </>
  );
};
export default Sidebar;
