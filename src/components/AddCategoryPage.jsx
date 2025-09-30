import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  selectAllCat,
} from "../reducer/CategorySlice";
import { TiDeleteOutline } from "react-icons/ti";

const AddCategoryPage = () => {
  const categoris = useSelector(selectAllCat);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState();
  const onGenreChange = (e) => setGenre(e.target.value);

  const handleSubmitForm = () => {
    dispatch(addCategory({ genre: genre }));
    setGenre(" ");
  };

  return (
    <>
      <main className="w-[50%] mx-[220px] flex justify-center items-center bg-white p-8 m-5 rounded-xl border-2 border-pink1">
        <form
          onSubmit={handleSubmitForm}
          className="w-full flex flex-col items-center"
        >
          <label
            htmlFor="genre"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            ژانر دلخواهتو وارد کن :
          </label>
          <input
            value={genre}
            onChange={onGenreChange}
            id="genre"
            type="text"
            className="w-full p-2 rounded-lg font-Vazir text-green3 m-2 bg-white border-2 border-pink2 focus:outline-pink1"
          ></input>
          <button
            className="w-full bg-pink1 mt-6 mx-3 text-white px-[48px] py-[10px] rounded-[6px]  transition duration-75 hover:text-pink1 hover:bg-pink2 hover:transition  hover:duration-75"
            type="submit"
          >
            ثبت
          </button>
        </form>
      </main>

      <main className="w-[50%] mx-[220px] flex justify-center items-center bg-white p-8 m-5 rounded-xl border-2 border-pink1">
        <ul className="flex flex-wrap list-disc ">
          {categoris.map((cat) => (
            <li key={cat.id} className="mx-3  font-Vazir text-green3 p-1">
              {cat.genre}
              <button onClick={() => dispatch(deleteCategory(cat.id))}>
                <TiDeleteOutline className="hover:text-pink1 " size={20} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
export default AddCategoryPage;
