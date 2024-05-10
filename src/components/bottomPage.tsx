import { useState } from "react";
import logo1 from "./img/logo1.png";

export default function BottomPage() {
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between p-8 md:p-16">
        <div className="">
          <img src={logo1} alt="" className="w-[30vh] sm:w-[40vh]" />
        </div>
        <div className="flex items-center gap-3 hover:border-2 border-blue-300 p-3 rounded-3xl transition-[ease] hover:shadow-md cursor-pointer">
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-b from-[#062970] to-[#164EBF] text-white rounded-[50%] px-2 sm:px-3 sm:pb-2 shadow-xl">
            +
          </div>
          {/* <i className="ri-add-circle-line text-3xl text-[] bg-gradient-to-b from-[#062970] to-[#164EBF] text-white rounded-full p-2"></i> */}
          <p className="text-blue-900 text-lg sm:text-2xl md:text-3xl font-bold">Create Flashcard</p>
        </div>
      </div>

      <div className="flex p-10 sm:ml-10 md:ml-20">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-blue-900 font-bold text-5xl mb-10">FAQ</h1>

          <div className="flex flex-col gap-2 w-[100%] lg:w-[60%] ">
            <div
              className="flex justify-between border-2 border-blue-300 rounded-xl text-lg text-slate-600 p-3 font-semibold cursor-pointer "
              onClick={() => setdropdown1(!dropdown1)}
            >
              <h1>Can education flashcards be used for all age groups?</h1>
              {!dropdown1 ? (
                <i className="ri-arrow-down-s-line cursor-pointer text-2xl text-slate-500 rotate-0 transition-transform duration-200"></i>
              ) : (
                <i className="ri-arrow-down-s-line cursor-pointer text-2xl text-slate-500 rotate-180 transition-transform duration-200"></i>
              )}
            </div>
            <div>
              {dropdown1 ? (
                <div className="border-2 rounded-xl p-3 text-lg">
                  Yes, education flashcards can be adapted for all age groups,
                  from young children to adults. For younger learners,
                  flashcards can feature colorful images and simple concepts to
                  aid in early learning and development. As students progress
                  through different educational levels, flashcards can evolve to
                  include more complex topics and information suited to their
                  age and academic level. Even adults can benefit from
                  flashcards for professional development, language learning,
                  and continuing education purposes. The versatility of
                  flashcards makes them suitable for learners of all ages.
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2  w-[100%] lg:w-[60%] ">
            <div
              className="flex justify-between border-2 border-blue-300 rounded-xl text-lg text-slate-600 p-3 font-semibold cursor-pointer "
              onClick={() => setdropdown2(!dropdown2)}
            >
              <h1>How do education flashcards work?</h1>
              {!dropdown2 ? (
                <i className="ri-arrow-down-s-line cursor-pointer text-2xl text-slate-500 rotate-0 transition-transform duration-200"></i>
              ) : (
                <i className="ri-arrow-down-s-line cursor-pointer text-2xl text-slate-500 rotate-180 transition-transform duration-200"></i>
              )}
            </div>
            <div>
              {dropdown2 ? (
                <div className="border-2 rounded-xl p-3 text-lg">
                  Education flashcards typically work by condensing information
                  into bite-sized chunks, with a question or prompt on one side
                  and the corresponding answer or information on the other. When
                  studying, individuals review the cards, testing themselves on
                  the content and actively engaging with the material. The act
                  of repetition and retrieval practice helps reinforce learning
                  and improve memory retention. Additionally, flashcards can be
                  used in various ways, such as organizing information,
                  identifying key concepts, and facilitating self-assessment,
                  making them versatile tools for effective learning and test
                  preparation.
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[100%] lg:w-[60%] ">
            <div
              className="flex justify-between border-2 border-blue-300 rounded-xl text-lg text-slate-600 p-3 font-semibold cursor-pointer "
              onClick={() => setdropdown3(!dropdown3)}
            >
              <h1>Can education flashcards be used for test preparation?</h1>
              {!dropdown3 ? (
                <i className="ri-arrow-down-s-line cursor-pointer text-2xl text-slate-500 rotate-0 transition-transform duration-200"></i>
              ) : (
                <i className="ri-arrow-down-s-line cursor-pointer text-2xl text-slate-500 rotate-180 transition-transform duration-200"></i>
              )}
            </div>
            <div>
              {dropdown3 ? (
                <div className="border-2 rounded-xl p-3 text-lg">
                  Yes, education flashcards are an effective tool for test
                  preparation. They help in reinforcing key concepts, enhancing
                  memory retention, and facilitating quick review. By condensing
                  information into concise formats, flashcards make it easier to
                  grasp complex topics and recall important details during
                  exams. Their versatility allows for personalized study
                  methods, catering to individual learning styles and
                  preferences. Overall, incorporating flashcards into test
                  preparation strategies can significantly improve academic
                  performance.
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
