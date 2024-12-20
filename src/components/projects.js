import React from "react";

const Project = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-start justify-center px-16">
      {/* Selected Work and 01 in the same line, 01 on the right */}
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-500 italic text-2xl mt-36">(Selected Work)</p>
        <p className="text-gray-500 italic text-2xl mt-36">(01)</p>
      </div>

      {/* Title */}
      <h1 className="text-black text-[20rem] font-extrabold leading-none mt-64">
        PROJECTS
      </h1>

      {/* Description */}
      <p className="text-black text-8xl font-bold mt-24">
        Explore our recent projects</p>
        <p  className="text-black text-8xl font-bold"> showcasing creativity, innovation</p> 
        <p  className="text-black text-8xl font-bold ">and impactful design solutions.
      </p>
    </div>
  );
};

export default Project;
