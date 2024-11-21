import React from "react";
import { About } from "../views/auth/About";
import AboutUi from "../pages/Marketing.jsx/Header/ui/AboutUi";
import WhyInvestwithUs from "../pages/Marketing.jsx/Header/ui/WhyInvestwithUs";
import BenefitsOfUsingFredralInves from "../pages/Marketing.jsx/Header/ui/BenefitsOfUsingFredralInves";
import Testimonials from "../pages/Marketing.jsx/Header/ui/Testimonials";
import CallToAction from "../pages/Marketing.jsx/Header/ui/CallToAction";
import ContactInfo from "../pages/Footer/ContactInfo";

export const Main = () => {
  return (
    <div className="">
      <AboutUi />
      <WhyInvestwithUs />
      <BenefitsOfUsingFredralInves />
      {/* <Testimonials /> */}
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Main;
