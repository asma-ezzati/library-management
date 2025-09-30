import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectByCatIds } from "../reducer/CategorySlice";
import { selectBooksByGenre } from "../reducer/selectors/selector";
import { IoGlassesOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";

const GenreBookPage = () => {
  const { genreId } = useParams();
  const category = useSelector((state) => selectByCatIds(state, genreId));
  const Books = useSelector((state) => selectBooksByGenre(state, genreId));
  return (
    <>
      <div className=" w-[100%] min-h-screen bg-pink2">
        <h1 className="text-center font-Vazir text-green3 font-bold text-3xl py-6">
          ژانر : {category.genre}
        </h1>
        <Link
          to={"/"}
          className=" absolute top-8 left-8  w-16  flex justify-center font-Vazir text-green3 text-xl font-semibold  border-2 border-pink2    rounded-full hover:border-2 transition duration-200 hover:border-green3 hover:transition hover:duration-200 "
        >
          <HiOutlineHome size={30} />
        </Link>
        {Books.length === 0 ? (
          <h1 className="text-center font-Vazir text-green3 font-bold text-3xl py-6">
            کتابی با این ژانر پیدا نشد عزیزم
          </h1>
        ) : (
          <div className="flex justify-around flex-row flex-wrap">
            {Books.map((book) => (
              <div
                key={book.id}
                className=" relative w-[300px] border-2 rounded-2xl  border-pink1 bg-green1  mx-5 my-3 duration-200
            hover:transition-transform hover:-translate-y-2 hover:duration-200   h-100 overflow-hidden  shadow-2xl cursor-pointer group"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                  src={book.image}
                  alt={book.title}
                ></img>

                <div className="  bg-pink2 opacity-0  absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center  text-center p-4  group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className=" font-Vazir text-center text-green3 font-extrabold text-2xl py-3 pt-6  ">
                    {book.title}
                  </h2>
                  <hr className="border-green3 border-t-2 w-1/2 mx-auto rounded-full"></hr>
                  <h4 className=" font-Vazir text-center text-green3 font-bold text-xl py-2 ">
                    {book.author}
                  </h4>
                  <h4 className=" font-Vazir text-center text-green3 font-bold py-2 ">
                    قیمت : {book.price}
                  </h4>
                  <Link to={`/books/${book.id}`}>
                    <IoGlassesOutline
                      size={50}
                      className=" absolute left-8 bottom-8 border-2 border-green3 rounded-full bg-green2 transition text-white p-1
                      hover:bg-white hover:text-green3 hover:transition "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default GenreBookPage;
