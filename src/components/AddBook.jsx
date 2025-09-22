import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../reducer/BookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [year, setYear] = useState();
  const [genre, setGenre] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeAuthor = (e) => setAuthor(e.target.value);
  const onChangeYear = (e) => setYear(e.target.value);
  const onChangeGenre = (e) => setGenre(e.target.value);
  const onChangePrice = (e) => setPrice(e.target.value);
  const onChangeImage = (e) => setImage(e.target.value);

  const handleSubmitForm = () => {
    dispatch(
      addBooks({
        title: title,
        author: author,
        year: year,
        genre: genre,
        price: price,
        image: `/images/${image}`,
      })
    );
    setTitle(" ");
    setAuthor(" ");
    setYear(" ");
    setGenre(" ");
    setPrice(" ");
    setImage(" ");
  };

  return (
    <>
      <main className="w-[50%] mx-[220px] flex justify-center items-center bg-white p-8 m-5 rounded-xl border-2 border-pink1">
        <form
          onSubmit={handleSubmitForm}
          className="w-full flex flex-col items-center"
        >
          <label
            htmlFor="title"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            نام کتاب
          </label>
          <input
            value={title}
            onChange={onChangeTitle}
            id="title"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          />

          <label
            htmlFor="author"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            نویسنده
          </label>
          <input
            value={author}
            onChange={onChangeAuthor}
            id="author"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          />

          <label
            htmlFor="year"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            سال
          </label>
          <input
            value={year}
            onChange={onChangeYear}
            id="year"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          />

          <label
            htmlFor="genre"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            ژانر
          </label>
          <input
            value={genre}
            onChange={onChangeGenre}
            id="genre"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          />

          <label
            htmlFor="price"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            قیمت
          </label>
          <input
            value={price}
            onChange={onChangePrice}
            id="price"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          />

          <label
            htmlFor="image"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            آدرس عکس
          </label>
          <input
            value={image}
            onChange={onChangeImage}
            id="image"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          />
          <button
            className="w-full bg-pink1 mt-6 mx-3 text-white px-[48px] py-[10px] rounded-[6px]  transition duration-75 hover:text-pink1 hover:bg-pink2 hover:transition  hover:duration-75"
            type="submit"
          >
            ثبت
          </button>
        </form>
      </main>
    </>
  );
};
export default AddBook;
