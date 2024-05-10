import React from "react";
import logo from "./img/logo.png";

export default function header() {
  return (
    <>
      <div className="flex justify-between p-7 px-28 transition-[1s] sticky top-0 bg-white ">
        <div >
          <img src={logo} alt="logo" className="w-[50%] cursor-pointer"/>
        </div>
        <div className="flex gap-12 items-center mr-5 text-xl font-semibold">
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">Home</a>
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">Flashcard</a>
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">Contact</a>
          <a href="#" className="hover:scale-[1.03] transition-[.5s]">FAQ</a>
          <div className="rounded-3xl text-white px-9 p-3 bg-gradient-to-b from-[#072A71] to-[#144AB7] cursor-pointer transition-[1s] hover:scale-[1.03] shadow-blue-200 shadow-lg">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
