import React from "react";

const Services = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-start justify-center px-12 mt-[40%]">
      {/* Selected Work and 01 in the same line, 01 on the right */}
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-500 italic text-2xl mt-36">(What We Do)</p>
        <p className="text-gray-500 italic text-2xl mt-36">(02)</p>
      </div>

      {/* Title */}
      <h1 className="text-black text-[20rem] font-extrabold leading-none mt-64">
        SERVICES
      </h1>

      {/* Description */}
      <p className="text-black text-8xl font-bold mt-24">
      Discover our tailored services</p>
        <p  className="text-black text-8xl font-bold"> designed to elevate your brand</p> 
        <p  className="text-black text-8xl font-bold mb-16">enhance user experience.
      </p>
    </div>
  );
};

export default Services;
