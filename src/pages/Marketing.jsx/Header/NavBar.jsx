import React, { useState } from "react";
import { AllButton } from "../../../views/auth/shared/AllButton";
import photo1 from "../../../assets/image/photo1.jpeg";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Linkbuttons } from "../../../views/DashBoard/Plans";

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

export const MoblieNavBar = ({
  isToggled,
  setIsToggeled,
  navItem,
  buttonCmp,
}) => {
  return (
    <div
      className={`fixed w-full  ${
        isToggled ? "left-[0.1%]" : "left-[100%]"
      }  transition-all duration-100 ease-in-out z-10 md:left-[100%]  bg-background h-screen`}
    >
      <div className="flex flex-col gap-20 items-center">
        <ul className="flex flex-col mt-10 gap-10 items-center md:gap-8 text-lg ">
          {navItem.map((item, index) => (
            <Link to={item.to} className="pointer">
              <li
                className="font-semibold capitalize"
                onClick={() => {
                  setIsToggeled(false);
                }}
                key={index}
              >
                {item.linkName.includes("-")
                  ? item.linkName.replace("-", " ")
                  : item.linkName}{" "}
              </li>
            </Link>
          ))}
        </ul>
        <div>{buttonCmp}</div>
      </div>
    </div>
  );
};
export const NavButton = ({ children }) => {
  return children;
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
          <Linkbuttons
            path={"/Sign-in"}
            className={
              " hidden md:block px-4 py-2 bg-blue-600  hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200"
            }
          >
            SIGNIN
          </Linkbuttons>
          <button
            className="md:hidden"
            onClick={() => setIsToggeled(!isToggled)}
          >
            {!isToggled ? <Menu /> : <X />}
          </button>
          <MoblieNavBar
            isToggled={isToggled}
            setIsToggeled={setIsToggeled}
            navItem={navList}
            buttonCmp={
              <Linkbuttons
                path={"/Sign-in"}
                className={
                  "  px-4 py-2 bg-blue-600  hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 block md:hidden text-lg"
                }
              >
                SIGNIN
              </Linkbuttons>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
