import React from "react";
import Wrapper from "../../context/Wrapper";
import { FaTelegram } from "react-icons/fa";
import {
  TwitterIcon,
  InstagramIcon,
  TicketIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

export const ContactInfo = () => {
  return (
    <Wrapper>
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-500">
            We are available 24/7 to receive your inquiries and provide
            solutions.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <MailIcon className="h-5 w-5 text-gray-400 mr-1" />
              <a
                href="helpdesk.federalinvestment@gmail.com"
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                helpdesk.federalinvestment@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaTelegram className="h-5 w-5 text-gray-400 mr-1" />
              <a
                href="tel:+2349033766725"
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                https://t.me/+ingHIKgdd-VlNGVk
              </a>
            </div>
          </div>
          {/* <div className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Support</span>
                  <TicketIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactInfo;
