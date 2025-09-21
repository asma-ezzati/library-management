import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className=" w-[80px] h-[300px] bg-white m-5 rounded-xl flex flex-wrap flex-col p-5  ">
        <Link
          to={"/admin/edititem"}
          className=" text-green2 my-4 mx-auto focus:text-pink1"
        >
          <FaEdit size={30} />
        </Link>
        <Link
          to={"/admin/additem"}
          className="text-green2 my-4 mx-auto focus:text-pink1"
        >
          <FaPlus size={30} />
        </Link>
        <Link
          to={"/admin/deleteitem"}
          className="text-green2 my-4 mx-auto focus:text-pink1"
        >
          <FaTrashAlt size={30} />
        </Link>
        <Link to={"/"} className="text-green2 my-4 mx-auto focus:text-pink1">
          <IoMdExit size={38} />
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
