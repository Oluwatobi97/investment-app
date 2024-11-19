import React from "react";
import Wrapper from "../../context/Wrapper";
import { TwitterIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { TicketIcon } from "lucide-react";
export const ContactInfo = () => {
  return (
    <Wrapper>
      <div className="bg-gray-50 p-3 text-center text-gray-800 items-center justify-center">
        <div>
          <h1 className="text-xl font-semibold">Contact Us</h1>
          <p>
            We are active 24/7 to recive your complain and we where to get them
            solved for you{" "}
          </p>
          <p>victortobi2000@gmail.com</p>
          <p>+234-903-376-6725</p>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 mt-3">
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TicketIcon />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactInfo;
