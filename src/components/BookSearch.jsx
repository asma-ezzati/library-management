import { useSelector } from "react-redux";
import { useState } from "react";
import { selectAll } from "../reducer/BookSlice";

const BookSearch = () => {
  const books = useSelector(selectAll);

  const [query, setQuery] = useState("");
  const onChangeInput = (e) => setQuery(e.target.value);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center mt-10 ">
        <input
          value={query}
          onChange={onChangeInput}
          placeholder="جستجو کتاب ..."
          className="w-[550px] h-[55px] bg-pink2 text-green3 font-Vazir  px-5 py-2 border-2 border-pink1 rounded-full 
              transition-transform duration-1000
              focus:outline-none focus:border-2 focus:border-pink1 focus:transition-transform  focus:duration-1000  
              "
        ></input>
        {query && (
          <ul className=" mt-1 bg-white border-2 border-pink1 rounded-lg w-[550px] max-h-64 overflow-auto">
            {filteredBooks.map((book) => (
              <li key={book.id} className="p-2 border-b font-Vazir text-green3">
                {book.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default BookSearch;
