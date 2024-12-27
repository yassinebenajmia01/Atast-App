import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Project = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-start justify-center px-16 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <p className="italic text-2xl mt-36">(Selected Work)</p>
        <p className="italic text-2xl mt-36">(01)</p>
      </div>
      <h1 className="text-[20rem] font-extrabold leading-none mt-64">PROJECTS</h1>
      <p className="text-8xl font-bold mt-24">Explore our recent projects</p>
      <p className="text-8xl font-bold">showcasing creativity, innovation</p>
      <p className="text-8xl font-bold">and impactful design solutions.</p>
    </div>
  );
};

export default Project;
