// import React from "react";
import logo from "./img/logo.png";

export default function header() {
  return (
    <>
      <div
        className="header_class flex justify-between md:p-10 p-7 px-5 sm:px-16 md:px-20 lg:px-28 sticky top-0 bg-white z-10"
        data-aos="fade-down"
      >
        <div className="min-w-60">
          <img src={logo} alt="logo" className="w-[30vh] cursor-pointer" />
        </div>
        <div>
          <i className="ri-menu-line text-4xl md:hidden md:max-w-0 font-bold cursor-pointer"></i>
        </div>
        <div className="flex gap-12 items-center mr-5 text-xl font-semibold max-md:hidden">
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">
            Home
          </a>
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">
            Flashcard
          </a>
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">
            Contact
          </a>
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">
            FAQ
          </a>
          <div className="rounded-3xl text-white px-9 p-3 bg-gradient-to-b from-[#072A71] to-[#144AB7] cursor-pointer transition-[1s] hover:scale-[1.03] shadow-blue-200 shadow-lg">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
