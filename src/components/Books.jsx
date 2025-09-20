import { useSelector } from "react-redux";
import { selectAll } from "../reducer/BookSlice";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Books = () => {
  const allbooks = useSelector(selectAll);
  const lastThree = allbooks.slice(-3).reverse();

  return (
    <div className="bg-pink2 h-[720px] min-h-screen" id="books">
      <h1 className="text-green3 font-Vazir font-bold text-2xl py-5 text-center ">
        جدیدترین کتاب ها
      </h1>
      <div className="flex justify-around flex-row ">
        {lastThree.map((book) => (
          <>
            <div
              key={book.id}
              className=" relative w-[300px] border-2 rounded-2xl  border-green2 bg-green1  mx-5 my-3 duration-200
            hover:transition-transform hover:-translate-y-2 hover:duration-200   h-100 overflow-hidden  shadow-2xl cursor-pointer group"
            >
              <Link to={`/books/${book.id}`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                  src={book.image}
                  alt={book.title}
                ></img>

                <div className=" bg-pink2 opacity-0  absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center  text-center p-4  group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className=" font-Vazir text-center text-green3 font-bold text-2xl py-3 pt-6  ">
                    {book.title}
                  </h2>
                  <hr className="border-green3 border-t-2 w-1/2 mx-auto rounded-full"></hr>
                  <h4 className=" font-Vazir text-center text-green3 font-bold py-2 ">
                    {book.author}
                  </h4>
                  <h4 className=" font-Vazir text-center text-green3 font-bold py-2 ">
                    {book.genre}
                  </h4>
                  <h4 className=" font-Vazir text-center text-green3 font-bold py-2 ">
                    قیمت : {book.price}
                  </h4>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-end ml-16 my-10">
        <Link
          to={"/books"}
          className=" flex  w-60 justify-center font-Vazir text-green3 font-semibold bg-gradient-to-tr from-pink1 via-pink2  to-white hover:bg-gradient-to-tr hover:from-white hover:via-pink2 hover:to-pink1 hover:transition  duration-75 border-2 border-pink2  py-5   rounded-2xl"
        >
          لیست کتاب ها
          <FaArrowLeft className="m-1" />
        </Link>
      </div>
    </div>
  );
};
export default Books;
