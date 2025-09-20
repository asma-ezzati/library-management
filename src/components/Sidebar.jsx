import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className=" w-[80px] h-screen bg-green3 m-5 rounded-xl flex flex-wrap flex-col p-5  ">
        <Link to={"/admin/additem"} className=" text-white my-4 mx-auto">
          <FaPlus size={30} />
        </Link>
        <Link className=" text-white my-4 mx-auto">
          <FaEdit size={30} />
        </Link>
        <Link className=" text-white my-4 mx-auto">
          <FaTrashAlt size={30} />
        </Link>
        <Link className=" text-white my-4 mx-auto">
          <IoMdExit size={30} />
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
