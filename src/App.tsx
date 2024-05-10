// import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import BottomPage from "./components/bottomPage";

export default function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex items-center justify-center">
        <div className="p-2 w-[85%]">
          <Body />
        </div>
      </div>
      <BottomPage/>
    </div>
  );
}
