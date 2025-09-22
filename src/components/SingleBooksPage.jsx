import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectById } from "../reducer/BookSlice";
import { FaArrowLeft } from "react-icons/fa";

const SingleBooksPage = () => {
  const { bookId } = useParams();
  const book = useSelector((state) => selectById(state, bookId));
  return (
    <>
      <div className=" bg-pink2 min-h-screen flex justify-center items-center ">
        <div className="flex w-[80%] rounded-xl h-[500px]">
          <img src={book.image} className=" rounded-xl ml-5 flex-1"></img>
          <div className="">
            <h1 className=" font-Vazir font-bold text-green3 text-xl p-1 m-2 ">
              نام کتاب : {book.title}
            </h1>
            <h1 className=" font-Vazir font-bold text-green3 text-xl p-1 m-2 ">
              نام نویسنده : {book.author}
            </h1>
            <h1 className=" font-Vazir font-bold text-green3 text-xl p-1 m-2 ">
              سال : {book.year}
            </h1>
            <h1 className=" font-Vazir font-bold text-green3 text-xl p-1 m-2 ">
              ژانر : {book.genre}
            </h1>
            <h1 className=" font-Vazir font-bold text-green3 text-xl p-1 m-2 ">
              قیمت : {book.price}
            </h1>
            <p className="font-Vazir font-bold text-green3 opacity-90  text-lg p-1 m-2 ">
              <span>توضیحات :</span>
              <br></br>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.
            </p>
          </div>
        </div>
        <div className="absolute top-5 left-1">
          <Link
            to={"/books"}
            className=" p-3 my-3 mx-10 flex justify-center font-Vazir text-green3 text-xl font-semibold  border-2 border-pink2    rounded-full hover:border-2 transition duration-200 hover:border-green3 hover:transition hover:duration-200 "
          >
            <FaArrowLeft className="m-1 mr-2" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default SingleBooksPage;
