import { useSelector } from "react-redux";
import { selectAll } from "../reducer/BookSlice";
import { Link } from "react-router-dom";
import { IoGlassesOutline } from "react-icons/io5";

const Books = () => {
  const allbooks = useSelector(selectAll);
  console.log(allbooks);
  const lastThree = allbooks.slice(-3).reverse();

  return (
    <div className="bg-pink2 h-[450px]" id="books">
      <h1 className="text-green3 font-Vazir font-bold text-2xl py-5 text-center">
        جدیدترین کتاب ها
      </h1>
      <div className="flex justify-around flex-row ">
        {lastThree.map((book) => (
          <>
            <img className="w-10 h-11" src={book.image} alt={book.title}></img>
            <div
              key={book.id}
              className="w-[300px] border-2 rounded-3xl  border-green2 bg-green1  mx-5 my-3 duration-200
            hover:transition-transform hover:-translate-y-2 hover:duration-200 "
            >
              <h2 className=" font-Vazir text-center text-green3 font-bold py-3 pt-6  ">
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
                {book.price}
              </h4>
              <Link to={`/books/${book.id}`}>
                <IoGlassesOutline
                  size={50}
                  className="rounded-full border-2 p-2 m-2 border-green3 bg-green3 text-pink2 
                hover:bg-pink2 hover:text-green3 "
                />
              </Link>
            </div>
          </>
        ))}
      </div>

      <Link
        to={"/books"}
        className="flex justify-center  bg-green1 border-2 border-green2 py-5 my-5 mx-40 rounded-2xl"
      >
        لیست کل کتاب ها
      </Link>
    </div>
  );
};
export default Books;
