import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* ----- left part ---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logoedit1} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Welcome to MediConnect, your trusted partner in managing your healthcare needs conveniently and efficiently. At MediConnect, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
        </div>

        {/* ------ middle part ---- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact us</a>
            <a href="/privacy">Privacy policy</a>
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
