import React from "react";

const UiDesign = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-50">
      {/* Left Section: Image */}
      <div className="relative h-full">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670651e23c0f63393c8ae2de_service-03-p-800.webp"
          alt="Brand Strategy Cards"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Text */}
      <div className="flex flex-col justify-center p-10">
        <h1 className="text-[8rem] leading-none font-extrabold">
          UI/UX DESIGN
        </h1>
        <p className="text-6xl font-semibold mt-10">
        User experience through intuitive and user-centered design solutions.
        </p>
        <p className="text-2xl italic text-gray-400 mt-10">
        (UI/UX Services)
        </p>
        <div className="grid grid-cols-2 gap-4 mt-16 text-3xl font-semibold">
          <p>User Research</p>
          <p>Usability Testing</p>
          <p>Wireframing</p>
          <p>UI/UX Audits</p>
        </div>
      </div>
    </div>
  );
};

export default UiDesign;
