import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* ----- left part ---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logoedit1} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae amet architecto ducimus hic necessitatibus debitis suscipit asperiores quisquam quas.</p>
        </div>

        {/* ------ middle part ---- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ----- right part ---- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-698-478-8745</li>
            <li>MediConnect@gmail.com</li>
          </ul>
        </div>
      </div>
        {/* ------ copyright text ---- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ MediConnect - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
