import { Link } from "react-router-dom";
import signupPic from "../assets/signup-pic.jpg";

const SignupPage = () => {
  return (
    <>
      <main className="min-h-screen bg-pink2 flex items-center place-content-center ">
        <div className="flex items-center bg-white border-2 border-pink1 rounded-[16px] p-[6px] w-[90vw] shadow-md ">
          <div className="p-[32px] w-[50%] ">
            <h2 className="font-Vazir text-green3 font-extrabold text-xl  m-0  mb-[20px] ">
              فرم ثبت نام
            </h2>
            <h3 className="font-Vazir text-green3 font-extrabold m-0 text-md  mb-[40px]  ">
              خوش اومدید (●'◡'●)
            </h3>
            <form>
              <input
                type="email"
                placeholder="Email"
                className=" w-[100%] bg-white border-2 border-pink2 mb-[10px] border-1 py-[16px] font-Vazir block rounded-[6px] h-[48px] font-[16px] p-1 focus:outline-pink1  "
              ></input>
              <input
                type="password"
                placeholder="Password"
                className=" w-[100%]  bg-white border-2 border-pink2 mb-[10px] border-1 py-[16px] font-Vazir block rounded-[6px] h-[48px] font-[16px] p-1  focus:outline-pink1 "
              ></input>
              <div className="flex items-center justify-between my-[40px]">
                <label className="checkbox">
                  <input type="checkbox" className="accent-pink1"></input>
                  <span className="check font-Vazir text-green3 font-semibold">
                    {" "}
                    Remember Me
                  </span>
                </label>
                <a className="font-Vazir text-green3 font-semibold">
                  Forget password
                </a>
              </div>
              <button className="bg-pink1 text-white px-[48px] py-[10px] rounded-[6px]  transition duration-75 hover:text-pink1 hover:bg-pink2 hover:transition  hover:duration-75">
                Sign In
              </button>
              <Link
                to={"/"}
                className="bg-pink1 mx-3 text-white px-[48px] py-[10px] rounded-[6px]  transition duration-75 hover:text-pink1 hover:bg-pink2 hover:transition  hover:duration-75"
              >
                Cancel
              </Link>
            </form>
          </div>
          <img
            src={signupPic}
            className="w-[50%] border-2 border-pink1 rounded-[14px] self-stretch object-cover m-5  "
          ></img>
        </div>
      </main>
    </>
  );
};
export default SignupPage;
