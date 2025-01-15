import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Linkbuttons } from "../../../views/DashBoard/Plans";
import { motion, AnimatePresence } from "framer-motion";
import photo5 from "./../../../assets/image/photo5.jpg";

const navList = [
  { linkName: "benefit", to: "#benefits" },
  { linkName: "about-us", to: "#about-us" },
  { linkName: "contact-us", to: "#contact-us" },
];

export const MoblieNavBar = ({
  isToggled,
  navItem,
  buttonCmp,
  setIsToggeled,
}) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed w-full top-0 right-0 z-20 bg-background h-screen"
        >
          <motion.div
            className="flex flex-col gap-20 items-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              className="absolute top-4 right-4"
              onClick={() => setIsToggeled(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} />
            </motion.button>
            <ul className="flex flex-col mt-20 gap-10 items-center md:gap-8 text-lg">
              {navItem.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.to}
                    className="pointer font-semibold capitalize"
                    onClick={() => setIsToggeled(false)}
                  >
                    {item.linkName.replace("-", " ")}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {buttonCmp}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NavButton = ({ children }) => {
  return children;
};

export const NavBar = () => {
  const [isToggled, setIsToggeled] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed z-10 bg-background w-full max-w-7xl p-2 md:p-5 m-auto border-b"
    >
      <div className="flex items-center justify-between">
        <motion.h1 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={photo5} alt="logo222" className="h-14 w-14 ml-2" />
        </motion.h1>
        <motion.div
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ul className="flex md:gap-8 text-lg gap-3">
            {navList.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={item.to} className="pointer font-semibold capitalize">
                  {item.linkName.replace("-", " ")}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Linkbuttons
              path={"/Sign-in"}
              className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200"
            >
              SIGNIN
            </Linkbuttons>
          </motion.div>
          <motion.button
            className="md:hidden"
            onClick={() => setIsToggeled(!isToggled)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {!isToggled ? <Menu /> : <X />}
          </motion.button>
          <MoblieNavBar
            isToggled={isToggled}
            setIsToggeled={setIsToggeled}
            navItem={navList}
            buttonCmp={
              <Linkbuttons
                path={"/Sign-in"}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 block md:hidden text-lg"
              >
                SIGNIN
              </Linkbuttons>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
