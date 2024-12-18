import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../context/userContext/UserContext";

const NavigateOptions = ({ title, className }) => {
  if (title === "LogIn") {
    return (
      <Link
        to={title === "LogIn" ? "/Sign-up" : "/Sign-in"}
        className={className}
      >
        {title === "LogIn" ? "I have an account" : "I don't have an account"}
      </Link>
    );
  }
};
export const AuthLayout = ({ children, title }) => {
  return (
    <div className="!bg-blue-500">
      <div className="absolute left-[7%] top-[20%] md:left-[30%] md:top-32 lg:left-[40%]  mx-auto p-10 border border-accent bg-background rounded-lg">
        <h1 className="w-full text-center pb-10 font-bold text-primaryColor">
          <span className="border-b-2 border-accent">{title}</span>
        </h1>
        <div className="flex flex-col items-start gap-10">{children}</div>
        <NavigateOptions
          title={title}
          className={
            "text-sm capitalize ml-10 bg-gray-100  text-textSecondary hover:text-accent transition duration-75 ease-in-out "
          }
        />
      </div>
    </div>
  );
};

export default AuthLayout;
