import React from "react";
import { AllButton } from "../../../views/auth/shared/AllButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:p-6  items-center mb-0 mt-32 ">
      <div className=" items-center text-center ">
        <div className="  ">
          <div className="">
            <h3 className="text-[20px] mt-8 lg:text-xl font-semibold text-blue-600 ">
              Welcome To Fedral Investment
            </h3>
            <p className="text-[30px] mt-4 lg:text-9xl font-bold">
              WHERE DREAMS TURN INTO
              <span className="text-blue-600"> PROFITS </span>
            </p>
            <h1 className="text-gray-800 text-lg mt-10 ">
              Elevate your crypto trading game with our AI-powered trading
              <br />
              platform. Average monthly profits over the last 12 months: 15-30%.
            </h1>
          </div>
          <div className="flex justify-center mt-10">
            <Link to={"/#/"}>
              <AllButton
                buttonName="Sign Up"
                loading={false}
                classname="bg-blue-600 hover:bg-blue-700  py-4  mt-7 px-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
