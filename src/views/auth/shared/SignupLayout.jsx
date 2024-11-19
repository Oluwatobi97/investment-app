import React from "react";
import { Link } from "react-router-dom";

export const SignupLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center  p-10 h-screen bg-gray-50 ">
      <div className="p-10 border w-[500px] rounded-md bg-white ">
        <h1 className="text-center text-2xl mb-5 font-bold text-blue-600">
          Register
        </h1>
        <div className=" text-lg text-gray-800 w-full h-full  font-bold   ">
          <div className="">
            {/* <h1>{layoutName}</h1> */}
            {children}
          </div>
        </div>
        <div className="text-sm mt-5 cursor-pointer font-semibold justify-between flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/Sign-in"}>LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
