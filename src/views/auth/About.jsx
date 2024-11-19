import React from "react";
import { Discovery } from "../auth/shared/AboutUi/Discovery";
import GetStarted from "./shared/AboutUi/GetStarted";
import Footer from "../../layouts/Footer";

export const About = () => {
  return (
    <div className="h-screen mt-40">
      <Discovery />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default About;
