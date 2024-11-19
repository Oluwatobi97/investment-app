import React from "react";
import { AllButton } from "../../../views/auth/shared/AllButton";
import photo1 from "../../../assets/image/photo1.jpeg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navList = ["Benefit", "About Us", "Contact Us"];

  return (
    <div className="max-w-7xl p-2 md:p-5 m-auto">
      <div className="flex items-center justify-between">
        <img src={photo1} className="w-[80px] md:w-[150px]" />
        <div className="flex items-center gap-6">
          <ul className="flex md:gap-8 text-sm gap-3">
            {navList.map((item, index) => (
              <li className="font-semibold" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={"/Sign-in"}>
            <AllButton
              buttonName="Sign In"
              loading={false}
              classname="bg-blue-600 hover:bg-blue-700 text-sm"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
