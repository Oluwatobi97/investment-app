import React, { useState } from "react";
import photo3 from "../../../assets/image/photo3.jpeg";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../context/userContext/UserContext";
import { Menu, X } from "lucide-react";

export const MoblieNavBar = ({
  isToggled,
  setIsToggeled,
  navItem,
  buttonCmp,
}) => {
  return (
    <div
      className={`fixed  border ${
        isToggled
          ? "block right-[1%] p-10 transition duration-75 ease-in-out"
          : "left-[100%]"
      }  transition-all duration-100 ease-in-out z-10   bg-background `}
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

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userContext = useUserContext();
  const email = userContext.userDetails?.email;
  const navList = [
    {
      linkName: email || "",
      to: "#",
    },
    {
      linkName: "Settings",
      to: "#",
    },
    {
      linkName: "Notification",
      to: "#",
    },
  ];
  const [isToggled, setIsToggeled] = useState(false);

  return (
    <div className=" md:p-5 m-auto bg-background">
      <div className="max-w-7xl py-5 px-5 flex items-center justify-between">
        {/* <img src={photo1} className='md:w-[150px] w-[90px]' /> */}
        <h1 className="text-xl md:text-2xl font-extrabold  tracking-tighter text-textSecondary">
          FREDRAL INVESTMENT
        </h1>
        <button onClick={() => setIsToggeled(!isToggled)} className="relative">
          {!isToggled ? (
            <Menu size={20} className="cursor-pointer ml-auto" />
          ) : (
            <X size={20} className="cursor-pointer ml-auto" />
          )}
          <MoblieNavBar
            buttonCmp={
              <button
                onClick={() => userContext.logOut()}
                className={
                  "flex items-center justify-center px-4 py-2 bg-red-400 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-75"
                }
              >
                Log out
              </button>
            }
            isToggled={isToggled}
            navItem={navList}
            setIsToggeled={setIsToggeled}
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
