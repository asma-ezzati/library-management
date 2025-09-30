import { useSelector } from "react-redux";
import { selectAllCat } from "../reducer/CategorySlice";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = useSelector(selectAllCat);
  return (
    <>
      <div className="bg-pink2 h-[720px] min-h-screen py-8" id="category">
        <div className="flex justify-between">
          <h1 className="text-green3 font-Vazir font-bold text-2xl py-5 text-right mr-16 ">
            دسته بندی کتاب ها
          </h1>
        </div>
        <div className="flex justify-around flex-row flex-wrap ">
          {categories.map((cat) => (
            <Link
              to={`/genre/${cat.id}`}
              key={cat.id}
              className="w-1/4  p-5 m-5 rounded-xl bg-white text-center font-Vazir text-green3 font-bold text-lg shadow-2xl 
              hover:transition-transform hover:-translate-y-5 hover:duration-150 transition duration-150 "
            >
              {cat.genre}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Category;
