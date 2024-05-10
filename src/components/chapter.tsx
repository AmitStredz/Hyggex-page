import React from "react";

interface ChapterProps {
  name: string;
  onClick: () => void;
}

const Chapter: React.FC<ChapterProps> = ({ name, onClick }) => {
  return (
    <div>
      <div className="flex justify-center items-center rounded-[20%] md:size-44 bg-gradient-to-bl from-[#061C93] to-[#2182FF] p-4 m-2 cursor-pointer hover:scale-[1.02] hover:underline text-white transition-[.5s]" onClick={onClick}>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default Chapter;
