import React, { useState } from "react";
import { AllButton } from "../../../views/auth/shared/AllButton";
import photo1 from "../../../assets/image/photo1.jpeg";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navList = [
  {
    linkName: "benefit",
    to: "#benefits",
  },
  {
    linkName: "about-us",
    to: "#about-us",
  },
  {
    linkName: "contact-us",
    to: "#contact-us",
  },
];

const MoblieNavBar = ({ isToggled, setIsToggeled }) => {
  return (
    <div
      className={`fixed w-full  ${
        isToggled ? "left-[0.1%]" : "left-[100%]"
      }  transition-all duration-100 ease-in-out z-10 md:left-[100%]  bg-background h-screen`}
    >
      <div className="flex flex-col gap-20 items-center">
        <ul className="flex flex-col mt-10 gap-10 items-center md:gap-8 text-lg ">
          {navList.map((item, index) => (
            <Link to={item.to} className="pointer">
              <li
                className="font-semibold capitalize"
                onClick={() => {
                  setIsToggeled(false);
                }}
                key={index}
              >
                {item.linkName.replace("-", " ")}
              </li>
            </Link>
          ))}
        </ul>
        <div>
          <Link to={"/Sign-in"}>
            <AllButton
              buttonName="Sign In"
              loading={false}
              classname="bg-blue-600 rounded-full  hover:bg-blue-700 text-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export const NavBar = () => {
  const [isToggled, setIsToggeled] = useState(false);
  return (
    <div className="fixed z-10  bg-background w-full max-w-7xl p-2 md:p-5 m-auto border-b">
      <div className="flex items-center justify-between">
        {/* <img src={photo1} className="w-[80px] md:w-[150px]" /> */}
        <h1>Investment</h1>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex md:gap-8 text-lg gap-3 ">
            {navList.map((item, index) => (
              <Link to={item.to} className="pointer">
                <li className="font-semibold capitalize" key={index}>
                  {item.linkName.replace("-", " ")}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <Link to={"/Sign-in"}>
            <AllButton
              buttonName="Sign In"
              loading={false}
              classname="bg-blue-600 rounded-full hidden md:block hover:bg-blue-700 text-lg"
            />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsToggeled(!isToggled)}
          >
            {!isToggled ? <Menu /> : <X />}
          </button>
          <MoblieNavBar isToggled={isToggled} setIsToggeled={setIsToggeled} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
