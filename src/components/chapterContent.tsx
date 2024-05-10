import React, { useState } from "react";

interface ChapterContentProps {
  content: string;
}
  
const ChapterContent: React.FC<ChapterContentProps> = ({ content }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>("Study");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    // Implement logic to change content based on the selected option
  };

  return (
    <div className="flex justify-center">
      <div className="">
        {/* Navbar */}
        <div className="flex mt-[-100px] justify-evenly px-10 text-xl font-semibold text-slate-500">
          <div
            className={`cursor-pointer mr-4 ${
              selectedOption === "Study"
                ? "text-blue-950 font-bold underline underline-offset-8"
                : ""
            }`}
            onClick={() => handleOptionClick("Study")}
          >
            Study
          </div>
          <div
            className={`cursor-pointer mr-4 ${
              selectedOption === "Quiz"
                ? "text-blue-950 font-bold underline underline-offset-8"
                : ""
            }`}
            onClick={() => handleOptionClick("Quiz")}
          >
            Quiz
          </div>
          <div
            className={`cursor-pointer mr-4 ${
              selectedOption === "Test"
                ? "text-blue-950 font-bold underline underline-offset-8"
                : ""
            }`}
            onClick={() => handleOptionClick("Test")}
          >
            Test
          </div>
          <div
            className={`cursor-pointer mr-4 ${
              selectedOption === "Game"
                ? "text-blue-950 font-bold underline underline-offset-8"
                : ""
            }`}
            onClick={() => handleOptionClick("Game")}
          >
            Game
          </div>
          <div
            className={`cursor-pointer ${
              selectedOption === "Others"
                ? "text-blue-950 font-bold underline underline-offset-8"
                : ""
            }`}
            onClick={() => handleOptionClick("Others")}
          >
            Others
          </div>
        </div>

        {/* Content based on selected option */}
        {selectedOption && (
          <div className="mt-4">
            <div className="flex items-center justify-center ">
              <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 justify-center items-center rounded-[8vh] w-[90vw] md:w-[100vh] h-[50vw] md:h-[57vh] bg-gradient-to-bl from-[#061B92] to-[#2082ED] p-4 m-2  text-white transition-[.5s]">
                <div className="flex w-full mt-[-100px] md:mt-[-140px] justify-between px-5 text-xl sm:text-3xl font-extralight transform-[.5s]">
                  <i className="ri-lightbulb-line cursor-pointer hover:scale-[1.05]"></i>
                  <i className="ri-volume-up-fill cursor-pointer hover:scale-[1.05]"></i>
                </div>
                <div>
                  <h3 className="text-4xl font-semibold">{content}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between p-10 text-4xl text-blue-900 font-bold">
          <div>
            <i className="ri-restart-line cursor-pointer  hover:shadow-md transition-[1s] shadow-blue-400"></i>
          </div>
          <div className="flex justify-evenly items-center gap-7">
            <i className="ri-arrow-left-s-line bg-gradient-to-b from-[#062970] to-[#164EBF] text-white rounded-full p-2 cursor-pointer"></i>
            <p className="text-2xl font-bold">01/10</p>
            <i className="ri-arrow-right-s-line bg-gradient-to-b from-[#062970] to-[#164EBF] text-white rounded-full p-2 cursor-pointer"></i>
          </div>
          <div>
            <i className="ri-fullscreen-line cursor-pointer hover:shadow-md transition-[1s] shadow-blue-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
