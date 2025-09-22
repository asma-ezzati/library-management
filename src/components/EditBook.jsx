import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../reducer/BookSlice";
import { Link } from "react-router-dom";

const EditBook = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAll);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap mt-5 ">
        {books.map((book) => (
          <div
            key={book.id}
            className="w-[500px] border-2 border-green3 rounded-xl p-4 my-5 mx-auto flex"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-1/2 m-2 rounded-xl"
            ></img>
            <div className="m-2 w-1/2 mt-5 ">
              <h1 className="font-Vazir font-bold text-green3 py-2 text-center  ">
                نام کتاب : {book.title}
              </h1>
              <h1 className="font-Vazir font-bold text-green3 py-2 text-center  ">
                نویسنده: {book.author}
              </h1>
              <h1 className="font-Vazir font-bold text-green3 py-2 text-center  ">
                سال : {book.year}
              </h1>
              <h1 className="font-Vazir font-bold text-green3 py-2 text-center  ">
                ژانر : {book.genre}
              </h1>
              <h1 className="font-Vazir font-bold text-green3 py-2 text-center  ">
                قیمت : {book.price}
              </h1>

              <Link
                to={`/admin/edititem/${book.id}`}
                className=" flex justify-center   w-full border-2 border-green3 rounded-xl  mt-8 px-2 py-3 font-Vazir text-white font-bold bg-green3
                  hover:bg-pink1 hover:border-2 hover:border-pink1 "
              >
                ویرایش اطلاعات
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default EditBook;
