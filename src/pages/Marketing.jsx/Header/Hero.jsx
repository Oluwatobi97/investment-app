import React from "react";
import { AllButton } from "../../../views/auth/shared/AllButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="px-5 md:p-6 pt-10 items-center mb-10 bg-background border-b">
      <div className="flex flex-col items-center text-center ">
        <motion.h3
          initial={{ opacity: 0, rotateX: -15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] tracking-wide mt-8 lg:text-xl font-semibold text-blue-600"
        >
          Welcome To Fedral Investment
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[30px] tracking-tight mt-4 lg:text-9xl font-bold"
        >
          WHERE DREAMS TURN INTO
          <span className="text-blue-600"> PROFITS </span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, rotateX: 15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-textSecondary tracking-wide text-lg mt-10"
        >
          Elevate your crypto trading game with our AI-powered trading platform.
          Average monthly profits over the last 12 months: 15-30%.
        </motion.h1>
        <div className="mt-5">
          <Link to={"/Sign-up"}>
            <AllButton
              buttonName="START INVESTING"
              loading={false}
              classname="bg-blue-600 rounded-full hover:bg-blue-700 py-4 mt-7 px-8"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
