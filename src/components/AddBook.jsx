const AddBook = () => {
  return (
    <>
      <main className="w-[50%] mx-[220px] flex justify-center items-center bg-white p-8 m-5 rounded-xl border-2 border-pink1">
        <form className="w-full flex flex-col items-center">
          <label
            htmlFor="title"
            className="font-Vazir text-green3 font-bold text-lg p-2 text-center w-full"
          >
            نام کتاب
          </label>
          <input
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
