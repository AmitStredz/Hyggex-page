import React, { useState } from "react";
import Subject from "./subject";
import Chapter from "./chapter";
import ChapterContent from "./chapterContent";
import { subjects, chapterContent } from "./data";

const HomePage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [navigationPath, setNavigationPath] = useState<string[]>([]);

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedChapter(null); // Reset selected chapter
    setNavigationPath((prevPath) => [...prevPath, subject]);
  };

  const handleChapterClick = (chapter: string) => {
    setSelectedChapter(chapter);
    setNavigationPath((prevPath) => [...prevPath, chapter]);
  };

  return (
    <>
      {/* Mainheading */}
      <div className="flex flex-col gap-12 mt-5">
        <div className="flex items-center ">
          {/* <i className="ri-home-5-line text-4xl text-slate-500"></i> */}
          {selectedSubject? <i className="ri-home-5-line text-4xl text-slate-500"></i>: <></>}
          {/* <h1 className="text-3xl font-bold">Home Page</h1> */}

          {navigationPath.length > 0 && (
            
            <p className="text-xl font-semibold text-slate-500">
              {navigationPath.map((item, index) => (
                <span key={index}>
                  {" > "}
                  {item}
                </span>
              ))}
            </p>
          )}
        </div>

        {/* Subheading */}
        <div>
          <h2 className="text-4xl font-bold text-blue-800">
            {selectedChapter || selectedSubject || "Hey! What's it for today..."}
            {selectedChapter ? " (" + selectedSubject + ") " : null}
          </h2>
        </div>

        {/* {selectedSubject && <p>Selected Subject: {selectedSubject}</p>} */}
        {/* {selectedChapter && <p>Selected Chapter: {selectedChapter}</p>} */}

        {/* Subjects */}
        <div className="subjects flex justify-center">
          <div className="grid-cols-3 grid size-50 gap-5">
            {!selectedSubject &&
              subjects.map((subject) => (
                <Subject
                  key={subject.name}
                  name={subject.name}
                  onClick={() => handleSubjectClick(subject.name)}
                />
              ))}
          </div>
        </div>

        {/* Chapters */}
        <div className="chapters flex justify-center">
          <div className="">
            {selectedSubject && !selectedChapter && (
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                {subjects
                  .find((subject) => subject.name === selectedSubject)
                  ?.chapters.map((chapter) => (
                    <Chapter
                      key={chapter}
                      name={chapter}
                      onClick={() => handleChapterClick(chapter)}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Chapter Content */}
        {selectedChapter && (
          <ChapterContent content={chapterContent[selectedChapter]} />
        )}
      </div>
    </>
  );
};

export default HomePage;
