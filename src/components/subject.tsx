import React from 'react';

interface SubjectProps {
  name: string;
  onClick: () => void;
}

const Subject: React.FC<SubjectProps> = ({ name, onClick }) => {
  return (
    <div className="flex justify-center gap-10 items-center rounded-[50%] size-[20vw] md:size-64 bg-gradient-to-bl from-[#061C93] to-[#2182FF] p-4 m-2 cursor-pointer hover:scale-[1.02] hover:underline text-white transition-[.5s] shadow-lg shadow-blue-400" onClick={onClick}>
      <h3 className="text-sm sm:text-base md:text-lg text-white font-semibold">{name}</h3>
    </div>
  );
};

export default Subject;


